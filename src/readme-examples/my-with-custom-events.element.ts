import {defineElementNoInputs, html, listen} from '../index';
import {MyCustomActionEvent} from './my-custom-action.event';

export const MyWithCustomEvents = defineElementNoInputs({
    tagName: 'my-with-custom-events',
    renderCallback({dispatch}) {
        return html`
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
        `;
    },
});
