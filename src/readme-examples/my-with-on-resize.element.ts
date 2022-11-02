import {defineElementNoInputs, html, onResize} from '..';

export const MyWithOnResizeElement = defineElementNoInputs({
    tagName: 'my-with-on-resize',
    renderCallback: () => html`
        <span
            ${onResize((entry) => {
                // this will track resizing of this span
                // the entry parameter contains target and contentRect properties
                console.info(entry);
            })}
        >
            Hello there!
        </span>
    `,
});
