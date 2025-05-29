import {type PartialWithUndefined} from '@augment-vir/common';
import {type NavController} from 'device-navigation';
import {classMap, defineElementEvent, html, listen, nothing, testId} from 'element-vir';
import {type PopUpManager, type ShowPopUpResult} from '../../util/pop-up-manager.js';
import {defineViraElement} from '../define-vira-element.js';
import {updateSelectedItems} from './pop-up-helpers.js';
import {type MenuItem} from './pop-up-menu-item.js';
import {ViraMenu} from './vira-menu.element.js';
import {ViraPopUpMenu} from './vira-pop-up-menu.element.js';
import {ViraPopUpTrigger} from './vira-pop-up-trigger.element.js';

/**
 * Test ids for {@link ViraMenuTrigger}.
 *
 * @category Internal
 */
export const viraMenuTriggerTestIds = {
    items: 'menu-trigger-items',
};

export const ViraMenuTrigger = defineViraElement<
    {
        items: ReadonlyArray<Readonly<MenuItem>>;
    } & PartialWithUndefined<{
        /** The selected item ids from the given `items` object. */
        selected: ReadonlyArray<PropertyKey>;
        isDisabled: boolean;
        isMultiSelect: boolean;
        z_debug_forceOpenState: boolean;
    }>
>()({
    tagName: 'vira-menu-trigger',
    events: {
        itemActivate: defineElementEvent<PropertyKey[]>(),
        openChange: defineElementEvent<boolean>(),
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
                        state.popUpManager?.removePopUp();
                    }
                })}
            >
                <slot
                    slot=${ViraPopUpTrigger.slotNames.trigger}
                    name=${ViraPopUpTrigger.slotNames.trigger}
                ></slot>
                ${state.navController && state.showPopUpResult
                    ? html`
                          <${ViraPopUpMenu}
                              class=${classMap({
                                  'open-upwards': !state.showPopUpResult.popDown,
                              })}
                              slot=${ViraPopUpTrigger.slotNames.popUp}
                          >
                              <${ViraMenu.assign({
                                  items: inputs.items,
                                  selected: inputs.selected,
                                  navController: state.navController,
                                  isMultiSelect: !!inputs.isMultiSelect,
                              })}
                                  ${testId(viraMenuTriggerTestIds.items)}
                              ></${ViraMenu}>
                          </${ViraPopUpMenu}>
                      `
                    : nothing}
            </${ViraPopUpTrigger}>
        `;
    },
});
