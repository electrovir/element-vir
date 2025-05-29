import {type PartialWithUndefined} from '@augment-vir/common';
import {type NavController} from 'device-navigation';
import {classMap, css, defineElementEvent, html, listen, nothing, testId} from 'element-vir';
import {type PopUpManager, type ShowPopUpResult} from '../../util/pop-up-manager.js';
import {defineViraElement} from '../define-vira-element.js';
import {updateSelectedItems} from './pop-up-helpers.js';
import {type MenuItem} from './pop-up-menu-item.js';
import {ViraMenu} from './vira-menu.element.js';
import {ViraPopUpMenu} from './vira-pop-up-menu.element.js';
import {ViraPopUpTrigger, type PopUpOffset} from './vira-pop-up-trigger.element.js';

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
    `,
    events: {
        itemActivate: defineElementEvent<PropertyKey[]>(),
        openChange: defineElementEvent<ShowPopUpResult | undefined>(),
    },
    slotNames: ['trigger'],
    state() {
        return {
            navController: undefined as undefined | NavController,
            popUpManager: undefined as undefined | PopUpManager,
            /** `undefined` means the pop up is not currently showing. */
            showPopUpResult: undefined as ShowPopUpResult | undefined,
        };
    },
    render({inputs, state, updateState, dispatch, events, slotNames}) {
        return html`
            <${ViraPopUpTrigger.assign({
                isDisabled: inputs.isDisabled,
                keepOpenAfterInteraction: true,
                z_debug_forceOpenState: inputs.z_debug_forceOpenState,
                popUpOffset: inputs.popUpOffset,
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
                        state.popUpManager?.removePopUp();
                    }
                })}
            >
                <slot slot=${slotNames.trigger} name=${ViraPopUpTrigger.slotNames.trigger}></slot>
                ${state.navController && state.showPopUpResult
                    ? html`
                          <${ViraPopUpMenu.assign({
                              openUpwards: !state.showPopUpResult.popDown,
                          })}
                              slot=${ViraPopUpTrigger.slotNames.popUp}
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
