import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {defineElement} from '../../declarative-element/define-element.js';
import {nothing} from '../../lit-exports/all-lit-exports.js';
import {html} from './vir-html.js';

const VirHtmlChild = defineElement<{label: string}>()({
    tagName: 'vir-html-test-child',
    render({inputs}) {
        return html`
            <span>${inputs.label}</span>
        `;
    },
});

const VirHtmlNoInputs = defineElement()({
    tagName: 'vir-html-test-no-inputs',
    render() {
        return html`
            <span>no inputs</span>
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

    it('returns a new template object with lit template metadata each call', () => {
        const first = buildHtml(1);
        const second = buildHtml(1);

        assert.notStrictEquals(first, second);
        assert.isDefined(first._$litType$);
        assert.strictEquals(first._$litType$, second._$litType$);
    });

    it('preserves interpolated value identity', () => {
        const nested = html`
            <span></span>
        `;
        const values = [
            'a',
            'b',
        ];
        const callback = () => undefined;
        const element = document.createElement('span');

        assert.deepEquals(
            html`
                <div>${nested}</div>
            `.values,
            [
                nested,
            ],
        );
        assert.deepEquals(
            html`
                <div>${values}</div>
            `.values,
            [
                values,
            ],
        );
        assert.deepEquals(
            html`
                <div @click=${callback}></div>
            `.values,
            [
                callback,
            ],
        );
        assert.deepEquals(
            html`
                <div>${element}</div>
            `.values,
            [
                element,
            ],
        );
    });

    it('preserves empty interpolations', () => {
        assert.deepEquals(
            html`
                <div>${undefined}${null}${nothing}${''}</div>
            `.values,
            [
                undefined,
                null,
                nothing,
                '',
            ],
        );
    });

    it('renders an interpolated tag name string', async () => {
        const fixture = await testWeb.render(html`
            <${'vir-html-test-no-inputs'}></${'vir-html-test-no-inputs'}>
        `);

        assert.instanceOf(fixture, VirHtmlNoInputs);
    });

    it('renders nested templates', async () => {
        const fixture = await testWeb.render(html`
            <div>
                ${html`
                    <span>nested</span>
                `}
            </div>
        `);

        const span = fixture.querySelector('span');
        assert.instanceOf(span, HTMLSpanElement);
        assert.strictEquals(span.textContent.trim(), 'nested');
    });
});

describe('html self closing tag names', () => {
    it('renders a self closing interpolated tag name', async () => {
        const fixture = await testWeb.render(html`
            <${VirHtmlNoInputs} />
        `);

        assert.instanceOf(fixture, VirHtmlNoInputs);
        const span = fixture.shadowRoot.querySelector('span');
        assert.instanceOf(span, HTMLSpanElement);
        assert.strictEquals(span.textContent.trim(), 'no inputs');
    });

    it('renders a self closing interpolated tag name with no space before the slash', async () => {
        // prettier-ignore
        const fixture = await testWeb.render(html`<${VirHtmlNoInputs}/>`);

        assert.instanceOf(fixture, VirHtmlNoInputs);
    });

    it('renders a self closing interpolated tag name with attributes before the slash', async () => {
        const assigned = VirHtmlChild.assign({
            label: 'no space',
        });
        // prettier-ignore
        const fixture = await testWeb.render(html`<${assigned} data-no-space="yes"/>`);

        assert.instanceOf(fixture, VirHtmlChild);
        assert.strictEquals(fixture.getAttribute('data-no-space'), 'yes');
        const span = fixture.shadowRoot.querySelector('span');
        assert.instanceOf(span, HTMLSpanElement);
        assert.strictEquals(span.textContent.trim(), 'no space');
    });

    it('renders a self closing interpolated tag name nested in another element', async () => {
        const fixture = await testWeb.render<HTMLDivElement>(html`
            <div>
                <${VirHtmlNoInputs} />
            </div>
        `);

        assert.instanceOf(fixture, HTMLDivElement);
        assert.instanceOf(fixture.querySelector('vir-html-test-no-inputs'), VirHtmlNoInputs);
    });

    it('renders a self closing interpolated tag name with assigned inputs and attributes', async () => {
        const fixture = await testWeb.render(html`
            <${VirHtmlChild.assign({
                label: 'self closing',
            })}
                data-self-closing="yes"
            />
        `);

        assert.instanceOf(fixture, VirHtmlChild);
        assert.strictEquals(fixture.getAttribute('data-self-closing'), 'yes');
        const span = fixture.shadowRoot.querySelector('span');
        assert.instanceOf(span, HTMLSpanElement);
        assert.strictEquals(span.textContent.trim(), 'self closing');
    });
});
