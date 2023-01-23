import {extractErrorMessage, isPromiseLike, UnPromise} from '@augment-vir/common';
import {AsyncState} from '../properties/async-state';

export function renderAsyncState<T>(
    asyncState: AsyncState<T>,
    /** This value will be rendered if the async state has not settled yet. */
    fallback: unknown,
    resolutionRender?: ((resolved: UnPromise<T>) => unknown) | undefined,
    errorRender?: ((error: Error) => unknown) | undefined,
) {
    if (asyncState instanceof Error) {
        return errorRender ? errorRender(asyncState) : extractErrorMessage(asyncState);
    } else if (isPromiseLike(asyncState)) {
        return fallback;
    } else {
        return resolutionRender ? resolutionRender(asyncState) : asyncState;
    }
}
