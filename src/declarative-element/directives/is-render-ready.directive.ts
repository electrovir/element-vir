import {isPromiseLike} from '@augment-vir/common';
import {AsyncPropValue} from './async-prop';

export function isRenderReady<T>(asyncPropInput: AsyncPropValue<T>): asyncPropInput is Awaited<T> {
    if (asyncPropInput instanceof Error) {
        return false;
    } else if (isPromiseLike(asyncPropInput)) {
        return false;
    } else {
        return true;
    }
}

export function isResolved<T>(
    asyncPropInput: AsyncPropValue<T>,
): asyncPropInput is Exclude<AsyncPropValue<T>, Promise<T>> {
    if (isPromiseLike(asyncPropInput)) {
        return false;
    } else {
        return true;
    }
}

export function readyOrUndefined<T>(asyncPropInput: AsyncPropValue<T>): Awaited<T> | undefined {
    if (isRenderReady(asyncPropInput)) {
        return asyncPropInput;
    } else {
        return undefined;
    }
}
