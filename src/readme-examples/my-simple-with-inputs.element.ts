import {defineElement, html} from '..';

export const MySimpleWithInputsElement = defineElement<{
    username: string;
    email: string;
}>()({
    tagName: 'my-simple-element-with-inputs',
    renderCallback: ({inputs}) => html`
        <span>Hello there ${inputs.username}!</span>
    `,
});
