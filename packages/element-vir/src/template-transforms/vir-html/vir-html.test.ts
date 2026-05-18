import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {defineElement} from '../../declarative-element/define-element.js';
import {html} from './vir-html.js';

const VirHtmlChild = defineElement<{label: string}>()({
    tagName: 'vir-html-test-child',
    render({inputs}) {
        return html`
            <span>${inputs.label}</span>
        `;
    },
});

describe(html.name, () => {
    it('returns a template with strings and values', () => {
        const template = html`
            <div>${'hello'}</div>
        `;
        assert.isArray(template.values);
        assert.deepEquals(
            [...template.strings],
            [
                '\n            <div>',
                '</div>\n        ',
            ],
        );
        assert.deepEquals(template.values, [
            'hello',
        ]);
    });

    it('renders interpolated tag names as real custom elements', async () => {
        const fixture = await testWeb.render(html`
            <${VirHtmlChild.assign({
                label: 'rendered',
            })}></${VirHtmlChild}>
        `);

        assert.instanceOf(fixture, VirHtmlChild);
        assert.strictEquals(fixture.tagName.toLowerCase(), 'vir-html-test-child');
        const span = fixture.shadowRoot.querySelector('span');
        assert.instanceOf(span, HTMLSpanElement);
        assert.strictEquals(span.textContent.trim(), 'rendered');
    });

    function buildHtml(value: number) {
        return html`
            value: ${value}
        `;
    }

    it('returns the same transformed strings for identical literal template strings', () => {
        assert.strictEquals(buildHtml(1).strings, buildHtml(2).strings);
    });

    it('produces different template values when interpolated values change', () => {
        assert.deepEquals(buildHtml(1).values, [
            1,
        ]);
        assert.deepEquals(buildHtml(2).values, [
            2,
        ]);
    });
});
