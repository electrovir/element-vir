import {isPromiseLike} from '@augment-vir/common';
import {AsyncPropValue} from './async-prop';

export function isResolved<T>(
    asyncPropInput: AsyncPropValue<T>,
): asyncPropInput is Exclude<AsyncPropValue<T>, Promise<T>> {
    return !isPromiseLike(asyncPropInput);
}

export function isError<T>(asyncPropInput: AsyncPropValue<T>): asyncPropInput is Error {
    return asyncPropInput instanceof Error;
}

export function resolvedOrUndefined<T>(
    asyncPropInput: AsyncPropValue<T>,
): Awaited<T> | undefined | Error {
    if (isResolved(asyncPropInput)) {
        return asyncPropInput;
    } else {
        return undefined;
    }
}
