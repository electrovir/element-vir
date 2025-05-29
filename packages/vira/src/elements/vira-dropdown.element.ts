import {check} from '@augment-vir/assert';
import {filterMap, type PartialWithUndefined} from '@augment-vir/common';
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
import {type ViraIconSvg} from '../icons/icon-svg.js';
import {ChevronUp24Icon} from '../icons/index.js';
import {viraBorders} from '../styles/border.js';
import {viraFocusCssVars} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-themes.js';
import {noUserSelect, viraAnimationDurations} from '../styles/index.js';
import {type ShowPopUpResult} from '../util/pop-up-manager.js';
import {defineViraElement} from './define-vira-element.js';
import {type MenuItem} from './pop-up/pop-up-menu-item.js';
import {ViraMenuTrigger} from './pop-up/vira-menu-trigger.element.js';
import {ViraIcon} from './vira-icon.element.js';

/**
 * Test ids for {@link ViraDropdown}.
 *
 * @category Internal
 */
export const viraDropdownTestIds = {
    trigger: 'dropdown-trigger',
    icon: 'dropdown-icon',
    prefix: 'dropdown-prefix',
};

/**
 * A dropdown element that uses pop-up menus.
 *
 * @category Dropdown
 * @category Elements
 * @see https://electrovir.github.io/element-vir/vira/book/elements/dropdown/vira-dropdown
 */
export const ViraDropdown = defineViraElement<
    {
        options: ReadonlyArray<Readonly<MenuItem>>;
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
    styles: css`
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

        ${ViraMenuTrigger} {
            width: 100%;
        }

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            align-self: flex-start;
            will-change: transform;
            transform: rotate(180deg);
            transition: transform
                ${viraAnimationDurations['vira-interaction-animation-duration'].value} linear;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .open {
            & .trigger-icon {
                transform: rotate(0);
            }

            &:not(.open-upwards).dropdown-trigger {
                border-bottom-left-radius: 0;
            }

            &.open-upwards.dropdown-trigger {
                border-top-left-radius: 0;
            }
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

        .using-placeholder {
            opacity: 0.4;
        }
    `,
    events: {
        selectedChange: defineElementEvent<PropertyKey[]>(),
        openChange: defineElementEvent<ShowPopUpResult | undefined>(),
    },
    state() {
        return {
            /** `undefined` means the pop up is not currently showing. */
            showPopUpResult: undefined as ShowPopUpResult | undefined,
        };
    },
    render({state, inputs, dispatch, events, updateState}) {
        const selectedOptions = filterMap(
            inputs.selected,
            (selectedId) => inputs.options.find((option) => option.id === selectedId),
            check.isTruthy,
        );

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
            <${ViraMenuTrigger.assign({
                items: inputs.options,
                selected: inputs.selected,
                isDisabled: inputs.isDisabled,
                isMultiSelect: inputs.isMultiSelect,
                z_debug_forceOpenState: inputs.z_debug_forceOpenState,
                popUpOffset: {
                    vertical: -1,
                    right: 24,
                },
            })}
                ${listen(ViraMenuTrigger.events.openChange, (event) => {
                    updateState({showPopUpResult: event.detail});
                    dispatch(new events.openChange(event.detail));
                })}
                ${listen(ViraMenuTrigger.events.itemActivate, (event) => {
                    dispatch(new events.selectedChange(event.detail));
                })}
            >
                <div
                    slot=${ViraMenuTrigger.slotNames.trigger}
                    class="dropdown-trigger ${classMap({
                        open: !!state.showPopUpResult,
                        'open-upwards': !state.showPopUpResult?.popDown,
                    })}"
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
            </${ViraMenuTrigger}>
        `;
    },
});
