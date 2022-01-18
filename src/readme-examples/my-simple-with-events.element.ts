import {defineElementEvent, defineFunctionalElement, html, listen} from '..';

export const MySimpleWithEventsElement = defineFunctionalElement({
    tagName: 'my-simple-element-with-events',
    events: {
        logoutClick: defineElementEvent<void>(),
        randomNumber: defineElementEvent<number>(),
    },
    renderCallback: ({dispatch, events}) => html`
        <button ${listen('click', () => dispatch(new events.logoutClick(undefined)))}>
            log out
        </button>
        <button ${listen('click', () => dispatch(new events.randomNumber(Math.random())))}>
            generate random number
        </button>
    `,
});
