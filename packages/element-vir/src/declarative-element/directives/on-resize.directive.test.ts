import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {awaitedForEach, type MaybePromise} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {defineElementEvent} from '../properties/element-events.js';
import {listen} from './listen.directive.js';
import {attachOnResize, onResize, type OnResizeCallback} from './on-resize.directive.js';
import {renderIf} from './render-if.directive.js';

type ObserverRecord = {
    observed: Element[];
    unobserved: Element[];
    disconnectCount: number;
};

function countCalls(record: ObserverRecord) {
    return {
        observed: record.observed.length,
        unobserved: record.unobserved.length,
        disconnectCount: record.disconnectCount,
    };
}

function stubResizeObserver() {
    const originalResizeObserver = globalThis.ResizeObserver;
    const records: ObserverRecord[] = [];

    globalThis.ResizeObserver = class {
        protected readonly record: ObserverRecord = {
            observed: [],
            unobserved: [],
            disconnectCount: 0,
        };

        constructor() {
            records.push(this.record);
        }

        public observe(element: Element) {
            this.record.observed.push(element);
        }

        public unobserve(element: Element) {
            this.record.unobserved.push(element);
        }

        public disconnect() {
            this.record.disconnectCount++;
        }
    };

    return {
        records,
        restore() {
            globalThis.ResizeObserver = originalResizeObserver;
        },
    };
}

describe('onResize', () => {
    const TestOnResizeElement = defineElement<{width: number}>()({
        tagName: 'test-on-resize-element',
        events: {
            sized: defineElementEvent<Parameters<OnResizeCallback>>(),
        },
        render({inputs, events, dispatch}) {
            return html`
                <div
                    style="width: ${inputs.width}px; height: 40px;"
                    ${onResize((size, element) => {
                        dispatch(
                            new events.sized({
                                detail: [
                                    size,
                                    element,
                                ],
                            }),
                        );
                    })}
                >
                    target
                </div>
            `;
        },
    });

    it('fires the callback on initial layout', async () => {
        const observations: Parameters<OnResizeCallback>[] = [];
        const rendered = await testWeb.render(html`
            <${TestOnResizeElement.assign({
                width: 200,
            })}
                ${listen(TestOnResizeElement.events.sized, (event) => {
                    observations.push(event.detail);
                })}
            ></${TestOnResizeElement}>
        `);
        assert.instanceOf(rendered, TestOnResizeElement);

        await waitUntil.isTruthy(() => observations.length > 0);
        const firstObservation = observations[0];
        assert.isDefined(firstObservation);
        const [
            firstSize,
            firstElement,
        ] = firstObservation;
        assert.strictEquals(Math.round(firstSize.contentRect.width), 200);
        assert.instanceOf(firstElement, HTMLDivElement);
    });

    it('fires again when the element resizes', async () => {
        const observations: Parameters<OnResizeCallback>[] = [];
        const rendered = await testWeb.render(html`
            <${TestOnResizeElement.assign({
                width: 200,
            })}
                ${listen(TestOnResizeElement.events.sized, (event) => {
                    observations.push(event.detail);
                })}
            ></${TestOnResizeElement}>
        `);
        assert.instanceOf(rendered, TestOnResizeElement);

        await waitUntil.isTruthy(() => observations.length > 0);
        const initialCount = observations.length;

        rendered.assignInputs({
            width: 350,
        });

        await waitUntil.isTruthy(() => {
            return observations.some(([size]) => Math.round(size.contentRect.width) === 350);
        });
        assert.isAbove(observations.length, initialCount);
    });

    it('has the expected callback type', () => {
        assert.tsType<Parameters<OnResizeCallback>>().equals<
            [
                Readonly<Pick<ResizeObserverEntry, 'target' | 'contentRect'>>,
                Element,
            ]
        >();
        assert.tsType<ReturnType<OnResizeCallback>>().equals<MaybePromise<void>>();
    });

    it('throws when attached in a child position', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div>${onResize(() => {})}</div>
                `);
            },
            {
                matchMessage: 'onResize directive can only be attached directly to an element',
            },
        );
    });

    it('passes only the target and contentRect through to the callback', async () => {
        const observations: Parameters<OnResizeCallback>[] = [];
        const rendered = await testWeb.render(html`
            <${TestOnResizeElement.assign({
                width: 120,
            })}
                ${listen(TestOnResizeElement.events.sized, (event) => {
                    observations.push(event.detail);
                })}
            ></${TestOnResizeElement}>
        `);
        assert.instanceOf(rendered, TestOnResizeElement);

        await waitUntil.isTruthy(() => observations.length > 0);
        const observation = observations[0];
        assert.isDefined(observation);
        const [
            size,
            element,
        ] = observation;

        /** The `size` object is a new object with only these two keys, not the full entry. */
        assert.deepEquals(Object.keys(size), [
            'target',
            'contentRect',
        ]);
        assert.strictEquals(size.target, element);
        assert.strictEquals(
            element,
            assertWrap.isDefined(rendered.shadowRoot.querySelector('div')),
        );
    });

    const TestReRenderElement = defineElement<{width: number; label: string}>()({
        tagName: 'test-on-resize-re-render-element',
        events: {
            sizedWithLabel: defineElementEvent<{label: string; width: number}>(),
        },
        render({inputs, events, dispatch}) {
            return html`
                <div
                    style="width: ${inputs.width}px; height: 40px;"
                    ${onResize((size) => {
                        dispatch(
                            new events.sizedWithLabel({
                                detail: {
                                    label: inputs.label,
                                    width: Math.round(size.contentRect.width),
                                },
                            }),
                        );
                    })}
                >
                    ${inputs.label}
                </div>
            `;
        },
    });

    async function setupReRenderTest() {
        const observations: {label: string; width: number}[] = [];
        const rendered = await testWeb.render(html`
            <${TestReRenderElement.assign({
                width: 200,
                label: 'first',
            })}
                ${listen(TestReRenderElement.events.sizedWithLabel, (event) => {
                    observations.push(event.detail);
                })}
            ></${TestReRenderElement}>
        `);
        assert.instanceOf(rendered, TestReRenderElement);
        await waitUntil.isLengthAtLeast(1, () => observations);
        await waitForAnimationFrame(10);

        return {
            observations,
            rendered,
            settledCount: observations.length,
        };
    }

    it('does not re-observe on re-renders that do not change the size', async () => {
        const {observations, rendered, settledCount} = await setupReRenderTest();

        await awaitedForEach(
            [
                'second',
                'third',
                'fourth',
            ],
            async (label) => {
                rendered.assignInputs({
                    width: 200,
                    label,
                });
                await waitUntil.isTruthy(() => {
                    return rendered.shadowRoot.textContent.includes(label);
                });
            },
        );

        await waitForAnimationFrame(10);
        assert.isLengthExactly(observations, settledCount);
    });

    it('uses the latest callback after a re-render', async () => {
        const {observations, rendered} = await setupReRenderTest();

        rendered.assignInputs({
            width: 200,
            label: 'latest',
        });
        await waitUntil.isTruthy(() => rendered.shadowRoot.textContent.includes('latest'));

        rendered.assignInputs({
            width: 275,
            label: 'latest',
        });

        await waitUntil.deepEquals(
            {
                label: 'latest',
                width: 275,
            },
            () => observations.at(-1),
        );
    });

    it('stops observing on disconnect and resumes on reconnect', async () => {
        const {observations, rendered, settledCount} = await setupReRenderTest();

        const parent = rendered.parentNode;
        assert.isTruthy(parent);
        rendered.remove();
        await waitForAnimationFrame(10);

        rendered.assignInputs({
            width: 310,
            label: 'reconnected',
        });
        await waitForAnimationFrame(10);
        assert.isLengthExactly(observations, settledCount);

        parent.append(rendered);

        await waitUntil.deepEquals(
            {
                label: 'reconnected',
                width: 310,
            },
            () => observations.at(-1),
        );
    });

    it('fires exactly once for a single size change', async () => {
        const {observations, rendered, settledCount} = await setupReRenderTest();

        rendered.assignInputs({
            width: 260,
            label: 'first',
        });

        await waitUntil.isTruthy(() => observations.some(({width}) => width === 260));
        await waitForAnimationFrame(10);
        assert.isLengthExactly(observations, settledCount + 1);
    });

    it('observes the element once and never calls unobserve', async () => {
        const stub = stubResizeObserver();

        try {
            const rendered = await testWeb.render(html`
                <${TestReRenderElement.assign({
                    width: 200,
                    label: 'first',
                })}></${TestReRenderElement}>
            `);
            assert.instanceOf(rendered, TestReRenderElement);
            const parent = assertWrap.isTruthy(rendered.parentNode);
            const target = assertWrap.isDefined(rendered.shadowRoot.querySelector('div'));

            assert.isLengthExactly([...stub.records], 1);
            const record = assertWrap.isDefined(stub.records[0]);
            assert.deepEquals(countCalls(record), {
                observed: 1,
                unobserved: 0,
                disconnectCount: 0,
            });
            assert.strictEquals(assertWrap.isDefined(record.observed[0]), target);

            await awaitedForEach(
                [
                    'second',
                    'third',
                ],
                async (label) => {
                    rendered.assignInputs({
                        width: 200 + label.length,
                        label,
                    });
                    await waitUntil.isTruthy(() => rendered.shadowRoot.textContent.includes(label));
                },
            );
            assert.deepEquals(countCalls(record), {
                observed: 1,
                unobserved: 0,
                disconnectCount: 0,
            });

            rendered.remove();
            await waitForAnimationFrame(2);
            assert.deepEquals(countCalls(record), {
                observed: 1,
                unobserved: 0,
                disconnectCount: 1,
            });

            parent.append(rendered);
            await waitForAnimationFrame(2);
            assert.deepEquals(countCalls(record), {
                observed: 2,
                unobserved: 0,
                disconnectCount: 1,
            });
            assert.isTrue(record.observed.every((element) => element === target));
            assert.isLengthExactly([...stub.records], 1);
        } finally {
            stub.restore();
        }
    });

    const TestSwapElement = defineElement<{useSpan: boolean}>()({
        tagName: 'test-on-resize-swap-element',
        events: {
            resized: defineElementEvent<Element>(),
        },
        render({inputs, events, dispatch}) {
            return html`
                ${renderIf(
                    inputs.useSpan,
                    html`
                        <span
                            style="display: block; width: 100px; height: 20px;"
                            ${onResize((size) => {
                                dispatch(
                                    new events.resized({
                                        detail: size.target,
                                    }),
                                );
                            })}
                        >
                            span
                        </span>
                    `,
                    html`
                        <div
                            style="width: 100px; height: 20px;"
                            ${onResize((size) => {
                                dispatch(
                                    new events.resized({
                                        detail: size.target,
                                    }),
                                );
                            })}
                        >
                            div
                        </div>
                    `,
                )}
            `;
        },
    });

    it('observes the replacement element and abandons the replaced one', async () => {
        const targets: Element[] = [];
        const rendered = await testWeb.render(html`
            <${TestSwapElement.assign({
                useSpan: false,
            })}
                ${listen(TestSwapElement.events.resized, (event) => {
                    targets.push(event.detail);
                })}
            ></${TestSwapElement}>
        `);
        assert.instanceOf(rendered, TestSwapElement);

        await waitUntil.isTruthy(() => targets.some((target) => target instanceof HTMLDivElement));
        const oldTarget = assertWrap.isDefined(rendered.shadowRoot.querySelector('div'));

        rendered.assignInputs({
            useSpan: true,
        });
        await waitUntil.isTruthy(() => targets.some((target) => target instanceof HTMLSpanElement));
        await waitForAnimationFrame(10);
        const settledCount = targets.length;

        document.body.append(oldTarget);
        oldTarget.style.width = '300px';
        await waitForAnimationFrame(10);
        oldTarget.remove();

        assert.isLengthExactly(targets, settledCount);
    });
});

describe(attachOnResize.name, () => {
    it('observes the given element and fires the callback when it resizes', async () => {
        const target = document.createElement('div');
        target.style.cssText = 'width: 100px; height: 20px;';
        document.body.append(target);

        const observations: number[] = [];
        const handle = attachOnResize(target, (size) => {
            observations.push(Math.round(size.contentRect.width));
        });

        try {
            await waitUntil.isTruthy(() => observations.length > 0);
            assert.strictEquals(observations.at(-1), 100);

            target.style.width = '250px';
            await waitUntil.isTruthy(() => observations.includes(250));
        } finally {
            handle.resizeObserver.disconnect();
            target.remove();
        }
    });

    it('returns the observed element and a real ResizeObserver', () => {
        const target = document.createElement('div');
        const handle = attachOnResize(target, () => {});

        try {
            assert.strictEquals(handle.element, target);
            assert.instanceOf(handle.resizeObserver, ResizeObserver);
        } finally {
            handle.resizeObserver.disconnect();
        }
    });

    it('passes the observed element as both the size target and the element', async () => {
        const target = document.createElement('div');
        target.style.cssText = 'width: 100px; height: 20px;';
        document.body.append(target);

        const observations: Parameters<OnResizeCallback>[] = [];
        const handle = attachOnResize(target, (size, element) => {
            observations.push([
                size,
                element,
            ]);
        });

        try {
            await waitUntil.isLengthAtLeast(1, () => observations);
            const observation = observations[0];
            assert.isDefined(observation);
            assert.strictEquals(observation[0].target, target);
            assert.strictEquals(observation[1], target);
            assert.deepEquals(Object.keys(observation[0]), [
                'target',
                'contentRect',
            ]);
        } finally {
            handle.resizeObserver.disconnect();
            target.remove();
        }
    });

    it('stops firing after the returned observer is disconnected', async () => {
        const target = document.createElement('div');
        target.style.cssText = 'width: 100px; height: 20px;';
        document.body.append(target);

        const observations: number[] = [];
        const handle = attachOnResize(target, (size) => {
            observations.push(Math.round(size.contentRect.width));
        });

        try {
            await waitUntil.isLengthAtLeast(1, () => observations);
            await waitForAnimationFrame(10);
            handle.resizeObserver.disconnect();
            const settledCount = observations.length;

            target.style.width = '275px';
            await waitForAnimationFrame(10);
            assert.isLengthExactly(observations, settledCount);
        } finally {
            target.remove();
        }
    });

    it('throws when a resize observation has no entries', () => {
        const originalResizeObserver = globalThis.ResizeObserver;
        const capturedCallbacks: ResizeObserverCallback[] = [];

        globalThis.ResizeObserver = class {
            constructor(callback: ResizeObserverCallback) {
                capturedCallbacks.push(callback);
            }

            public observe() {}
            public unobserve() {}
            public disconnect() {}
        };

        try {
            const handle = attachOnResize(document.createElement('div'), () => {});
            const [capturedCallback] = capturedCallbacks;
            assert.isDefined(capturedCallback);

            assert.throws(() => capturedCallback([], handle.resizeObserver), {
                matchMessage: 'Resize observation triggered but the first entry was empty.',
            });
        } finally {
            globalThis.ResizeObserver = originalResizeObserver;
        }
    });
});
