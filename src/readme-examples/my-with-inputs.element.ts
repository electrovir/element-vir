import {defineElement, html} from '..';

export const MyWithInputsElement = defineElement<{
    username: string;
    email: string;
}>()({
    tagName: 'my-with-inputs',
    renderCallback: ({inputs}) => html`
        <span>Hello there ${inputs.username}!</span>
    `,
});
