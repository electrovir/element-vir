import {assert} from '@augment-vir/assert';
import {mapObjectValues} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineColorTheme, themeDefaultKey} from './color-theme.js';
import {mockColorTheme} from './color-theme.mock.js';

describe(defineColorTheme.name, () => {
    it('maps all colors', () => {
        const theme = defineColorTheme(
            {
                foreground: 'black',
                background: 'white',
            },
            {
                'brand-primary': {
                    foreground: 'dodgerblue',
                },
                'brand-secondary': {
                    background: 'navy',
                },
                'logo-color': {
                    foreground: {
                        refBackground: 'brand-secondary',
                    },
                },
                'header-color': {
                    foreground: {
                        refForeground: 'brand-secondary',
                    },
                },
            },
        );

        assert.isDefined(theme.colors['logo-color'].foreground.value);
        assert.strictEquals(theme.colors['brand-primary'].foreground.default, 'dodgerblue');
        assert.strictEquals(
            theme.colors['brand-primary'].background.default,
            'var(--default-bg, white)',
        );
        assert.strictEquals(
            theme.colors['brand-secondary'].foreground.default,
            'var(--default-fg, black)',
        );
        assert.strictEquals(theme.colors['brand-secondary'].background.default, 'navy');
        assert.strictEquals(
            theme.colors['logo-color'].foreground.default,
            'var(--brand-secondary-bg, navy)',
        );
        assert.strictEquals(
            theme.colors['logo-color'].background.default,
            'var(--default-bg, white)',
        );
        assert.strictEquals(
            theme.colors['header-color'].foreground.default,
            'var(--brand-secondary-fg, black)',
        );
        assert.strictEquals(
            theme.colors['header-color'].background.default,
            'var(--default-bg, white)',
        );

        assert.strictEquals(theme.colors['brand-primary'].name, 'brand-primary');
    });
    it('has expected colors in mock', () => {
        assert.deepEquals(
            mapObjectValues(mockColorTheme.colors, (colorName, color) => {
                return {
                    foreground: color.foreground.default,
                    background: color.background.default,
                };
            }),
            {
                'theme-default': {
                    foreground: 'black',
                    background: 'white',
                },
                'action-primary': {
                    foreground: 'dodgerblue',
                    background: 'var(--default-bg, white)',
                },
                'action-secondary': {
                    foreground: 'navy',
                    background: 'var(--default-bg, white)',
                },
                'action-danger': {
                    foreground: 'red',
                    background: 'var(--default-bg, white)',
                },
                'nav-bar': {
                    foreground: 'var(--default-fg, black)',
                    background: '#ccc',
                },
                'button-primary': {
                    foreground: 'white',
                    background: 'var(--action-primary-fg, dodgerblue)',
                },
            },
        );
    });
    it('rejects an invalid ref', () => {
        assert.throws(
            () => {
                defineColorTheme(
                    {
                        foreground: 'black',
                        background: 'white',
                    },
                    {
                        'brand-primary': {
                            foreground: 'dodgerblue',
                        },
                        'brand-secondary': {
                            background: 'navy',
                        },
                        'logo-color': {
                            foreground: {
                                refBackground: 'brand-missing',
                            },
                        },
                    },
                );
            },
            {
                matchMessage: 'Color theme refBackground reference',
            },
        );
        assert.throws(
            () => {
                defineColorTheme(
                    {
                        foreground: 'black',
                        background: 'white',
                    },
                    {
                        'brand-primary': {
                            foreground: 'dodgerblue',
                        },
                        'brand-secondary': {
                            background: 'navy',
                        },
                        'logo-color': {
                            foreground: {
                                refForeground: 'brand-missing',
                            },
                        },
                    },
                );
            },
            {
                matchMessage: 'Color theme refForeground reference',
            },
        );
    });
    it('rejects an themeDefaultKey key', () => {
        assert.throws(
            () => {
                defineColorTheme(
                    {
                        foreground: 'black',
                        background: 'white',
                    },
                    {
                        [themeDefaultKey]: {
                            foreground: 'dodgerblue',
                        },
                    },
                );
            },
            {
                matchMessage: 'Cannot define theme color by name',
            },
        );
    });
});
