import {randomInteger} from '@augment-vir/common';
import {defineElement} from 'element-vir';
import {html, listen} from '../index.js';
import {MyCustomActionEvent} from './my-custom-action.example.js';

export const MyWithCustomEventDispatch = defineElement()({
    tagName: 'my-with-custom-event-dispatch',
    render({dispatch}) {
        return html`
            <button
                ${listen('click', () => {
                    dispatch(
                        new MyCustomActionEvent(
                            randomInteger({
                                min: 0,
                                max: 1_000_000,
                            }),
                        ),
                    );
                })}
            >
                send a number
            </button>
        `;
    },
});

export const MyWithCustomEvents = defineElement()({
    tagName: 'my-with-custom-events',
    render() {
        return html`
            <${MyWithCustomEventDispatch}
                ${listen(MyCustomActionEvent, (event) => {
                    console.info(`Got a number! ${event.detail}`);
                })}
            ></${MyWithCustomEventDispatch}>
        `;
    },
});
