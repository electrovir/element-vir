import {nav, navAttribute, NavController, NavValue} from 'device-navigation';
import {classMap, css, html, ifDefined, testId} from 'element-vir';
import {viraFormCssVars} from '../../styles/form-themes.js';
import {noNativeFormStyles, viraDisabledStyles} from '../../styles/index.js';
import {defineViraElement} from '../define-vira-element.js';
import {assertUniqueIdProps} from './pop-up-helpers.js';
import {ViraMenuItem, type MenuItem} from './vira-menu-item.element.js';

/**
 * Test ids for {@link ViraMenuOptions}.
 *
 * @category Internal
 */
export const viraMenuOptionsTestIds = {
    option: 'dropdown-option',
};

/**
 * A wrapper for menu options. This can be used for dropdown items or menu bar dropdowns. To detect
 * when items are selected or unselected, pass in a `NavController` instance and hook into its
 * events.
 *
 * @category PopUp
 * @category Elements
 */
export const ViraMenuOptions = defineViraElement<
    Readonly<{
        /**
         * The parent nav controller for this menu. If none is provided, an internal nav controller
         * is created (which means it can't be hooked into by external elements).
         */
        navController: NavController | undefined;
        isMultiSelect: boolean;
        /** All dropdown options to show to the user. */
        options: ReadonlyArray<Readonly<MenuItem>>;
        /**
         * The currently selected dropdown options. Note that this must be a reference subset of the
         * options input. Meaning, entries in this array must be the exact same objects (by
         * reference) as entries in the `options` input array for them to be marked as selected.
         */
        selectedOptions: ReadonlyArray<Readonly<MenuItem>>;
    }>
>()({
    tagName: 'vira-menu-options',
    state({inputs, host}) {
        return {
            internalNavController: inputs.navController || new NavController(host),
        };
    },
    hostClasses: {
        'vira-menu-options-multiselect': ({inputs}) => inputs.isMultiSelect,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            flex-direction: column;

            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 100;
            box-sizing: border-box;
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
        }

        .menu-item {
            ${noNativeFormStyles};
            background-color: white;
            outline: none;
            cursor: pointer;
        }

        ${navAttribute.css({
            baseSelector: '.menu-item:not(.disabled):not(.selected)',
            navValue: NavValue.Focused,
        })}, ${navAttribute.css({
            baseSelector: '.menu-item:not(.disabled):not(.selected)',
            navValue: NavValue.Active,
        })}, .menu-item:not(.disabled):not(.selected):hover {
            background-color: ${viraFormCssVars['vira-form-selection-hover-background-color']
                .value};
            outline: none;
        }

        ${hostClasses['vira-menu-options-multiselect'].selector} {
            &
                ${navAttribute.css({
                    baseSelector: '.menu-item:not(.disabled)',
                    navValue: NavValue.Focused,
                })},
                ${navAttribute.css({
                    baseSelector: '.menu-item:not(.disabled)',
                    navValue: NavValue.Active,
                })},
                .menu-item:not(.disabled):hover {
                background-color: ${viraFormCssVars['vira-form-selection-hover-background-color']
                    .value};
                outline: none;
            }
        }

        ${ViraMenuItem} {
            pointer-events: none;
        }

        .menu-item.disabled {
            ${viraDisabledStyles};
            pointer-events: auto;
        }
    `,
    cleanup({inputs, state}) {
        if (!inputs.navController) {
            state.internalNavController.destroy();
        }
    },
    render({inputs, state}) {
        assertUniqueIdProps(inputs.options);

        const optionTemplates = inputs.options.map((option) => {
            const selected = inputs.selectedOptions.includes(option);
            const innerTemplate =
                option.template ||
                html`
                    <${ViraMenuItem.assign({
                        label: option.label,
                        selected,
                    })}></${ViraMenuItem}>
                `;

            const disabled = option.disabled || (!inputs.isMultiSelect && selected);

            return html`
                <button
                    class="menu-item ${classMap({
                        disabled: !!option.disabled,
                        selected,
                    })}"
                    ${testId(viraMenuOptionsTestIds.option)}
                    title=${ifDefined(option.titleText || undefined)}
                    role="option"
                    ${nav(state.internalNavController, {disabled})}
                >
                    ${innerTemplate}
                </button>
            `;
        });

        return html`
            ${optionTemplates}
        `;
    },
});
