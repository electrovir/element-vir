import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {type MaybePromise} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {defineElementEvent} from '../properties/element-events.js';
import {listen} from './listen.directive.js';
import {
    onIntersect,
    type OnIntersectCallback,
    type OnIntersectOptions,
} from './on-intersect.directive.js';
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

function stubIntersectionObserver() {
    const originalIntersectionObserver = globalThis.IntersectionObserver;
    const records: ObserverRecord[] = [];

    globalThis.IntersectionObserver = class {
        public readonly root = null;
        public readonly rootMargin = '';
        public readonly scrollMargin = '';
        public readonly thresholds: readonly number[] = [];

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

        public takeRecords(): IntersectionObserverEntry[] {
            return [];
        }
    };

    return {
        records,
        restore() {
            globalThis.IntersectionObserver = originalIntersectionObserver;
        },
    };
}

describe('onIntersect', () => {
    const TestOnIntersectElement = defineElement()({
        tagName: 'test-on-intersect-element',
        events: {
            intersectionChanged: defineElementEvent<boolean>(),
        },
        render({events, dispatch}) {
            return html`
                <div
                    style="height: 50px; width: 50px;"
                    ${onIntersect(
                        {
                            threshold: 0,
                        },
                        ({entry}) => {
                            dispatch(
                                new events.intersectionChanged({
                                    detail: entry.isIntersecting,
                                }),
                            );
                        },
                    )}
                >
                    target
                </div>
            `;
        },
    });

    it('fires on initial layout with the intersection state', async () => {
        const observations: boolean[] = [];
        const rendered = await testWeb.render(html`
            <${TestOnIntersectElement}
                ${listen(TestOnIntersectElement.events.intersectionChanged, (event) => {
                    observations.push(event.detail);
                })}
            ></${TestOnIntersectElement}>
        `);
        assert.instanceOf(rendered, TestOnIntersectElement);

        /** Just verify the IntersectionObserver fired the callback at least once. */
        await waitUntil.isTruthy(() => observations.length > 0);
        assert.isAbove(observations.length, 0);
    });

    it('has the expected types', () => {
        assert.tsType<OnIntersectOptions>().equals<IntersectionObserverInit>();
        assert.tsType<Parameters<OnIntersectCallback>>().equals<
            [
                {
                    entry: IntersectionObserverEntry;
                    allEntries: IntersectionObserverEntry[];
                    observer: IntersectionObserver;
                    element: Element;
                },
            ]
        >();
        assert.tsType<ReturnType<OnIntersectCallback>>().equals<MaybePromise<void>>();
    });

    it('throws when attached in a child position', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div>${onIntersect({}, () => {})}</div>
                `);
            },
            {
                matchMessage: 'onIntersect directive can only be attached directly to an element',
            },
        );
    });

    type IntersectParams = Parameters<OnIntersectCallback>[0];

    const TestOptionsElement = defineElement<{
        options: OnIntersectOptions;
        label: string;
        hide: boolean;
    }>()({
        tagName: 'test-on-intersect-options-element',
        events: {
            intersected: defineElementEvent<IntersectParams>(),
        },
        render({inputs, events, dispatch}) {
            return html`
                <div
                    style="height: 50px; width: 50px; display: ${inputs.hide ? 'none' : 'block'};"
                    ${onIntersect(inputs.options, (params) => {
                        dispatch(
                            new events.intersected({
                                detail: params,
                            }),
                        );
                    })}
                >
                    ${inputs.label}
                </div>
            `;
        },
    });

    async function setupOptionsTest(options: OnIntersectOptions) {
        const observations: IntersectParams[] = [];
        const rendered = await testWeb.render(html`
            <${TestOptionsElement.assign({
                options,
                label: 'first',
                hide: false,
            })}
                ${listen(TestOptionsElement.events.intersected, (event) => {
                    observations.push(event.detail);
                })}
            ></${TestOptionsElement}>
        `);
        assert.instanceOf(rendered, TestOptionsElement);
        await waitUntil.isLengthAtLeast(1, () => observations);
        await waitForAnimationFrame(10);

        return {
            observations,
            rendered,
            firstObservation: assertWrap.isDefined(observations[0]),
        };
    }

    it('passes the entry, all entries, observer, and element to the callback', async () => {
        const {rendered, firstObservation} = await setupOptionsTest({
            threshold: 0,
        });

        assert.instanceOf(firstObservation.observer, IntersectionObserver);
        assert.strictEquals(
            firstObservation.element,
            assertWrap.isDefined(rendered.shadowRoot.querySelector('div')),
        );
        assert.strictEquals(firstObservation.entry.target, firstObservation.element);
        assert.isLengthAtLeast(firstObservation.allEntries, 1);
        assert.strictEquals(firstObservation.entry, firstObservation.allEntries[0]);
        assert.isTrue(firstObservation.entry.isIntersecting);
    });

    it('passes the given options through to the IntersectionObserver', async () => {
        const {firstObservation} = await setupOptionsTest({
            threshold: 0.5,
            rootMargin: '5px',
            root: document.documentElement,
        });

        assert.deepEquals([...firstObservation.observer.thresholds], [0.5]);
        assert.strictEquals(firstObservation.observer.root, document.documentElement);
        assert.isTrue(firstObservation.observer.rootMargin.startsWith('5px'));
    });

    it('reuses the same observer when new options have equal entries', async () => {
        const {observations, rendered, firstObservation} = await setupOptionsTest({
            threshold: 0,
        });
        const settledCount = observations.length;

        /** A new options object with identical entries should not trigger a new observation. */
        rendered.assignInputs({
            options: {
                threshold: 0,
            },
            label: 'second',
            hide: false,
        });
        await waitUntil.isTruthy(() => rendered.shadowRoot.textContent.includes('second'));
        await waitForAnimationFrame(10);
        assert.isLengthExactly(observations, settledCount);

        /** Force an intersection change to prove the original observer is still observing. */
        rendered.assignInputs({
            options: {
                threshold: 0,
            },
            label: 'second',
            hide: true,
        });
        await waitUntil.isTruthy(() => observations.length > settledCount);

        const latest = assertWrap.isDefined(observations.at(-1));
        assert.strictEquals(latest.observer, firstObservation.observer);
        assert.isFalse(latest.entry.isIntersecting);
    });

    it('creates a new observer and drops the old one when the options change', async () => {
        const {observations, rendered, firstObservation} = await setupOptionsTest({
            threshold: 0,
        });

        rendered.assignInputs({
            options: {
                threshold: 0.75,
            },
            label: 'changed',
            hide: false,
        });

        await waitUntil.isTruthy(() => {
            return observations.some(({observer}) => observer !== firstObservation.observer);
        });

        const afterChange = assertWrap.isDefined(observations.at(-1));
        assert.notStrictEquals(afterChange.observer, firstObservation.observer);
        assert.deepEquals([...afterChange.observer.thresholds], [0.75]);

        /** All later observations should come from the new observer only. */
        const countAfterChange = observations.length;
        rendered.assignInputs({
            options: {
                threshold: 0.75,
            },
            label: 'changed',
            hide: true,
        });
        await waitUntil.isTruthy(() => observations.length > countAfterChange);
        assert.isTrue(
            observations
                .slice(countAfterChange)
                .every(({observer}) => observer === afterChange.observer),
        );
    });

    it('stops observing on disconnect and re-observes on reconnect', async () => {
        const {observations, rendered} = await setupOptionsTest({
            threshold: 0,
        });

        const parent = rendered.parentNode;
        assert.isTruthy(parent);
        rendered.remove();
        await waitForAnimationFrame(10);
        const settledCount = observations.length;

        rendered.assignInputs({
            options: {
                threshold: 0,
            },
            label: 'detached',
            hide: true,
        });
        await waitForAnimationFrame(10);
        assert.isLengthExactly(observations, settledCount);

        parent.append(rendered);
        await waitUntil.isTruthy(() => observations.length > settledCount);
        assert.isFalse(assertWrap.isDefined(observations.at(-1)).entry.isIntersecting);

        rendered.assignInputs({
            options: {
                threshold: 0,
            },
            label: 'detached',
            hide: false,
        });
        await waitUntil.isTruthy(() => {
            return assertWrap.isDefined(observations.at(-1)).entry.isIntersecting;
        });
    });

    it('observes the element once and never calls unobserve', async () => {
        const stub = stubIntersectionObserver();

        try {
            const rendered = await testWeb.render(html`
                <${TestOptionsElement.assign({
                    options: {
                        threshold: 0,
                    },
                    label: 'first',
                    hide: false,
                })}></${TestOptionsElement}>
            `);
            assert.instanceOf(rendered, TestOptionsElement);
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

            rendered.assignInputs({
                options: {
                    threshold: 0,
                },
                label: 'second',
                hide: false,
            });
            await waitUntil.isTruthy(() => rendered.shadowRoot.textContent.includes('second'));
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

    it('disconnects the previous observer instead of unobserving when options change', async () => {
        const stub = stubIntersectionObserver();

        try {
            const rendered = await testWeb.render(html`
                <${TestOptionsElement.assign({
                    options: {
                        threshold: 0,
                    },
                    label: 'first',
                    hide: false,
                })}></${TestOptionsElement}>
            `);
            assert.instanceOf(rendered, TestOptionsElement);
            const target = assertWrap.isDefined(rendered.shadowRoot.querySelector('div'));

            rendered.assignInputs({
                options: {
                    threshold: 0.75,
                },
                label: 'changed',
                hide: false,
            });
            await waitUntil.isLengthAtLeast(2, () => stub.records);
            await waitForAnimationFrame(2);

            assert.isLengthExactly([...stub.records], 2);
            const firstRecord = assertWrap.isDefined(stub.records[0]);
            const secondRecord = assertWrap.isDefined(stub.records[1]);

            assert.deepEquals(countCalls(firstRecord), {
                observed: 1,
                unobserved: 0,
                disconnectCount: 1,
            });
            assert.deepEquals(countCalls(secondRecord), {
                observed: 1,
                unobserved: 0,
                disconnectCount: 0,
            });
            assert.strictEquals(assertWrap.isDefined(secondRecord.observed[0]), target);
        } finally {
            stub.restore();
        }
    });

    const TestSwapElement = defineElement<{useSpan: boolean}>()({
        tagName: 'test-on-intersect-swap-element',
        events: {
            intersected: defineElementEvent<Element>(),
        },
        render({inputs, events, dispatch}) {
            return html`
                ${renderIf(
                    inputs.useSpan,
                    html`
                        <span
                            style="display: block; height: 50px; width: 50px;"
                            ${onIntersect(
                                {
                                    threshold: 0,
                                },
                                ({entry}) => {
                                    dispatch(
                                        new events.intersected({
                                            detail: entry.target,
                                        }),
                                    );
                                },
                            )}
                        >
                            span
                        </span>
                    `,
                    html`
                        <div
                            style="height: 50px; width: 50px;"
                            ${onIntersect(
                                {
                                    threshold: 0,
                                },
                                ({entry}) => {
                                    dispatch(
                                        new events.intersected({
                                            detail: entry.target,
                                        }),
                                    );
                                },
                            )}
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
                ${listen(TestSwapElement.events.intersected, (event) => {
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
        await waitForAnimationFrame(10);
        oldTarget.style.display = 'none';
        await waitForAnimationFrame(10);
        oldTarget.remove();

        assert.isLengthExactly(targets, settledCount);
    });

    it('throws when an intersection observation has no entries', async () => {
        const originalIntersectionObserver = globalThis.IntersectionObserver;
        const capturedCallbacks: IntersectionObserverCallback[] = [];
        const capturedObservers: IntersectionObserver[] = [];

        globalThis.IntersectionObserver = class {
            public readonly root = null;
            public readonly rootMargin = '';
            public readonly scrollMargin = '';
            public readonly thresholds: readonly number[] = [];

            constructor(callback: IntersectionObserverCallback) {
                capturedCallbacks.push(callback);
                capturedObservers.push(this);
            }

            public observe() {}
            public unobserve() {}
            public disconnect() {}
            public takeRecords(): IntersectionObserverEntry[] {
                return [];
            }
        };

        try {
            await testWeb.render(html`
                <${TestOptionsElement.assign({
                    options: {},
                    label: 'stubbed',
                    hide: false,
                })}></${TestOptionsElement}>
            `);

            const [capturedCallback] = capturedCallbacks;
            const [capturedObserver] = capturedObservers;
            assert.isDefined(capturedCallback);
            assert.isDefined(capturedObserver);

            assert.throws(() => capturedCallback([], capturedObserver), {
                matchMessage: "Length '0' is not at least '1'.",
            });
        } finally {
            globalThis.IntersectionObserver = originalIntersectionObserver;
        }
    });
});
