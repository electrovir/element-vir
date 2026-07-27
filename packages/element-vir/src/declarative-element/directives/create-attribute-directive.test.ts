import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {createAttributeDirective} from './create-attribute-directive.js';

const {attributeDirective, attributeName, attributeSelector} =
    createAttributeDirective('data-create-attr-test');

describe(createAttributeDirective.name, () => {
    it('applies the configured attribute when rendered', async () => {
        const fixture = await testWeb.render(html`
            <div ${attributeDirective('hello')}>text</div>
        `);
        assert.instanceOf(fixture, HTMLDivElement);
        assert.strictEquals(fixture.getAttribute(attributeName), 'hello');
    });

    it('exposes the attribute name', () => {
        assert.strictEquals(attributeName, 'data-create-attr-test');
    });

    it('builds a matching CSS selector from a value', () => {
        assert.strictEquals(attributeSelector('match-me'), '[data-create-attr-test="match-me"]');
    });

    it('does not escape quotes in selector values', () => {
        assert.strictEquals(
            attributeSelector('has"quote'),
            '[data-create-attr-test="has"quote"]',
            'selector values are interpolated raw',
        );
    });

    it('replaces the attribute value on later renders', async () => {
        const UpdateElement = defineElement<{value: string}>()({
            tagName: 'create-attribute-directive-update-element',
            render({inputs}) {
                return html`
                    <div ${attributeDirective(inputs.value)}>text</div>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${UpdateElement.assign({
                value: 'first',
            })}></${UpdateElement}>
        `);
        assert.instanceOf(fixture, UpdateElement);
        const innerDiv = fixture.shadowRoot.querySelector('div');
        assert.instanceOf(innerDiv, HTMLDivElement);
        assert.strictEquals(innerDiv.getAttribute(attributeName), 'first');

        fixture.assignInputs({
            value: 'second',
        });
        await waitUntil.strictEquals('second', () => innerDiv.getAttribute(attributeName));
        assert.isLengthExactly(innerDiv.getAttributeNames(), 1);
    });

    it('creates independent directives that do not interfere', async () => {
        const other = createAttributeDirective('data-create-attr-other');

        const fixture = await testWeb.render(html`
            <div ${attributeDirective('mine')} ${other.attributeDirective('theirs')}>text</div>
        `);
        assert.instanceOf(fixture, HTMLDivElement);

        assert.deepEquals(fixture.getAttributeNames().toSorted(), [
            'data-create-attr-other',
            'data-create-attr-test',
        ]);
        assert.strictEquals(fixture.getAttribute(attributeName), 'mine');
        assert.strictEquals(fixture.getAttribute(other.attributeName), 'theirs');
    });

    it('names the attribute in the misuse error message', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div>${attributeDirective('nope')}</div>
                `);
            },
            {
                matchMessage:
                    'data-create-attr-test directive can only be attached directly to an element',
            },
        );
    });

    it('works on non-HTML elements', async () => {
        const fixture = await testWeb.render(html`
            <div>
                <svg><circle ${attributeDirective('in-svg')}></circle></svg>
            </div>
        `);
        assert.instanceOf(fixture, HTMLDivElement);

        assert.strictEquals(
            fixture.querySelector(attributeSelector('in-svg'))?.namespaceURI,
            'http://www.w3.org/2000/svg',
        );
    });
});
