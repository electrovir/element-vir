import {
    areJsonEqual,
    createDeferredPromiseWrapper,
    DeferredPromiseWrapper,
    ensureError,
    isLengthAtLeast,
    JsonCompatibleObject,
    typedHasProperty,
    UnPromise,
} from '@augment-vir/common';
import {PickAndBlockOthers} from '../../augments/type';
import {
    ObservablePropertyHandlerCreator,
    observablePropertyHandlerCreatorMarkerKey,
    ObservablePropertyHandlerInstance,
    observablePropertyHandlerInstanceMarkerKey,
    ObservablePropertyListener,
} from '../properties/observable-property/observable-property-handler';

export type AsyncProp<ValueGeneric> =
    | Error
    | UnPromise<ValueGeneric>
    | Promise<UnPromise<ValueGeneric>>;

const notSetSymbol = Symbol('not set');

export type AsyncPropTriggerInputBase = JsonCompatibleObject | undefined;

type AllSetValueProperties<ValueGeneric, TriggerInput extends AsyncPropTriggerInputBase> = {
    /** Set a new value directly without using any promises. */
    resolvedValue: UnPromise<ValueGeneric>;
    trigger: TriggerInput;
    newPromise: Promise<UnPromise<ValueGeneric>>;
    /** Clear the current value and trigger updateCallback to get called again on the next render. */
    forceUpdate: true;
};

export type AsyncPropSetValue<ValueGeneric, TriggerInput extends AsyncPropTriggerInputBase> =
    | (undefined extends TriggerInput
          ? never
          : PickAndBlockOthers<AllSetValueProperties<ValueGeneric, TriggerInput>, 'trigger'>)
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric, TriggerInput>, 'newPromise'>
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric, TriggerInput>, 'forceUpdate'>
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric, TriggerInput>, 'resolvedValue'>;

export class AsyncObservablePropertyHandler<
    ValueGeneric,
    TriggerInput extends AsyncPropTriggerInputBase,
> implements
        ObservablePropertyHandlerInstance<
            AsyncPropSetValue<ValueGeneric, TriggerInput>,
            AsyncProp<ValueGeneric>
        >
{
    private lastTrigger:
        | Extract<AsyncPropSetValue<ValueGeneric, TriggerInput>, {trigger: TriggerInput}>['trigger']
        | typeof notSetSymbol
        | undefined = notSetSymbol;
    private resolutionValue: UnPromise<ValueGeneric> | typeof notSetSymbol = notSetSymbol;
    private rejectionError: Error | typeof notSetSymbol = notSetSymbol;
    private listeners = new Set<ObservablePropertyListener<AsyncProp<ValueGeneric>>>();
    private lastSetPromise: Promise<UnPromise<ValueGeneric>> | undefined;

    private waitingForValuePromise: DeferredPromiseWrapper<UnPromise<ValueGeneric>> =
        createDeferredPromiseWrapper();

    [observablePropertyHandlerInstanceMarkerKey] = true as const;

    constructor(initialValue: AsyncPropInit<ValueGeneric, TriggerInput> | typeof notSetSymbol) {
        this.resetValue(initialValue);
    }

    private promiseUpdater: AsyncPropUpdateCallback<ValueGeneric, TriggerInput> | undefined;

    public resetValue(rawValue: AsyncPropInit<ValueGeneric, TriggerInput> | typeof notSetSymbol) {
        this.resetWaitingForValuePromise();

        if (rawValue === notSetSymbol) {
            return;
        } else if (typedHasProperty(rawValue, 'defaultValue')) {
            if (rawValue.defaultValue instanceof Promise) {
                this.setValue({newPromise: rawValue.defaultValue});
            } else {
                this.setValue({
                    resolvedValue: rawValue.defaultValue as UnPromise<ValueGeneric>,
                });
            }
        } else if (typedHasProperty(rawValue, 'updateCallback')) {
            this.promiseUpdater = rawValue.updateCallback;
            return;
        }
    }

    private fireListeners() {
        const value = this.getValue();
        this.listeners.forEach((listener) => {
            listener(value);
        });
    }

    private setPromise(newPromise: Promise<UnPromise<ValueGeneric>>) {
        if (newPromise === this.lastSetPromise) {
            // abort setting the promise if we already have set this promise
            return;
        }
        this.resolutionValue = notSetSymbol;
        this.rejectionError = notSetSymbol;
        this.lastSetPromise = newPromise;

        if (this.waitingForValuePromise.isSettled()) {
            this.resetWaitingForValuePromise();
        }

        newPromise
            .then((value) => {
                // make sure we're still actually waiting for this promise
                if (this.lastSetPromise === newPromise) {
                    this.resolveValue(value);
                }
            })
            .catch((reason) => {
                // make sure we're still actually waiting for this promise
                if (this.lastSetPromise === newPromise) {
                    this.rejectionError = ensureError(reason);
                    this.waitingForValuePromise.promise.catch(() => {
                        /**
                         * Don't actually do anything, we just want to make sure the error is
                         * handled so it doesn't throw errors in the browser.
                         */
                    });

                    this.waitingForValuePromise.reject(reason);
                    this.fireListeners();
                }
            });
    }

    private resolveValue(value: UnPromise<ValueGeneric>) {
        if (value !== this.resolutionValue) {
            this.rejectionError = notSetSymbol;
            this.resolutionValue = value;
            if (this.waitingForValuePromise.isSettled()) {
                this.resetWaitingForValuePromise();
            }
            this.waitingForValuePromise.resolve(value);
            this.fireListeners();
        }
    }

    private resetWaitingForValuePromise(): void {
        this.waitingForValuePromise = createDeferredPromiseWrapper();
    }

    public setValue(setInputs: AsyncPropSetValue<ValueGeneric, TriggerInput>) {
        if (typedHasProperty(setInputs, 'trigger')) {
            /**
             * This will expand proxies so that `inputs` or `state` can be used directly as a
             * trigger without issues.
             */
            const expandedTrigger = {...setInputs.trigger};

            if (
                this.lastTrigger === notSetSymbol ||
                !areJsonEqual(expandedTrigger, this.lastTrigger)
            ) {
                this.lastTrigger = expandedTrigger;
                if (!this.promiseUpdater) {
                    throw new Error(
                        `got trigger input to updateState for asyncProp but no updateCallback has been defined.`,
                    );
                }

                const newValue = this.promiseUpdater(expandedTrigger);

                this.setPromise(newValue);
                this.fireListeners();
            }
        } else if ('newPromise' in setInputs) {
            this.lastTrigger === notSetSymbol;
            this.setPromise(setInputs.newPromise);
            // force a re-render
            this.fireListeners();
        } else if ('resolvedValue' in setInputs) {
            this.resolveValue(setInputs.resolvedValue);
        } else if ('forceUpdate' in setInputs) {
            this.lastTrigger = notSetSymbol;
            this.resolutionValue = notSetSymbol;
            if (!this.waitingForValuePromise.isSettled()) {
                this.waitingForValuePromise.reject('Canceled by force update');
            }
            this.resetWaitingForValuePromise();
            // force a re-render
            this.fireListeners();
        } else {
            throw new Error('Got no properties for updating asyncProp.');
        }
    }

    public getValue(): AsyncProp<ValueGeneric> {
        if (this.waitingForValuePromise.isSettled()) {
            if (this.rejectionError !== notSetSymbol) {
                return this.rejectionError;
            } else if (this.resolutionValue === notSetSymbol) {
                throw new Error('Promise says it has settled but resolution value was not set!');
            } else {
                return this.resolutionValue;
            }
        } else {
            return this.waitingForValuePromise.promise;
        }
    }

    public addListener(
        fireImmediately: boolean,
        listener: ObservablePropertyListener<AsyncProp<ValueGeneric>>,
    ) {
        this.listeners.add(listener);
        if (fireImmediately) {
            listener(this.getValue());
        }
    }

    public addMultipleListeners(
        listeners: ReadonlySet<ObservablePropertyListener<AsyncProp<ValueGeneric>>>,
    ): void {
        listeners.forEach((listener) => this.listeners.add(listener));
    }

    public getAllListeners() {
        return this.listeners;
    }

    public removeListener(listener: ObservablePropertyListener<AsyncProp<ValueGeneric>>) {
        if (this.listeners.has(listener)) {
            this.listeners.delete(listener);
            return true;
        } else {
            return false;
        }
    }

    public removeAllListeners() {
        const count = this.listeners.size;

        this.listeners.clear();

        return count;
    }
}

export type AsyncObservablePropertyHandlerCreator<
    ValueGeneric,
    TriggerInput extends AsyncPropTriggerInputBase,
> = ObservablePropertyHandlerCreator<
    AsyncPropSetValue<ValueGeneric, TriggerInput>,
    AsyncProp<ValueGeneric>
>;

export type AsyncPropUpdateCallback<
    ValueGeneric,
    TriggerInput extends AsyncPropTriggerInputBase,
> = undefined extends TriggerInput
    ? () => Promise<UnPromise<ValueGeneric>>
    : (triggerInput: TriggerInput) => Promise<UnPromise<ValueGeneric>>;

export type AsyncPropInit<ValueGeneric, TriggerInput extends AsyncPropTriggerInputBase> =
    | {
          /** Starting value */
          defaultValue: Promise<UnPromise<ValueGeneric>> | UnPromise<ValueGeneric> | ValueGeneric;
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
          updateCallback: AsyncPropUpdateCallback<ValueGeneric, TriggerInput>;
      };

export function asyncProp<ValueGeneric, TriggerInput extends AsyncPropTriggerInputBase = undefined>(
    ...args: [AsyncPropInit<ValueGeneric, TriggerInput>] | []
): AsyncObservablePropertyHandlerCreator<ValueGeneric, TriggerInput> {
    /**
     * Distinguish between an explicitly passed value of undefined or simply a lack of any arguments
     * at all.
     */
    const initValue = isLengthAtLeast(args, 1) ? args[0] : notSetSymbol;

    return {
        [observablePropertyHandlerCreatorMarkerKey]: true,
        init() {
            return new AsyncObservablePropertyHandler<ValueGeneric, TriggerInput>(initValue);
        },
    };
}
