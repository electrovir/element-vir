import {type PartialWithUndefined} from '@augment-vir/common';
import {css, html, type HTMLTemplateResult} from 'element-vir';
import {Check24Icon} from '../../icons/icon-svgs/check-24.icon.js';
import {noUserSelect} from '../../styles/index.js';
import {defineViraElement} from '../define-vira-element.js';
import {ViraIcon} from '../vira-icon.element.js';

/**
 * An individual menu item consumed partially by {@link ViraMenuItem} and used by `ViraMenuOptions`.
 *
 * @category Internal
 */
export type MenuItem = {
    /** Each `id` must be unique across all options. */
    id: PropertyKey;
    /** The user-facing label for this menu item. */
    label: string;
} & PartialWithUndefined<{
    disabled: boolean;
    /** Text assigned to the `title` HTML attribute that'll show on long hover. */
    titleText: string;
    /**
     * An optional custom template for this menu item. This will replace the menu item text and icon
     * content, but will still be styled correctly if used within `ViraMenuOptions`. Feel free to
     * use {@link ViraMenuItem} as the template with a custom `<slot>` to keep the selected checkmark
     * functionality.
     */
    template: HTMLTemplateResult;
}>;

/**
 * An element for an individual menu item.
 *
 * @category PopUp
 * @category Elements
 */
export const ViraMenuItem = defineViraElement<
    Readonly<{
        /**
         * The text to show in the menu item. If this is not provided, it is expected that you will
         * instead utilize this element's `<slot>`.
         */
        label?: MenuItem['label'] | undefined;
        selected: boolean;
    }>
>()({
    tagName: 'vira-menu-item',
    hostClasses: {
        'vira-menu-item-selected': ({inputs}) => inputs.selected,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            ${noUserSelect};
        }

        .item {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${hostClasses['vira-menu-item-selected'].selector} ${ViraIcon} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${ViraIcon} {
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }
    `,
    render({inputs}) {
        return html`
            <div class="item">
                <${ViraIcon.assign({icon: Check24Icon})}></${ViraIcon}>
                <slot>${inputs.label}</slot>
            </div>
        `;
    },
});
