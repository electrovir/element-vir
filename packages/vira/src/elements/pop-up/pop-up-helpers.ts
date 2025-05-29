import {joinWithFinalConjunction} from '@augment-vir/common';
import {type PopUpManager, type ShowPopUpResult} from '../../util/pop-up-manager.js';
import {type MenuItem} from './pop-up-menu-item.js';

/**
 * Verifies that all items have unique ids.
 *
 * @category Internal
 */
export function assertUniqueIdProps(items: ReadonlyArray<Readonly<{id: PropertyKey}>>) {
    const usedIds = new Set<PropertyKey>();
    const duplicateIds: PropertyKey[] = [];
    items.forEach((option) => {
        if (usedIds.has(option.id)) {
            duplicateIds.push(option.id);
        } else {
            usedIds.add(option.id);
        }
    });

    if (duplicateIds.length) {
        throw new Error(
            `Duplicate option ids were given: ${joinWithFinalConjunction(duplicateIds)}`,
        );
    }
}

/**
 * Creates a new array of selections based on the current selection and new selection id. This
 * behaves differently when multi select is enabled, hence this function.
 *
 * @category Internal
 */
export function updateSelectedItems(
    /** The item that should be newly toggled. */
    newItem: Readonly<MenuItem>,
    currentSelection: ReadonlyArray<PropertyKey> = [],
    isMultiSelect: boolean = false,
): PropertyKey[] {
    if (isMultiSelect) {
        return currentSelection.includes(newItem.id)
            ? currentSelection.filter((entry) => entry !== newItem.id)
            : [
                  ...currentSelection,
                  newItem.id,
              ];
    } else {
        /** In single select, only the toggled item is allowed. */
        return [newItem.id];
    }
}

/**
 * Handles toggling pop up state for `ViraDropdown`.
 *
 * @category Internal
 */
export function triggerPopUpState({
    open,
    callback,
    popUpManager,
    host,
}: {
    open: boolean;
    popUpManager: PopUpManager;
    host: HTMLElement;
    callback?: ((showPopUpResult: ShowPopUpResult | undefined) => void) | undefined;
}) {
    if (open) {
        const showPopUpResult = popUpManager.showPopUp(host);
        callback?.(showPopUpResult);
    } else {
        popUpManager.removePopUp();
        callback?.(undefined);
    }
}
