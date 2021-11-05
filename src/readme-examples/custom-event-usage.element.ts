import {defineFunctionalElement, html, listen} from '..';
import {MyCustomEvent} from './custom-event-no-element';

export const MyElementWithCustomEvents = defineFunctionalElement({
    tagName: 'my-app-with-custom-events',
    renderCallback: ({dispatchEvent: defaultDispatchEvent}) => html`
        <div
            ${listen(MyCustomEvent, (event) => {
                console.log(`Got a number! ${event.detail}`);
            })}
        >
            <div
                @click=${() => {
                    defaultDispatchEvent(new MyCustomEvent(Math.random()));
                }}
            ></div>
        </div>
    `,
});
