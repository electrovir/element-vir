import {defineFunctionalElement, html, onDomCreated} from '..';

export const MySimpleWithOnDomCreatedElement = defineFunctionalElement({
    tagName: 'my-simple-with-on-dom-created-element',
    renderCallback: () => html`
        <span
            ${onDomCreated((element) => {
                // logs a span element
                console.log(element);
            })}
        >
            Hello there!
        </span>
    `,
});
