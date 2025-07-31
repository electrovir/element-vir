import {type PartialWithUndefined} from '@augment-vir/common';
import {
    attributes,
    classMap,
    css,
    defineElementEvent,
    html,
    ifDefined,
    listen,
    type AttributeValues,
    type CSSResult,
} from 'element-vir';
import {Check24Icon, viraIconCssVars} from '../icons/index.js';
import {viraDisabledStyles} from '../styles/disabled.js';
import {viraFormCssVars} from '../styles/form-themes.js';
import {defineViraElement} from './define-vira-element.js';
import {ViraIcon} from './vira-icon.element.js';

export type ViraCheckboxInnerElements = 'label' | 'custom-checkbox' | typeof ViraIcon.tagName;

export type ViraCheckboxInputs = PartialWithUndefined<{
    stylePassthrough: Record<ViraCheckboxInnerElements, CSSResult>;
    attributePassthrough: Record<ViraCheckboxInnerElements, AttributeValues>;
    disabled: boolean;
}> & {
    value: boolean;
};

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
            border-radius: 4px;
            display: inline-block;
            position: relative;
            cursor: pointer;

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
        return html`
            <label
                class=${classMap({
                    disabled: !!inputs.disabled,
                })}
                ${attributes(inputs.attributePassthrough?.label)}
                style=${ifDefined(inputs.stylePassthrough?.label)}
                ${listen('click', () => {
                    if (!inputs.disabled) {
                        dispatch(new events.valueChange(!inputs.value));
                    }
                })}
            >
                <span
                    class="custom-checkbox ${classMap({
                        checked: inputs.value,
                        disabled: !!inputs.disabled,
                    })}"
                    ${attributes(inputs.attributePassthrough?.['custom-checkbox'])}
                    style=${ifDefined(inputs.stylePassthrough?.['custom-checkbox'])}
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
