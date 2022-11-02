import {css, defineElementNoInputs, html} from '..';

export const MyWithCssVarsElement = defineElementNoInputs({
    tagName: 'my-with-css-vars',
    cssVars: {
        /**
         * The value assigned here ('blue') becomes the fallback value for this CSS var when used
         * via "cssVarValue".
         */
        myCssVar: 'blue',
    },
    styles: ({cssVarNames: cssVarName, cssVarValues: cssVarValue}) => css`
        :host {
            /* Set CSS vars (or reference the name directly) via "cssVarName" */
            ${cssVarName.myCssVar}: yellow;
            /* Use CSS vars with "cssVarValue". This includes a "var" wrapper and the assigned fallback value (which in this case is 'blue'). */
            color: ${cssVarValue.myCssVar};
        }
    `,
    renderCallback: () => html``,
});
