import {type PartialWithUndefined} from '@augment-vir/common';
import {css, html} from 'element-vir';
import {defineViraElement} from './define-vira-element.js';

/**
 * A [`<progress>`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress)
 * alternative that supports custom styling in _all_ browsers via host styles or CSS variables _and_
 * prevents background bleed-through on curved corners.
 *
 * @category Progress
 * @category Elements
 * @see https://electrovir.github.io/element-vir/vira/book/elements/vira-progress
 */
export const ViraProgress = defineViraElement<
    Readonly<
        {
            value: number;
        } & PartialWithUndefined<{
            /** @default 0 */
            min: number;
            /** @default 100 */
            max: number;
        }>
    >
>()({
    tagName: 'vira-progress',
    cssVars: {
        /**
         * The browser will automatically cap the border-radius at half of the element's smaller
         * dimension which creates a perfect pill border radius.
         */
        'vira-progress-border-radius': '99999999px',
        'vira-progress-background-color': '#eee',
        'vira-progress-foreground-color': 'dodgerblue',
    },
    styles: ({cssVars}) => css`
        :host {
            /* Default width that can easily be overridden because it's applied on the host. */
            width: 100px;
            /* Default height that can easily be overridden because it's applied on the host. */
            height: 10px;
            display: inline-flex;
            align-items: center;
            background-color: ${cssVars['vira-progress-background-color'].value};
            border-radius: ${cssVars['vira-progress-border-radius'].value};
            color: ${cssVars['vira-progress-foreground-color'].value};
        }

        .progress-bar {
            background-color: currentColor;
            border-radius: calc(${cssVars['vira-progress-border-radius'].value} - 1px);
            /* Add some extra pixels to prevent the background from bleeding through on the curved corners. */
            height: calc(100% + 2px);
            /* Overlap a bin on the left to prevent the background from bleeding through on the curved corners. */
            margin-left: -1px;
        }
    `,
    render({inputs}) {
        const min = inputs.min || 0;
        const max = inputs.max || 100;
        const totalRange = max - min;
        const value = inputs.value - min;

        const percentFull = Math.round((value / totalRange) * 100);

        return html`
            <div
                class="progress-bar"
                style=${css`
                    width: calc(${percentFull}% + 1px);
                `}
            ></div>
        `;
    },
});
