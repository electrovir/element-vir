import {defineFunctionalElement, html, listen} from '..';
import {MyCustomEvent} from './custom-event-no-element';

export const MyElementWithCustomEvents = defineFunctionalElement({
    tagName: 'my-app-with-custom-events',
    renderCallback: ({genericDispatch}) => html`
        <div
            ${listen(MyCustomEvent, (event) => {
                console.info(`Got a number! ${event.detail}`);
            })}
        >
            <div
                ${listen('click', () => {
                    genericDispatch(new MyCustomEvent(Math.random()));
                })}
            ></div>
        </div>
    `,
});
