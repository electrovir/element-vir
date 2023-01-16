import {asyncProp, defineElement, html, renderAsyncProp} from '..';

async function loadSomething(endpoint: string) {
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

export const MyWithAsyncPropElement = defineElement<{endpointToHit: string}>()({
    tagName: 'my-simple-with-render-if',
    stateInit: {
        data: asyncProp(),
    },
    renderCallback: ({inputs, state, ensureAsyncProp}) => {
        /**
         * This creates a promise which automatically updates the state.loadsLater prop once the
         * promise resolves.
         */
        ensureAsyncProp({
            data: {
                createPromise: () => loadSomething(inputs.endpointToHit),
                updateIfThisChanges: inputs.endpointToHit,
            },
        });

        return html`
            Here's the data:
            <br />
            ${renderAsyncProp({
                asyncProp: state.data,
                fallback: 'Loading...',
                resolutionRender: (loadedData) => {
                    return html`
                        Got the data: ${loadedData}
                    `;
                },
            })}
        `;
    },
});
