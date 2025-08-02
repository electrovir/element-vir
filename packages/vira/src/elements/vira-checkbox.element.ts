import {type PartialWithUndefined} from '@augment-vir/common';
import {
    attributes,
    classMap,
    css,
    defineElementEvent,
    html,
    ifDefined,
    listen,
    listenToActivate,
    type AttributeValues,
    type CSSResult,
} from 'element-vir';
import {Check24Icon, viraIconCssVars} from '../icons/index.js';
import {viraBorders} from '../styles/border.js';
import {viraDisabledStyles} from '../styles/disabled.js';
import {createFocusStyles} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-styles.js';
import {defineViraElement} from './define-vira-element.js';
import {ViraIcon} from './vira-icon.element.js';

/**
 * All inner elements supported by {@link ViraCheckbox}.
 *
 * @category Internals
 */
export type ViraCheckboxInnerElements = 'label' | 'custom-checkbox' | typeof ViraIcon.tagName;

/**
 * Inputs for {@link ViraCheckbox}.
 *
 * @category Internal
 */
export type ViraCheckboxInputs = PartialWithUndefined<{
    stylePassthrough: Record<ViraCheckboxInnerElements, CSSResult>;
    attributePassthrough: Record<ViraCheckboxInnerElements, AttributeValues>;
    disabled: boolean;
}> & {
    value: boolean;
};

/**
 * A custom checkbox.
 *
 * @category Input
 * @category Elements
 * @see https://electrovir.github.io/element-vir/vira/book/elements/vira-checkbox
 */
export const ViraCheckbox = defineViraElement<Readonly<ViraCheckboxInputs>>()({
    tagName: 'vira-checkbox',
    styles: css`
        :host {
            height: 24px;
            aspect-ratio: 1;
            display: inline-flex;
        }

        label,
        ${ViraIcon}, .custom-checkbox {
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        label {
            &.disabled {
                cursor: not-allowed;
            }
        }

        ${ViraIcon} {
            ${viraIconCssVars['vira-icon-stroke-width'].name}: 3px;
            opacity: 0;
        }

        /* The visible custom box */
        .custom-checkbox {
            border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
            border-radius: ${viraBorders['vira-form-input-radius'].value};
            display: inline-block;
            position: relative;
            cursor: pointer;

            ${createFocusStyles({elementBorderSize: 1})}

            &.checked {
                & ${ViraIcon} {
                    opacity: 1;
                }
            }

            &:hover {
                background-color: ${viraFormCssVars['vira-form-selection-hover-background-color']
                    .value};
            }

            &:active {
                background-color: ${viraFormCssVars['vira-form-selection-active-background-color']
                    .value};
            }

            &.disabled {
                ${viraDisabledStyles};
            }
        }
    `,
    events: {
        valueChange: defineElementEvent<boolean>(),
    },
    render({inputs, dispatch, events}) {
        function updateValue(this: void) {
            if (!inputs.disabled) {
                dispatch(new events.valueChange(!inputs.value));
            }
        }

        return html`
            <label
                class=${classMap({
                    disabled: !!inputs.disabled,
                })}
                ${attributes(inputs.attributePassthrough?.label)}
                style=${ifDefined(inputs.stylePassthrough?.label)}
            >
                <span
                    class="custom-checkbox ${classMap({
                        checked: inputs.value,
                        disabled: !!inputs.disabled,
                    })}"
                    role="checkbox"
                    aria-checked=${inputs.value ? 'true' : 'false'}
                    aria-disabled=${inputs.disabled ? 'true' : 'false'}
                    tabindex=${inputs.disabled ? '-1' : '0'}
                    ${attributes(inputs.attributePassthrough?.['custom-checkbox'])}
                    style=${ifDefined(inputs.stylePassthrough?.['custom-checkbox'])}
                    ${listenToActivate(updateValue)}
                    ${listen('click', updateValue)}
                >
                    <${ViraIcon.assign({
                        icon: Check24Icon,
                        fitContainer: true,
                    })}
                        ${attributes(inputs.attributePassthrough?.[ViraIcon.tagName])}
                        style=${ifDefined(inputs.stylePassthrough?.[ViraIcon.tagName])}
                    ></${ViraIcon}>
                </span>
            </label>
        `;
    },
});
