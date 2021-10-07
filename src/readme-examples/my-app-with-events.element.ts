import {defineFunctionalElement, html, listen} from '..';
import {MySimpleWithEventsElement} from './my-simple-with-events.element';

export const MyAppWithEventsElement = defineFunctionalElement({
    tagName: 'my-app-with-events-element',
    props: {
        myNumber: -1,
    },
    renderCallback: ({props}) => html`
        <h1>My App</h1>
        <${MySimpleWithEventsElement}
            ${listen(MySimpleWithEventsElement.events.logoutClick, () => {
                console.info('logout triggered');
            })}
            ${listen(MySimpleWithEventsElement.events.randomNumber, (event) => {
                props.myNumber = event.detail;
            })}
        >
        </${MySimpleWithEventsElement}>
        <span>${props.myNumber}</span>
    `,
});
