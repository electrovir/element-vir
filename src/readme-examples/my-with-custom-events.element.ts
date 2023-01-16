import {defineElementNoInputs, html, listen} from '..';
import {MyCustomActionEvent} from './my-custom-action.event';

export const MyWithCustomEventsElement = defineElementNoInputs({
    tagName: 'my-with-custom-events',
    renderCallback: ({dispatch}) => html`
        <div
            ${listen(MyCustomActionEvent, (event) => {
                console.info(`Got a number! ${event.detail}`);
            })}
        >
            <div
                ${listen('click', () => {
                    dispatch(new MyCustomActionEvent(Math.random()));
                })}
            ></div>
        </div>
    `,
});
