import {defineFunctionalElement, html} from '..';

export const MySimpleWithPropsElement = defineFunctionalElement({
    tagName: 'my-simple-element-with-props',
    props: {
        currentUsername: 'dev',
        currentEmail: undefined as string | undefined,
    },
    renderCallback: ({props}) => html`
        <span>Hello there ${props.currentUsername}!</span>
    `,
});
