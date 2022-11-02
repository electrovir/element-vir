import {defineElementNoInputs, html, listen} from '..';
import {MyCustomActionEvent} from './my-custom-action.event';

export const MyWithCustomEventsElement = defineElementNoInputs({
    tagName: 'my-with-custom-events',
    renderCallback: ({genericDispatch}) => html`
        <div
            ${listen(MyCustomActionEvent, (event) => {
                console.info(`Got a number! ${event.detail}`);
            })}
        >
            <div
                ${listen('click', () => {
                    genericDispatch(new MyCustomActionEvent(Math.random()));
                })}
            ></div>
        </div>
    `,
});
