import {defineElement, html, renderIf} from '..';

export const MyWithRenderIfElement = defineElement<{shouldRender: boolean}>()({
    tagName: 'my-simple-with-render-if',
    renderCallback: ({inputs}) => html`
        ${renderIf(
            inputs.shouldRender,
            html`
                I'm conditionally rendered!
            `,
        )}
    `,
});
