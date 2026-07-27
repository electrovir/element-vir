import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {collapseWhiteSpace} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow} from '@augment-vir/web';
import {defineElement} from '../declarative-element/define-element.js';
import {attributes} from '../declarative-element/directives/attributes.directive.js';
import {listen} from '../declarative-element/directives/listen.directive.js';
import {mutate} from '../declarative-element/directives/mutate.directive.js';
import {onDomCreated} from '../declarative-element/directives/on-dom-created.directive.js';
import {onIntersect} from '../declarative-element/directives/on-intersect.directive.js';
import {onResize} from '../declarative-element/directives/on-resize.directive.js';
import {renderIf} from '../declarative-element/directives/render-if.directive.js';
import {testId, testIdSelector} from '../declarative-element/directives/test-id.directive.js';
import {nothing} from '../lit-exports/all-lit-exports.js';
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

describe('attributes directive book', () => {
    const AttributesDirectiveElement = defineElement()({
        tagName: 'attributes-directive-element',
        state() {
            return {
                isDisabled: false,
            };
        },
        testIds: [
            'target',
            'toggle-disabled',
            'always-off',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds['toggle-disabled'])}
                    ${listen('click', () => {
                        updateState({
                            isDisabled: !state.isDisabled,
                        });
                    })}
                >
                    toggle disabled
                </button>
                <button
                    ${testId(testIds.target)}
                    ${attributes({
                        'data-fixed': 'fixed-value',
                        disabled: state.isDisabled,
                    })}
                >
                    target
                </button>
                <button
                    ${testId(testIds['always-off'])}
                    ${attributes({
                        'aria-pressed': nothing,
                        'data-empty-string-attr': '',
                    })}
                >
                    always off
                </button>
            `;
        },
    });

    async function renderAttributesDirective() {
        const fixture = await testWeb.render(html`
            <${AttributesDirectiveElement}></${AttributesDirectiveElement}>
        `);
        assert.instanceOf(fixture, AttributesDirectiveElement);
        return fixture;
    }

    it('applies a fixed attribute', async () => {
        const fixture = await renderAttributesDirective();

        assert.strictEquals(
            findTestId(fixture, AttributesDirectiveElement.testIds.target).getAttribute(
                'data-fixed',
            ),
            'fixed-value',
        );
    });

    it('applies a true boolean attribute and removes a false one', async () => {
        const fixture = await renderAttributesDirective();
        const target = findTestId(fixture, AttributesDirectiveElement.testIds.target);

        assert.isFalse(target.hasAttribute('disabled'));

        await clickTestId(fixture, AttributesDirectiveElement.testIds['toggle-disabled']);
        await waitUntil.strictEquals('', () => target.getAttribute('disabled'));

        await clickTestId(fixture, AttributesDirectiveElement.testIds['toggle-disabled']);
        await waitUntil.isFalse(() => target.hasAttribute('disabled'));
    });

    it('leaves a nothing valued attribute unset but keeps an empty string one', async () => {
        const fixture = await renderAttributesDirective();
        const alwaysOff = findTestId(fixture, AttributesDirectiveElement.testIds['always-off']);

        assert.deepEquals(
            {
                ariaPressed: alwaysOff.hasAttribute('aria-pressed'),
                emptyString: alwaysOff.getAttribute('data-empty-string-attr'),
            },
            {
                ariaPressed: false,
                emptyString: '',
            },
        );
    });
});

describe('mutate directive book', () => {
    const MutateDirectiveElement = defineElement()({
        tagName: 'mutate-directive-element',
        state() {
            return {
                highlight: false,
            };
        },
        testIds: [
            'target',
            'toggle',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.toggle)}
                    ${listen('click', () => {
                        updateState({
                            highlight: !state.highlight,
                        });
                    })}
                >
                    toggle
                </button>
                <span
                    ${testId(testIds.target)}
                    ${mutate(({element}) => {
                        if (state.highlight) {
                            element.setAttribute('data-mutated', 'yes');
                        } else {
                            element.removeAttribute('data-mutated');
                        }
                    })}
                >
                    target
                </span>
            `;
        },
    });

    it('runs its callback with the element on every render', async () => {
        const fixture = await testWeb.render(html`
            <${MutateDirectiveElement}></${MutateDirectiveElement}>
        `);
        assert.instanceOf(fixture, MutateDirectiveElement);
        const target = findTestId(fixture, MutateDirectiveElement.testIds.target);

        assert.isFalse(target.hasAttribute('data-mutated'));

        await clickTestId(fixture, MutateDirectiveElement.testIds.toggle);
        await waitUntil.strictEquals('yes', () => target.getAttribute('data-mutated'));

        await clickTestId(fixture, MutateDirectiveElement.testIds.toggle);
        await waitUntil.isFalse(() => target.hasAttribute('data-mutated'));
    });
});

describe('on dom created book', () => {
    const OnDomCreatedElement = defineElement()({
        tagName: 'on-dom-created-element',
        state() {
            return {
                createdTagName: '',
            };
        },
        testIds: [
            'target',
            'report',
        ],
        render({state, updateState, testIds}) {
            return html`
                <div
                    ${testId(testIds.target)}
                    ${onDomCreated((element) => {
                        updateState({
                            createdTagName: element.tagName.toLowerCase(),
                        });
                    })}
                >
                    target
                </div>
                <span ${testId(testIds.report)}>${state.createdTagName}</span>
            `;
        },
    });

    it('fires with the actual element', async () => {
        const fixture = await testWeb.render(html`
            <${OnDomCreatedElement}></${OnDomCreatedElement}>
        `);
        assert.instanceOf(fixture, OnDomCreatedElement);

        await waitUntil.strictEquals('div', () => {
            return readTestIdText(fixture, OnDomCreatedElement.testIds.report);
        });
    });
});

describe('on resize book', () => {
    const OnResizeElement = defineElement()({
        tagName: 'on-resize-element',
        styles: css`
            .target {
                display: block;
                height: 40px;
            }
        `,
        state() {
            return {
                lastWidth: 0,
                width: 200,
            };
        },
        testIds: [
            'target',
            'report',
            'grow',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.grow)}
                    ${listen('click', () => {
                        updateState({
                            width: state.width + 100,
                        });
                    })}
                >
                    grow
                </button>
                <span ${testId(testIds.report)}>${state.lastWidth}</span>
                <div
                    ${testId(testIds.target)}
                    class="target"
                    style="width: ${state.width}px"
                    ${onResize((size) => {
                        updateState({
                            lastWidth: Math.round(size.contentRect.width),
                        });
                    })}
                >
                    target
                </div>
            `;
        },
    });

    it('fires on initial layout and on every resize', async () => {
        const fixture = await testWeb.render(html`
            <${OnResizeElement}></${OnResizeElement}>
        `);
        assert.instanceOf(fixture, OnResizeElement);

        await waitUntil.strictEquals('200', () => {
            return readTestIdText(fixture, OnResizeElement.testIds.report);
        });

        await clickTestId(fixture, OnResizeElement.testIds.grow);
        await waitUntil.strictEquals('300', () => {
            return readTestIdText(fixture, OnResizeElement.testIds.report);
        });

        await clickTestId(fixture, OnResizeElement.testIds.grow);
        await waitUntil.strictEquals('400', () => {
            return readTestIdText(fixture, OnResizeElement.testIds.report);
        });
    });
});

describe('on intersect book', () => {
    const OnIntersectElement = defineElement()({
        tagName: 'on-intersect-element',
        styles: css`
            .scroll-container {
                height: 100px;
                overflow-y: auto;
            }

            .spacer {
                height: 600px;
            }
        `,
        state() {
            return {
                intersected: false,
                scrollContainer: undefined as undefined | HTMLElement,
            };
        },
        testIds: [
            'report',
            'target',
            'scroll',
        ],
        render({state, updateState, testIds}) {
            return html`
                <span ${testId(testIds.report)}>${state.intersected ? 'visible' : 'hidden'}</span>
                <button
                    ${testId(testIds.scroll)}
                    ${listen('click', () => {
                        if (state.scrollContainer) {
                            state.scrollContainer.scrollTo({
                                top: state.scrollContainer.scrollHeight,
                            });
                        }
                    })}
                >
                    scroll
                </button>
                <div
                    class="scroll-container"
                    ${onDomCreated((element) => {
                        if (element instanceof HTMLElement) {
                            updateState({
                                scrollContainer: element,
                            });
                        }
                    })}
                >
                    <div class="spacer"></div>
                    <div
                        ${testId(testIds.target)}
                        class="target"
                        ${onIntersect(
                            {
                                threshold: 0.5,
                            },
                            ({entry}) => {
                                updateState({
                                    intersected: entry.isIntersecting,
                                });
                            },
                        )}
                    >
                        target
                    </div>
                </div>
            `;
        },
    });

    it('transitions to visible once the target is scrolled into view', async () => {
        const fixture = await testWeb.render(html`
            <${OnIntersectElement}></${OnIntersectElement}>
        `);
        assert.instanceOf(fixture, OnIntersectElement);

        await waitUntil.strictEquals('hidden', () => {
            return readTestIdText(fixture, OnIntersectElement.testIds.report);
        });

        await clickTestId(fixture, OnIntersectElement.testIds.scroll);

        await waitUntil.strictEquals('visible', () => {
            return readTestIdText(fixture, OnIntersectElement.testIds.report);
        });
    });
});

describe('render if book', () => {
    const RenderIfElement = defineElement()({
        tagName: 'render-if-element',
        state() {
            return {
                showTrue: true,
            };
        },
        testIds: [
            'toggle',
            'container',
            'true',
            'false',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.toggle)}
                    ${listen('click', () => {
                        updateState({
                            showTrue: !state.showTrue,
                        });
                    })}
                >
                    toggle
                </button>
                <div ${testId(testIds.container)}>
                    ${renderIf(
                        state.showTrue,
                        html`
                            <span ${testId(testIds.true)}>true branch</span>
                        `,
                        html`
                            <span ${testId(testIds.false)}>false branch</span>
                        `,
                    )}
                </div>
            `;
        },
    });
    const RenderIfNoFalseElement = defineElement()({
        tagName: 'render-if-no-false-element',
        state() {
            return {
                showTrue: true,
            };
        },
        testIds: [
            'toggle',
            'true',
        ],
        render({state, updateState, testIds}) {
            return html`
                <button
                    ${testId(testIds.toggle)}
                    ${listen('click', () => {
                        updateState({
                            showTrue: !state.showTrue,
                        });
                    })}
                >
                    toggle
                </button>
                ${renderIf(
                    state.showTrue,
                    html`
                        <span ${testId(testIds.true)}>true branch</span>
                    `,
                )}
            `;
        },
    });

    it('swaps between the true and false branches', async () => {
        const fixture = await testWeb.render(html`
            <${RenderIfElement}></${RenderIfElement}>
        `);
        assert.instanceOf(fixture, RenderIfElement);

        assert.deepEquals(
            {
                falseBranch: queryThroughShadow(
                    fixture,
                    testIdSelector(RenderIfElement.testIds.false),
                ),
                trueBranch: readTestIdText(fixture, RenderIfElement.testIds.true),
            },
            {
                falseBranch: undefined,
                trueBranch: 'true branch',
            },
        );

        await clickTestId(fixture, RenderIfElement.testIds.toggle);

        await waitUntil.strictEquals('false branch', () => {
            return readTestIdText(fixture, RenderIfElement.testIds.false);
        });
        assert.isUndefined(
            queryThroughShadow(fixture, testIdSelector(RenderIfElement.testIds.true)),
        );
    });

    it('renders nothing on false when no false branch is given', async () => {
        const fixture = await testWeb.render(html`
            <${RenderIfNoFalseElement}></${RenderIfNoFalseElement}>
        `);
        assert.instanceOf(fixture, RenderIfNoFalseElement);

        assert.strictEquals(
            readTestIdText(fixture, RenderIfNoFalseElement.testIds.true),
            'true branch',
        );

        await clickTestId(fixture, RenderIfNoFalseElement.testIds.toggle);

        await waitUntil.isUndefined(() => {
            return queryThroughShadow(fixture, testIdSelector(RenderIfNoFalseElement.testIds.true));
        });
    });
});
