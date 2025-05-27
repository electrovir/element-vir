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
    },
);

export const mockThemeDarkMode = defineColorThemeOverride(mockColorTheme, 'dark-mode', {
    defaultOverride: {
        foreground: 'white',
        background: 'black',
    },
});
