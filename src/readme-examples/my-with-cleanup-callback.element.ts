import {defineElementNoInputs, html} from '..';

export const MyWithAssignmentCleanupCallbackElement = defineElementNoInputs({
    tagName: 'my-with-cleanup-callback',
    stateInit: {
        intervalId: undefined as undefined | number,
    },
    initCallback: ({updateState}) => {
        updateState({
            intervalId: window.setInterval(() => console.info('hi'), 1000),
        });
    },
    renderCallback: () => html`
        <h1>My App</h1>
    `,
    cleanupCallback: ({state, updateState}) => {
        window.clearInterval(state.intervalId);
        updateState({
            intervalId: undefined,
        });
    },
});
