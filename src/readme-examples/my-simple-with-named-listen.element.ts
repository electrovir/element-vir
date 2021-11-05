import {defineFunctionalElement, html, namedListen} from '..';

export const MySimpleWithNamedListenElement = defineFunctionalElement({
    tagName: 'my-simple-element-with-named-listen',
    renderCallback: () => html`
        <!-- normal DOM events can be listened to  -->
        <button ${namedListen('click', (event) => console.log(event.buttons))}>click me</button>
    `,
});
