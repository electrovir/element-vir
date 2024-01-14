import {css, unsafeCSS} from 'element-vir';

export function hideScrollbars(selector: string) {
    return css`
        ${unsafeCSS(selector)} {
            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        ${unsafeCSS(selector)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }
    `;
}
