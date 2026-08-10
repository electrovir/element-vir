import {defineElement, defineElementEvent, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const EventsChildElement = defineElement()({
    tagName: 'events-child-element',
    events: {
        clicked: defineElementEvent<number>(),
    },
    state() {
        return {
            value: 0,
        };
    },
    testIds: ['button'],
    render({state, updateState, dispatch, events, testIds}) {
        return html`
            <button
                ${testId(testIds.button)}
                ${listen('click', () => {
                    const next = state.value + 1;
                    updateState({
                        value: next,
                    });
                    dispatch(
                        new events.clicked({
                            detail: next,
                        }),
                    );
                })}
            >
                fire
            </button>
        `;
    },
});

const EventsParentElement = defineElement()({
    tagName: 'events-parent-element',
    state() {
        return {
            receivedValue: 'none' as 'none' | number,
        };
    },
    testIds: ['output'],
    render({state, updateState, testIds}) {
        return html`
            <${EventsChildElement}
                ${listen(EventsChildElement.events.clicked, (event) => {
                    updateState({
                        receivedValue: event.detail,
                    });
                })}
            ></${EventsChildElement}>
            <span ${testId(testIds.output)}>received: ${state.receivedValue}</span>
        `;
    },
});

export const eventsTest = await defineBookTest(
    'events',
    {
        render() {
            return html`
                <${EventsParentElement}></${EventsParentElement}>
            `;
        },
    },
    {
        async 'typed events dispatch from child to parent'({e2eUtil, page}) {
            const output = page.getByTestId(EventsParentElement.testIds.output);
            await e2eUtil.expect(output).toHaveText('received: none');

            await page.getByTestId(EventsChildElement.testIds.button).click();
            await e2eUtil.expect(output).toHaveText('received: 1');

            await page.getByTestId(EventsChildElement.testIds.button).click();
            await page.getByTestId(EventsChildElement.testIds.button).click();
            await e2eUtil.expect(output).toHaveText('received: 3');
        },
    },
);
