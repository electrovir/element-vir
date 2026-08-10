/* eslint-disable sonarjs/constructor-for-side-effects */
import {assert, assertWrap} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {type SingleCssVarDefinition} from 'lit-css-vars';
import {
    type AsyncProp,
    Observable,
    type RenderCallback,
    asyncProp,
    createEventDescriptorMap,
    createRenderParams,
    defineElement,
    defineElementEvent,
    html,
} from '../index.js';

const renderParamsHistory: unknown[] = [];

const RenderParamsRecorder = defineElement<{inputValue?: string | undefined}>()({
    tagName: 'render-params-recorder',
    state() {
        return {
            count: 0 as number,
        };
    },
    cssVars: {
        'render-params-recorder-color': 'red',
    },
    events: {
        recorderEvent: defineElementEvent<number>(),
    },
    slotNames: [
        'render-params-recorder-slot',
    ],
    testIds: [
        'target',
    ],
    render(params) {
        renderParamsHistory.push(params);
        return html`
            <span>${params.state.count}</span>
        `;
    },
});

/** The history must be typed after the definition exists to avoid a circular type reference. */
function latestRenderParams() {
    return assertWrap.isDefined(renderParamsHistory[renderParamsHistory.length - 1]) as Parameters<
        (typeof RenderParamsRecorder)['render']
    >[0];
}

async function renderRecorder() {
    renderParamsHistory.length = 0;
    const fixture = await testWeb.render(html`
        <${RenderParamsRecorder}></${RenderParamsRecorder}>
    `);
    assert.instanceOf(fixture, RenderParamsRecorder);
    return fixture;
}

describe('RenderParams', () => {
    it('produces proper types', () => {
        type MyAsyncPropTriggerType = {input: string | undefined};

        defineElement()({
            tagName: 'test-element',
            state() {
                return {
                    myAsyncProp: asyncProp({
                        // eslint-disable-next-line @typescript-eslint/require-await
                        async updateCallback({input}: MyAsyncPropTriggerType) {
                            return 5;
                        },
                    }),
                    myAsyncProp2: asyncProp({
                        defaultValue: Promise.resolve(3),
                    }),
                    myAsyncProp3: asyncProp({
                        defaultValue: 3,
                    }),
                    myNumber: undefined as undefined | Observable<number>,
                };
            },
            cssVars: {
                'test-element-my-thing': '4px',
            },
            events: {
                testEventName: defineElementEvent<number>(),
                testEventName2: defineElementEvent<number>(),
            },
            render({events, state, updateState, cssVars}) {
                if (state.myNumber == undefined) {
                    updateState({
                        myNumber: new Observable({
                            defaultValue: 6,
                        }),
                    });
                }

                assert.tsType(cssVars['test-element-my-thing']).equals<SingleCssVarDefinition>();

                const testEventThing = events.testEventName;

                assert.tsType(state.myAsyncProp.value).equals<Promise<number> | number | Error>();
                assert.tsType(state.myAsyncProp2.value).equals<Promise<number> | number | Error>();
                assert.tsType(state.myAsyncProp3.value).equals<Promise<number> | number | Error>();

                updateState({
                    myAsyncProp: asyncProp(),
                });

                assert
                    .tsType<NonNullable<Parameters<typeof updateState>[0]['myAsyncProp']>>()
                    .equals<AsyncProp<number, MyAsyncPropTriggerType>>();

                state.myAsyncProp.update({
                    input: 'hi',
                });

                updateState({
                    myAsyncProp: asyncProp({
                        defaultValue: 5,
                    }),
                });

                state.myAsyncProp.update({
                    input: undefined,
                });

                new testEventThing({
                    detail: 4,
                });
                // @ts-expect-error: requires a number input
                new testEventThing({});
                // @ts-expect-error: requires a number input
                new testEventThing();
                new testEventThing({
                    // @ts-expect-error: requires a number input
                    detail: 'not a number input',
                });

                return html``;
            },
        });
    });

    it('has proper types for an empty element', () => {
        function doNotExecuteThis() {
            const renderParams = createRenderParams({
                element: {} as any,
                eventsMap: createEventDescriptorMap('my-element', {
                    testEventName: defineElementEvent<number>(),
                }),
                cssVars: {},
                slotNamesMap: {},
                testIdsMap: {},
            });

            const myEvent = renderParams.events.testEventName;
            const myEventInstance = new myEvent({
                detail: 4,
            });
            new myEvent({
                // @ts-expect-error: requires a number input
                detail: 'no number here',
            });

            assert.strictEquals(myEventInstance.type, 'my-element-testEventName');

            renderParams.dispatch(myEventInstance);
            renderParams.dispatch(new Event('generic event type'));
            // there are no async props in this element
            assert.isEmpty(Object.keys(renderParams.state));
        }
    });
});

describe('UpdateStateCallback', () => {
    it("can be used for an element's updateState method", () => {
        const stateInit = {
            doThing: asyncProp({
                defaultValue: 'string input',
            }),
        };

        const customElement = defineElement()({
            tagName: 'custom-element-for-testing-update-state-callback-type',
            state() {
                return stateInit;
            },
            render({state}) {
                acceptStateFromElementDefinition(state);

                return 'hi';
            },
        });

        function acceptStateFromElementDefinition(state: (typeof customElement)['StateType']) {
            state.doThing.setValue('yo');
        }

        assert.isDefined(customElement);
    });
});

describe(createRenderParams.name, () => {
    it('passes exactly the expected render params', async () => {
        await renderRecorder();

        assert.deepEquals(Object.keys(latestRenderParams()).sort(), [
            'cssVars',
            'dispatch',
            'events',
            'host',
            'inputs',
            'slotNames',
            'state',
            'testIds',
            'updateState',
        ]);
    });

    it('passes the element itself as host', async () => {
        const fixture = await renderRecorder();

        assert.strictEquals(latestRenderParams().host, fixture);
        assert.strictEquals(latestRenderParams().host.shadowRoot, fixture.shadowRoot);
    });

    it('passes the definition static maps by reference', async () => {
        await renderRecorder();

        assert.strictEquals(latestRenderParams().events, RenderParamsRecorder.events);
        assert.strictEquals(latestRenderParams().cssVars, RenderParamsRecorder.cssVars);
        assert.strictEquals(latestRenderParams().slotNames, RenderParamsRecorder.slotNames);
        assert.strictEquals(latestRenderParams().testIds, RenderParamsRecorder.testIds);
    });

    it('passes the instance state and inputs proxies by reference', async () => {
        const fixture = await renderRecorder();

        assert.strictEquals(latestRenderParams().state, fixture.instanceState);
        assert.strictEquals(latestRenderParams().inputs, fixture.instanceInputs);
    });

    it('creates a new params object for each render but keeps state and inputs identity', async () => {
        const fixture = await renderRecorder();
        const firstParams = latestRenderParams();

        firstParams.updateState({
            count: 1,
        });
        await fixture.updateComplete;

        assert.isLengthExactly(renderParamsHistory, 2);
        const secondParams = latestRenderParams();

        assert.notStrictEquals(secondParams, firstParams);
        assert.notStrictEquals(secondParams.updateState, firstParams.updateState);
        assert.notStrictEquals(secondParams.dispatch, firstParams.dispatch);
        assert.strictEquals(secondParams.state, firstParams.state);
        assert.strictEquals(secondParams.inputs, firstParams.inputs);
        assert.strictEquals(secondParams.host, firstParams.host);
        assert.strictEquals(secondParams.events, firstParams.events);
        assert.strictEquals(secondParams.cssVars, firstParams.cssVars);
        assert.strictEquals(secondParams.slotNames, firstParams.slotNames);
        assert.strictEquals(secondParams.testIds, firstParams.testIds);
    });

    it('sees the current state in each render', async () => {
        const fixture = await renderRecorder();

        assert.strictEquals(latestRenderParams().state.count, 0);
        latestRenderParams().updateState({
            count: 3,
        });
        assert.strictEquals(latestRenderParams().state.count, 3);
        await fixture.updateComplete;
        assert.strictEquals(latestRenderParams().state.count, 3);
    });

    it('batches multiple state updates into a single re-render', async () => {
        const fixture = await renderRecorder();
        const renderCountBeforeUpdates = fixture._internalRenderCount;

        latestRenderParams().updateState({
            count: 1,
        });
        latestRenderParams().updateState({
            count: 2,
        });
        await fixture.updateComplete;

        assert.strictEquals(fixture._internalRenderCount, renderCountBeforeUpdates + 1);
        assert.strictEquals(fixture.instanceState.count, 2);
    });

    it('does not re-render when the state is set to its current value', async () => {
        const fixture = await renderRecorder();
        const renderCountBeforeUpdate = fixture._internalRenderCount;

        latestRenderParams().updateState({
            count: fixture.instanceState.count,
        });
        await fixture.updateComplete;

        assert.strictEquals(fixture._internalRenderCount, renderCountBeforeUpdate);
    });

    it('does not re-render for an empty state update', async () => {
        const fixture = await renderRecorder();
        const renderCountBeforeUpdate = fixture._internalRenderCount;

        latestRenderParams().updateState({});
        await fixture.updateComplete;

        assert.strictEquals(fixture._internalRenderCount, renderCountBeforeUpdate);
    });

    it('throws when updating a state key that does not exist', async () => {
        await renderRecorder();

        const missingKeyUpdate = {
            missingStateKey: 'nope',
        } as Parameters<ReturnType<typeof latestRenderParams>['updateState']>[0];

        assert.strictEquals(
            assertWrap.throws(() => latestRenderParams().updateState(missingKeyUpdate)).message,
            "Property 'missingStateKey' does not exist on 'render-params-recorder'.",
        );
    });

    it('dispatches events from the element', async () => {
        const fixture = await renderRecorder();
        const dispatchedEvents: string[] = [];
        fixture.addEventListener(RenderParamsRecorder.events.recorderEvent.type, (event) => {
            dispatchedEvents.push(event.type);
        });

        assert.isTrue(
            latestRenderParams().dispatch(
                new RenderParamsRecorder.events.recorderEvent({
                    detail: 4,
                }),
            ),
        );
        assert.deepEquals(dispatchedEvents, [
            'render-params-recorder-recorderEvent',
        ]);
    });

    it('returns false from dispatch when a cancelable event is prevented', async () => {
        const fixture = await renderRecorder();
        fixture.addEventListener('cancel-me', (event) => {
            event.preventDefault();
        });

        assert.isFalse(
            latestRenderParams().dispatch(
                new Event('cancel-me', {
                    cancelable: true,
                }),
            ),
        );
        assert.isTrue(latestRenderParams().dispatch(new Event('cancel-me')));
    });

    it('reflects assigned inputs in the inputs param', async () => {
        const fixture = await renderRecorder();

        assert.isUndefined(latestRenderParams().inputs.inputValue);

        fixture.assignInputs({
            inputValue: 'assigned',
        });
        await fixture.updateComplete;

        assert.strictEquals(latestRenderParams().inputs.inputValue, 'assigned');
    });
});

describe('RenderCallback', () => {
    it('allows an empty return', () => {
        const renderSomething: RenderCallback = () => {
            return undefined;
        };
        const renderSomething2: RenderCallback = () => {
            return;
        };

        assert.isDefined(renderSomething);
        assert.isDefined(renderSomething2);
    });
});
