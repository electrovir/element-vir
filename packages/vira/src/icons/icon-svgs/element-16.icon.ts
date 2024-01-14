import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars';
import {defineIcon} from '../icon-svg';

export const Element16Icon = defineIcon({
    name: 'Element16Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
            />
        </svg>
    `,
});
