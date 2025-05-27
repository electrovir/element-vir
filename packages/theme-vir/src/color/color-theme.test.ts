import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineColorTheme, themeDefaultKey} from './color-theme.js';

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
            'var(--brand-secondary-bg)',
        );
        assert.strictEquals(
            theme.colors['logo-color'].background.default,
            'var(--default-bg, white)',
        );
        assert.strictEquals(
            theme.colors['header-color'].foreground.default,
            'var(--brand-secondary-fg)',
        );
        assert.strictEquals(
            theme.colors['header-color'].background.default,
            'var(--default-bg, white)',
        );

        assert.strictEquals(theme.colors['brand-primary'].name, 'brand-primary');
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
                matchMessage: 'theme background reference',
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
                matchMessage: 'theme foreground reference',
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
