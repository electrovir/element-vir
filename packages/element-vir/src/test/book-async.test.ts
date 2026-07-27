import {assert, assertWrap, check, waitUntil} from '@augment-vir/assert';
import {collapseWhiteSpace, wait} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow} from '@augment-vir/web';
import {defineElement} from '../declarative-element/define-element.js';
import {asyncProp} from '../declarative-element/directives/async-prop.js';
import {listen} from '../declarative-element/directives/listen.directive.js';
import {renderAsync} from '../declarative-element/directives/render-async.directive.js';
import {testId, testIdSelector} from '../declarative-element/directives/test-id.directive.js';
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

describe('async prop book', () => {
    const AsyncPropElement = defineElement()({
        tagName: 'async-prop-element',
        state() {
            return {
                data: asyncProp<string, {value: string}>({
                    async updateCallback({value}) {
                        await wait({
                            milliseconds: 100,
                        });
                        return `resolved: ${value}`;
                    },
                }),
            };
        },
        testIds: [
            'report',
            'trigger-1',
            'trigger-2',
        ],
        render({state, testIds}) {
            return html`
                <button
                    ${testId(testIds['trigger-1'])}
                    ${listen('click', () => {
                        state.data.update({
                            value: 'one',
                        });
                    })}
                >
                    load one
                </button>
                <button
                    ${testId(testIds['trigger-2'])}
                    ${listen('click', () => {
                        state.data.update({
                            value: 'two',
                        });
                    })}
                >
                    load two
                </button>
                <span ${testId(testIds.report)}>${renderAsync(state.data, 'loading...')}</span>
            `;
        },
    });

    it('renders the fallback until each update resolves', async () => {
        const fixture = await testWeb.render(html`
            <${AsyncPropElement}></${AsyncPropElement}>
        `);
        assert.instanceOf(fixture, AsyncPropElement);

        assert.strictEquals(readTestIdText(fixture, AsyncPropElement.testIds.report), 'loading...');

        await clickTestId(fixture, AsyncPropElement.testIds['trigger-1']);
        await waitUntil.strictEquals('resolved: one', () => {
            return readTestIdText(fixture, AsyncPropElement.testIds.report);
        });

        await clickTestId(fixture, AsyncPropElement.testIds['trigger-2']);
        await waitUntil.strictEquals('resolved: two', () => {
            return readTestIdText(fixture, AsyncPropElement.testIds.report);
        });
    });
});

describe('async prop force update book', () => {
    const callCounts = {
        count: 0,
    };

    const ForceUpdateElement = defineElement()({
        tagName: 'async-prop-force-update-element',
        state() {
            return {
                data: asyncProp<number, {value: number}>({
                    updateCallback({value}) {
                        callCounts.count += 1;
                        return Promise.resolve(value + callCounts.count * 1000);
                    },
                }),
            };
        },
        testIds: [
            'report',
            'update',
            'force',
        ],
        render({state, testIds}) {
            return html`
                <button
                    ${testId(testIds.update)}
                    ${listen('click', () => {
                        state.data.update({
                            value: 1,
                        });
                    })}
                >
                    update(1)
                </button>
                <button
                    ${testId(testIds.force)}
                    ${listen('click', () => {
                        state.data.forceUpdate();
                    })}
                >
                    force update
                </button>
                <span ${testId(testIds.report)}>${renderAsync(state.data, 'loading')}</span>
            `;
        },
    });

    async function renderForceUpdate() {
        const fixture = await testWeb.render(html`
            <${ForceUpdateElement}></${ForceUpdateElement}>
        `);
        assert.instanceOf(fixture, ForceUpdateElement);
        return fixture;
    }

    it('treats an update with identical params as a no-op', async () => {
        const fixture = await renderForceUpdate();

        await clickTestId(fixture, ForceUpdateElement.testIds.update);
        await waitUntil.isTrue(() => {
            return readTestIdText(fixture, ForceUpdateElement.testIds.report) !== 'loading';
        });
        const firstResult = readTestIdText(fixture, ForceUpdateElement.testIds.report);

        await clickTestId(fixture, ForceUpdateElement.testIds.update);
        await fixture.updateComplete;

        assert.strictEquals(
            readTestIdText(fixture, ForceUpdateElement.testIds.report),
            firstResult,
        );
    });

    it('re-runs the callback on forceUpdate even with the same params', async () => {
        const fixture = await renderForceUpdate();

        await clickTestId(fixture, ForceUpdateElement.testIds.update);
        await waitUntil.isTrue(() => {
            return readTestIdText(fixture, ForceUpdateElement.testIds.report) !== 'loading';
        });
        const beforeForce = readTestIdText(fixture, ForceUpdateElement.testIds.report);

        await clickTestId(fixture, ForceUpdateElement.testIds.force);

        await waitUntil.isTrue(() => {
            const current = readTestIdText(fixture, ForceUpdateElement.testIds.report);
            return current !== beforeForce && current !== 'loading';
        });
    });
});

describe('async prop set params book', () => {
    const callCounts = {
        count: 0,
    };

    const SetParamsElement = defineElement()({
        tagName: 'async-prop-set-params-element',
        state() {
            return {
                data: asyncProp<string, {value: string}>({
                    defaultValue: 'initial value',
                    defaultParams: {
                        value: 'initial',
                    },
                    updateCallback({value}) {
                        callCounts.count += 1;
                        return Promise.resolve(`${value} (call ${callCounts.count})`);
                    },
                }),
            };
        },
        testIds: [
            'report',
            'set-params',
            'force',
        ],
        render({state, testIds}) {
            return html`
                <button
                    ${testId(testIds['set-params'])}
                    ${listen('click', () => {
                        state.data.setParams({
                            value: 'updated',
                        });
                    })}
                >
                    set params
                </button>
                <button
                    ${testId(testIds.force)}
                    ${listen('click', () => {
                        state.data.forceUpdate();
                    })}
                >
                    force update
                </button>
                <span ${testId(testIds.report)}>${renderAsync(state.data, 'loading')}</span>
            `;
        },
    });

    it('sets params without running the update callback', async () => {
        const fixture = await testWeb.render(html`
            <${SetParamsElement}></${SetParamsElement}>
        `);
        assert.instanceOf(fixture, SetParamsElement);

        assert.strictEquals(
            readTestIdText(fixture, SetParamsElement.testIds.report),
            'initial value',
        );

        await clickTestId(fixture, SetParamsElement.testIds['set-params']);
        await fixture.updateComplete;

        assert.strictEquals(
            readTestIdText(fixture, SetParamsElement.testIds.report),
            'initial value',
            'setParams must not trigger the update callback',
        );

        await clickTestId(fixture, SetParamsElement.testIds.force);

        /** `forceUpdate` runs the callback with the most recently set params. */
        await waitUntil.isTrue(() => {
            return readTestIdText(fixture, SetParamsElement.testIds.report).includes('updated');
        });
    });
});

describe('async prop equality check book', () => {
    const counters = {
        callCount: 0,
        nonce: 0,
    };

    const EqualityCheckElement = defineElement()({
        tagName: 'async-prop-equality-check-element',
        state() {
            return {
                data: asyncProp<string, {key: string; nonce: number}>({
                    equalityCheck: (first, second) => {
                        if (check.hasKey(first, 'key') && check.hasKey(second, 'key')) {
                            return first.key === second.key;
                        }
                        return false;
                    },
                    updateCallback({key}) {
                        counters.callCount += 1;
                        return Promise.resolve(`${key}#${counters.callCount}`);
                    },
                }),
            };
        },
        testIds: [
            'report',
            'same',
            'different',
        ],
        render({state, testIds}) {
            return html`
                <button
                    ${testId(testIds.same)}
                    ${listen('click', () => {
                        counters.nonce += 1;
                        state.data.update({
                            key: 'same-key',
                            nonce: counters.nonce,
                        });
                    })}
                >
                    update same key
                </button>
                <button
                    ${testId(testIds.different)}
                    ${listen('click', () => {
                        counters.nonce += 1;
                        state.data.update({
                            key: 'other-key',
                            nonce: counters.nonce,
                        });
                    })}
                >
                    update different key
                </button>
                <span ${testId(testIds.report)}>${renderAsync(state.data, 'loading')}</span>
            `;
        },
    });

    it('treats params with matching keys as equal', async () => {
        const fixture = await testWeb.render(html`
            <${EqualityCheckElement}></${EqualityCheckElement}>
        `);
        assert.instanceOf(fixture, EqualityCheckElement);

        await clickTestId(fixture, EqualityCheckElement.testIds.same);
        await waitUntil.isTrue(() => {
            return readTestIdText(fixture, EqualityCheckElement.testIds.report).includes(
                'same-key',
            );
        });
        const firstResult = readTestIdText(fixture, EqualityCheckElement.testIds.report);

        /** Same key with a different nonce is equal, so no update runs. */
        await clickTestId(fixture, EqualityCheckElement.testIds.same);
        await fixture.updateComplete;
        assert.strictEquals(
            readTestIdText(fixture, EqualityCheckElement.testIds.report),
            firstResult,
        );

        /** A different key is not equal, so the update runs. */
        await clickTestId(fixture, EqualityCheckElement.testIds.different);
        await waitUntil.isTrue(() => {
            return readTestIdText(fixture, EqualityCheckElement.testIds.report).includes(
                'other-key',
            );
        });
    });
});

describe('render async error book', () => {
    const RenderAsyncErrorElement = defineElement()({
        tagName: 'render-async-error-element',
        state() {
            return {
                data: asyncProp<string, {kind: 'ok' | 'fail'}>({
                    updateCallback({kind}) {
                        if (kind === 'fail') {
                            return Promise.reject(new Error('boom'));
                        }
                        return Promise.resolve('resolved');
                    },
                }),
            };
        },
        testIds: [
            'report',
            'success',
            'fail',
        ],
        render({state, testIds}) {
            return html`
                <button
                    ${testId(testIds.success)}
                    ${listen('click', () => {
                        state.data.update({
                            kind: 'ok',
                        });
                    })}
                >
                    load ok
                </button>
                <button
                    ${testId(testIds.fail)}
                    ${listen('click', () => {
                        state.data.update({
                            kind: 'fail',
                        });
                    })}
                >
                    load fail
                </button>
                <span ${testId(testIds.report)}>
                    ${renderAsync(
                        state.data,
                        'loading...',
                        (resolved) => `resolved: ${resolved}`,
                        (error) => `error: ${error.message}`,
                    )}
                </span>
            `;
        },
    });

    async function renderAsyncError() {
        const fixture = await testWeb.render(html`
            <${RenderAsyncErrorElement}></${RenderAsyncErrorElement}>
        `);
        assert.instanceOf(fixture, RenderAsyncErrorElement);
        return fixture;
    }

    it('runs the resolution render on success', async () => {
        const fixture = await renderAsyncError();

        await clickTestId(fixture, RenderAsyncErrorElement.testIds.success);

        await waitUntil.strictEquals('resolved: resolved', () => {
            return readTestIdText(fixture, RenderAsyncErrorElement.testIds.report);
        });
    });

    it('runs the error render on rejection', async () => {
        const fixture = await renderAsyncError();

        await clickTestId(fixture, RenderAsyncErrorElement.testIds.fail);

        await waitUntil.strictEquals('error: boom', () => {
            return readTestIdText(fixture, RenderAsyncErrorElement.testIds.report);
        });
    });
});

describe('render async last resolved book', () => {
    /**
     * The update is resolved by the test rather than by a timer so that the pending state is
     * observable no matter how loaded the machine is.
     */
    const pendingUpdate: {resolve: (() => void) | undefined} = {
        resolve: undefined,
    };

    const LastResolvedElement = defineElement()({
        tagName: 'render-async-last-resolved-element',
        state() {
            return {
                data: asyncProp<string, {value: string}>({
                    defaultValue: 'first',
                    updateCallback({value}) {
                        return new Promise<string>((resolve) => {
                            pendingUpdate.resolve = () => resolve(`resolved: ${value}`);
                        });
                    },
                }),
            };
        },
        testIds: [
            'fallback',
            'last',
            'trigger',
        ],
        render({state, testIds}) {
            return html`
                <button
                    ${testId(testIds.trigger)}
                    ${listen('click', () => {
                        state.data.update({
                            value: 'second',
                        });
                    })}
                >
                    trigger
                </button>
                <span ${testId(testIds.fallback)}>${renderAsync(state.data, 'loading')}</span>
                <span ${testId(testIds.last)}>
                    ${renderAsync(state.data, 'loading', undefined, undefined, {
                        useLastResolvedValue: true,
                    })}
                </span>
            `;
        },
    });

    it('keeps the previous value visible while the next one resolves', async () => {
        const fixture = await testWeb.render(html`
            <${LastResolvedElement}></${LastResolvedElement}>
        `);
        assert.instanceOf(fixture, LastResolvedElement);

        function readBoth() {
            return {
                fallback: readTestIdText(fixture, LastResolvedElement.testIds.fallback),
                last: readTestIdText(fixture, LastResolvedElement.testIds.last),
            };
        }

        assert.deepEquals(readBoth(), {
            fallback: 'first',
            last: 'first',
        });

        await clickTestId(fixture, LastResolvedElement.testIds.trigger);

        await waitUntil.deepEquals(
            {
                fallback: 'loading',
                last: 'first',
            },
            readBoth,
        );

        assertWrap.isDefined(pendingUpdate.resolve)();

        await waitUntil.deepEquals(
            {
                fallback: 'resolved: second',
                last: 'resolved: second',
            },
            readBoth,
        );
    });
});

describe('render async raw promise book', () => {
    const RawPromiseElement = defineElement()({
        tagName: 'render-async-raw-promise-element',
        state() {
            return {
                data: undefined as undefined | {value: string | Error | Promise<string>},
            };
        },
        testIds: [
            'report',
            'trigger',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.trigger)}
                    ${listen('click', async () => {
                        const pending = wait({
                            milliseconds: 150,
                        }).then(() => 'done');
                        updateState({
                            data: {
                                value: pending,
                            },
                        });
                        const resolved = await pending;
                        updateState({
                            data: {
                                value: resolved,
                            },
                        });
                    })}
                >
                    trigger
                </button>
                <span ${testId(testIds.report)}>
                    ${state.data
                        ? renderAsync(
                              {
                                  value: state.data.value,
                                  lastResolvedValue: undefined,
                              },
                              'loading',
                          )
                        : 'idle'}
                </span>
            `;
        },
    });

    it('handles a raw promise that never went through asyncProp', async () => {
        const fixture = await testWeb.render(html`
            <${RawPromiseElement}></${RawPromiseElement}>
        `);
        assert.instanceOf(fixture, RawPromiseElement);

        assert.strictEquals(readTestIdText(fixture, RawPromiseElement.testIds.report), 'idle');

        await clickTestId(fixture, RawPromiseElement.testIds.trigger);

        await waitUntil.strictEquals('done', () => {
            return readTestIdText(fixture, RawPromiseElement.testIds.report);
        });
    });
});
