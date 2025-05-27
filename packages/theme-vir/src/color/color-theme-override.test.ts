import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {css, html} from 'element-vir';
import {colorCss} from './color-css.js';
import {applyColorTheme, defineColorThemeOverride} from './color-theme-override.js';
import {defineColorTheme} from './color-theme.js';

const mockTheme = defineColorTheme(
    {
        foreground: 'black',
        background: 'white',
    },
    {
        'main-color': {
            foreground: 'blue',
        },
        'secondary-color': {
            background: 'navy',
        },
    },
);

describe(defineColorThemeOverride.name, () => {
    it('creates default overrides', () => {
        assert.deepEquals(
            defineColorThemeOverride(mockTheme, 'mock', {
                defaultOverride: {
                    foreground: 'purple',
                },
            }).overrides,
            {
                '--default-fg': 'purple',
            },
        );
    });
    it('rejects an override that does not match a theme color', () => {
        assert.throws(() =>
            defineColorThemeOverride(mockTheme, 'mock', {
                colorOverrides: {
                    // @ts-expect-error: invalid color name
                    'invalid-color': {
                        background: 'pink',
                    },
                },
            }),
        );
    });
    it('applies overrides', async () => {
        const fixture = await testWeb.render(html`
            <div
                style=${css`
                    ${colorCss(mockTheme.colors['main-color'])}
                `}
            ></div>
        `);

        assert.instanceOf(fixture, HTMLElement);

        assert.strictEquals(
            globalThis.getComputedStyle(fixture).getPropertyValue('color'),
            'rgb(0, 0, 255)',
        );
        assert.strictEquals(
            globalThis.getComputedStyle(fixture).getPropertyValue('background-color'),
            'rgb(255, 255, 255)',
        );

        applyColorTheme(fixture, mockTheme);

        assert.strictEquals(
            globalThis.getComputedStyle(fixture).getPropertyValue('color'),
            'rgb(0, 0, 255)',
        );
        assert.strictEquals(
            globalThis.getComputedStyle(fixture).getPropertyValue('background-color'),
            'rgb(255, 255, 255)',
        );

        applyColorTheme(
            fixture,
            mockTheme,
            defineColorThemeOverride(mockTheme, 'mock', {
                defaultOverride: {
                    background: 'green',
                },
                colorOverrides: {
                    'main-color': {
                        foreground: 'red',
                    },
                },
            }),
        );

        assert.strictEquals(
            globalThis.getComputedStyle(fixture).getPropertyValue('color'),
            'rgb(255, 0, 0)',
        );
        assert.strictEquals(
            globalThis.getComputedStyle(fixture).getPropertyValue('background-color'),
            'rgb(0, 128, 0)',
        );
    });
});
