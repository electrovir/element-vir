import {asyncState, defineElement, html, listen, renderAsyncState} from '..';

type EndpointData = number[];

async function loadSomething(endpoint: string): Promise<EndpointData> {
    // load something from the network
    const data = await (
        await fetch(
            [
                '',
                'api',
                endpoint,
            ].join('/'),
        )
    ).json();
    return data;
}

export const MyWithAsyncState = defineElement<{endpoint: string}>()({
    tagName: 'my-with-async-state',
    stateInit: {
        data: asyncState<EndpointData>(),
    },
    renderCallback({inputs, state, updateState}) {
        /**
         * This creates a promise which automatically updates the state.loadsLater prop once the
         * promise resolves. It only creates a new promise if the "trigger" value changes.
         */
        updateState({
            data: {
                createPromise: () => loadSomething(inputs.endpoint),
                trigger: inputs.endpoint,
            },
        });

        return html`
            Here's the data:
            <br />
            ${renderAsyncState(state.data, 'Loading...', (loadedData) => {
                return html`
                    Got the data: ${loadedData}
                `;
            })}
            <br />
            <button
                ${listen('click', () => {
                    updateState({
                        data: {
                            /** You can force asyncState to update by passing in forceUpdate: true. */
                            forceUpdate: true,
                        },
                    });
                })}
            >
                Refresh
            </button>
        `;
    },
});
