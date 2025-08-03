import {type MaybePromise} from '@augment-vir/common';
import {listen} from './listen.directive.js';

/**
 * Listens to enter, return, and space key hits on an element. Similar to {@link listenToEnter} but
 * includes space.
 *
 * @category Directives
 */
export function listenToActivate(callback: () => MaybePromise<void>) {
    return listen('keydown', async (event) => {
        const key = event.code.toLowerCase();

        if (key.includes('enter') || key.includes('return') || key === 'space') {
            event.stopImmediatePropagation();
            event.preventDefault();
            await callback();
        }
    });
}

/**
 * Listens to enter and return key hits on an element. Similar to {@link listenToActivate} but
 * doesn't include space.
 *
 * @category Directives
 */
export function listenToEnter(callback: () => MaybePromise<void>) {
    return listen('keydown', async (event) => {
        const key = event.code.toLowerCase();

        if (key.includes('enter') || key.includes('return')) {
            event.stopImmediatePropagation();
            event.preventDefault();
            await callback();
        }
    });
}
