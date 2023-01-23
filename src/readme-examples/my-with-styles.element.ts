import {css, defineElementNoInputs, html} from '..';

export const MyWithStylesElement = defineElementNoInputs({
    tagName: 'my-with-styles',
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