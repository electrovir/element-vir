import {assert} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {NavController, type Coords} from 'device-navigation';
import {classMap, css, defineElementEvent, html, listen, renderIf} from 'element-vir';
import {createFocusStyles, viraFocusCssVars} from '../styles/focus.js';
import {viraFormCssVars} from '../styles/form-themes.js';
import {noNativeFormStyles, noUserSelect, viraDisabledStyles} from '../styles/index.js';
import {viraShadows} from '../styles/shadows.js';
import {
    HidePopUpEvent,
    NavSelectEvent,
    PopUpManager,
    type ShowPopUpResult,
} from '../util/pop-up-manager.js';
import {defineViraElement} from './define-vira-element.js';
import {triggerPopUpState} from './dropdown/dropdown-helpers.js';
import {ViraDropdownOptions} from './dropdown/vira-dropdown-options.element.js';

/**
 * The main dropdown element that should be use directly.
 *
 * @category Dropdown
 * @category Elements
 * @see https://electrovir.github.io/element-vir/vira/book/elements/dropdown/vira-dropdown
 */
export const ViraPopUpTrigger = defineViraElement<
    PartialWithUndefined<{
        isDisabled: boolean;
        /** For debugging purposes only. Very bad for actual production code use. */
        z_debug_forceOpenState: boolean;
        /**
         * Set to `true` to keep the menu open if a nav selection is triggered. Only relevant to
         * pop-ups with internal nav items.
         */
        keepOpenAfterNav: boolean;
    }>
>()({
    tagName: 'vira-pop-up-trigger',
    state({host}) {
        return {
            /** `undefined` means the pop up is not currently showing. */
            showPopUpResult: undefined as ShowPopUpResult | undefined,
            popUpManager: new PopUpManager(new NavController(host)),
        };
    },
    slotNames: [
        'trigger',
        'popUp',
    ],
    hostClasses: {
        'vira-pop-up-trigger-disabled': ({inputs}) => !!inputs.isDisabled,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-block;
            vertical-align: middle;
            ${viraFocusCssVars['vira-focus-outline-color'].name}: ${viraFormCssVars[
                'vira-form-focus-color'
            ].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${noNativeFormStyles};
            cursor: pointer;
            max-width: 100%;
            position: relative;
            outline: none;
        }

        ${createFocusStyles({
            selector: '.dropdown-wrapper:focus',
            elementBorderSize: 1,
        })}

        .dropdown-trigger {
            box-sizing: border-box;
            ${noUserSelect};
        }

        .open-upwards ${ViraDropdownOptions} {
            ${viraShadows.menuShadowReversed}
        }

        ${hostClasses['vira-pop-up-trigger-disabled'].selector} {
            ${viraDisabledStyles}
            pointer-events: auto;
        }

        ${hostClasses['vira-pop-up-trigger-disabled'].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            left: 0;
            right: 0;
            top: 100%;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
        }
    `,
    events: {
        navSelect: defineElementEvent<Coords>(),
        openChange: defineElementEvent<boolean>(),
    },
    cleanup({state, updateState}) {
        updateState({showPopUpResult: undefined});
        state.popUpManager.destroy();
    },
    init({state, updateState, host, inputs, dispatch, events}) {
        /** Refocus the trigger and set the result to `undefined` when the pop up closes. */
        state.popUpManager.listen(HidePopUpEvent, () => {
            updateState({showPopUpResult: undefined});
            if (!inputs.isDisabled) {
                const dropdownWrapper = host.shadowRoot.querySelector('.dropdown-wrapper');

                assert.instanceOf(
                    dropdownWrapper,
                    HTMLButtonElement,
                    'failed to find dropdown wrapper child',
                );

                dropdownWrapper.focus();
            }
        });
        state.popUpManager.listen(NavSelectEvent, (event) => {
            if (!inputs.keepOpenAfterNav) {
                triggerPopUpState(
                    {emitEvent: true, open: false},
                    {
                        dispatch: (openState) => {
                            dispatch(new events.openChange(openState));
                        },
                        host,
                        popUpManager: state.popUpManager,
                        updateState,
                    },
                );
            }
            dispatch(new events.navSelect(event.detail));
        });
    },
    render({dispatch, events, state, inputs, updateState, host, slotNames}) {
        function triggerPopUp(param: Parameters<typeof triggerPopUpState>[0]) {
            triggerPopUpState(param, {
                dispatch: (openState) => {
                    dispatch(new events.openChange(openState));
                },
                host,
                popUpManager: state.popUpManager,
                updateState,
            });
        }

        if (inputs.isDisabled) {
            triggerPopUp({open: false, emitEvent: false});
        } else if (inputs.z_debug_forceOpenState != undefined) {
            if (!inputs.z_debug_forceOpenState && state.showPopUpResult) {
                triggerPopUp({emitEvent: false, open: false});
            } else if (inputs.z_debug_forceOpenState && !state.showPopUpResult) {
                triggerPopUp({emitEvent: false, open: true});
            }
        }

        const positionerStyles = state.showPopUpResult
            ? state.showPopUpResult.popDown
                ? /** Dropdown going down position. */
                  css`
                      bottom: -${state.showPopUpResult.positions.diff.bottom}px;
                  `
                : /** Dropdown going up position. */
                  css`
                      top: -${state.showPopUpResult.positions.diff.top}px;
                  `
            : undefined;

        function respondToClick() {
            triggerPopUp({emitEvent: true, open: !state.showPopUpResult});
        }

        return html`
            <button
                ?disabled=${!!inputs.isDisabled}
                class="dropdown-wrapper ${classMap({
                    open: !!state.showPopUpResult,
                    'open-upwards': !state.showPopUpResult?.popDown,
                })}"
                role="listbox"
                aria-expanded=${!!state.showPopUpResult}
                ${listen('keydown', (event) => {
                    if (!state.showPopUpResult && event.code.startsWith('Arrow')) {
                        triggerPopUp({emitEvent: true, open: true});
                    }
                })}
                ${listen('click', (event) => {
                    /** Detail is 0 if it was a keyboard key (like Enter) that triggered this click. */
                    if (event.detail === 0) {
                        respondToClick();
                    }
                })}
                ${listen('mousedown', (event) => {
                    /** Ignore any clicks that aren't the main button. */
                    if (event.button === 0) {
                        respondToClick();
                    }
                })}
            >
                <div class="dropdown-trigger">
                    <slot name=${slotNames.trigger}></slot>
                </div>
                <div class="pop-up-positioner" style=${positionerStyles}>
                    ${renderIf(
                        !!state.showPopUpResult,
                        html`
                            <slot name=${slotNames.popUp}></slot>
                        `,
                    )}
                </div>
            </button>
        `;
    },
});
