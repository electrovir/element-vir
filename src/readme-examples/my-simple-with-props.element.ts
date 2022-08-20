import {defineElement, html} from '..';

export const MySimpleWithPropsElement = defineElement({
    tagName: 'my-simple-element-with-props',
    stateInit: {
        currentUsername: 'dev',
        currentEmail: undefined as string | undefined,
    },
    renderCallback: ({props}) => html`
        <span>Hello there ${props.currentUsername}!</span>
    `,
});
