import {type Overwrite} from '@augment-vir/common';
import {CallbackObservable, type AsyncValue, type CallbackObservableInit} from 'observavir';

export type {AsyncValue} from 'observavir';

/**
 * Class for constructing async props. Do not use this directly as its internal types won't be
 * inferred correctly. Instead use {@link asyncProp} an async prop or {@link AsyncProp} for types.
 *
 * @category Internal
 */
export class InternalAsyncPropClass<Value, Params> extends CallbackObservable<Value, Params> {
    /**
     * Checks if the current `.value` has resolved (meaning the Promise has settled and it was not
     * rejected). This type guards the current instance's `.value` property.
     */
    public isResolved(): this is Overwrite<
        this,
        {value: Exclude<AsyncValue<Value>, Promise<any> | Error>}
    > {
        return !(this.value instanceof Promise) && !(this.value instanceof Error);
    }

    /**
     * Checks if the current `.value` has settled (meaning it is either a rejection error or a
     * resolved value). This type guards the current instance's `.value` property.
     */
    public isSettled(): this is Overwrite<this, {value: Exclude<AsyncValue<Value>, Promise<any>>}> {
        return !(this.value instanceof Promise);
    }

    /**
     * Checks if the current `.value` has not settled yet settled (meaning it is still an unsettled
     * Promise). This type guards the current instance's `.value` property.
     */
    public isWaiting(): this is Overwrite<this, {value: Extract<AsyncValue<Value>, Promise<any>>}> {
        return this.value instanceof Promise;
    }

    /**
     * Checks if the current `.value` is a rejection error. This type guards the current instance's
     * `.value` property.
     */
    public isError(): this is Overwrite<this, {value: Extract<AsyncValue<Value>, Error>}> {
        return this.value instanceof Error;
    }

    /**
     * Checks if the current `.value` is resolved (and not an error) or still waiting. This type
     * guards the current instance's `.value` property.
     */
    public isNotError(): this is Overwrite<this, {value: Exclude<AsyncValue<Value>, Error>}> {
        return !(this.value instanceof Error);
    }
}

/**
 * An async property created by {@link asyncProp} for use within declarative elements. Do not use
 * this directly as its internal types won't be inferred correctly.
 *
 * @category Internal
 */
export type AsyncProp<Value, Params> = Omit<
    InternalAsyncPropClass<Value, Params>,
    /** Hide these properties to make the `AsyncProp` interface much simpler. */
    | 'dispatch'
    | 'equalityCheck'
    | 'getListenerCount'
    | 'updateCallback'
    | 'removeListener'
    | 'removeAllListeners'
    | 'listenToEvent'
    | 'listen'
    | 'resolvedValue'
>;

/**
 * Create an async prop for a declarative element's state.
 *
 * @category Async
 */
export function asyncProp<Value, Params = void>(
    init?: CallbackObservableInit<Value, Params>,
): AsyncProp<Value, Params> {
    return new InternalAsyncPropClass(init);
}
