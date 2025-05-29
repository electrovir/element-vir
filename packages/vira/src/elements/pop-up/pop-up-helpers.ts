import {joinWithFinalConjunction} from '@augment-vir/common';
import {type PopUpManager, type ShowPopUpResult} from '../../util/pop-up-manager.js';
import {type MenuItem} from './vira-menu-item.element.js';

/**
 * Filters an array of {@link ViraDropdownOption} based on the given selection.
 *
 * @category Internal
 */
export function filterToSelectedOptions({
    selected,
    options,
    isMultiSelect,
}: Readonly<{
    selected: ReadonlyArray<PropertyKey>;
    isMultiSelect?: boolean | undefined;
    options: ReadonlyArray<Readonly<MenuItem>>;
}>): MenuItem[] {
    if (selected.length && options.length) {
        const selectedOptions = options.filter((option) => selected.includes(option.id));

        if (selectedOptions.length > 1 && !isMultiSelect) {
            console.error(
                `vira-dropdown has multiple selections but \`isMultiSelect\` is not \`true\`. Truncating to the first selection.`,
            );
            return selectedOptions.slice(0, 1);
        } else {
            return selectedOptions;
        }
    } else {
        return [];
    }
}

/**
 * Verifies that all options have unique ids.
 *
 * @category Internal
 */
export function assertUniqueIdProps(options: ReadonlyArray<Readonly<{id: PropertyKey}>>) {
    const usedIds = new Set<PropertyKey>();
    const duplicateIds: PropertyKey[] = [];
    options.forEach((option) => {
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
export function createNewSelection(
    /** The id of the option that should be newly selected. */
    id: PropertyKey,
    currentSelection: ReadonlyArray<PropertyKey>,
    isMultiSelect: boolean,
): PropertyKey[] {
    if (isMultiSelect) {
        return currentSelection.includes(id)
            ? currentSelection.filter((entry) => entry !== id)
            : [
                  ...currentSelection,
                  id,
              ];
    } else {
        return [id];
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
