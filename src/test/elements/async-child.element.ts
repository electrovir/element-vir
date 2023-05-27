import {wait, waitValue} from '@augment-vir/common';
import {asyncProp, defineElement, html, listen, renderAsync} from '../..';

const sameNumberPromise = waitValue(1_500, 86);

export const AsyncChild = defineElement<{
    trigger: number;
}>()({
    tagName: 'async-child',
    stateInitStatic: {
        loadThing: asyncProp<number>(),
    },
    renderCallback({state, inputs, updateState}) {
        console.info('rendering async child');
        updateState({
            loadThing: {
                createPromise: async () => {
                    await wait(1_500);
                    return Math.pow(inputs.trigger, 2);
                },
                trigger: inputs.trigger,
            },
        });

        return html`
            <p>${renderAsync(state.loadThing, 'Loading...')}</p>
            <button
                ${listen('click', () => {
                    updateState({loadThing: {forceUpdate: true}});
                })}
            >
                Force update
            </button>
            <button
                ${listen('click', () => {
                    updateState({
                        loadThing: {
                            newPromise: waitValue(1_500, 42),
                        },
                    });
                })}
            >
                New Number Promise
            </button>
            <button
                ${listen('click', () => {
                    updateState({
                        loadThing: {
                            newPromise: sameNumberPromise,
                        },
                    });
                })}
            >
                Same Number Promise
            </button>
            <button
                ${listen('click', () => {
                    updateState({
                        loadThing: {
                            resolvedValue: Math.random(),
                        },
                    });
                })}
            >
                New Resolved Value
            </button>
        `;
    },
});
