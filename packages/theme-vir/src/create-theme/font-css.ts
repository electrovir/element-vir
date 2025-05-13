import {type CSSResult, css, unsafeCSS} from 'element-vir';
import {type FontSize, type FontStyle} from './theme-options.js';

export function createFontSizeCssValue(fontSize: Readonly<FontSize>): CSSResult {
    if ('pixels' in fontSize) {
        return unsafeCSS(`${fontSize.pixels}px`);
    } else if ('ratio' in fontSize) {
        return unsafeCSS(`${fontSize.ratio}em`);
    } else {
        throw new Error(`Invalid fontSize given: '${JSON.stringify(fontSize)}'`);
    }
}

export function createFontStyleCss(fontStyle: Readonly<FontStyle>): CSSResult {
    return css`
        font-family: ${unsafeCSS(fontStyle.family)};
        font-size: ${createFontSizeCssValue(fontStyle.size)};
        line-height: ${createFontSizeCssValue(fontStyle.lineHeight)};
        font-weight: ${fontStyle.weight};
    `;
}
