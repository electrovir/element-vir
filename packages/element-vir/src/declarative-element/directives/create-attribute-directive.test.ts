import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html.js';
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
});
