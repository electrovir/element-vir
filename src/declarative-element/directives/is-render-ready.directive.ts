import {UnPromise, isPromiseLike} from '@augment-vir/common';
import {AsyncState} from '../properties/async-state';

export function isRenderReady<T>(asyncStateInput: AsyncState<T>): asyncStateInput is UnPromise<T> {
    if (asyncStateInput instanceof Error) {
        return false;
    } else if (isPromiseLike(asyncStateInput)) {
        return false;
    } else {
        return true;
    }
}
