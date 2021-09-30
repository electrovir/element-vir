import {css} from 'lit';
import {defineFunctionalElement, html} from '..';

export const MySimpleWithStylesElement = defineFunctionalElement({
    tagName: 'my-simple-with-styles-element',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            font-family: sans-serif;
        }

        span + span {
            margin-top: 16px;
        }
    `,
    renderCallback: () => html`
        <span>Hello there!</span>
        <span>How are you doing?</span>
    `,
});
