import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {collapseWhiteSpace} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow} from '@augment-vir/web';
import {Observable} from 'observavir';
import {defineElement} from '../declarative-element/define-element.js';
import {listen} from '../declarative-element/directives/listen.directive.js';
import {onDomRendered} from '../declarative-element/directives/on-dom-rendered.directive.js';
import {renderIf} from '../declarative-element/directives/render-if.directive.js';
import {testId, testIdSelector} from '../declarative-element/directives/test-id.directive.js';
import {defineElementEvent} from '../declarative-element/properties/element-events.js';
import {css} from '../template-transforms/vir-css/vir-css.js';
import {html} from '../template-transforms/vir-html/vir-html.js';

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

describe('inputs book', () => {
    const InputsChildElement = defineElement<{label: string; count: number}>()({
        tagName: 'inputs-child-element',
        testIds: ['output'],
        render({inputs, testIds}) {
            return html`
                <span ${testId(testIds.output)}>${inputs.label}: ${inputs.count}</span>
            `;
        },
    });
    const InputsParentElement = defineElement()({
        tagName: 'inputs-parent-element',
        state() {
            return {
                count: 0,
            };
        },
        testIds: ['bump'],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.bump)}
                    ${listen('click', () => {
                        updateState({
                            count: state.count + 1,
                        });
                    })}
                >
                    bump
                </button>
                <${InputsChildElement.assign({
                    label: 'count',
                    count: state.count,
                })}></${InputsChildElement}>
            `;
        },
    });

    it('propagates inputs from parent to child', async () => {
        const parent = await testWeb.render(html`
            <${InputsParentElement}></${InputsParentElement}>
        `);
        assert.instanceOf(parent, InputsParentElement);

        assert.strictEquals(readTestIdText(parent, InputsChildElement.testIds.output), 'count: 0');

        await clickTestId(parent, InputsParentElement.testIds.bump);

        await waitUntil.strictEquals('count: 1', () => {
            return readTestIdText(parent, InputsChildElement.testIds.output);
        });
    });
});

describe('input types book', () => {
    const InputTypesChild = defineElement<{
        primitive: number;
        record: {key: string};
        list: ReadonlyArray<number>;
        callback: () => string;
    }>()({
        tagName: 'input-types-child',
        state() {
            return {
                callbackResult: '',
            };
        },
        testIds: [
            'primitive',
            'object',
            'array',
            'callback-result',
            'callback-button',
        ],
        render({inputs, state, updateState, testIds}) {
            return html`
                <span ${testId(testIds.primitive)}>${inputs.primitive}</span>
                <span ${testId(testIds.object)}>${inputs.record.key}</span>
                <span ${testId(testIds.array)}>${inputs.list.join(',')}</span>
                <button
                    ${testId(testIds['callback-button'])}
                    ${listen('click', () => {
                        updateState({
                            callbackResult: inputs.callback(),
                        });
                    })}
                >
                    fire callback
                </button>
                <span ${testId(testIds['callback-result'])}>${state.callbackResult}</span>
            `;
        },
    });

    async function renderInputTypes() {
        const fixture = await testWeb.render(html`
            <${InputTypesChild.assign({
                primitive: 42,
                record: {
                    key: 'value',
                },
                list: [
                    1,
                    2,
                    3,
                ],
                callback() {
                    return 'callback fired';
                },
            })}></${InputTypesChild}>
        `);
        assert.instanceOf(fixture, InputTypesChild);
        return fixture;
    }

    it('renders every input type', async () => {
        const fixture = await renderInputTypes();

        assert.deepEquals(
            {
                array: readTestIdText(fixture, InputTypesChild.testIds.array),
                object: readTestIdText(fixture, InputTypesChild.testIds.object),
                primitive: readTestIdText(fixture, InputTypesChild.testIds.primitive),
            },
            {
                array: '1,2,3',
                object: 'value',
                primitive: '42',
            },
        );
    });

    it('invokes a callback input from within the child', async () => {
        const fixture = await renderInputTypes();

        await clickTestId(fixture, InputTypesChild.testIds['callback-button']);
        await fixture.updateComplete;

        assert.strictEquals(
            readTestIdText(fixture, InputTypesChild.testIds['callback-result']),
            'callback fired',
        );
    });
});

describe('state updates book', () => {
    const StateUpdatesElement = defineElement()({
        tagName: 'state-updates-element',
        state() {
            return {
                count: 0,
            };
        },
        testIds: [
            'increment',
            'count',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.increment)}
                    ${listen('click', () => {
                        updateState({
                            count: state.count + 1,
                        });
                    })}
                >
                    increment
                </button>
                <span ${testId(testIds.count)}>${state.count}</span>
            `;
        },
    });

    it('re-renders on each state update', async () => {
        const fixture = await testWeb.render(html`
            <${StateUpdatesElement}></${StateUpdatesElement}>
        `);
        assert.instanceOf(fixture, StateUpdatesElement);

        assert.strictEquals(readTestIdText(fixture, StateUpdatesElement.testIds.count), '0');

        await clickTestId(fixture, StateUpdatesElement.testIds.increment);
        await fixture.updateComplete;
        assert.strictEquals(readTestIdText(fixture, StateUpdatesElement.testIds.count), '1');

        await clickTestId(fixture, StateUpdatesElement.testIds.increment);
        await clickTestId(fixture, StateUpdatesElement.testIds.increment);
        await fixture.updateComplete;
        assert.strictEquals(readTestIdText(fixture, StateUpdatesElement.testIds.count), '3');
    });
});

describe('state batching book', () => {
    const StateBatchingElement = defineElement()({
        tagName: 'state-batching-element',
        state() {
            return {
                a: 0,
                b: 0,
            };
        },
        testIds: [
            'a',
            'b',
            'button',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.button)}
                    ${listen('click', () => {
                        updateState({
                            a: state.a + 1,
                        });
                        updateState({
                            b: state.b + 1,
                        });
                    })}
                >
                    bump both
                </button>
                <span ${testId(testIds.a)}>${state.a}</span>
                <span ${testId(testIds.b)}>${state.b}</span>
            `;
        },
    });

    it('lands every synchronous updateState call', async () => {
        const fixture = await testWeb.render(html`
            <${StateBatchingElement}></${StateBatchingElement}>
        `);
        assert.instanceOf(fixture, StateBatchingElement);

        await clickTestId(fixture, StateBatchingElement.testIds.button);
        await clickTestId(fixture, StateBatchingElement.testIds.button);
        await clickTestId(fixture, StateBatchingElement.testIds.button);
        await fixture.updateComplete;

        assert.deepEquals(
            {
                a: readTestIdText(fixture, StateBatchingElement.testIds.a),
                b: readTestIdText(fixture, StateBatchingElement.testIds.b),
            },
            {
                a: '3',
                b: '3',
            },
        );
    });
});

describe('state survives re render book', () => {
    const StateSurvivesChild = defineElement<{label: string}>()({
        tagName: 'state-survives-child',
        state() {
            return {
                count: 0,
            };
        },
        testIds: [
            'count',
            'increment',
        ],
        render({state, updateState, inputs, testIds}) {
            return html`
                <span>${inputs.label}</span>
                <span ${testId(testIds.count)}>${state.count}</span>
                <button
                    ${testId(testIds.increment)}
                    ${listen('click', () => {
                        updateState({
                            count: state.count + 1,
                        });
                    })}
                >
                    inc
                </button>
            `;
        },
    });
    const StateSurvivesParent = defineElement()({
        tagName: 'state-survives-parent',
        state() {
            return {
                parentRenderCount: 0,
            };
        },
        testIds: [
            'bump',
            'render-count',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.bump)}
                    ${listen('click', () => {
                        updateState({
                            parentRenderCount: state.parentRenderCount + 1,
                        });
                    })}
                >
                    bump parent
                </button>
                <span ${testId(testIds['render-count'])}>${state.parentRenderCount}</span>
                <${StateSurvivesChild.assign({
                    label: 'child',
                })}></${StateSurvivesChild}>
            `;
        },
    });

    it('keeps child state across parent re-renders', async () => {
        const parent = await testWeb.render(html`
            <${StateSurvivesParent}></${StateSurvivesParent}>
        `);
        assert.instanceOf(parent, StateSurvivesParent);
        const child = assertWrap.instanceOf(
            queryThroughShadow(parent, StateSurvivesChild),
            StateSurvivesChild,
        );

        await clickTestId(parent, StateSurvivesChild.testIds.increment);
        await clickTestId(parent, StateSurvivesChild.testIds.increment);
        await child.updateComplete;
        assert.strictEquals(readTestIdText(parent, StateSurvivesChild.testIds.count), '2');

        await clickTestId(parent, StateSurvivesParent.testIds.bump);
        await clickTestId(parent, StateSurvivesParent.testIds.bump);
        await parent.updateComplete;
        await child.updateComplete;

        assert.deepEquals(
            {
                childCount: readTestIdText(parent, StateSurvivesChild.testIds.count),
                childInstance: queryThroughShadow(parent, StateSurvivesChild),
                parentRenderCount: readTestIdText(
                    parent,
                    StateSurvivesParent.testIds['render-count'],
                ),
            },
            {
                childCount: '2',
                childInstance: child,
                parentRenderCount: '2',
            },
        );
    });
});

describe('sequential input book', () => {
    const SequentialInputChild = defineElement<{label: string}>()({
        tagName: 'sequential-input-child',
        testIds: ['output'],
        render({inputs, testIds}) {
            return html`
                <span ${testId(testIds.output)}>${inputs.label}</span>
            `;
        },
    });
    const SequentialInputParent = defineElement()({
        tagName: 'sequential-input-parent',
        state() {
            return {
                label: 'first',
            };
        },
        testIds: ['swap'],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.swap)}
                    ${listen('click', () => {
                        updateState({
                            label: state.label === 'first' ? 'second' : 'first',
                        });
                    })}
                >
                    swap
                </button>
                <${SequentialInputChild.assign({
                    label: state.label,
                })}></${SequentialInputChild}>
            `;
        },
    });

    it('updates child inputs without remounting the child', async () => {
        const parent = await testWeb.render(html`
            <${SequentialInputParent}></${SequentialInputParent}>
        `);
        assert.instanceOf(parent, SequentialInputParent);
        const child = assertWrap.instanceOf(
            queryThroughShadow(parent, SequentialInputChild),
            SequentialInputChild,
        );
        const renderCountBeforeSwap = child._internalRenderCount;

        assert.strictEquals(readTestIdText(parent, SequentialInputChild.testIds.output), 'first');

        await clickTestId(parent, SequentialInputParent.testIds.swap);
        await waitUntil.strictEquals('second', () => {
            return readTestIdText(parent, SequentialInputChild.testIds.output);
        });

        assert.strictEquals(
            queryThroughShadow(parent, SequentialInputChild),
            child,
            'the child must be updated in place rather than replaced',
        );
        assert.isAbove(child._internalRenderCount, renderCountBeforeSwap);
    });
});

describe('multiple instances book', () => {
    const MultiInstanceElement = defineElement<{label: string}>()({
        tagName: 'multi-instance-element',
        state() {
            return {
                count: 0,
            };
        },
        render({state, updateState, inputs}) {
            return html`
                <button
                    ${testId(`multi-instance-button-${inputs.label}`)}
                    ${listen('click', () => {
                        updateState({
                            count: state.count + 1,
                        });
                    })}
                >
                    inc ${inputs.label}
                </button>
                <span ${testId(`multi-instance-count-${inputs.label}`)}>${state.count}</span>
            `;
        },
    });

    it('isolates state per instance', async () => {
        const wrapper = await testWeb.render(html`
            <div>
                <${MultiInstanceElement.assign({
                    label: 'a',
                })}></${MultiInstanceElement}>
                <${MultiInstanceElement.assign({
                    label: 'b',
                })}></${MultiInstanceElement}>
            </div>
        `);

        await clickTestId(wrapper, 'multi-instance-button-a');
        await clickTestId(wrapper, 'multi-instance-button-a');
        await clickTestId(wrapper, 'multi-instance-button-b');

        await waitUntil.deepEquals(
            {
                a: '2',
                b: '1',
            },
            () => {
                return {
                    a: readTestIdText(wrapper, 'multi-instance-count-a'),
                    b: readTestIdText(wrapper, 'multi-instance-count-b'),
                };
            },
        );
    });
});

describe('detach reattach book', () => {
    const DetachReattachChild = defineElement()({
        tagName: 'detach-reattach-child',
        state() {
            return {
                count: 0,
            };
        },
        testIds: [
            'count',
            'inc',
        ],
        render({state, updateState, testIds}) {
            return html`
                <span ${testId(testIds.count)}>${state.count}</span>
                <button
                    ${testId(testIds.inc)}
                    ${listen('click', () => {
                        updateState({
                            count: state.count + 1,
                        });
                    })}
                >
                    inc
                </button>
            `;
        },
    });
    const DetachReattachParent = defineElement()({
        tagName: 'detach-reattach-parent',
        state() {
            return {
                mounted: true,
            };
        },
        testIds: ['toggle'],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.toggle)}
                    ${listen('click', () => {
                        updateState({
                            mounted: !state.mounted,
                        });
                    })}
                >
                    toggle mount
                </button>
                ${renderIf(
                    state.mounted,
                    html`
                        <${DetachReattachChild}></${DetachReattachChild}>
                    `,
                )}
            `;
        },
    });

    it('gives a reattached child a fresh state instance', async () => {
        const parent = await testWeb.render(html`
            <${DetachReattachParent}></${DetachReattachParent}>
        `);
        assert.instanceOf(parent, DetachReattachParent);

        await clickTestId(parent, DetachReattachChild.testIds.inc);
        await clickTestId(parent, DetachReattachChild.testIds.inc);
        await waitUntil.strictEquals('2', () => {
            return readTestIdText(parent, DetachReattachChild.testIds.count);
        });

        await clickTestId(parent, DetachReattachParent.testIds.toggle);
        await waitUntil.isUndefined(() => queryThroughShadow(parent, DetachReattachChild));

        await clickTestId(parent, DetachReattachParent.testIds.toggle);
        await waitUntil.strictEquals('0', () => {
            return readTestIdText(parent, DetachReattachChild.testIds.count);
        });
    });
});

describe('deep nesting book', () => {
    const DeepGrandchild = defineElement<{message: string}>()({
        tagName: 'deep-grandchild',
        events: {
            echoed: defineElementEvent<string>(),
        },
        render({inputs, events, dispatch}) {
            return html`
                <span ${testId('deep-grandchild-message')}>${inputs.message}</span>
                <button
                    ${testId('deep-grandchild-echo')}
                    ${listen('click', () => {
                        const invalidEvent = new events.echoed({
                            // @ts-expect-error: wrong detail type.
                            detail: 3,
                        });
                        assert.tsType(invalidEvent.detail).equals<string>();

                        dispatch(
                            new events.echoed({
                                detail: `echo: ${inputs.message}`,
                            }),
                        );
                    })}
                >
                    echo
                </button>
            `;
        },
    });
    const DeepChild = defineElement<{forward: string}>()({
        tagName: 'deep-child',
        render({inputs}) {
            return html`
                <${DeepGrandchild.assign({
                    message: inputs.forward,
                })}></${DeepGrandchild}>
            `;
        },
    });
    const DeepParent = defineElement<{seed: string}>()({
        tagName: 'deep-parent',
        render({inputs}) {
            return html`
                <${DeepChild.assign({
                    forward: inputs.seed,
                })}></${DeepChild}>
            `;
        },
    });
    const DeepRoot = defineElement()({
        tagName: 'deep-root',
        state() {
            return {
                received: 'none',
            };
        },
        render({state, updateState}) {
            return html`
                <span ${testId('deep-root-report')}>${state.received}</span>
                <${DeepParent.assign({
                    seed: 'forwarded',
                })}
                    ${listen(DeepGrandchild.events.echoed, (event) => {
                        updateState({
                            received: event.detail,
                        });
                    })}
                ></${DeepParent}>
            `;
        },
    });

    it('propagates inputs down three levels', async () => {
        const root = await testWeb.render(html`
            <${DeepRoot}></${DeepRoot}>
        `);
        assert.instanceOf(root, DeepRoot);

        assert.strictEquals(readTestIdText(root, 'deep-grandchild-message'), 'forwarded');
    });

    it('bubbles events up three levels', async () => {
        const root = await testWeb.render(html`
            <${DeepRoot}></${DeepRoot}>
        `);
        assert.instanceOf(root, DeepRoot);

        await clickTestId(root, 'deep-grandchild-echo');

        await waitUntil.strictEquals('echo: forwarded', () => {
            return readTestIdText(root, 'deep-root-report');
        });
    });
});

describe('host access book', () => {
    const HostAccessElement = defineElement()({
        tagName: 'host-access-element',
        testIds: [
            'tag-report',
            'set-attr',
        ],
        render({host, testIds}) {
            return html`
                <span ${testId(testIds['tag-report'])}>${host.tagName.toLowerCase()}</span>
                <button
                    ${testId(testIds['set-attr'])}
                    ${listen('click', () => {
                        host.setAttribute('data-host-flag', 'set');
                    })}
                >
                    set host attr
                </button>
            `;
        },
    });

    it('reports its own tag name', async () => {
        const fixture = await testWeb.render(html`
            <${HostAccessElement}></${HostAccessElement}>
        `);
        assert.instanceOf(fixture, HostAccessElement);

        assert.strictEquals(
            readTestIdText(fixture, HostAccessElement.testIds['tag-report']),
            HostAccessElement.tagName,
        );
    });

    it('sets host attributes imperatively', async () => {
        const fixture = await testWeb.render(html`
            <${HostAccessElement}></${HostAccessElement}>
        `);
        assert.instanceOf(fixture, HostAccessElement);

        assert.isFalse(fixture.hasAttribute('data-host-flag'));

        await clickTestId(fixture, HostAccessElement.testIds['set-attr']);

        assert.strictEquals(fixture.getAttribute('data-host-flag'), 'set');
    });
});

describe('host classes book', () => {
    const HostClassesElement = defineElement()({
        tagName: 'host-classes-element',
        state() {
            return {
                isActive: false,
            };
        },
        hostClasses: {
            'host-classes-element-active'({state}) {
                return state.isActive;
            },
            'host-classes-element-manual': false,
        },
        testIds: [
            'toggle-state',
            'toggle-manual',
        ],
        render({state, updateState, host, testIds}) {
            return html`
                <button
                    ${testId(testIds['toggle-state'])}
                    ${listen('click', () => {
                        updateState({
                            isActive: !state.isActive,
                        });
                    })}
                >
                    toggle state
                </button>
                <button
                    ${testId(testIds['toggle-manual'])}
                    ${listen('click', () => {
                        host.classList.toggle(
                            HostClassesElement.hostClasses['host-classes-element-manual'],
                        );
                    })}
                >
                    toggle manual
                </button>
            `;
        },
    });

    it('toggles a host class from its state callback', async () => {
        const fixture = await testWeb.render(html`
            <${HostClassesElement}></${HostClassesElement}>
        `);
        assert.instanceOf(fixture, HostClassesElement);

        assert.isFalse(fixture.classList.contains('host-classes-element-active'));

        await clickTestId(fixture, HostClassesElement.testIds['toggle-state']);
        await waitUntil.isTrue(() => fixture.classList.contains('host-classes-element-active'));

        await clickTestId(fixture, HostClassesElement.testIds['toggle-state']);
        await waitUntil.isFalse(() => fixture.classList.contains('host-classes-element-active'));
    });

    it('allows a manual host class to be toggled imperatively', async () => {
        const fixture = await testWeb.render(html`
            <${HostClassesElement}></${HostClassesElement}>
        `);
        assert.instanceOf(fixture, HostClassesElement);

        assert.isFalse(fixture.classList.contains('host-classes-element-manual'));

        await clickTestId(fixture, HostClassesElement.testIds['toggle-manual']);

        assert.isTrue(fixture.classList.contains('host-classes-element-manual'));
    });
});

describe('host class styles book', () => {
    const HostClassStylesElement = defineElement()({
        tagName: 'host-class-styles-element',
        state() {
            return {
                highlighted: false,
            };
        },
        hostClasses: {
            'host-class-styles-element-highlighted'({state}) {
                return state.highlighted;
            },
        },
        styles({hostClasses}) {
            return css`
                :host {
                    display: block;
                }

                ${hostClasses['host-class-styles-element-highlighted'].selector} .inner {
                    background-color: rgb(244, 233, 222);
                }

                .inner {
                    background-color: rgb(11, 22, 33);
                }
            `;
        },
        testIds: [
            'toggle',
            'inner',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.toggle)}
                    ${listen('click', () => {
                        updateState({
                            highlighted: !state.highlighted,
                        });
                    })}
                >
                    toggle
                </button>
                <div ${testId(testIds.inner)} class="inner">styled by host class</div>
            `;
        },
    });

    it('applies the host class selector from styles on toggle', async () => {
        const fixture = await testWeb.render(html`
            <${HostClassStylesElement}></${HostClassStylesElement}>
        `);
        assert.instanceOf(fixture, HostClassStylesElement);
        const inner = findTestId(fixture, HostClassStylesElement.testIds.inner);

        assert.strictEquals(window.getComputedStyle(inner).backgroundColor, 'rgb(11, 22, 33)');

        await clickTestId(fixture, HostClassStylesElement.testIds.toggle);

        await waitUntil.strictEquals('rgb(244, 233, 222)', () => {
            return window.getComputedStyle(inner).backgroundColor;
        });
    });
});

describe('observable props book', () => {
    const observable = new Observable({
        defaultValue: 0,
    });

    const ObservablePropsChild = defineElement<{observableProp: typeof observable}>()({
        tagName: 'observable-props-child',
        testIds: [
            'value',
            'set',
        ],
        render({inputs, testIds}) {
            return html`
                <span ${testId(testIds.value)}>${inputs.observableProp.value}</span>
                <button
                    ${testId(testIds.set)}
                    ${listen('click', () => {
                        inputs.observableProp.setValue(inputs.observableProp.value + 1);
                    })}
                >
                    set observable
                </button>
            `;
        },
    });
    const ObservablePropsParent = defineElement()({
        tagName: 'observable-props-parent',
        render() {
            return html`
                <${ObservablePropsChild.assign({
                    observableProp: observable,
                })}></${ObservablePropsChild}>
            `;
        },
    });

    it('re-renders only the child that holds the observable', async () => {
        const parent = await testWeb.render(html`
            <${ObservablePropsParent}></${ObservablePropsParent}>
        `);
        assert.instanceOf(parent, ObservablePropsParent);
        const child = assertWrap.instanceOf(
            queryThroughShadow(parent, ObservablePropsChild),
            ObservablePropsChild,
        );
        const parentRenderCountBefore = parent._internalRenderCount;
        const childRenderCountBefore = child._internalRenderCount;
        const valueBefore = Number(readTestIdText(parent, ObservablePropsChild.testIds.value));

        await clickTestId(parent, ObservablePropsChild.testIds.set);

        await waitUntil.strictEquals(String(valueBefore + 1), () => {
            return readTestIdText(parent, ObservablePropsChild.testIds.value);
        });
        assert.strictEquals(
            parent._internalRenderCount,
            parentRenderCountBefore,
            'the parent must not re-render for an observable change in its child',
        );
        assert.isAbove(child._internalRenderCount, childRenderCountBefore);
    });
});

describe('lifecycle book', () => {
    const cleanupSink = {
        count: 0,
    };

    const LifecycleChildElement = defineElement()({
        tagName: 'lifecycle-child-element',
        state() {
            return {
                initFired: 0,
                renderDomCount: 0,
            };
        },
        init({updateState, state}) {
            updateState({
                initFired: state.initFired + 1,
            });
        },
        cleanup() {
            cleanupSink.count += 1;
        },
        testIds: [
            'init-report',
            'render-count',
        ],
        render({state, updateState, testIds}) {
            return html`
                <span ${testId(testIds['init-report'])}>${state.initFired}</span>
                <span
                    ${testId(testIds['render-count'])}
                    ${onDomRendered(() => {
                        updateState({
                            renderDomCount: state.renderDomCount + 1,
                        });
                    })}
                >
                    ${state.renderDomCount}
                </span>
            `;
        },
    });
    const LifecycleParentElement = defineElement()({
        tagName: 'lifecycle-parent-element',
        state() {
            return {
                bump: 0,
                showChild: true,
            };
        },
        testIds: [
            'bump',
            'toggle-child',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.bump)}
                    ${listen('click', () => {
                        updateState({
                            bump: state.bump + 1,
                        });
                    })}
                >
                    bump (${state.bump})
                </button>
                <button
                    ${testId(testIds['toggle-child'])}
                    ${listen('click', () => {
                        updateState({
                            showChild: !state.showChild,
                        });
                    })}
                >
                    toggle child
                </button>
                ${renderIf(
                    state.showChild,
                    html`
                        <${LifecycleChildElement}></${LifecycleChildElement}>
                    `,
                )}
            `;
        },
    });

    it('fires init exactly once, no matter how many renders follow', async () => {
        const parent = await testWeb.render(html`
            <${LifecycleParentElement}></${LifecycleParentElement}>
        `);
        assert.instanceOf(parent, LifecycleParentElement);

        assert.strictEquals(
            readTestIdText(parent, LifecycleChildElement.testIds['init-report']),
            '1',
        );

        await clickTestId(parent, LifecycleParentElement.testIds.bump);
        await clickTestId(parent, LifecycleParentElement.testIds.bump);
        await parent.updateComplete;

        assert.strictEquals(
            readTestIdText(parent, LifecycleChildElement.testIds['init-report']),
            '1',
        );
    });

    it('fires onDomRendered on every render', async () => {
        const parent = await testWeb.render(html`
            <${LifecycleParentElement}></${LifecycleParentElement}>
        `);
        assert.instanceOf(parent, LifecycleParentElement);
        const renderCountBefore = readTestIdText(
            parent,
            LifecycleChildElement.testIds['render-count'],
        );

        await clickTestId(parent, LifecycleParentElement.testIds.bump);

        await waitUntil.isTrue(() => {
            return (
                readTestIdText(parent, LifecycleChildElement.testIds['render-count']) !==
                renderCountBefore
            );
        });
    });

    it('fires cleanup when the element leaves the DOM', async () => {
        const parent = await testWeb.render(html`
            <${LifecycleParentElement}></${LifecycleParentElement}>
        `);
        assert.instanceOf(parent, LifecycleParentElement);
        const cleanupCountBefore = cleanupSink.count;

        await clickTestId(parent, LifecycleParentElement.testIds['toggle-child']);

        await waitUntil.strictEquals(cleanupCountBefore + 1, () => cleanupSink.count);
    });
});
