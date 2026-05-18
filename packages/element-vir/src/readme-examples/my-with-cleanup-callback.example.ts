import {defineElement} from 'element-vir';
import {html} from '../index.js';

export const MyWithAssignmentCleanupCallback = defineElement()({
    tagName: 'my-with-cleanup-callback',
    state() {
        return {
            intervalId: window.setInterval(() => console.info('hi'), 1000),
        };
    },
    render() {
        return html`
            <h1>My App</h1>
        `;
    },
    cleanup({state}) {
        window.clearInterval(state.intervalId);
    },
});
