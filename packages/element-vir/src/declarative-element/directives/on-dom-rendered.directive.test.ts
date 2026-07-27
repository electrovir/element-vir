import {assert, waitUntil} from '@augment-vir/assert';
import {type MaybePromise} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {extractElementText, waitForAnimationFrame} from '@augment-vir/web';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {defineElementEvent} from '../properties/element-events.js';
import {listen} from './listen.directive.js';
import {onDomRendered, type OnDomRenderedCallback} from './on-dom-rendered.directive.js';

describe('onDomRendered', () => {
    const TestOnDomRenderedElement = defineElement<{trigger: number}>()({
        tagName: 'test-on-dom-rendered-element',
        events: {
            renderTrigger: defineElementEvent<Element>(),
        },
        render({inputs, events, dispatch}) {
            return html`
                <div
                    ${onDomRendered((element) => {
                        dispatch(new events.renderTrigger(element));
                    })}
                >
                    ${inputs.trigger}
                </div>
            `;
        },
    });

    async function setupTest() {
        const elements: Element[] = [];
        const rendered = await testWeb.render(html`
            <${TestOnDomRenderedElement.assign({
                trigger: 1,
            })}
                ${listen(TestOnDomRenderedElement.events.renderTrigger, (event) => {
                    elements.push(event.detail);
                })}
            ></${TestOnDomRenderedElement}>
        `);

        assert.instanceOf(rendered, TestOnDomRenderedElement);
        const instance = rendered;

        await waitForAnimationFrame(100);

        assert.isLengthExactly(elements, 1);
        assert.strictEquals(extractElementText(instance), '1');

        async function updateTrigger(triggerValue: number) {
            instance.assignInputs({
                trigger: triggerValue,
            });

            await waitUntil.isTruthy(() => {
                return extractElementText(instance) === String(triggerValue);
            });
        }

        return {
            instance,
            elements,
            updateTrigger,
        };
    }

    it('calls each time a render occurs', async () => {
        const {elements, instance, updateTrigger} = await setupTest();

        await updateTrigger(32);
        await updateTrigger(96);
        await updateTrigger(43);
        await updateTrigger(60);

        await waitForAnimationFrame(100);

        assert.isLengthExactly(elements, 5);
        assert.strictEquals(extractElementText(instance), '60');
    });

    it('does not trigger when an input does not change', async () => {
        const {elements, instance, updateTrigger} = await setupTest();

        await updateTrigger(1);
        await updateTrigger(1);
        await updateTrigger(1);
        await updateTrigger(1);

        await waitForAnimationFrame(100);

        assert.isLengthExactly(elements, 1);
        assert.strictEquals(extractElementText(instance), '1');
    });

    it('has the expected callback type', () => {
        assert.tsType<Parameters<OnDomRenderedCallback>>().equals<[Element]>();
        assert.tsType<ReturnType<OnDomRenderedCallback>>().equals<MaybePromise<void>>();
    });

    it('throws when attached in a child position', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div>${onDomRendered(() => {})}</div>
                `);
            },
            {
                matchMessage: 'onDomRendered directive can only be attached directly to an element',
            },
        );
    });

    it('always passes the same attached element', async () => {
        const {elements, instance, updateTrigger} = await setupTest();

        await updateTrigger(2);
        await updateTrigger(3);
        await waitForAnimationFrame(100);

        const div = instance.shadowRoot.querySelector('div');
        assert.isDefined(div);
        assert.isLengthExactly([...elements], 3);
        assert.isTrue(elements.every((element) => element === div));
        assert.isTrue(elements.every((element) => element.isConnected));
    });

    it('fires exactly once per render', async () => {
        const renderCount: number[] = [];

        const CountedElement = defineElement<{trigger: number}>()({
            tagName: 'test-on-dom-rendered-counted-element',
            events: {
                renderTrigger: defineElementEvent<Element>(),
            },
            render({inputs, events, dispatch}) {
                renderCount.push(inputs.trigger);

                return html`
                    <div
                        ${onDomRendered((element) => {
                            dispatch(new events.renderTrigger(element));
                        })}
                    >
                        ${inputs.trigger}
                    </div>
                `;
            },
        });

        const elements: Element[] = [];
        const instance = await testWeb.render(html`
            <${CountedElement.assign({
                trigger: 1,
            })}
                ${listen(CountedElement.events.renderTrigger, (event) => {
                    elements.push(event.detail);
                })}
            ></${CountedElement}>
        `);
        assert.instanceOf(instance, CountedElement);

        /** Two synchronous input assignments: only the final one gets rendered. */
        instance.assignInputs({
            trigger: 2,
        });
        instance.assignInputs({
            trigger: 3,
        });
        await waitUntil.strictEquals('3', () => extractElementText(instance));
        await waitForAnimationFrame(100);

        assert.isLengthExactly(elements, renderCount.length);
        assert.deepEquals(
            renderCount,
            [
                1,
                3,
            ],
        );
    });
});
