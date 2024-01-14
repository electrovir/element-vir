import {css, defineElementEvent, html, listen} from 'element-vir';
import {FullRoute, SpaRouter, shouldMouseEventTriggerRoutes} from 'spa-router-vir';
import {defineViraElement} from './define-vira-element';

export const ViraLink = defineViraElement<{
    /**
     * A full raw URL link that will navigate the current window away or open a new tab. If this
     * property is provided for the inputs, don't provide a route property.
     */
    link?: {
        url: string;
        newTab: boolean;
    };
    /**
     * A route that'll change that current page without navigating the window. If this property is
     * provided for the inputs, don't provide a link property.
     */
    route?: {
        route: FullRoute;
        router: Pick<SpaRouter, 'createRoutesUrl'>;
        scrollToTop?: boolean;
    };
}>()({
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
    events: {
        routeChange: defineElementEvent<FullRoute>(),
    },
    renderCallback({inputs, dispatch, events}) {
        function clickCallback(clickEvent: MouseEvent) {
            if (!inputs.route) {
                return;
            }

            if (shouldMouseEventTriggerRoutes(clickEvent)) {
                clickEvent.preventDefault();
                if (inputs.route.scrollToTop) {
                    window.scrollTo(0, 0);
                }
                dispatch(new events.routeChange(inputs.route.route));
            }
        }

        if (inputs.link?.newTab) {
            /** Noopener and noreferrer are needed for security reasons, do not remove! */
            return html`
                <a href=${inputs.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;
        } else {
            const linkUrl = inputs.link
                ? inputs.link.url
                : inputs.route?.router.createRoutesUrl(inputs.route.route);

            /** Noopener and noreferrer are needed for security reasons, do not remove! */
            return html`
                <a href=${linkUrl} rel="noopener noreferrer" ${listen('click', clickCallback)}>
                    <slot></slot>
                </a>
            `;
        }
    },
});
