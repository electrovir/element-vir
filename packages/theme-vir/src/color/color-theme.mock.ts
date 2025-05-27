import {defineColorThemeOverride} from './color-theme-override.js';
import {defineColorTheme} from './color-theme.js';

export const mockColorTheme = defineColorTheme(
    {
        background: 'white',
        foreground: 'black',
    },
    {
        'action-primary': {
            foreground: 'dodgerblue',
        },
        'action-secondary': {
            foreground: 'navy',
        },
        'action-danger': {
            foreground: 'red',
        },
        'nav-bar': {
            background: '#ccc',
        },
        'button-primary': {
            foreground: 'white',
            background: {
                refForeground: 'action-primary',
            },
        },
    },
);

export const mockThemeDarkMode = defineColorThemeOverride(mockColorTheme, 'dark-mode', {
    defaultOverride: {
        foreground: 'white',
        background: 'black',
    },
});

export const mockOrange = defineColorThemeOverride(mockColorTheme, 'orange', {
    colorOverrides: {
        'button-primary': {
            background: 'orange',
        },
    },
});
