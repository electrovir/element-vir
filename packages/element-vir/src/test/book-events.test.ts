import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {collapseWhiteSpace} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow} from '@augment-vir/web';
import {defineElement} from '../declarative-element/define-element.js';
import {
    listenToActivate,
    listenToEnter,
} from '../declarative-element/directives/listen-to-activate.js';
import {listen} from '../declarative-element/directives/listen.directive.js';
import {testId, testIdSelector} from '../declarative-element/directives/test-id.directive.js';
import {defineElementEvent} from '../declarative-element/properties/element-events.js';
import {html} from '../template-transforms/vir-html/vir-html.js';
import {defineTypedEvent, TypedEvent} from '../typed-event/typed-event.js';

/**
 * These mirror the `element-book` example pages in `packages/element-vir-example/src/e2e-tests`, so
 * that the behavior those pages demonstrate is covered by this package's own test suite.
 */

function findTestId(root: Readonly<Element>, testIdValue: string) {
    return assertWrap.isDefined(
        queryThroughShadow(root, testIdSelector(testIdValue)),
        `no element found for test id '${testIdValue}'`,
    );
}

function readTestIdText(root: Readonly<Element>, testIdValue: string) {
    return collapseWhiteSpace(findTestId(root, testIdValue).textContent || '');
}

async function clickTestId(root: Readonly<Element>, testIdValue: string) {
    await testWeb.click(findTestId(root, testIdValue));
}

/** Playwright's `press` is not available here, so the key event is dispatched directly. */
function pressKey(target: Readonly<Element>, code: string) {
    target.dispatchEvent(
        new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            code,
            composed: true,
            key: code,
        }),
    );
}

describe('events book', () => {
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
                        dispatch(new events.clicked(next));
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

    it('dispatches typed events from child to parent', async () => {
        const parent = await testWeb.render(html`
            <${EventsParentElement}></${EventsParentElement}>
        `);
        assert.instanceOf(parent, EventsParentElement);

        assert.strictEquals(
            readTestIdText(parent, EventsParentElement.testIds.output),
            'received: none',
        );

        await clickTestId(parent, EventsChildElement.testIds.button);
        await waitUntil.strictEquals('received: 1', () => {
            return readTestIdText(parent, EventsParentElement.testIds.output);
        });

        await clickTestId(parent, EventsChildElement.testIds.button);
        await clickTestId(parent, EventsChildElement.testIds.button);
        await waitUntil.strictEquals('received: 3', () => {
            return readTestIdText(parent, EventsParentElement.testIds.output);
        });
    });
});

describe('typed event bubble book', () => {
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
                        dispatch(new events.bubbled('from-grandchild'));
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

    it('bubbles typed events through nested shadow roots', async () => {
        const root = await testWeb.render(html`
            <${TypedBubbleRoot}></${TypedBubbleRoot}>
        `);
        assert.instanceOf(root, TypedBubbleRoot);

        await clickTestId(root, TypedBubbleGrandchild.testIds.button);

        await waitUntil.strictEquals('from-grandchild', () => {
            return readTestIdText(root, TypedBubbleRoot.testIds.report);
        });
    });
});

describe('typed events standalone book', () => {
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

    it('exposes the event type and detail on the event class', () => {
        assert.strictEquals(customEventTrigger.type, 'custom-event-trigger');

        const instance = new customEventTrigger({
            label: 'hi',
        });

        assert.instanceOf(instance, TypedEvent);
        assert.strictEquals(instance.detail.label, 'hi');
    });

    it('captures the event detail through listen', async () => {
        const fixture = await testWeb.render(html`
            <${TypedEventsStandaloneElement}></${TypedEventsStandaloneElement}>
        `);
        assert.instanceOf(fixture, TypedEventsStandaloneElement);

        assert.strictEquals(
            readTestIdText(fixture, TypedEventsStandaloneElement.testIds.report),
            'none',
        );

        await clickTestId(fixture, TypedEventsStandaloneElement.testIds.trigger);

        await waitUntil.strictEquals('fired', () => {
            return readTestIdText(fixture, TypedEventsStandaloneElement.testIds.report);
        });
    });
});

describe('polymorphic listen book', () => {
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

    it('fires native and both typed listeners from one click', async () => {
        const parent = await testWeb.render(html`
            <${PolymorphicListenParent}></${PolymorphicListenParent}>
        `);
        assert.instanceOf(parent, PolymorphicListenParent);

        await clickTestId(parent, PolymorphicChild.testIds.button);

        await waitUntil.deepEquals(
            {
                elementTyped: 'element:7',
                native: '1',
                standaloneTyped: 'standalone-payload',
            },
            () => {
                return {
                    elementTyped: readTestIdText(
                        parent,
                        PolymorphicListenParent.testIds['element-typed'],
                    ),
                    native: readTestIdText(parent, PolymorphicListenParent.testIds.native),
                    standaloneTyped: readTestIdText(
                        parent,
                        PolymorphicListenParent.testIds['standalone-typed'],
                    ),
                };
            },
        );
    });
});

describe('listen to activate book', () => {
    const ListenToActivateElement = defineElement()({
        tagName: 'listen-to-activate-element',
        state() {
            return {
                count: 0,
            };
        },
        testIds: [
            'target',
            'count',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.target)}
                    ${listenToActivate(() => {
                        updateState({
                            count: state.count + 1,
                        });
                    })}
                >
                    activate me
                </button>
                <span ${testId(testIds.count)}>${state.count}</span>
            `;
        },
    });

    async function renderActivateElement() {
        const fixture = await testWeb.render(html`
            <${ListenToActivateElement}></${ListenToActivateElement}>
        `);
        assert.instanceOf(fixture, ListenToActivateElement);
        return fixture;
    }

    it('activates on Enter', async () => {
        const fixture = await renderActivateElement();

        pressKey(findTestId(fixture, ListenToActivateElement.testIds.target), 'Enter');

        await waitUntil.strictEquals('1', () => {
            return readTestIdText(fixture, ListenToActivateElement.testIds.count);
        });
    });

    it('activates on Space', async () => {
        const fixture = await renderActivateElement();

        pressKey(findTestId(fixture, ListenToActivateElement.testIds.target), 'Space');

        await waitUntil.strictEquals('1', () => {
            return readTestIdText(fixture, ListenToActivateElement.testIds.count);
        });
    });

    it('does not activate on other keys', async () => {
        const fixture = await renderActivateElement();
        const target = findTestId(fixture, ListenToActivateElement.testIds.target);

        pressKey(target, 'KeyA');
        pressKey(target, 'Tab');
        await fixture.updateComplete;

        assert.strictEquals(readTestIdText(fixture, ListenToActivateElement.testIds.count), '0');
    });
});

describe('listen to enter book', () => {
    const ListenToEnterElement = defineElement()({
        tagName: 'listen-to-enter-element',
        state() {
            return {
                count: 0,
            };
        },
        testIds: [
            'target',
            'count',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.target)}
                    ${listenToEnter(() => {
                        updateState({
                            count: state.count + 1,
                        });
                    })}
                >
                    enter only
                </button>
                <span ${testId(testIds.count)}>${state.count}</span>
            `;
        },
    });

    async function renderEnterElement() {
        const fixture = await testWeb.render(html`
            <${ListenToEnterElement}></${ListenToEnterElement}>
        `);
        assert.instanceOf(fixture, ListenToEnterElement);
        return fixture;
    }

    it('activates on Enter', async () => {
        const fixture = await renderEnterElement();

        pressKey(findTestId(fixture, ListenToEnterElement.testIds.target), 'Enter');

        await waitUntil.strictEquals('1', () => {
            return readTestIdText(fixture, ListenToEnterElement.testIds.count);
        });
    });

    it('does not activate on Space', async () => {
        const fixture = await renderEnterElement();

        pressKey(findTestId(fixture, ListenToEnterElement.testIds.target), 'Space');
        await fixture.updateComplete;

        assert.strictEquals(readTestIdText(fixture, ListenToEnterElement.testIds.count), '0');
    });
});

describe('lit bindings book', () => {
    const LitBindingsElement = defineElement()({
        tagName: 'lit-bindings-element',
        state() {
            return {
                inputValue: 'initial',
                disabled: false,
                clickCount: 0,
            };
        },
        testIds: [
            'input',
            'button',
            'report',
        ],
        render({state, updateState, testIds}) {
            return html`
                <input
                    ${testId(testIds.input)}
                    type="text"
                    .value=${state.inputValue}
                    @input=${(event: Event) => {
                        updateState({
                            inputValue: assertWrap.instanceOf(event.target, HTMLInputElement).value,
                        });
                    }}
                />
                <button
                    ${testId(testIds.button)}
                    ?disabled=${state.disabled}
                    @click=${() => {
                        updateState({
                            clickCount: state.clickCount + 1,
                        });
                    }}
                >
                    click
                </button>
                <span ${testId(testIds.report)}>${state.inputValue}/${state.clickCount}</span>
            `;
        },
    });

    async function renderLitBindings() {
        const fixture = await testWeb.render(html`
            <${LitBindingsElement}></${LitBindingsElement}>
        `);
        assert.instanceOf(fixture, LitBindingsElement);
        return fixture;
    }

    it('sets the .value property on an input', async () => {
        const fixture = await renderLitBindings();
        const input = assertWrap.instanceOf(
            findTestId(fixture, LitBindingsElement.testIds.input),
            HTMLInputElement,
        );

        assert.strictEquals(input.value, 'initial');
        assert.isFalse(
            assertWrap.instanceOf(
                findTestId(fixture, LitBindingsElement.testIds.button),
                HTMLButtonElement,
            ).disabled,
            'the boolean attribute binding must leave `disabled` off',
        );
    });

    it('fires the native event binding', async () => {
        const fixture = await renderLitBindings();

        await clickTestId(fixture, LitBindingsElement.testIds.button);
        await clickTestId(fixture, LitBindingsElement.testIds.button);

        await waitUntil.strictEquals('initial/2', () => {
            return readTestIdText(fixture, LitBindingsElement.testIds.report);
        });
    });

    it('round trips input events back through the property binding', async () => {
        const fixture = await renderLitBindings();
        const input = assertWrap.instanceOf(
            findTestId(fixture, LitBindingsElement.testIds.input),
            HTMLInputElement,
        );

        await testWeb.deleteInputText(input);
        await testWeb.typeIntoElement('changed', input);

        await waitUntil.strictEquals('changed/0', () => {
            return readTestIdText(fixture, LitBindingsElement.testIds.report);
        });
        assert.strictEquals(input.value, 'changed');
    });
});
