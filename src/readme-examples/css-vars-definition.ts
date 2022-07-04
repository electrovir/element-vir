import {css, defineFunctionalElement, html} from '..';

export const MyAppWithCssVars = defineFunctionalElement({
    tagName: 'my-app-with-css-vars',
    cssVars: {
        /**
         * The value assigned here ('blue') becomes the fallback value for this CSS var when used
         * via "cssVarValue".
         */
        myCssVar: 'blue',
    },
    styles: ({cssVarName, cssVarValue}) => css`
        :host {
            /* Set CSS vars (or reference the name directly) via "cssVarName" */
            ${cssVarName.myCssVar}: yellow;
            /* Use CSS vars with "cssVarValue". This includes a "var" wrapper and the assigned fallback value (which in this case is 'blue'). */
            color: ${cssVarValue.myCssVar};
        }
    `,
    renderCallback: () => html``,
});
