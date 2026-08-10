import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {collapseWhiteSpace} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow} from '@augment-vir/web';
import {type HtmlSpecTagName, htmlSpecConstructorsByTagName} from 'html-spec-tags';
import {defineElement} from '../declarative-element/define-element.js';
import {listen} from '../declarative-element/directives/listen.directive.js';
import {renderIf} from '../declarative-element/directives/render-if.directive.js';
import {defineElementEvent} from '../declarative-element/properties/element-events.js';
import {css} from '../template-transforms/vir-css/vir-css.js';
import {html} from '../template-transforms/vir-html/vir-html.js';

function shadowText(element: Readonly<Element>) {
    return collapseWhiteSpace(assertWrap.isDefined(element.shadowRoot).textContent || '');
}

describe('rendering', () => {
    it('support interpolated tag name strings', async () => {
        const tagNames: ReadonlyArray<HtmlSpecTagName> = [
            'p',
            'span',
            'div',
            'ul',
            'tr',
        ];

        const topLevelDiv = await testWeb.render(html`
            <div>
                ${tagNames.map((tagName) => {
                    return html`
                        <${tagName}>hello there</${tagName}>
                    `;
                })}
            </div>
        `);

        assert.isAbove(tagNames.length, 0, 'need tag names to test');

        tagNames.forEach((tagName) => {
            const expectedConstructor = htmlSpecConstructorsByTagName[tagName];
            const element = topLevelDiv.querySelector(tagName);
            assert.instanceOf(
                element,
                expectedConstructor,
                `'${tagName}' should have produced a '${expectedConstructor.name}' element but produced '${element?.constructor.name}' element.`,
            );
        });
    });

    it('propagates inputs down multiple nesting levels', async () => {
        const Deepest = defineElement<{value: string}>()({
            tagName: 'nesting-deepest',
            render({inputs}) {
                return html`
                    <span class="deepest">${inputs.value}</span>
                `;
            },
        });
        const Middle = defineElement<{value: string}>()({
            tagName: 'nesting-middle',
            render({inputs}) {
                return html`
                    <span class="middle">${inputs.value}</span>
                    <${Deepest.assign({
                        value: [
                            inputs.value,
                            'deepest',
                        ].join('-'),
                    })}></${Deepest}>
                `;
            },
        });
        const Top = defineElement()({
            tagName: 'nesting-top',
            state() {
                return {
                    value: 'first',
                };
            },
            render({state}) {
                return html`
                    <${Middle.assign({
                        value: [
                            state.value,
                            'middle',
                        ].join('-'),
                    })}></${Middle}>
                `;
            },
        });

        const top = await testWeb.renderElement(Top);
        const middle = assertWrap.instanceOf(queryThroughShadow(top, Middle), Middle);
        const deepest = assertWrap.instanceOf(queryThroughShadow(middle, Deepest), Deepest);

        assert.deepEquals(
            {
                deepest: deepest.instanceInputs.value,
                middle: middle.instanceInputs.value,
            },
            {
                deepest: 'first-middle-deepest',
                middle: 'first-middle',
            },
        );

        top.instanceState.value = 'second';

        await waitUntil.strictEquals('second-middle-deepest', () => shadowText(deepest));
        assert.strictEquals(middle.instanceInputs.value, 'second-middle');
    });

    it('only re-renders children whose inputs changed', async () => {
        const renderCounts = {
            left: 0,
            parent: 0,
            right: 0,
        };

        const Child = defineElement<{value: number; side: 'left' | 'right'}>()({
            tagName: 'minimal-render-child',
            render({inputs}) {
                renderCounts[inputs.side]++;
                return html`
                    ${inputs.value}
                `;
            },
        });
        const Parent = defineElement()({
            tagName: 'minimal-render-parent',
            state() {
                return {
                    left: 0,
                    right: 0,
                };
            },
            render({state}) {
                renderCounts.parent++;
                return html`
                    <${Child.assign({
                        side: 'left',
                        value: state.left,
                    })}></${Child}>
                    <${Child.assign({
                        side: 'right',
                        value: state.right,
                    })}></${Child}>
                `;
            },
        });

        const parent = await testWeb.renderElement(Parent);

        assert.deepEquals(
            {
                ...renderCounts,
            },
            {
                left: 1,
                parent: 1,
                right: 1,
            },
        );

        parent.instanceState.left = 1;
        await waitUntil.strictEquals(2, () => renderCounts.left);

        assert.deepEquals(
            {
                ...renderCounts,
            },
            {
                left: 2,
                parent: 2,
                right: 1,
            },
        );
    });

    it('does not re-render on repeated identical input assignment', async () => {
        const renderCounts = {
            child: 0,
        };

        const Child = defineElement<{value: number}>()({
            tagName: 'repeat-assignment-child',
            render({inputs}) {
                renderCounts.child++;
                return html`
                    ${inputs.value}
                `;
            },
        });

        const child = await testWeb.renderElement(Child, {
            value: 3,
        });

        assert.strictEquals(renderCounts.child, 1);
        assert.strictEquals(child._internalRenderCount, 1);

        [
            1,
            2,
            3,
            4,
            5,
        ].forEach(() => {
            child.assignInputs({
                value: 3,
            });
        });
        await child.updateComplete;

        assert.strictEquals(renderCounts.child, 1);

        child.assignInputs({
            value: 4,
        });
        await waitUntil.strictEquals(2, () => renderCounts.child);
    });

    it('bubbles events up through several element levels in dispatch order', async () => {
        const heard: string[] = [];

        const Child = defineElement()({
            tagName: 'bubbling-child',
            events: {
                childEvent: defineElementEvent<string>(),
            },
            render({dispatch, events}) {
                return html`
                    <button
                        ${listen('click', () => {
                            dispatch(
                                new events.childEvent({
                                    detail: 'from-child',
                                }),
                            );
                        })}
                    >
                        click me
                    </button>
                `;
            },
        });
        const Middle = defineElement()({
            tagName: 'bubbling-middle',
            events: {
                middleEvent: defineElementEvent<string>(),
            },
            render({dispatch, events}) {
                return html`
                    <${Child}
                        ${listen(Child.events.childEvent, (event) => {
                            heard.push(`middle: ${event.detail}`);
                            dispatch(
                                new events.middleEvent({
                                    detail: 'from-middle',
                                }),
                            );
                        })}
                    ></${Child}>
                `;
            },
        });
        const Top = defineElement()({
            tagName: 'bubbling-top',
            render() {
                return html`
                    <${Middle}
                        ${listen(Middle.events.middleEvent, (event) => {
                            heard.push(`top: ${event.detail}`);
                        })}
                        ${listen(Child.events.childEvent, (event) => {
                            heard.push(`top: ${event.detail}`);
                        })}
                    ></${Middle}>
                `;
            },
        });

        const top = await testWeb.renderElement(Top);
        const button = assertWrap.instanceOf(queryThroughShadow(top, 'button'), HTMLButtonElement);

        await testWeb.click(button);

        assert.deepEquals(heard, [
            'middle: from-child',
            'top: from-middle',
            'top: from-child',
        ]);
    });

    it('renders slotted content from a parent element', async () => {
        const SlotHolder = defineElement()({
            tagName: 'slot-holder',
            slotNames: [
                'slot-holder-named',
            ],
            render({slotNames}) {
                return html`
                    <div class="wrapper">
                        <slot name=${slotNames['slot-holder-named']}></slot>
                        <slot></slot>
                    </div>
                `;
            },
        });

        const holder = await testWeb.render(html`
            <${SlotHolder}>
                <span slot=${SlotHolder.slotNames['slot-holder-named']} class="named">
                    named content
                </span>
                <span class="default">default content</span>
            </${SlotHolder}>
        `);

        assert.instanceOf(holder, SlotHolder);

        const slots = queryThroughShadow(holder, 'slot', {
            all: true,
        });
        assert.isLengthExactly(slots, 2);

        assert.deepEquals(
            slots.map((slot) => {
                return assertWrap
                    .instanceOf(slot, HTMLSlotElement)
                    .assignedElements()
                    .map((assigned) => {
                        return [
                            assigned.className,
                            collapseWhiteSpace(assigned.textContent || ''),
                        ].join(': ');
                    });
            }),
            [
                ['named: named content'],
                ['default: default content'],
            ],
        );
    });

    it('keeps styles encapsulated across nesting', async () => {
        const Inner = defineElement()({
            tagName: 'nested-styles-inner',
            styles: css`
                :host {
                    color: rgb(0, 0, 255);
                }

                span {
                    font-weight: bold;
                }
            `,
            render() {
                return html`
                    <span class="inner-span">inner</span>
                `;
            },
        });
        const Outer = defineElement()({
            tagName: 'nested-styles-outer',
            styles: css`
                ${Inner} {
                    color: rgb(255, 0, 0);
                }

                span {
                    font-style: italic;
                }
            `,
            render() {
                return html`
                    <${Inner}></${Inner}>
                `;
            },
        });

        const outer = await testWeb.renderElement(Outer);
        const inner = assertWrap.instanceOf(queryThroughShadow(outer, Inner), Inner);
        const innerSpan = assertWrap.instanceOf(queryThroughShadow(inner, 'span'), HTMLSpanElement);

        assert.deepEquals(
            {
                /**
                 * Normal declarations from the outer shadow tree beat the inner element's own
                 * `:host` declarations, regardless of selector specificity.
                 */
                innerColor: window.getComputedStyle(inner).color,
                innerSpanFontStyle: window.getComputedStyle(innerSpan).fontStyle,
                innerSpanFontWeight: window.getComputedStyle(innerSpan).fontWeight,
            },
            {
                innerColor: 'rgb(255, 0, 0)',
                innerSpanFontStyle: 'normal',
                innerSpanFontWeight: '700',
            },
        );
    });

    it('does not construct children that are not rendered yet', async () => {
        const constructedTagNames: string[] = [];

        const LazyChild = defineElement()({
            tagName: 'lazy-child',
            init({host}) {
                constructedTagNames.push(host.tagName.toLowerCase());
            },
            render() {
                return html`
                    lazy
                `;
            },
        });
        const LazyParent = defineElement<{showChild: boolean}>()({
            tagName: 'lazy-parent',
            render({inputs}) {
                return html`
                    ${renderIf(
                        inputs.showChild,
                        html`
                            <${LazyChild}></${LazyChild}>
                        `,
                    )}
                `;
            },
        });

        const parent = await testWeb.renderElement(LazyParent, {
            showChild: false,
        });

        assert.isEmpty([...constructedTagNames]);
        assert.isUndefined(queryThroughShadow(parent, LazyChild));

        parent.assignInputs({
            showChild: true,
        });
        await waitUntil.deepEquals(['lazy-child'], () => constructedTagNames);

        const child = assertWrap.instanceOf(queryThroughShadow(parent, LazyChild), LazyChild);
        assert.strictEquals(shadowText(child), 'lazy');
    });

    it('re-initializes state before init and re-renders when re-inserted', async () => {
        const calls: string[] = [];

        const Reinserted = defineElement()({
            tagName: 'reinserted-element',
            state() {
                calls.push('state');
                return {
                    count: 0,
                };
            },
            init({state}) {
                calls.push(`init: ${state.count}`);
            },
            cleanup({state}) {
                calls.push(`cleanup: ${state.count}`);
            },
            render({state}) {
                calls.push(`render: ${state.count}`);
                return html`
                    <span class="count">${state.count}</span>
                `;
            },
        });

        const instance = await testWeb.renderElement(Reinserted);
        const parent = assertWrap.isDefined(instance.parentElement);

        assert.deepEquals(calls, [
            'state',
            'init: 0',
            'render: 0',
        ]);

        instance.instanceState.count = 5;
        await waitUntil.strictEquals('5', () => shadowText(instance));

        assert.deepEquals(calls.slice(3), ['render: 5']);

        instance.remove();

        assert.deepEquals(calls.slice(4), ['cleanup: 5']);

        parent.append(instance);

        assert.deepEquals(calls.slice(5), [
            'state',
            'init: 0',
        ]);

        await waitUntil.strictEquals('0', () => shadowText(instance));

        assert.deepEquals(calls.slice(5), [
            'state',
            'init: 0',
            'render: 0',
        ]);
    });
});
