import {assert, waitUntil} from '@augment-vir/assert';
import {randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {testId, testIdAttributeName, testIdSelector} from './test-id.directive.js';

describe(testId.name, () => {
    it('attaches a the given test id', async () => {
        const testIdValue = randomString();

        const fixture = await testWeb.render(html`
            <div ${testId(testIdValue)}>text</div>
        `);

        assert.instanceOf(fixture, HTMLDivElement);

        assert.strictEquals(fixture.getAttribute(testIdAttributeName), testIdValue);
    });

    it('creates a selector that finds the element it was attached to', async () => {
        const testIdValue = randomString();

        const fixture = await testWeb.render(html`
            <div>
                <span ${testId(testIdValue)}>text</span>
            </div>
        `);
        assert.instanceOf(fixture, HTMLDivElement);

        assert.strictEquals(fixture.querySelector(testIdSelector(testIdValue))?.tagName, 'SPAN');
        assert.isUndefined(fixture.querySelector(testIdSelector(randomString())) ?? undefined);
    });

    it('uses the documented data-test-id attribute name', () => {
        assert.strictEquals(testIdSelector('my-test'), '[data-test-id="my-test"]');
    });

    it('updates the test id when it changes between renders', async () => {
        const TestIdElement = defineElement<{testIdValue: string}>()({
            tagName: 'test-id-directive-update-element',
            render({inputs}) {
                return html`
                    <div ${testId(inputs.testIdValue)}>text</div>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${TestIdElement.assign({
                testIdValue: 'first',
            })}></${TestIdElement}>
        `);
        assert.instanceOf(fixture, TestIdElement);
        const innerDiv = fixture.shadowRoot.querySelector('div');
        assert.instanceOf(innerDiv, HTMLDivElement);
        assert.strictEquals(innerDiv.getAttribute(testIdAttributeName), 'first');

        fixture.assignInputs({
            testIdValue: 'second',
        });

        await waitUntil.strictEquals('second', () => innerDiv.getAttribute(testIdAttributeName));
        assert.isLengthExactly(innerDiv.getAttributeNames(), 1);
    });
});
