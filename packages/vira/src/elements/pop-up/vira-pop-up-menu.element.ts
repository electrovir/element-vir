import {css, html} from 'element-vir';
import {viraBorders} from '../../styles/border.js';
import {viraFormCssVars} from '../../styles/form-themes.js';
import {viraShadows} from '../../styles/shadows.js';
import {defineViraElement} from '../define-vira-element.js';

/**
 * A simple default style wrapper for pop-up menus.
 *
 * @category PopUp
 * @category Elements
 */
export const ViraPopUpMenu = defineViraElement()({
    tagName: 'vira-pop-up-menu',
    styles: css`
        :host {
            display: flex;

            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            box-sizing: border-box;
            border-radius: ${viraBorders['vira-form-input-radius'].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
            ${viraShadows.menuShadow}
        }
    `,
    render() {
        return html`
            <slot></slot>
        `;
    },
});
