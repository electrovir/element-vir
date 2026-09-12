import {randomInteger} from '@augment-vir/common';
import {defineElement} from 'element-vir';
import {defineElementEvent, html, listen} from '../index.js';

export const MyWithEvents = defineElement()({
    tagName: 'my-with-events',
    events: {
        logoutClick: defineElementEvent<void>(),
        randomNumber: defineElementEvent<number>(),
    },
    render({dispatch, events}) {
        return html`
            <button
                ${listen('click', () => {
                    return dispatch(
                        new events.logoutClick({
                            detail: undefined,
                        }),
                    );
                })}
            >
                log out
            </button>
            <button
                ${listen('click', () => {
                    return dispatch(
                        new events.randomNumber({
                            detail: randomInteger({
                                min: 0,
                                max: 1_000_000,
                            }),
                        }),
                    );
                })}
            >
                generate random number
            </button>
        `;
    },
});
