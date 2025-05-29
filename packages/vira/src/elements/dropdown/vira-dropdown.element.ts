import {type PartialWithUndefined} from '@augment-vir/common';
import {type NavController} from 'device-navigation';
import {
    classMap,
    css,
    defineElementEvent,
    html,
    ifDefined,
    listen,
    nothing,
    testId,
} from 'element-vir';
import {type ViraIconSvg} from '../../icons/icon-svg.js';
import {ChevronUp24Icon} from '../../icons/index.js';
import {viraBorders} from '../../styles/border.js';
import {viraFocusCssVars} from '../../styles/focus.js';
import {viraFormCssVars} from '../../styles/form-themes.js';
import {noUserSelect, viraAnimationDurations, viraDisabledStyles} from '../../styles/index.js';
import {viraShadows} from '../../styles/shadows.js';
import {type PopUpManager, type ShowPopUpResult} from '../../util/pop-up-manager.js';
import {defineViraElement} from '../define-vira-element.js';
import {
    assertUniqueIdProps,
    createNewSelection,
    filterToSelectedOptions,
} from '../pop-up/pop-up-helpers.js';
import {ViraPopUpTrigger} from '../pop-up/vira-pop-up-trigger.element.js';
import {ViraIcon} from '../vira-icon.element.js';
import {type ViraDropdownOption} from './vira-dropdown-item.element.js';
import {ViraDropdownOptions} from './vira-dropdown-options.element.js';

/**
 * Test ids for {@link ViraDropdown}.
 *
 * @category Internal
 */
export const viraDropdownTestIds = {
    trigger: 'dropdown-trigger',
    icon: 'dropdown-icon',
    prefix: 'dropdown-prefix',
    options: 'dropdown-options',
};

/**
 * The main dropdown element that should be use directly.
 *
 * @category Dropdown
 * @category Elements
 * @see https://electrovir.github.io/element-vir/vira/book/elements/dropdown/vira-dropdown
 */
export const ViraDropdown = defineViraElement<
    {
        options: ReadonlyArray<Readonly<ViraDropdownOption>>;
        /** The selected id from the given options. */
        selected: ReadonlyArray<PropertyKey>;
    } & PartialWithUndefined<{
        /** Text to show if nothing is selected. */
        placeholder: string;
        /**
         * If false, this will behave like a single select dropdown, otherwise you can select
         * multiple.
         */
        isMultiSelect: boolean;
        /**
         * Shows the selection quantity rather than a list of selections. Only used when
         * `isMultiSelect` is `true`.
         */
        showSelectionCount: boolean;
        icon: ViraIconSvg;
        selectionPrefix: string;
        isDisabled: boolean;
        /** For debugging purposes only. Very bad for actual production code use. */
        z_debug_forceOpenState: boolean;
    }>
>()({
    tagName: 'vira-dropdown',
    state() {
        return {
            navController: undefined as undefined | NavController,
            popUpManager: undefined as undefined | PopUpManager,
            /** `undefined` means the pop up is not currently showing. */
            showPopUpResult: undefined as ShowPopUpResult | undefined,
        };
    },
    hostClasses: {
        'vira-dropdown-disabled': ({inputs}) => !!inputs.isDisabled,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${viraFocusCssVars['vira-focus-outline-color'].name}: ${viraFormCssVars[
                'vira-form-focus-color'
            ].value};
            position: relative;
            max-width: 100%;
        }

        ${ViraPopUpTrigger} {
            width: 100%;
        }

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(180deg);
            transition: ${viraAnimationDurations['vira-interaction-animation-duration'].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .open .dropdown-trigger .trigger-icon {
            transform: rotate(0);
        }

        .open:not(.open-upwards) .dropdown-trigger {
            border-bottom-left-radius: 0;
        }

        .open-upwards.open .dropdown-trigger {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            ${noUserSelect};
            border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            border-radius: ${viraBorders['vira-form-input-radius'].value};
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
        }

        .open-upwards ${ViraDropdownOptions} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${viraShadows.menuShadowReversed}
        }

        ${hostClasses['vira-dropdown-disabled'].selector} {
            ${viraDisabledStyles}
            pointer-events: auto;
        }

        ${hostClasses['vira-dropdown-disabled'].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .using-placeholder {
            opacity: 0.4;
        }
    `,
    events: {
        selectedChange: defineElementEvent<PropertyKey[]>(),
        openChange: defineElementEvent<boolean>(),
    },
    render({state, inputs, dispatch, events, updateState}) {
        assertUniqueIdProps(inputs.options);

        const selectedOptions: ReadonlyArray<Readonly<ViraDropdownOption>> =
            filterToSelectedOptions(inputs);

        const leadingIconTemplate = inputs.icon
            ? html`
                  <${ViraIcon.assign({
                      icon: inputs.icon,
                  })}
                      ${testId(viraDropdownTestIds.icon)}
                  ></${ViraIcon}>
              `
            : nothing;

        const shouldUsePlaceholder: boolean = !selectedOptions.length;

        const prefixTemplate =
            inputs.selectionPrefix && !shouldUsePlaceholder
                ? html`
                      <span class="selected-label-prefix" ${testId(viraDropdownTestIds.prefix)}>
                          ${inputs.selectionPrefix}
                      </span>
                  `
                : nothing;

        const selectionDisplay: string = shouldUsePlaceholder
            ? inputs.placeholder || ''
            : inputs.isMultiSelect && inputs.showSelectionCount
              ? `${selectedOptions.length} Selected`
              : inputs.isMultiSelect
                ? selectedOptions.map((item) => item.label).join(', ')
                : selectedOptions[0]?.label || '';

        return html`
            <${ViraPopUpTrigger.assign({
                isDisabled: inputs.isDisabled,
                keepOpenAfterInteraction: true,
                z_debug_forceOpenState: inputs.z_debug_forceOpenState,
                popUpOffset: {
                    vertical: -1,
                    right: 24,
                },
            })}
                class=${classMap({
                    open: !!state.showPopUpResult,
                    'open-upwards': !state.showPopUpResult?.popDown,
                })}
                ${listen(ViraPopUpTrigger.events.init, (event) => {
                    updateState({
                        navController: event.detail.navController,
                        popUpManager: event.detail.popUpManager,
                    });
                })}
                ${listen(ViraPopUpTrigger.events.openChange, (event) => {
                    if (!!state.showPopUpResult !== !!event.detail) {
                        dispatch(new events.openChange(!!event.detail));
                    }
                    updateState({
                        showPopUpResult: event.detail,
                    });
                })}
                ${listen(ViraPopUpTrigger.events.navSelect, (event) => {
                    const optionIndex = event.detail.x;
                    const option = inputs.options[optionIndex];
                    if (!option) {
                        throw new Error(`Found no dropdown option at index '${optionIndex}'`);
                    }

                    dispatch(
                        new events.selectedChange(
                            createNewSelection(option.id, inputs.selected, !!inputs.isMultiSelect),
                        ),
                    );
                    if (!inputs.isMultiSelect) {
                        state.popUpManager?.removePopUp();
                    }
                })}
            >
                <div
                    slot=${ViraPopUpTrigger.slotNames.trigger}
                    class="dropdown-trigger"
                    ${testId(viraDropdownTestIds.trigger)}
                >
                    ${leadingIconTemplate}
                    <span
                        class="selection-display ${classMap({
                            'using-placeholder': shouldUsePlaceholder,
                        })}"
                        title=${ifDefined(
                            shouldUsePlaceholder ||
                                (inputs.isMultiSelect && inputs.showSelectionCount)
                                ? undefined
                                : selectionDisplay,
                        )}
                    >
                        ${prefixTemplate} ${selectionDisplay}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${ViraIcon.assign({icon: ChevronUp24Icon})}
                            class="trigger-icon"
                        ></${ViraIcon}>
                    </span>
                </div>
                ${state.navController && state.showPopUpResult
                    ? html`
                          <${ViraDropdownOptions.assign({
                              options: inputs.options,
                              selectedOptions,
                              navController: state.navController,
                              isMultiSelect: !!inputs.isMultiSelect,
                          })}
                              class=${classMap({
                                  'open-upwards': !state.showPopUpResult.popDown,
                              })}
                              slot=${ViraPopUpTrigger.slotNames.popUp}
                              ${testId(viraDropdownTestIds.options)}
                          ></${ViraDropdownOptions}>
                      `
                    : nothing}
            </${ViraPopUpTrigger}>
        `;
    },
});
