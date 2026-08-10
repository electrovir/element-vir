import {defineElement, defineElementEvent, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const TypedBubbleGrandchild = defineElement()({
    tagName: 'typed-bubble-grandchild',
    events: {
        bubbled: defineElementEvent<string>(),
    },
    testIds: ['button'],
    render({events, dispatch, testIds}) {
        return html`
            <button
                ${testId(testIds.button)}
                ${listen('click', () => {
                    dispatch(
                        new events.bubbled({
                            detail: 'from-grandchild',
                        }),
                    );
                })}
            >
                fire
            </button>
        `;
    },
});

const TypedBubbleChild = defineElement()({
    tagName: 'typed-bubble-child',
    render() {
        return html`
            <${TypedBubbleGrandchild}></${TypedBubbleGrandchild}>
        `;
    },
});

const TypedBubbleRoot = defineElement()({
    tagName: 'typed-bubble-root',
    state() {
        return {
            received: 'none',
        };
    },
    testIds: ['report'],
    render({state, updateState, testIds}) {
        return html`
            <span ${testId(testIds.report)}>${state.received}</span>
            <${TypedBubbleChild}
                ${listen(TypedBubbleGrandchild.events.bubbled, (event) => {
                    updateState({
                        received: event.detail,
                    });
                })}
            ></${TypedBubbleChild}>
        `;
    },
});

export const typedEventBubbleTest = await defineBookTest(
    'typed event bubble',
    {
        render() {
            return html`
                <${TypedBubbleRoot}></${TypedBubbleRoot}>
            `;
        },
    },
    {
        async 'typed events bubble through nested shadow DOMs'({e2eUtil, page}) {
            await page.getByTestId(TypedBubbleGrandchild.testIds.button).click();
            await e2eUtil
                .expect(page.getByTestId(TypedBubbleRoot.testIds.report))
                .toHaveText('from-grandchild');
        },
    },
);
