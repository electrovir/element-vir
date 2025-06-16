import {clamp, type PartialWithUndefined} from '@augment-vir/common';
import {css, html} from 'element-vir';
import {defineViraElement} from './define-vira-element.js';

/**
 * A [`<progress>`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress)
 * alternative that supports custom styling in _all_ browsers via CSS vars _and_ prevents background
 * bleed.
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
            border-radius: ${cssVars['vira-progress-border-radius'].value};
            color: ${cssVars['vira-progress-foreground-color'].value};
            overflow: hidden;
        }

        .progress-bar {
            background-color: currentColor;
            height: 100%;
        }

        .background-bar {
            background-color: ${cssVars['vira-progress-background-color'].value};
            height: 100%;
            flex-grow: 1;
        }
    `,
    render({inputs}) {
        const min = inputs.min || 0;
        const max = inputs.max || 100;
        const totalRange = max - min;
        const value = inputs.value - min;

        const percentFull = clamp(Math.round((value / totalRange) * 100), {min: 0, max: 100});

        return html`
            <div
                class="progress-bar"
                style=${percentFull
                    ? css`
                          width: ${percentFull}%;
                      `
                    : css`
                          display: none;
                      `}
            ></div>
            <div class="background-bar"></div>
        `;
    },
});
