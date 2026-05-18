import {defineElement} from 'element-vir';
import {html, listen} from '../index.js';
import {MyWithEvents} from './my-with-events.example.js';

export const MyWithEventListening = defineElement()({
    tagName: 'my-with-event-listening',
    state() {
        return {
            myNumber: -1,
        };
    },
    render({state, updateState}) {
        return html`
            <h1>My App</h1>
            <${MyWithEvents}
                ${listen(MyWithEvents.events.logoutClick, () => {
                    console.info('logout triggered');
                })}
                ${listen(MyWithEvents.events.randomNumber, (event) => {
                    updateState({
                        myNumber: event.detail,
                    });
                })}
            ></${MyWithEvents}>
            <span>${state.myNumber}</span>
        `;
    },
});
