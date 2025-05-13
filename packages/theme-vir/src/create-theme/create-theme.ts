import {mergeDeep} from '@augment-vir/common';
import {defineThemeElements} from './define-theme-elements.js';
import {
    type AllThemeOptions,
    type ThemeOptions,
    createDefaultThemeOptions,
} from './theme-options.js';
import {type Theme} from './theme.js';

export function createTheme<TagPrefix extends string>(
    options: ThemeOptions<TagPrefix>,
): Theme<TagPrefix> {
    const fullOptions = mergeDeep<AllThemeOptions<TagPrefix>>(createDefaultThemeOptions(), options);

    return {
        elements: defineThemeElements(fullOptions),
    };
}
