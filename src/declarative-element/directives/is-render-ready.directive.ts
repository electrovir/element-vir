import {UnPromise, isPromiseLike} from '@augment-vir/common';
import {AsyncProp} from './async-prop';

export function isRenderReady<T>(asyncPropInput: AsyncProp<T>): asyncPropInput is UnPromise<T> {
    if (asyncPropInput instanceof Error) {
        return false;
    } else if (isPromiseLike(asyncPropInput)) {
        return false;
    } else {
        return true;
    }
}

export function isResolved<T>(
    asyncPropInput: AsyncProp<T>,
): asyncPropInput is UnPromise<T> | Error {
    if (isPromiseLike(asyncPropInput)) {
        return false;
    } else {
        return true;
    }
}

export function readyOrUndefined<T>(asyncPropInput: AsyncProp<T>): UnPromise<T> | undefined {
    if (isRenderReady(asyncPropInput)) {
        return asyncPropInput;
    } else {
        return undefined;
    }
}
