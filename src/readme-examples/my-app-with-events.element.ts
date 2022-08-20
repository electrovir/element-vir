import {defineElement, html, listen} from '..';
import {MySimpleWithEventsElement} from './my-simple-with-events.element';

export const MyAppWithEventsElement = defineElement({
    tagName: 'my-app-with-events-element',
    stateInit: {
        myNumber: -1,
    },
    renderCallback: ({props, setProps}) => html`
        <h1>My App</h1>
        <${MySimpleWithEventsElement}
            ${listen(MySimpleWithEventsElement.events.logoutClick, () => {
                console.info('logout triggered');
            })}
            ${listen(MySimpleWithEventsElement.events.randomNumber, (event) => {
                setProps({myNumber: event.detail});
            })}
        >
        </${MySimpleWithEventsElement}>
        <span>${props.myNumber}</span>
    `,
});
