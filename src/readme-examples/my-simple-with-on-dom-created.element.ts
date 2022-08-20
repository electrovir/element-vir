import {defineElement, html, onDomCreated} from '..';

export const MySimpleWithOnDomCreatedElement = defineElement({
    tagName: 'my-simple-with-on-dom-created-element',
    renderCallback: () => html`
        <span
            ${onDomCreated((element) => {
                // logs a span element
                console.info(element);
            })}
        >
            Hello there!
        </span>
    `,
});
