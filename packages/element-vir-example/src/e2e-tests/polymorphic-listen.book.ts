import {
    defineElement,
    defineElementEvent,
    defineTypedEvent,
    html,
    listen,
    testId,
} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const standaloneTypedEvent = defineTypedEvent<string>()('polymorphic-listen-standalone');

const PolymorphicChild = defineElement()({
    tagName: 'polymorphic-listen-child',
    events: {
        fromElement: defineElementEvent<number>(),
    },
    testIds: ['button'],
    render({events, dispatch, testIds}) {
        return html`
            <button
                ${testId(testIds.button)}
                @click=${(event: Event) => {
                    dispatch(new events.fromElement(7));
                    const target = event.currentTarget;
                    if (target instanceof EventTarget) {
                        target.dispatchEvent(new standaloneTypedEvent('standalone-payload'));
                    }
                }}
            >
                fire
            </button>
        `;
    },
});

const PolymorphicListenParent = defineElement()({
    tagName: 'polymorphic-listen-parent',
    state() {
        return {
            nativeClicks: 0,
            elementTyped: 'none',
            standaloneTyped: 'none',
        };
    },
    testIds: [
        'native',
        'element-typed',
        'standalone-typed',
    ],
    render({state, updateState, testIds}) {
        return html`
            <span ${testId(testIds.native)}>${state.nativeClicks}</span>
            <span ${testId(testIds['element-typed'])}>${state.elementTyped}</span>
            <span ${testId(testIds['standalone-typed'])}>${state.standaloneTyped}</span>
            <${PolymorphicChild}
                ${listen('click', () => {
                    updateState({
                        nativeClicks: state.nativeClicks + 1,
                    });
                })}
                ${listen(PolymorphicChild.events.fromElement, (event) => {
                    updateState({
                        elementTyped: `element:${event.detail}`,
                    });
                })}
                ${listen(standaloneTypedEvent, (event) => {
                    updateState({
                        standaloneTyped: event.detail,
                    });
                })}
            ></${PolymorphicChild}>
        `;
    },
});

export const polymorphicListenTest = await defineBookTest(
    'polymorphic listen',
    {
        render() {
            return html`
                <${PolymorphicListenParent}></${PolymorphicListenParent}>
            `;
        },
    },
    {
        async 'native and both typed listeners all fire from the same click'({e2eUtil, page}) {
            await page.getByTestId(PolymorphicChild.testIds.button).click();

            await e2eUtil
                .expect(page.getByTestId(PolymorphicListenParent.testIds.native))
                .toHaveText('1');
            await e2eUtil
                .expect(page.getByTestId(PolymorphicListenParent.testIds['element-typed']))
                .toHaveText('element:7');
            await e2eUtil
                .expect(page.getByTestId(PolymorphicListenParent.testIds['standalone-typed']))
                .toHaveText('standalone-payload');
        },
    },
);
