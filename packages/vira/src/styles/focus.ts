import {addPx} from '@augment-vir/common';
import {css, unsafeCSS} from 'element-vir';
import {defineCssVars} from 'lit-css-vars';
import {viraCssVars} from './vira-css-vars';

export const viraFocusCssVars = defineCssVars({
    'vira-focus-outline-color': 'blue',
    'vira-focus-outline-border-radius': css`calc(${viraCssVars['vira-form-input-border-radius'].value} + 4px)`,
});

/**
 * Create styles that look like an outline for the given selector.
 *
 * It is recommended to use the pseudo selectors ":focus:focus-visible:not(:active)" to preventing
 * clicking from creating focus styles in Chrome.
 */
export function createFocusStyles({
    mainSelector,
    elementBorderSize,
    outlineGap = 2,
    outlineWidth = 3,
}: {
    mainSelector: string;
    /**
     * ElementBorderSize here is used to fix the outline when the element these styles are attached
     * to has a border. The dev must specify that border size here for the offsets to be calculated
     * correctly.
     */
    elementBorderSize: number;
    outlineGap?: number;
    outlineWidth?: number;
    borderRadius?: number;
}) {
    const outlineSpacing = unsafeCSS(addPx(outlineWidth + outlineGap + elementBorderSize));

    return css`
        ${unsafeCSS(mainSelector)}::after {
            content: '';
            top: calc(${outlineSpacing} * -1);
            left: calc(${outlineSpacing} * -1);
            position: absolute;
            width: calc(100% + calc(${outlineSpacing} * 2));
            height: calc(100% + calc(${outlineSpacing} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${outlineWidth}px solid ${viraFocusCssVars['vira-focus-outline-color'].value};
            border-radius: ${viraFocusCssVars['vira-focus-outline-border-radius'].value};
            z-index: 100;
        }
    `;
}
