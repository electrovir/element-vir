import {css, html} from 'element-vir';
import {defineViraElement} from './define-vira-element.js';

/**
 * Use this element to reserve space for bolded text, even if it isn't bold yet.
 *
 * @category Elements
 */
export const ViraBoldText = defineViraElement<{bold: boolean; text: string}>()({
    tagName: 'vira-bold',
    cssVars: {
        'vira-bold-bold-weight': 'bold',
    },
    hostClasses: {
        'vira-bold-bold': ({inputs}) => inputs.bold,
    },
    styles: ({hostClasses, cssVars}) => css`
        span {
            text-decoration: inherit;
            white-space: inherit;
        }

        .bold-wrapper {
            position: relative;
        }

        .everything-wrapper {
            width: 100%;
        }

        .bold {
            font-weight: ${cssVars['vira-bold-bold-weight'].value};
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }

        .normal {
            position: absolute;
            top: 0;
            left: 0;
        }

        ${hostClasses['vira-bold-bold'].selector} .normal {
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }
        ${hostClasses['vira-bold-bold'].selector} .bold {
            visibility: visible;
            pointer-events: unset;
            z-index: unset;
        }
    `,
    render({inputs}) {
        return html`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${inputs.text}</span>

                    <span class="normal">${inputs.text}</span>
                </span>
            </span>
        `;
    },
});
