import {
    areJsonEqual,
    createDeferredPromiseWrapper,
    DeferredPromiseWrapper,
    ensureError,
    isLengthAtLeast,
    JsonCompatibleValue,
    UnPromise,
} from '@augment-vir/common';
import {PickAndBlockOthers} from '../../augments/type';
import {
    ObservablePropertyHandlerCreator,
    observablePropertyHandlerCreatorMarkerKey,
    ObservablePropertyHandlerInstance,
    observablePropertyHandlerInstanceMarkerKey,
    ObservablePropertyListener,
} from './observable-property/observable-property-handler';

export type AsyncProp<ValueGeneric> =
    | Error
    | UnPromise<ValueGeneric>
    | Promise<UnPromise<ValueGeneric>>;

const notSetSymbol = Symbol('not set');

type AllSetValueProperties<ValueGeneric> = {
    /** Set a new value directly without using any promises. */
    resolvedValue: UnPromise<ValueGeneric>;
    createPromise: () => Promise<UnPromise<ValueGeneric>>;
    /**
     * When trigger changes (according to deep equality checking through JSON stringify), the
     * createPromise callback will be called and the element's state will be updated again.
     * Otherwise, the createPromise callback will only be called the first time.
     *
     * Set this to undefined to disabled automatic updating. Meaning, createPromise will only be
     * called the first time.
     */
    trigger: JsonCompatibleValue;
    newPromise: Promise<UnPromise<ValueGeneric>>;
    /** Clear the current value and trigger createPromise to get called again on the next render. */
    forceUpdate: true;
};

export type AsyncPropSetValue<ValueGeneric> =
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric>, 'createPromise' | 'trigger'>
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric>, 'newPromise'>
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric>, 'forceUpdate'>
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric>, 'resolvedValue'>;

export class AsyncObservablePropertyHandler<ValueGeneric>
    implements
        ObservablePropertyHandlerInstance<AsyncPropSetValue<ValueGeneric>, AsyncProp<ValueGeneric>>
{
    private lastTrigger:
        | Extract<AsyncPropSetValue<unknown>, {trigger: unknown}>['trigger']
        | typeof notSetSymbol
        | undefined = notSetSymbol;
    private resolutionValue: UnPromise<ValueGeneric> | typeof notSetSymbol = notSetSymbol;
    private rejectionError: Error | typeof notSetSymbol = notSetSymbol;
    private listeners = new Set<ObservablePropertyListener<AsyncProp<ValueGeneric>>>();
    private lastSetPromise: Promise<UnPromise<ValueGeneric>> | undefined;

    private waitingForValuePromise: DeferredPromiseWrapper<UnPromise<ValueGeneric>> =
        createDeferredPromiseWrapper();

    [observablePropertyHandlerInstanceMarkerKey] = true as const;

    constructor(
        initialValue:
            | Promise<UnPromise<ValueGeneric>>
            | UnPromise<ValueGeneric>
            | ValueGeneric
            | typeof notSetSymbol,
    ) {
        this.resetValue(initialValue);
    }

    public resetValue(
        rawValue:
            | Promise<UnPromise<ValueGeneric>>
            | UnPromise<ValueGeneric>
            | ValueGeneric
            | typeof notSetSymbol,
    ) {
        this.resetWaitingForValuePromise();
        if (rawValue !== notSetSymbol) {
            if (rawValue instanceof Promise) {
                this.setValue({newPromise: rawValue});
            } else {
                this.setValue({resolvedValue: rawValue as UnPromise<ValueGeneric>});
            }
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

    public setValue(setInputs: AsyncPropSetValue<ValueGeneric>) {
        if ('createPromise' in setInputs) {
            if (
                this.lastTrigger === notSetSymbol ||
                !areJsonEqual(setInputs.trigger, this.lastTrigger)
            ) {
                this.lastTrigger = setInputs.trigger;
                const newValue = setInputs.createPromise();

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
            this.resetValue(setInputs);
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

export type AsyncObservablePropertyHandlerCreator<ValueGeneric> = ObservablePropertyHandlerCreator<
    AsyncPropSetValue<ValueGeneric>,
    AsyncProp<ValueGeneric>
>;

export function asyncProp<ValueGeneric>(
    ...args: [Promise<UnPromise<ValueGeneric>> | UnPromise<ValueGeneric> | ValueGeneric] | []
): AsyncObservablePropertyHandlerCreator<ValueGeneric> {
    /**
     * Distinguish between an explicitly passed value of undefined or simply a lack of any arguments
     * at all.
     */
    const initValue = isLengthAtLeast(args, 1) ? args[0] : notSetSymbol;

    return {
        [observablePropertyHandlerCreatorMarkerKey]: true,
        init() {
            return new AsyncObservablePropertyHandler<ValueGeneric>(initValue);
        },
    };
}
