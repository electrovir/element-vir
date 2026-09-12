import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {type SingleCssVarDefinition} from 'lit-css-vars';
import {css} from '../../template-transforms/vir-css/vir-css.js';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {type CssVars, type CssVarsInitMap} from './css-vars.js';

describe('css vars', () => {
    it('prefixes each css var name with dashes and keeps the key verbatim', () => {
        const CssVarNameElement = defineElement()({
            tagName: 'css-vars-name-element',
            cssVars: {
                'css-vars-name-element-color': 'blue',
            },
            render() {
                return 'hi';
            },
        });

        assert.strictEquals(
            CssVarNameElement.cssVars['css-vars-name-element-color'].name.cssText,
            '--css-vars-name-element-color',
        );
    });

    it('wraps the default value in a var fallback', () => {
        const CssVarValueElement = defineElement()({
            tagName: 'css-vars-value-element',
            cssVars: {
                'css-vars-value-element-color': 'blue',
            },
            render() {
                return 'hi';
            },
        });

        assert.strictEquals(
            CssVarValueElement.cssVars['css-vars-value-element-color'].value.cssText,
            'var(--css-vars-value-element-color, blue)',
        );
        assert.strictEquals(
            CssVarValueElement.cssVars['css-vars-value-element-color'].default,
            'blue',
        );
    });

    it('stringifies numeric and CSSResult defaults', () => {
        const CssVarDefaultsElement = defineElement()({
            tagName: 'css-vars-defaults-element',
            cssVars: {
                'css-vars-defaults-element-count': 4,
                'css-vars-defaults-element-size': css`10px`,
            },
            render() {
                return 'hi';
            },
        });

        assert.strictEquals(
            CssVarDefaultsElement.cssVars['css-vars-defaults-element-count'].default,
            '4',
        );
        assert.strictEquals(
            CssVarDefaultsElement.cssVars['css-vars-defaults-element-size'].default,
            '10px',
        );
    });

    it('reads the default off of a css property definition object', () => {
        const CssVarObjectElement = defineElement()({
            tagName: 'css-vars-object-element',
            cssVars: {
                'css-vars-object-element-color': {
                    default: 'rgb(1, 2, 3)',
                },
            },
            render() {
                return 'hi';
            },
        });

        assert.strictEquals(
            CssVarObjectElement.cssVars['css-vars-object-element-color'].default,
            'rgb(1, 2, 3)',
        );
    });

    it('has an empty css vars map when none are defined', () => {
        const NoCssVarsElement = defineElement()({
            tagName: 'css-vars-none-element',
            render() {
                return 'hi';
            },
        });

        assert.isEmpty(Object.keys(NoCssVarsElement.cssVars));
    });

    it('rejects css var keys that are not prefixed with the tag name', () => {
        assert.throws(
            () => {
                return defineElement()({
                    tagName: 'css-vars-invalid-element',
                    cssVars: {
                        // @ts-expect-error: css var keys must start with the tag name
                        'not-prefixed-color': 'blue',
                    },
                    render() {
                        return 'hi';
                    },
                });
            },
            {
                matchMessage: "Invalid element string name 'not-prefixed-color'",
            },
        );
    });

    it('shares one css vars object between the definition, styles callback, and render params', async () => {
        const styleCallbackCssVars: unknown[] = [];
        const renderCssVars: unknown[] = [];
        const CssVarSharingElement = defineElement()({
            tagName: 'css-vars-sharing-element',
            cssVars: {
                'css-vars-sharing-element-color': 'blue',
            },
            styles({cssVars}) {
                styleCallbackCssVars.push(cssVars);
                return css`
                    :host {
                        color: ${cssVars['css-vars-sharing-element-color'].value};
                    }
                `;
            },
            render({cssVars}) {
                renderCssVars.push(cssVars);
                return 'hi';
            },
        });

        const fixture = await testWeb.render(html`
            <${CssVarSharingElement}></${CssVarSharingElement}>
        `);
        assert.instanceOf(fixture, CssVarSharingElement);

        assert.isLengthExactly(styleCallbackCssVars, 1);
        assert.isLengthAtLeast(renderCssVars, 1);
        assert.strictEquals(styleCallbackCssVars[0], CssVarSharingElement.cssVars);
        assert.strictEquals(renderCssVars[0], CssVarSharingElement.cssVars);
    });

    it('falls back to the default value in rendered styles and honors overrides', async () => {
        const CssVarStylesElement = defineElement()({
            tagName: 'css-vars-styles-element',
            cssVars: {
                'css-vars-styles-element-color': 'rgb(10, 20, 30)',
            },
            styles({cssVars}) {
                return css`
                    .target {
                        color: ${cssVars['css-vars-styles-element-color'].value};
                    }
                `;
            },
            render() {
                return html`
                    <span class="target">colored</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${CssVarStylesElement}></${CssVarStylesElement}>
        `);
        assert.instanceOf(fixture, CssVarStylesElement);
        const span = fixture.shadowRoot.querySelector('.target');
        assert.instanceOf(span, HTMLSpanElement);

        assert.strictEquals(globalThis.getComputedStyle(span).color, 'rgb(10, 20, 30)');

        fixture.style.setProperty('--css-vars-styles-element-color', 'rgb(40, 50, 60)');
        assert.strictEquals(globalThis.getComputedStyle(span).color, 'rgb(40, 50, 60)');
    });

    it('maps each css var key to a single css var definition', () => {
        assert
            .tsType<CssVars<'my-element', 'my-element-color'>>()
            .equals<Readonly<Record<'my-element-color', SingleCssVarDefinition>>>();
    });

    it('requires tag-name-prefixed keys in the init map', () => {
        assert
            .tsType<keyof CssVarsInitMap<'my-element', 'my-element-color'>>()
            .equals<'my-element-color'>();
    });
});
