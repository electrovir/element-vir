import {type PartialWithUndefined} from '@augment-vir/common';
import {type HTMLTemplateResult} from 'element-vir';
import {ViraMenuItem} from './vira-menu-item.element.js';

/**
 * An individual menu item consumed partially by `ViraMenuItem` and used by `ViraMenu`.
 *
 * @category Internal
 */
export type MenuItem = {
    /** Each `id` must be unique across all items in a single menu. */
    id: PropertyKey;
    /** The user-facing label for this menu item. */
    label: string;
} & PartialWithUndefined<{
    disabled: boolean;
    /** Text assigned to the `title` HTML attribute that'll show on long hover. */
    titleText: string;
    /**
     * An optional custom template for this menu item. This will replace the menu item text and icon
     * content, but will still be styled correctly if used within `ViraMenu`. Feel free to use
     * {@link ViraMenuItem} as the template with a custom `<slot>` to keep the selected checkmark
     * functionality.
     */
    template: HTMLTemplateResult;
}>;
