import {defineElementNoInputs, html, onDomCreated} from '..';

export const MyWithOnDomCreatedElement = defineElementNoInputs({
    tagName: 'my-with-on-dom-created',
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
