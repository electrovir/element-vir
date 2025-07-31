import {type MaybePromise} from '@augment-vir/common';
import {listen} from 'element-vir';

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
