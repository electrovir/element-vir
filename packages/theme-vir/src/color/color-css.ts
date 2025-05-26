import {css, type CSSResult} from 'element-vir';
import {type ColorThemeColor} from './color-theme.js';

/**
 * Creates foreground and background CSS code. The foreground color is applied to the CSS `color`
 * property and the background color is applied to the CSS `background-color` property.
 *
 * @category Color Theme
 */
export function colorCss(color: Readonly<ColorThemeColor>): CSSResult {
    return css`
        color: ${color.foreground.value};
        background-color: ${color.background.value};
    `;
}
