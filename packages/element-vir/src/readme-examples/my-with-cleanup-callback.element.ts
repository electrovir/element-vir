import {defineElementNoInputs, html} from '../index';

export const MyWithAssignmentCleanupCallback = defineElementNoInputs({
    tagName: 'my-with-cleanup-callback',
    stateInitStatic: {
        intervalId: undefined as undefined | number,
    },
    initCallback: ({updateState}) => {
        updateState({
            intervalId: window.setInterval(() => console.info('hi'), 1000),
        });
    },
    renderCallback() {
        return html`
            <h1>My App</h1>
        `;
    },
    cleanupCallback: ({state, updateState}) => {
        window.clearInterval(state.intervalId);
        updateState({
            intervalId: undefined,
        });
    },
});
