import {defineElementNoInputs, html, listen} from '..';
import {MySimpleWithEventsElement} from './my-simple-with-events.element';

export const MyAppWithEventsElement = defineElementNoInputs({
    tagName: 'my-app-with-events-element',
    stateInit: {
        myNumber: -1,
    },
    renderCallback: ({state, updateState}) => html`
        <h1>My App</h1>
        <${MySimpleWithEventsElement}
            ${listen(MySimpleWithEventsElement.events.logoutClick, () => {
                console.info('logout triggered');
            })}
            ${listen(MySimpleWithEventsElement.events.randomNumber, (event) => {
                updateState({myNumber: event.detail});
            })}
        >
        </${MySimpleWithEventsElement}>
        <span>${state.myNumber}</span>
    `,
});
