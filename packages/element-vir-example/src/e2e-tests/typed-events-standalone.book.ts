import {defineElement, defineTypedEvent, html, listen, testId, TypedEvent} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const customEventTrigger = defineTypedEvent<{label: string}>()('custom-event-trigger');

const TypedEventsStandaloneElement = defineElement()({
    tagName: 'typed-events-standalone-element',
    state() {
        return {
            lastDetail: 'none',
        };
    },
    testIds: [
        'trigger',
        'report',
    ],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.trigger)}
                ${listen('click', (event) => {
                    const target = event.currentTarget;
                    if (target instanceof EventTarget) {
                        target.dispatchEvent(
                            new customEventTrigger({
                                label: 'fired',
                            }),
                        );
                    }
                })}
                ${listen(customEventTrigger, (event) => {
                    updateState({
                        lastDetail: event.detail.label,
                    });
                })}
            >
                trigger
            </button>
            <span ${testId(testIds.report)}>${state.lastDetail}</span>
        `;
    },
});

export const typedEventsStandaloneTest = await defineBookTest(
    'typed events standalone',
    {
        render() {
            return html`
                <${TypedEventsStandaloneElement}></${TypedEventsStandaloneElement}>
            `;
        },
    },
    {
        async 'defineTypedEvent + listen captures the event detail'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(TypedEventsStandaloneElement.testIds.report))
                .toHaveText('none');

            await page.getByTestId(TypedEventsStandaloneElement.testIds.trigger).click();
            await e2eUtil
                .expect(page.getByTestId(TypedEventsStandaloneElement.testIds.report))
                .toHaveText('fired');
        },
        'typed event class exposes its static type'({e2eUtil}) {
            e2eUtil.expect(customEventTrigger.type).toBe('custom-event-trigger');
            const instance = new customEventTrigger({
                label: 'hi',
            });
            e2eUtil.expect(instance).toBeInstanceOf(TypedEvent);
            e2eUtil.expect(instance.detail.label).toBe('hi');
        },
    },
);
