import {type PartialWithUndefined} from '@augment-vir/common';
import {type NavController} from 'device-navigation';
import {classMap, css, defineElementEvent, html, listen, nothing, testId} from 'element-vir';
import {type PopUpManager, type ShowPopUpResult} from '../../util/pop-up-manager.js';
import {defineViraElement} from '../define-vira-element.js';
import {updateSelectedItems} from './pop-up-helpers.js';
import {type MenuItem} from './pop-up-menu-item.js';
import {ViraMenu} from './vira-menu.element.js';
import {
    PopUpMenuDirection,
    ViraPopUpMenu,
    type PopUpMenuCornerStyle,
} from './vira-pop-up-menu.element.js';
import {
    HorizontalAnchor,
    ViraPopUpTrigger,
    type PopUpOffset,
} from './vira-pop-up-trigger.element.js';

/**
 * Test ids for {@link ViraMenuTrigger}.
 *
 * @category Internal
 */
export const viraMenuTriggerTestIds = {
    menu: 'menu-trigger-menu',
};

/**
 * A more specific wrapper of `ViraPopUpTrigger` that always opens a menu.
 *
 * @category PopUp
 * @category Elements
 */
export const ViraMenuTrigger = defineViraElement<
    {
        items: ReadonlyArray<Readonly<MenuItem>>;
    } & PartialWithUndefined<{
        /** The selected item ids from the given `items` object. */
        selected: ReadonlyArray<PropertyKey>;
        isDisabled: boolean;
        isMultiSelect: boolean;
        z_debug_forceOpenState: boolean;
        popUpOffset: PopUpOffset;
        /** Hide menu item check mark icons. */
        hideCheckIcons: boolean;
        menuCornerStyle: PopUpMenuCornerStyle;
        /**
         * - `HorizontalAnchor.Left`: pop-up is anchored to the left side of the trigger and the
         *   pop-up can grow to the right.
         * - `HorizontalAnchor.Right`: pop-up is anchored to the right side of the trigger and the
         *   pop-up can grow to the left.
         * - `HorizontalAnchor.Both`: pop-up is anchored on both sides of the trigger and cannot grow
         *   beyond it.
         *
         * Note that when `HorizontalAnchor.Both` is _not_ used, this anchor will cancel out any
         * `popUpOffset` for the direction _opposite_ of the chosen anchor.
         *
         * @default HorizontalAnchor.Left
         */
        horizontalAnchor: HorizontalAnchor;
    }>
>()({
    tagName: 'vira-menu-trigger',
    styles: css`
        :host {
            display: inline-flex;
            box-sizing: border-box;
            vertical-align: middle;
            max-width: 100%;
        }

        ${ViraPopUpTrigger} {
            width: 100%;
        }

        .full-width-menu {
            width: 100%;
        }
    `,
    events: {
        itemActivate: defineElementEvent<PropertyKey[]>(),
        openChange: defineElementEvent<ShowPopUpResult | undefined>(),
    },
    state() {
        return {
            navController: undefined as undefined | NavController,
            popUpManager: undefined as undefined | PopUpManager,
            /** `undefined` means the pop up is not currently showing. */
            showPopUpResult: undefined as ShowPopUpResult | undefined,
        };
    },
    render({inputs, state, updateState, dispatch, events}) {
        return html`
            <${ViraPopUpTrigger.assign({
                isDisabled: inputs.isDisabled,
                keepOpenAfterInteraction: true,
                z_debug_forceOpenState: inputs.z_debug_forceOpenState,
                popUpOffset: inputs.popUpOffset,
                horizontalAnchor: inputs.horizontalAnchor || HorizontalAnchor.Left,
            })}
                class=${classMap({
                    open: !!state.showPopUpResult,
                })}
                ${listen(ViraPopUpTrigger.events.init, (event) => {
                    updateState({
                        navController: event.detail.navController,
                        popUpManager: event.detail.popUpManager,
                    });
                })}
                ${listen(ViraPopUpTrigger.events.openChange, (event) => {
                    if (!!state.showPopUpResult !== !!event.detail) {
                        dispatch(new events.openChange(event.detail));
                    }
                    updateState({
                        showPopUpResult: event.detail,
                    });
                })}
                ${listen(ViraPopUpTrigger.events.navSelect, (event) => {
                    const itemIndex = event.detail.x;
                    const item = inputs.items[itemIndex];
                    if (!item) {
                        throw new Error(`Found no dropdown option at index '${itemIndex}'`);
                    }

                    dispatch(
                        new events.itemActivate(
                            updateSelectedItems(item, inputs.selected, inputs.isMultiSelect),
                        ),
                    );
                    if (!inputs.isMultiSelect) {
                        /**
                         * Defer pop up removal to prevent race conditions with element-internal
                         * click handlers.
                         */
                        globalThis.setTimeout(() => state.popUpManager?.removePopUp());
                    }
                })}
            >
                <slot slot=${ViraPopUpTrigger.slotNames.trigger}></slot>
                ${state.navController && state.showPopUpResult
                    ? html`
                          <${ViraPopUpMenu.assign({
                              direction: state.showPopUpResult.popDown
                                  ? PopUpMenuDirection.Downwards
                                  : PopUpMenuDirection.Upwards,
                              cornerStyle: inputs.menuCornerStyle,
                          })}
                              slot=${ViraPopUpTrigger.slotNames.popUp}
                              class=${classMap({
                                  'full-width-menu':
                                      inputs.horizontalAnchor === HorizontalAnchor.Both,
                              })}
                          >
                              <${ViraMenu.assign({
                                  items: inputs.items,
                                  selected: inputs.selected,
                                  navController: state.navController,
                                  isMultiSelect: !!inputs.isMultiSelect,
                                  hideCheckIcons: inputs.hideCheckIcons,
                              })}
                                  ${testId(viraMenuTriggerTestIds.menu)}
                              ></${ViraMenu}>
                          </${ViraPopUpMenu}>
                      `
                    : nothing}
            </${ViraPopUpTrigger}>
        `;
    },
});
