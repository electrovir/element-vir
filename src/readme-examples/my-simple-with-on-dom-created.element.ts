import {defineElementNoInputs, html, onDomCreated} from '..';

export const MySimpleWithOnDomCreatedElement = defineElementNoInputs({
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
