import {
    areJsonEqual,
    createDeferredPromiseWrapper,
    DeferredPromiseWrapper,
    ensureError,
    filterObject,
    JsonCompatibleValue,
    mapObjectValues,
    UnPromise,
} from '@augment-vir/common';
import {Promisable} from 'type-fest';
import {PickAndBlockOthers} from '../../augments/type';
import {PropertyInitMapBase} from './element-properties';

export type AsyncState<ValueGeneric> = Error | Promisable<UnPromise<ValueGeneric>>;

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

export type AsyncStateSetValue<ValueGeneric> =
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric>, 'createPromise' | 'trigger'>
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric>, 'newPromise'>
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric>, 'forceUpdate'>
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric>, 'resolvedValue'>;

export type MaybeAsyncStateToSync<PropertyMapInit extends PropertyInitMapBase> = {
    [Prop in keyof PropertyMapInit]: PropertyMapInit[Prop] extends
        | AsyncStateHandler<infer ValueGeneric>
        | AsyncStateInit<infer ValueGeneric>
        ? AsyncState<ValueGeneric>
        : PropertyMapInit[Prop];
};

export type AsyncStateInputs<PropertyMapInit extends PropertyInitMapBase> = {
    [Prop in keyof PropertyMapInit]: PropertyMapInit[Prop] extends
        | AsyncStateHandler<infer ValueGeneric>
        | AsyncStateInit<infer ValueGeneric>
        ? AsyncStateSetValue<ValueGeneric>
        : PropertyMapInit[Prop];
};

export type AsyncStateHandlerMap<OriginalObjectGeneric extends PropertyInitMapBase> = Partial<
    Record<keyof OriginalObjectGeneric, AsyncStateHandler<any>>
>;

export function toAsyncStateHandlerMap(
    propertyInitMap?: PropertyInitMapBase | undefined,
): AsyncStateHandlerMap<PropertyInitMapBase> {
    if (!propertyInitMap) {
        return {};
    }
    const asyncStateInit = filterObject(
        propertyInitMap,
        (key, value): value is AsyncStateInit<any> => {
            return value instanceof AsyncStateInit;
        },
    ) as Record<keyof PropertyInitMapBase, AsyncStateInit<any>>;

    const asyncStateHandlers = mapObjectValues(asyncStateInit, (key, value) => {
        return new AsyncStateHandler(value.initialValue);
    });

    return asyncStateHandlers;
}

const notSetSymbol = Symbol('not set');

export class AsyncStateHandler<ValueGeneric> {
    #lastTrigger:
        | Extract<AsyncStateSetValue<any>, {trigger: any}>['trigger']
        | typeof notSetSymbol
        | undefined = notSetSymbol;
    #resolutionValue: UnPromise<ValueGeneric> | undefined;
    #rejectionError: Error | undefined;
    #listeners: (() => void)[] = [];
    #lastSetPromise: Promise<UnPromise<ValueGeneric>> | undefined;

    #waitingForValuePromise: DeferredPromiseWrapper<UnPromise<ValueGeneric>> =
        createDeferredPromiseWrapper();

    constructor(initialValue: Promise<UnPromise<ValueGeneric>> | undefined) {
        if (initialValue) {
            this.setValue({newPromise: initialValue});
        }
    }

    #fireListeners() {
        this.#listeners.forEach((listener) => {
            listener();
        });
    }

    #setPromise(newPromise: Promise<UnPromise<ValueGeneric>>) {
        if (newPromise === this.#lastSetPromise) {
            // abort setting the promise if we already have set this promise
            return;
        }
        this.#resolutionValue = undefined;
        this.#rejectionError = undefined;
        this.#lastSetPromise = newPromise;

        if (this.#waitingForValuePromise.isSettled()) {
            this.#waitingForValuePromise = createDeferredPromiseWrapper();
        }

        newPromise
            .then((value) => {
                // make sure we're still actually waiting for this promise
                if (this.#lastSetPromise === newPromise) {
                    this.#resolveValue(value);
                }
            })
            .catch((reason) => {
                // make sure we're still actually waiting for this promise
                if (this.#lastSetPromise === newPromise) {
                    this.#rejectionError = ensureError(reason);
                    this.#waitingForValuePromise.promise.catch(() => {
                        /**
                         * Don't actually do anything, we just want to make sure the error is
                         * handled so it doesn't throw errors in the browser.
                         */
                    });

                    this.#waitingForValuePromise.reject(reason);
                    this.#fireListeners();
                }
            });
    }

    #resolveValue(value: UnPromise<ValueGeneric>) {
        if (value !== this.#resolutionValue) {
            this.#rejectionError = undefined;
            this.#resolutionValue = value;
            if (this.#waitingForValuePromise.isSettled()) {
                this.#waitingForValuePromise = createDeferredPromiseWrapper();
            }
            this.#waitingForValuePromise.resolve(value);
            this.#fireListeners();
        }
    }

    public setValue(setInputs: AsyncStateSetValue<ValueGeneric>) {
        if ('createPromise' in setInputs) {
            if (
                this.#lastTrigger === notSetSymbol ||
                !areJsonEqual(setInputs.trigger, this.#lastTrigger)
            ) {
                this.#lastTrigger = setInputs.trigger;
                const newValue = setInputs.createPromise();

                this.#setPromise(newValue);
            }
        } else if ('newPromise' in setInputs) {
            this.#lastTrigger === notSetSymbol;
            this.#setPromise(setInputs.newPromise);
            // force a re-render
            this.#fireListeners();
        } else if ('resolvedValue' in setInputs) {
            this.#resolveValue(setInputs.resolvedValue);
        } else {
            if (setInputs.forceUpdate) {
                this.#lastTrigger = notSetSymbol;
                this.#resolutionValue = undefined;
                if (!this.#waitingForValuePromise.isSettled()) {
                    this.#waitingForValuePromise.reject('Canceled by force update');
                }
                this.#waitingForValuePromise = createDeferredPromiseWrapper();
                // force a re-render
                this.#fireListeners();
            }
        }
    }

    public getValue(): AsyncState<ValueGeneric> {
        if (this.#waitingForValuePromise.isSettled()) {
            if (this.#rejectionError) {
                return this.#rejectionError;
            } else return this.#resolutionValue!;
        } else {
            return this.#waitingForValuePromise.promise;
        }
    }

    public addSettleListener(callback: () => void) {
        this.#listeners.push(callback);
    }
    public removeSettleListener(callback: (value: AsyncState<ValueGeneric>) => void) {
        this.#listeners = this.#listeners.filter((listener) => listener !== callback);
    }
}

export class AsyncStateInit<ValueGeneric> {
    constructor(public readonly initialValue?: Promise<UnPromise<ValueGeneric>> | undefined) {}
}

export function asyncState<ValueGeneric>(
    initialValue?: Promise<UnPromise<ValueGeneric>> | undefined,
) {
    return new AsyncStateInit<ValueGeneric>(initialValue);
}
