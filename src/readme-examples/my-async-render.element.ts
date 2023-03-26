import {defineElementNoInputs, html, renderPromise} from '..';

export const MyAsyncRenderElement = defineElementNoInputs({
    tagName: 'my-async-render',
    stateInit: {
        data: fetch('https://example.org'),
    },
    renderCallback: ({state}) => html`
        ${renderPromise(state.data, ({promise, error, resolved}) => {
            if (promise) {
                return 'Still loading...';
            } else if (resolved) {
                return html`
                    Load done!
                `;
            } else {
                return `Load failed: ${error.message}`;
            }
        })}
    `,
});
