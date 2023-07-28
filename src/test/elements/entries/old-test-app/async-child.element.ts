import {wait, waitValue} from '@augment-vir/common';
import {asyncProp, defineElement, html, listen, renderAsync} from '../../../..';

const sameNumberPromise = waitValue(1_500, 86);

const circularReference = {derp: '' as any};
circularReference.derp = circularReference;

export const AsyncChild = defineElement<{
    trigger: number;
}>()({
    tagName: 'async-child',
    stateInitStatic: {
        loadThing: asyncProp({
            async updateCallback({
                trigger,
                circularReference,
            }: {
                trigger: number;
                circularReference: any;
            }) {
                await wait(1_500);
                return Math.pow(trigger, 2);
            },
        }),
    },
    renderCallback({state, inputs}) {
        console.info('rendering async child');
        state.loadThing.updateTrigger({
            ...inputs,
            circularReference,
        });

        return html`
            <p>${renderAsync(state.loadThing, 'Loading...')}</p>
            <button
                ${listen('click', () => {
                    state.loadThing.forceUpdate({
                        ...inputs,
                        circularReference,
                    });
                })}
            >
                Force update
            </button>
            <button
                ${listen('click', () => {
                    state.loadThing.setNewPromise(waitValue(1_500, 42));
                })}
            >
                New Number Promise
            </button>
            <button
                ${listen('click', () => {
                    state.loadThing.setNewPromise(sameNumberPromise);
                })}
            >
                Same Number Promise
            </button>
            <button
                ${listen('click', () => {
                    state.loadThing.setResolvedValue(Math.random());
                })}
            >
                New Resolved Value
            </button>
        `;
    },
});
