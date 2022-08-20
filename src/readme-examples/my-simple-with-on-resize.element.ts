import {defineElementNoInputs, html, onResize} from '..';

export const MySimpleWithOnResizeElement = defineElementNoInputs({
    tagName: 'my-simple-with-on-dom-created-element',
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
