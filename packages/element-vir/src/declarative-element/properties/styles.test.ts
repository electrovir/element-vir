import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {css} from '../../template-transforms/vir-css/vir-css.js';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {createStylesCallbackInput} from './styles.js';

describe(createStylesCallbackInput.name, () => {
    it('wraps each host class name in a selector and name CSSResult', () => {
        const input = createStylesCallbackInput<
            'foo-element',
            'foo-element-active' | 'foo-element-inactive',
            never,
            readonly []
        >({
            hostClassNames: {
                'foo-element-active': 'foo-element-active',
                'foo-element-inactive': 'foo-element-inactive',
            },
            cssVars: {} as never,
            slotNamesMap: {} as never,
        });

        assert.strictEquals(
            input.hostClasses['foo-element-active'].name.cssText,
            'foo-element-active',
        );
        assert.strictEquals(
            input.hostClasses['foo-element-active'].selector.cssText,
            ':host(.foo-element-active)',
        );
    });

    it('wraps slot names in CSSResult', () => {
        const input = createStylesCallbackInput<
            'foo-element',
            never,
            never,
            readonly ['foo-element-main-slot']
        >({
            hostClassNames: {} as never,
            cssVars: {} as never,
            slotNamesMap: {
                'foo-element-main-slot': 'foo-element-main-slot',
            },
        });
        assert.strictEquals(
            input.slotNames['foo-element-main-slot'].cssText,
            'foo-element-main-slot',
        );
    });
});

describe('styles callback integration', () => {
    it('applies a host class selector defined via the styles callback', async () => {
        const StylesCallbackElement = defineElement()({
            tagName: 'styles-callback-element',
            state() {
                return {
                    active: true,
                };
            },
            hostClasses: {
                'styles-callback-element-active': ({state}) => state.active,
            },
            styles: ({hostClasses}) => css`
                ${hostClasses['styles-callback-element-active'].selector} {
                    color: rgb(10, 20, 30);
                }
                .target {
                    color: black;
                }
            `,
            render() {
                return html`
                    <span class="target">styled</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${StylesCallbackElement}></${StylesCallbackElement}>
        `);
        assert.instanceOf(fixture, StylesCallbackElement);
        assert.isTrue(fixture.classList.contains('styles-callback-element-active'));
    });
});
