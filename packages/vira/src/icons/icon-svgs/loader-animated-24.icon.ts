import {css, html} from 'element-vir';
import {viraAnimationDurations} from '../../styles/durations';
import {defineIcon} from '../icon-svg';
import {Loader24Icon} from './loader-24.icon';

const animatedLoaderStyles = css`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${viraAnimationDurations['vira-extended-animation-duration'].value} linear
            loader-animated-spin infinite;
    }
`;

export const LoaderAnimated24Icon = defineIcon({
    name: 'LoaderAnimated24Icon',
    svgTemplate: html`
        <style>
            ${animatedLoaderStyles}
        </style>
        ${Loader24Icon.svgTemplate}
    `,
});
