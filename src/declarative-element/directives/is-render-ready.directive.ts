import {UnPromise, isPromiseLike} from '@augment-vir/common';
import {AsyncProp} from '../properties/async-prop';

export function isRenderReady<T>(asyncPropInput: AsyncProp<T>): asyncPropInput is UnPromise<T> {
    if (asyncPropInput instanceof Error) {
        return false;
    } else if (isPromiseLike(asyncPropInput)) {
        return false;
    } else {
        return true;
    }
}
