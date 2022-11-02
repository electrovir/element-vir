import {defineElementNoInputs, html, listen} from '..';
import {MyWithEventsElement} from './my-with-events.element';

export const MyWithEventListeningElement = defineElementNoInputs({
    tagName: 'my-with-event-listening',
    stateInit: {
        myNumber: -1,
    },
    renderCallback: ({state, updateState}) => html`
        <h1>My App</h1>
        <${MyWithEventsElement}
            ${listen(MyWithEventsElement.events.logoutClick, () => {
                console.info('logout triggered');
            })}
            ${listen(MyWithEventsElement.events.randomNumber, (event) => {
                updateState({myNumber: event.detail});
            })}
        >
        </${MyWithEventsElement}>
        <span>${state.myNumber}</span>
    `,
});
