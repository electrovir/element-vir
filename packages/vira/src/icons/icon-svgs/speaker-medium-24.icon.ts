import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars.js';
import {defineIcon} from '../icon-svg.js';

/**
 * A speaker icon at medium volume.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/element-vir/vira/book/icons/speakermedium24icon
 */
export const SpeakerMedium24Icon = defineIcon({
    name: 'SpeakerMedium24Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                fill=${viraIconCssVars['vira-icon-fill-color'].value}
            />
        </svg>
    `,
});
