import {asyncProp, defineElement, html, listen, renderAsync} from '..';

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

export const MyWithAsyncProp = defineElement<{endpoint: string}>()({
    tagName: 'my-with-async-prop',
    stateInitStatic: {
        data: asyncProp({
            async updateCallback({endpoint}: {endpoint: string}) {
                return loadSomething(endpoint);
            },
        }),
    },
    renderCallback({inputs, state, updateState}) {
        /**
         * This creates a promise which automatically updates the state.loadsLater prop once the
         * promise resolves. It only creates a new promise if the "trigger" value changes.
         */
        updateState({
            data: {
                trigger: inputs,
            },
        });

        return html`
            Here's the data:
            <br />
            ${renderAsync(state.data, 'Loading...', (loadedData) => {
                return html`
                    Got the data: ${loadedData}
                `;
            })}
            <br />
            <button
                ${listen('click', () => {
                    updateState({
                        data: {
                            /** You can force asyncProp to update by passing in forceUpdate: true. */
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
