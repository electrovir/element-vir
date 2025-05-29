import {assert} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {NavController, type Coords} from 'device-navigation';
import {classMap, css, defineElementEvent, html, listen, renderIf} from 'element-vir';
import {createFocusStyles, viraFocusCssVars} from '../../styles/focus.js';
import {viraFormCssVars} from '../../styles/form-themes.js';
import {noNativeFormStyles, noUserSelect, viraDisabledStyles} from '../../styles/index.js';
import {
    HidePopUpEvent,
    NavSelectEvent,
    PopUpManager,
    type ShowPopUpResult,
} from '../../util/pop-up-manager.js';
import {defineViraElement} from '../define-vira-element.js';
import {triggerPopUpState} from './pop-up-helpers.js';

/**
 * Offsets applied to any menu opened by {@link ViraPopUpTrigger}.
 *
 * @category Internal
 */
export type PopUpOffset = PartialWithUndefined<{
    vertical: number;
    right: number;
    left: number;
}>;

/**
 * An element with slots for a pop-up trigger and pop-up contents.
 *
 * @category PopUp
 * @category Elements
 * @see https://electrovir.github.io/element-vir/vira/book/elements/vira-pop-up-trigger
 */
export const ViraPopUpTrigger = defineViraElement<
    PartialWithUndefined<{
        isDisabled: boolean;
        /** For debugging purposes only. Very bad for actual production code use. */
        z_debug_forceOpenState: boolean;
        /** Set to `true` to keep the pop-up open if it is interacted with. */
        keepOpenAfterInteraction: boolean;
        /** All values in px. */
        popUpOffset?: PopUpOffset;
    }>
>()({
    tagName: 'vira-pop-up-trigger',
    state({host}) {
        return {
            /** `undefined` means the pop up is not currently showing. */
            showPopUpResult: undefined as ShowPopUpResult | undefined,
            popUpManager: new PopUpManager(new NavController(host, {activateOnMouseUp: true})),
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
            display: inline-flex;
            box-sizing: border-box;
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
            flex-grow: 1;
            box-sizing: border-box;
        }

        ${createFocusStyles({
            selector: '.dropdown-wrapper:focus',
            elementBorderSize: 1,
        })}

        .dropdown-trigger {
            box-sizing: border-box;
            ${noUserSelect};
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

            & > * {
                pointer-events: auto;
            }
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
        }
    `,
    events: {
        navSelect: defineElementEvent<Coords>(),
        /**
         * - `undefined` indicates that the pop-up just closed.
         * - {@link ShowPopUpResult} indicates that the pop-up just opened.
         */
        openChange: defineElementEvent<ShowPopUpResult | undefined>(),
        init: defineElementEvent<{
            navController: NavController;
            popUpManager: PopUpManager;
        }>(),
    },
    cleanup({state, updateState}) {
        updateState({showPopUpResult: undefined});
        state.popUpManager.destroy();
    },
    init({state, updateState, host, inputs, dispatch, events}) {
        /** Refocus the trigger and set the result to `undefined` when the pop up closes. */
        state.popUpManager.listen(HidePopUpEvent, () => {
            updateState({showPopUpResult: undefined});
            dispatch(new events.openChange(undefined));
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
            if (!inputs.keepOpenAfterInteraction) {
                triggerPopUpState({
                    open: false,
                    callback(showPopUpResult) {
                        updateState({
                            showPopUpResult,
                        });
                    },
                    host,
                    popUpManager: state.popUpManager,
                });
            }
            dispatch(new events.navSelect(event.detail));
        });

        dispatch(
            new events.init({
                navController: state.popUpManager.navController,
                popUpManager: state.popUpManager,
            }),
        );
    },
    render({dispatch, events, state, inputs, updateState, host, slotNames}) {
        function triggerPopUp(
            {emitEvent, open}: {emitEvent: boolean; open: boolean},
            event: Event | undefined,
        ) {
            if (state.showPopUpResult && inputs.keepOpenAfterInteraction && event) {
                const dropdownTrigger = host.shadowRoot.querySelector('.dropdown-trigger');
                if (dropdownTrigger && !event.composedPath().includes(dropdownTrigger)) {
                    /**
                     * Prevent closing the pop-up when `keepOpenAfterInteraction` is turned on and
                     * the pop-up was interacted with.
                     */
                    return;
                }
            }
            triggerPopUpState({
                open,
                callback(showPopUpResult) {
                    updateState({showPopUpResult});
                    if (emitEvent) {
                        dispatch(new events.openChange(showPopUpResult));
                    }
                },
                host,
                popUpManager: state.popUpManager,
            });
        }

        if (inputs.isDisabled) {
            triggerPopUp({open: false, emitEvent: false}, undefined);
        } else if (inputs.z_debug_forceOpenState != undefined) {
            if (!inputs.z_debug_forceOpenState && state.showPopUpResult) {
                triggerPopUp({emitEvent: false, open: false}, undefined);
            } else if (inputs.z_debug_forceOpenState && !state.showPopUpResult) {
                triggerPopUp({emitEvent: false, open: true}, undefined);
            }
        }

        /**
         * These styles do _not_ account for window resizing while the menu is open. I decided this
         * was not a major enough problem to tackle. If it becomes major enough in the future,
         * you'll need to hook into a window _or_ container resize listener inside `PopUpManager`
         * and emit a new `ShowPopUpResult` instance when it changes.
         */
        const positionerStyles = state.showPopUpResult
            ? state.showPopUpResult.popDown
                ? /** Dropdown going down position. */
                  css`
                      bottom: -${state.showPopUpResult.positions.diff.bottom}px;
                      top: calc(100% + ${inputs.popUpOffset?.vertical || 0}px);
                      left: ${inputs.popUpOffset?.left || 0}px;
                      right: ${inputs.popUpOffset?.right || 0}px;
                  `
                : /** Dropdown going up position. */
                  css`
                      top: -${state.showPopUpResult.positions.diff.top}px;
                      bottom: calc(100% + ${inputs.popUpOffset?.vertical || 0}px);
                      left: ${inputs.popUpOffset?.left || 0}px;
                      right: ${inputs.popUpOffset?.right || 0}px;
                  `
            : undefined;

        function respondToClick(event: Event) {
            triggerPopUp({emitEvent: true, open: !state.showPopUpResult}, event);
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
                        triggerPopUp({emitEvent: true, open: true}, event);
                    }
                })}
                ${listen('click', (event) => {
                    /** Detail is 0 if it was a keyboard key (like Enter) that triggered this click. */
                    if (event.detail === 0) {
                        respondToClick(event);
                    }
                })}
                ${listen('mousedown', (event) => {
                    /** Ignore any clicks that aren't the main button. */
                    if (event.button === 0) {
                        respondToClick(event);
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
