import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {type MaybePromise} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {defineElementEvent} from '../properties/element-events.js';
import {listen} from './listen.directive.js';
import {onDomCreated, type OnDomCreatedCallback} from './on-dom-created.directive.js';
import {renderIf} from './render-if.directive.js';

describe('onDomCreated', () => {
    const TestOnDomCreatedElement = defineElement<{trigger: number}>()({
        tagName: 'test-on-dom-created-element',
        events: {
            createdTrigger: defineElementEvent<Element>(),
        },
        render({inputs, events, dispatch}) {
            return html`
                <div
                    ${onDomCreated((element) => {
                        dispatch(new events.createdTrigger(element));
                    })}
                >
                    ${inputs.trigger}
                </div>
            `;
        },
    });

    it('calls the callback exactly once with the created element', async () => {
        const elements: Element[] = [];
        const rendered = await testWeb.render(html`
            <${TestOnDomCreatedElement.assign({
                trigger: 1,
            })}
                ${listen(TestOnDomCreatedElement.events.createdTrigger, (event) => {
                    elements.push(event.detail);
                })}
            ></${TestOnDomCreatedElement}>
        `);
        assert.instanceOf(rendered, TestOnDomCreatedElement);

        await waitForAnimationFrame(100);
        assert.isLengthExactly(elements, 1);
        assert.instanceOf(elements[0], HTMLDivElement);
    });

    it('does not re-fire on subsequent renders of the same node', async () => {
        const elements: Element[] = [];
        const rendered = await testWeb.render(html`
            <${TestOnDomCreatedElement.assign({
                trigger: 1,
            })}
                ${listen(TestOnDomCreatedElement.events.createdTrigger, (event) => {
                    elements.push(event.detail);
                })}
            ></${TestOnDomCreatedElement}>
        `);
        assert.instanceOf(rendered, TestOnDomCreatedElement);

        rendered.assignInputs({
            trigger: 2,
        });
        await waitUntil.isTruthy(() => {
            return rendered.shadowRoot.textContent.trim() === '2';
        });

        rendered.assignInputs({
            trigger: 3,
        });
        await waitUntil.isTruthy(() => {
            return rendered.shadowRoot.textContent.trim() === '3';
        });

        await waitForAnimationFrame(100);
        assert.isLengthExactly(elements, 1);
    });

    it('has the expected callback type', () => {
        assert.tsType<Parameters<OnDomCreatedCallback>>().equals<[Element]>();
        assert.tsType<ReturnType<OnDomCreatedCallback>>().equals<MaybePromise<void>>();
    });

    it('throws when attached in a child position', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div>${onDomCreated(() => {})}</div>
                `);
            },
            {
                matchMessage: 'onDomCreated directive can only be attached directly to an element',
            },
        );
    });

    it('fires after the element is attached and adds no attributes to it', async () => {
        const elements: Element[] = [];
        const rendered = await testWeb.render(html`
            <${TestOnDomCreatedElement.assign({
                trigger: 1,
            })}
                ${listen(TestOnDomCreatedElement.events.createdTrigger, (event) => {
                    elements.push(event.detail);
                })}
            ></${TestOnDomCreatedElement}>
        `);
        assert.instanceOf(rendered, TestOnDomCreatedElement);

        await waitForAnimationFrame(100);
        const created = elements[0];
        assert.isDefined(created);
        assert.isTrue(created.isConnected);
        assert.strictEquals(
            created,
            assertWrap.isDefined(rendered.shadowRoot.querySelector('div')),
        );
        assert.isLengthExactly(created.attributes, 0);
    });

    it('fires for each newly created element node', async () => {
        const SwapElement = defineElement<{useSpan: boolean}>()({
            tagName: 'test-on-dom-created-swap-element',
            events: {
                createdTrigger: defineElementEvent<Element>(),
            },
            render({inputs, events, dispatch}) {
                return html`
                    ${renderIf(
                        inputs.useSpan,
                        html`
                            <span
                                ${onDomCreated((element) => {
                                    dispatch(new events.createdTrigger(element));
                                })}
                            ></span>
                        `,
                        html`
                            <div
                                ${onDomCreated((element) => {
                                    dispatch(new events.createdTrigger(element));
                                })}
                            ></div>
                        `,
                    )}
                `;
            },
        });

        const elements: Element[] = [];
        const rendered = await testWeb.render(html`
            <${SwapElement.assign({
                useSpan: false,
            })}
                ${listen(SwapElement.events.createdTrigger, (event) => {
                    elements.push(event.detail);
                })}
            ></${SwapElement}>
        `);
        assert.instanceOf(rendered, SwapElement);

        await waitForAnimationFrame(100);
        assert.isLengthExactly(elements, 1);
        assert.instanceOf(elements[0], HTMLDivElement);

        rendered.assignInputs({
            useSpan: true,
        });
        await waitUntil.isTruthy(() => rendered.shadowRoot.querySelector('span'));
        await waitForAnimationFrame(100);

        assert.isLengthExactly(elements, 2);
        assert.instanceOf(elements[1], HTMLSpanElement);
    });
});
