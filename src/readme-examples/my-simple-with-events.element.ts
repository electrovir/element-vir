import {defineFunctionalElement, ElementEvent, eventInit, html} from '..';

export const MySimpleWithEventsElement = defineFunctionalElement({
    tagName: 'my-simple-element-with-events',
    events: {
        logoutClick: eventInit<void>(),
        randomNumber: eventInit<number>(),
    },
    renderCallback: ({props, dispatchEvent, events}) => html`
        <!-- normal DOM events must be listened to with the "@" keyword from lit. -->
        <button @click=${() => dispatchEvent(new ElementEvent(events.logoutClick, undefined))}>
            log out
        </button>
        <button @click=${() => dispatchEvent(new ElementEvent(events.randomNumber, Math.random()))}>
            generate random number
        </button>
    `,
});
