import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {defineElementEvent} from '../properties/element-events.js';
import {listen} from './listen.directive.js';
import {onDomCreated} from './on-dom-created.directive.js';

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
});
