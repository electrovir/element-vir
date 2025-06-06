import {type PartialWithUndefined} from '@augment-vir/common';
import {css, html, ifDefined, listen} from 'element-vir';
import {type SpaRoute, type SpaRouter} from 'spa-router-vir';
import {type RequireExactlyOne} from 'type-fest';
import {defineViraElement} from './define-vira-element.js';

/**
 * The route properties required for using {@link ViraLink} with a route.
 *
 * @category Internal
 */
export type ViraLinkRoute = Readonly<{
    route: SpaRoute<any, any, any>;
    router: Pick<SpaRouter<any, any, any>, 'createRouteUrl' | 'setRouteOnDirectNavigation'>;
    scrollToTop?: boolean;
}>;

/**
 * A hyperlink wrapper element that can be configured to emit route change events rather than just
 * being a raw link.
 *
 * @category Link
 * @category Elements
 * @see https://electrovir.github.io/element-vir/vira/book/elements/vira-link
 */
export const ViraLink = defineViraElement<
    RequireExactlyOne<{
        /**
         * A full raw URL link that will navigate the current window away or open a new tab. If this
         * property is provided for the inputs, don't provide a route property.
         */
        link: {
            url: string;
            newTab: boolean;
        };
        /**
         * A route that'll change that current page without navigating the window. If this property
         * is provided for the inputs, don't provide a link property.
         */
        route: ViraLinkRoute;
    }> &
        PartialWithUndefined<{
            aria?: {
                /**
                 * This label will be attached to the inner `<a>` element's `aria-label` attribute.
                 * If none is provided, no `aria-label` attribute will be generated.
                 */
                label: string;
            };
        }>
>()({
    tagName: 'vira-link',
    cssVars: {
        'vira-link-hover-color': 'currentColor',
    },
    styles: ({cssVars}) => css`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${cssVars['vira-link-hover-color'].value};
        }
    `,
    render({inputs}) {
        function clickCallback(event: MouseEvent) {
            if (!inputs.route) {
                return;
            }

            const routed = inputs.route.router.setRouteOnDirectNavigation(
                inputs.route.route,
                event,
            );

            if (inputs.route.scrollToTop) {
                window.scrollTo({
                    left: 0,
                    top: 0,
                    behavior: routed ? 'instant' : 'smooth',
                });
            }
        }

        if (inputs.link?.newTab) {
            /** Noopener and noreferrer are needed for security reasons, do not remove! */
            return html`
                <a
                    href=${inputs.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label=${ifDefined(inputs.aria?.label || undefined)}
                >
                    <slot></slot>
                </a>
            `;
        } else {
            const linkUrl = inputs.link
                ? inputs.link.url
                : inputs.route.router.createRouteUrl(inputs.route.route);

            /** Noopener and noreferrer are needed for security reasons, do not remove! */
            return html`
                <a
                    href=${linkUrl}
                    rel="noopener noreferrer"
                    aria-label=${ifDefined(inputs.aria?.label || undefined)}
                    ${listen('click', clickCallback)}
                >
                    <slot></slot>
                </a>
            `;
        }
    },
});
