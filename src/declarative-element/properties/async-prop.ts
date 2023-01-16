import {
    areJsonEqual,
    ensureError,
    isPromiseLike,
    typedHasProperty,
    UnPromise,
} from '@augment-vir/common';
import {JsonValue} from 'type-fest';

export type AsyncProp<ValueGeneric> =
    | {
          error?: Error;
          promise?: Promise<UnPromise<ValueGeneric>>;
          resolution?: UnPromise<ValueGeneric>;
          isChainedAlready?: true;
          lastTrigger?: JsonValue;
      }
    | undefined
    | null;

const unsetSymbol = Symbol('unset');

export function asyncProp<ValueGeneric>(
    initialValue:
        | UnPromise<ValueGeneric>
        | Promise<UnPromise<ValueGeneric>>
        | typeof unsetSymbol = unsetSymbol,
): AsyncProp<ValueGeneric> {
    if (initialValue === unsetSymbol) {
        return undefined;
    } else if (isPromiseLike(initialValue)) {
        return {
            promise: initialValue,
        };
    } else {
        return {
            resolution: initialValue,
        };
    }
}

export type SetAsyncPropInputs<ValueGeneric> = {updateIfThisChanges?: JsonValue} & (
    | {
          createPromise: () => Promise<UnPromise<ValueGeneric>>;
      }
    | {
          resolution: UnPromise<ValueGeneric>;
      }
    | {
          promise: Promise<UnPromise<ValueGeneric>>;
      }
);

function shouldForceUpdate(
    newValue: SetAsyncPropInputs<any>,
    currentValue: AsyncProp<any>,
): boolean {
    if (!currentValue) {
        return true;
    }

    if (typedHasProperty(newValue, 'updateIfThisChanges')) {
        if (typedHasProperty(currentValue, 'lastTrigger')) {
            return !areJsonEqual(currentValue.lastTrigger, newValue.updateIfThisChanges);
        } else {
            return true;
        }
    }

    return false;
}

export function ensureAsyncProp<ValueGeneric, StatePropGeneric extends PropertyKey>({
    state,
    stateProp,
    updateState: inputUpdateState,
    ...newValue
}: {
    state: Record<StatePropGeneric, AsyncProp<ValueGeneric>>;
    stateProp: StatePropGeneric;
    updateState: (newState: Record<StatePropGeneric, AsyncProp<ValueGeneric>>) => void;
} & SetAsyncPropInputs<ValueGeneric>): void {
    function updateState(newStateValue: AsyncProp<ValueGeneric>) {
        /**
         * As cast needed here because the RecordGeneric type isn't strong enough to narrow its keys
         * to StatePropGeneric, it just thinks they're all strings
         */
        inputUpdateState({[stateProp]: newStateValue} as Record<
            StatePropGeneric,
            AsyncProp<ValueGeneric>
        >);
    }
    const forceUpdate = shouldForceUpdate(newValue, state[stateProp]);

    const currentValue: AsyncProp<ValueGeneric> = forceUpdate ? undefined : state[stateProp];

    if (currentValue?.error) {
        // abort if there's an error
        return;
    }

    if (currentValue && 'resolution' in currentValue) {
        // abort if the async value has already been resolved
        return;
    }

    const lastTriggerObject = typedHasProperty(newValue, 'updateIfThisChanges')
        ? {lastTrigger: newValue.updateIfThisChanges}
        : {};

    // if given a resolution value, set that
    if ('resolution' in newValue) {
        return updateState({
            resolution: newValue.resolution,
            ...lastTriggerObject,
        });
    }

    // if there is no promise or resolution, set a promise
    const needsNewPromise = currentValue == undefined || !('promise' in currentValue);
    const needsChaining = currentValue == undefined || !currentValue.isChainedAlready;

    if (!needsNewPromise && !needsChaining) {
        // abort, there is nothing to do
        return;
    }

    const newPromise = needsNewPromise
        ? 'promise' in newValue
            ? newValue.promise
            : 'createPromise' in newValue
            ? newValue.createPromise()
            : undefined
        : undefined;

    if (needsNewPromise && !newPromise) {
        throw new Error(
            `Was not able to create a new promise for state.${String(
                stateProp,
            )}: missing "promise" or "createPromise" key for ${ensureAsyncProp.name}`,
        );
    }

    const promiseToChain = newPromise ?? currentValue?.promise;

    if (!promiseToChain) {
        // at this point there is definitely a promise to chain
        throw new Error('Failed to find promise to chain.');
    }

    promiseToChain
        .then((value) => {
            updateState({
                promise: promiseToChain,
                resolution: value,
                ...lastTriggerObject,
            });
        })
        .catch((error) => {
            updateState({
                promise: promiseToChain,
                error: ensureError(error),
                ...lastTriggerObject,
            });
        });

    updateState({
        promise: promiseToChain,
        isChainedAlready: true,
        ...lastTriggerObject,
    });
}
