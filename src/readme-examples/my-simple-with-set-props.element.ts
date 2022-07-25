import {defineFunctionalElement, html, listen} from '..';

export const MySimpleWithPropsElement = defineFunctionalElement({
    tagName: 'my-simple-element-with-props',
    stateInit: {
        currentUsername: 'dev',
        currentEmail: undefined as string | undefined,
    },
    renderCallback: ({props, setProps}) => html`
        <span
            ${listen('click', () => {
                setProps({currentUsername: 'new name!'});
            })}
        >
            Hello there ${props.currentUsername}!
        </span>
    `,
});
