import {check} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {nav, navAttribute, NavController, NavValue} from 'device-navigation';
import {classMap, css, html, ifDefined, testId} from 'element-vir';
import {viraFormCssVars} from '../../styles/form-styles.js';
import {noNativeFormStyles, viraDisabledStyles} from '../../styles/index.js';
import {defineViraElement} from '../define-vira-element.js';
import {ViraLink} from '../vira-link.element.js';
import {assertUniqueIdProps} from './pop-up-helpers.js';
import {type MenuItem} from './pop-up-menu-item.js';
import {ViraMenuItem} from './vira-menu-item.element.js';

/**
 * Test ids for {@link ViraMenu}.
 *
 * @category Internal
 */
export const viraMenuTestIds = {
    item: 'menu-item',
};

/**
 * A wrapper for menu items. This can be used for dropdown items or menu bar dropdowns. To detect
 * when items are selected or unselected, pass in a `NavController` instance and hook into its
 * events.
 *
 * @category PopUp
 * @category Elements
 */
export const ViraMenu = defineViraElement<
    Readonly<
        {
            /**
             * The parent nav controller for this menu. If none is provided, an internal nav
             * controller is created (which means it can't be hooked into by external elements).
             *
             * It is recommended to not leave this `undefined`.
             */
            navController: NavController | undefined;
            /** All menu items to show to the user. */
            items: ReadonlyArray<Readonly<MenuItem>>;
        } & PartialWithUndefined<{
            /** The ids of the currently selected menu items. */
            selected: ReadonlyArray<PropertyKey>;
            isMultiSelect: boolean;
            /** Hide menu item check mark icons. */
            hideCheckIcons: boolean;
        }>
    >
>()({
    tagName: 'vira-menu',
    state({inputs, host}) {
        return {
            internalNavController: inputs.navController || new NavController(host),
        };
    },
    hostClasses: {
        'vira-menu-multiselect': ({inputs}) => !!inputs.isMultiSelect,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            flex-direction: column;

            width: 100%;
            max-width: 100%;
            max-height: 100%;
            overflow-y: auto;
            overscroll-behavior: contain;
            z-index: 100;
            box-sizing: border-box;
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
        }

        .menu-item {
            ${noNativeFormStyles};
            will-change: background-color;
            background-color: inherit;
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

        ${hostClasses['vira-menu-multiselect'].selector} {
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
        assertUniqueIdProps(inputs.items);

        const itemTemplates = inputs.items.map((item) => {
            const selected = !!inputs.selected?.includes(item.id);
            const innerTemplate = check.isString(item.label)
                ? html`
                      <${ViraMenuItem.assign({
                          label: item.label,
                          selected,
                          hideCheckIcon: inputs.hideCheckIcons,
                      })}></${ViraMenuItem}>
                  `
                : item.label;

            const disabled = item.disabled || (!inputs.isMultiSelect && selected);

            if (item.route) {
                return html`
                    <${ViraLink.assign({
                        route: item.route,
                    })}
                        class="menu-item ${classMap({
                            disabled: !!item.disabled,
                            selected,
                        })}"
                        ${testId(viraMenuTestIds.item)}
                        title=${ifDefined(item.titleText || undefined)}
                        role="option"
                        ${nav(state.internalNavController, {disabled})}
                    >
                        ${innerTemplate}
                    </${ViraLink}>
                `;
            } else {
                return html`
                    <button
                        class="menu-item ${classMap({
                            disabled: !!item.disabled,
                            selected,
                        })}"
                        ${testId(viraMenuTestIds.item)}
                        title=${ifDefined(item.titleText || undefined)}
                        role="option"
                        ${nav(state.internalNavController, {disabled})}
                    >
                        ${innerTemplate}
                    </button>
                `;
            }
        });

        return html`
            ${itemTemplates}
        `;
    },
});
