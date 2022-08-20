import {defineElementNoInputs, html, listen} from '..';

export const MySimpleWithUpdateStateElement = defineElementNoInputs({
    tagName: 'my-simple-element-with-update-state',
    stateInit: {
        username: 'dev',
        email: undefined as string | undefined,
    },
    renderCallback: ({state, updateState}) => html`
        <span
            ${listen('click', () => {
                updateState({username: 'new name!'});
            })}
        >
            Hello there ${state.username}!
        </span>
    `,
});
