import {extractErrorMessage, UnPromise} from '@augment-vir/common';
import {AsyncProp} from '../properties/async-prop';

export function renderAsyncProp<T>({
    asyncProp,
    fallback,
    resolutionRender,
    errorRender,
}: {
    asyncProp: AsyncProp<T>;
    /** This value will be rendered if the async state has not settled yet. */
    fallback: unknown;
    resolutionRender?: ((resolved: UnPromise<T>) => unknown) | undefined;
    errorRender?: ((error: Error) => unknown) | undefined;
}) {
    if (asyncProp?.error) {
        return errorRender ? errorRender(asyncProp.error) : extractErrorMessage(asyncProp.error);
    } else if (asyncProp?.resolution) {
        return resolutionRender ? resolutionRender(asyncProp.resolution) : asyncProp.resolution;
    } else {
        return fallback;
    }
}
