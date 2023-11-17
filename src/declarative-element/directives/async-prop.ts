import {
    areJsonEqual,
    createDeferredPromiseWrapper,
    DeferredPromiseWrapper,
    ensureError,
    JsonCompatibleObject,
    MaybePromise,
} from '@augment-vir/common';
import {ElementVirStateSetup} from '../properties/element-vir-state-setup';
import {createObservablePropertyWithSetter} from '../properties/observable-property/create-observable-property';
import {ObservableProperty} from '../properties/observable-property/observable-property';

export type AsyncPropValue<ValueType> = Error | MaybePromise<Awaited<ValueType>>;

const notSetSymbol = Symbol('not set');

export type AsyncPropTriggerInputBase = JsonCompatibleObject;

export type AsyncPropUpdateCallback<
    TriggerInput extends AsyncPropTriggerInputBase,
    UpdaterInput,
    ReturnType,
> = Exclude<TriggerInput, undefined> extends never
    ? () => ReturnType
    : Exclude<UpdaterInput, undefined> extends never
      ? (trigger: TriggerInput) => ReturnType
      : (trigger: TriggerInput, inputs: UpdaterInput) => ReturnType;

export type AsyncPropInit<
    ValueType,
    TriggerInput extends AsyncPropTriggerInputBase,
    UpdaterInput,
> =
    | {
          /** Starting value */
          defaultValue: MaybePromise<Awaited<ValueType>>;
      }
    | {
          /**
           * When a trigger changes (according to deep equality checking through JSON stringify),
           * the updateCallback callback will be called and the element's state will be updated
           * again. Otherwise, the updateCallback callback will only be called the first time.
           *
           * Set this to undefined to disabled automatic updating. Meaning, updateCallback will only
           * be called the first time.
           */
          updateCallback: AsyncPropUpdateCallback<
              TriggerInput,
              UpdaterInput,
              Promise<Awaited<ValueType>>
          >;
      };

export type AsyncObservableProperty<
    ValueType,
    TriggerInput extends AsyncPropTriggerInputBase,
    UpdaterInput,
> = ObservableProperty<AsyncPropValue<ValueType>> & {
    setNewPromise(newPromise: Promise<Awaited<ValueType>>): void;
    updateTrigger: AsyncPropUpdateCallback<TriggerInput, UpdaterInput, void>;
    setResolvedValue(resolvedValue: Awaited<ValueType>): void;
    /**
     * Forces the updater callback to re-run with the last given trigger and updaterInput. If this
     * asyncProp has no updater callback defined, this will result in an error.
     */
    forceUpdate: AsyncPropUpdateCallback<TriggerInput, UpdaterInput, void>;
};

function setupAsyncProp<
    ValueType,
    TriggerInput extends AsyncPropTriggerInputBase = {},
    UpdaterInput = undefined,
    InitInput extends AsyncPropInit<ValueType, TriggerInput, UpdaterInput> | undefined = undefined,
>(init?: InitInput): AsyncObservableProperty<ValueType, TriggerInput, UpdaterInput> {
    let lastTrigger: TriggerInput | typeof notSetSymbol = notSetSymbol;
    let lastSetPromise: Promise<Awaited<ValueType>> | undefined;
    const promiseUpdater = init && 'updateCallback' in init ? init.updateCallback : undefined;

    let waitingForValuePromise: DeferredPromiseWrapper<Awaited<ValueType>> =
        createDeferredPromiseWrapper();

    const baseObservableProperty = createObservablePropertyWithSetter<AsyncPropValue<ValueType>>(
        waitingForValuePromise.promise,
    );

    function resetWaitingForValuePromise(): void {
        waitingForValuePromise = createDeferredPromiseWrapper();
        baseObservableProperty.setValue(waitingForValuePromise.promise);
    }

    function resolveValue(value: Awaited<ValueType>) {
        waitingForValuePromise.resolve(value);
        baseObservableProperty.setValue(value);
    }

    function rejectValue(error: Error) {
        waitingForValuePromise.reject(error);
        baseObservableProperty.setValue(error);
    }

    function setPromise(newPromise: Promise<Awaited<ValueType>>) {
        if (newPromise === lastSetPromise) {
            /** Abort setting the promise if we already have set this promise. */
            return;
        }

        lastSetPromise = newPromise;

        if (waitingForValuePromise.isSettled()) {
            resetWaitingForValuePromise();
        }

        newPromise
            .then((value) => {
                /** Make sure we're still actually waiting for this promise. */
                if (lastSetPromise === newPromise) {
                    resolveValue(value);
                }
            })
            .catch((reason: unknown) => {
                /** Make sure we're still actually waiting for this promise. */
                if (lastSetPromise === newPromise) {
                    waitingForValuePromise.promise.catch(() => {
                        /**
                         * Don't actually do anything, we just want to make sure the error is
                         * handled so it doesn't throw errors in the browser.
                         */
                    });

                    rejectValue(ensureError(reason));
                }
            });
    }

    function updateTrigger(triggerInput: TriggerInput, updaterInput: UpdaterInput): void {
        if (!promiseUpdater) {
            console.error(init);
            throw new Error(
                `Trigger was updated for asyncProp but no updateCallback has been defined.`,
            );
        }
        /**
         * This will expand proxies so that `inputs` or `state` can be used directly as a
         * serializableTrigger without issues.
         */
        const expandedTrigger: TriggerInput = {
            ...triggerInput,
        } as TriggerInput;
        const expandedInputs: UpdaterInput = {...updaterInput} as UpdaterInput;

        if (
            lastTrigger === notSetSymbol ||
            !areJsonEqual(expandedTrigger as any, lastTrigger as any, {
                ignoreNonSerializableProperties: true,
            })
        ) {
            lastTrigger = expandedTrigger;

            const newValue = promiseUpdater(lastTrigger, expandedInputs);

            setPromise(newValue);
        }
    }

    function forceUpdate(triggerInput: TriggerInput, updaterInput: UpdaterInput): void {
        lastTrigger = notSetSymbol;
        updateTrigger(triggerInput, updaterInput);
    }

    const initValue: AsyncPropValue<ValueType> =
        init && 'defaultValue' in init
            ? init.defaultValue
            : /** A promise that doesn't resolve because we're waiting for the first value still. */
              new Promise<Awaited<ValueType>>(() => {});

    if (initValue instanceof Promise) {
        setPromise(initValue);
    } else {
        resolveValue(initValue);
    }

    const extraProperties: Omit<
        AsyncObservableProperty<ValueType, TriggerInput, UpdaterInput>,
        keyof ObservableProperty<AsyncPropValue<ValueType>>
    > = {
        setNewPromise(newPromise) {
            setPromise(newPromise);
        },
        setResolvedValue(value) {
            if (value !== baseObservableProperty.value) {
                if (waitingForValuePromise.isSettled()) {
                    resetWaitingForValuePromise();
                }
                waitingForValuePromise.resolve(value);
                resolveValue(value);
            }
        },
        updateTrigger: (promiseUpdater
            ? updateTrigger
            : () => {
                  throw new Error(
                      'Cannot run updateTrigger when updateCallback was not set on the asyncProp.',
                  );
              }) as AsyncPropUpdateCallback<TriggerInput, UpdaterInput, void>,
        forceUpdate: (promiseUpdater
            ? forceUpdate
            : () => {
                  throw new Error(
                      'Cannot run forceUpdate when updateCallback was not set on the asyncProp.',
                  );
              }) as AsyncPropUpdateCallback<TriggerInput, UpdaterInput, void>,
    };

    return Object.assign(baseObservableProperty, extraProperties);
}

export function asyncProp<
    ValueType,
    TriggerInput extends AsyncPropTriggerInputBase = {},
    UpdaterInput = undefined,
>(
    ...args: [AsyncPropInit<ValueType, TriggerInput, UpdaterInput>] | []
): ElementVirStateSetup<AsyncObservableProperty<ValueType, TriggerInput, UpdaterInput>> {
    return {
        _elementVirStateSetup() {
            return setupAsyncProp(...args);
        },
    };
}
