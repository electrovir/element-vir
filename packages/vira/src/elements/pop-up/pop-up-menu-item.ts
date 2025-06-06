import {type PartialWithUndefined} from '@augment-vir/common';
import {type HTMLTemplateResult} from 'element-vir';
import {type ViraLinkRoute} from '../vira-link.element.js';

/**
 * An individual menu item consumed partially by `ViraMenuItem` and used by `ViraMenu`.
 *
 * @category Internal
 */
export type MenuItem = {
    /** Each `id` must be unique across all items in a single menu. */
    id: PropertyKey;
    /**
     * The user-facing label for this menu item.
     *
     * Optionally, this can be a custom HTML template. This will replace the menu item text and icon
     * content, but will still be styled correctly if used within `ViraMenu`. Feel free to use
     * `ViraMenuItem` as the template with a custom `<slot>` to keep the selected checkmark
     * functionality.
     */
    label: string | HTMLTemplateResult;
} & PartialWithUndefined<{
    route: ViraLinkRoute;
    disabled: boolean;
    /** Text assigned to the `title` HTML attribute that'll show on long hover. */
    titleText: string;
}>;
