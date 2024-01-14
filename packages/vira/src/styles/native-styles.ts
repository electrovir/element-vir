import {css} from 'element-vir';

export const noNativeSpacing = css`
    padding: 0;
    margin: 0;
`;

export const noNativeFormStyles = css`
    ${noNativeSpacing};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;
