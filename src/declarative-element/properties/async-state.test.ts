import {randomString} from '@augment-vir/browser';
import {assertTypeOf, clickElement, typedAssertNotNullish} from '@augment-vir/browser-testing';
import {DeferredPromiseWrapper, createDeferredPromiseWrapper} from '@augment-vir/common';
import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {
    AsyncObservablePropertyHandler,
    AsyncState,
    StaticElementPropertyDescriptor,
    asyncState,
    defineElement,
    defineElementEvent,
    defineElementNoInputs,
    html,
    isRenderReady,
    listen,
} from '../..';
import {assertRejects, getAssertedDeclarativeElement} from '../../augments/testing.test-helper';

describe(asyncState.name, () => {
    it('should have proper types', () => {
        type SomethingObject = {something: number};

        const elementWithAsyncState = defineElementNoInputs({
            tagName: `element-with-async-state-${randomString()}`,
            stateInit: {
                myAsyncState: asyncState<SomethingObject>(),
            },
            renderCallback: ({state, updateState}) => {
                type Dimensions = {width: number; length: number};
                const bigType = {} as {
                    imageUrl: string;
                    max?: Dimensions | undefined;
                    min?: Dimensions | undefined;
                    originalImageSize?: Dimensions | undefined;
                };

                updateState({
                    myAsyncState: {
                        createPromise: () => Promise.resolve({something: 4}),
                        trigger: bigType,
                    },
                });

                assertTypeOf(state.myAsyncState).toEqualTypeOf<AsyncState<SomethingObject>>();
                return html``;
            },
        });

        assertTypeOf(elementWithAsyncState.stateInit.myAsyncState).toEqualTypeOf<
            StaticElementPropertyDescriptor<string, AsyncObservablePropertyHandler<SomethingObject>>
        >();

        assertTypeOf<(typeof elementWithAsyncState)['stateType']['myAsyncState']>().toEqualTypeOf<
            AsyncState<SomethingObject>
        >();

        assertTypeOf<
            (typeof elementWithAsyncState)['instanceType']['instanceState']['myAsyncState']
        >().toEqualTypeOf<AsyncState<SomethingObject>>();
    });

    it('updates and resolves async state createPromise and updateTrigger', async () => {
        const startingNumber = 123;

        const ElementWithAsyncState = defineElement<{
            promiseUpdateTrigger: number | undefined;
        }>()({
            tagName: `element-with-async-state-${randomString()}`,
            stateInit: {
                myAsyncState: asyncState<number>(),
            },
            events: {
                deferredPromiseCreated: defineElementEvent<DeferredPromiseWrapper<number>>(),
                wasRendered: defineElementEvent<void>(),
            },
            renderCallback: ({inputs, dispatch, events, state, updateState}) => {
                updateState({
                    myAsyncState: {
                        createPromise: () => {
                            const newDeferredPromise = createDeferredPromiseWrapper<number>();
                            dispatch(new events.deferredPromiseCreated(newDeferredPromise));
                            return newDeferredPromise.promise;
                        },
                        trigger: inputs.promiseUpdateTrigger ?? startingNumber,
                    },
                });

                if (isRenderReady(state.myAsyncState)) {
                    assertTypeOf(state.myAsyncState).toEqualTypeOf<number>();
                }

                dispatch(new events.wasRendered());

                return html`
                    <button
                        id="new-promise"
                        ${listen('click', () => {
                            const newPromiseWrapper = createDeferredPromiseWrapper<number>();

                            updateState({
                                myAsyncState: {
                                    newPromise: newPromiseWrapper.promise,
                                },
                            });

                            dispatch(new events.deferredPromiseCreated(newPromiseWrapper));
                        })}
                    >
                        New Promise
                    </button>
                    <button
                        id="force-update"
                        ${listen('click', () => {
                            updateState({
                                myAsyncState: {
                                    forceUpdate: true,
                                },
                            });
                        })}
                    >
                        Force Update
                    </button>
                    <button
                        id="assign-resolved-value"
                        ${listen('click', () => {
                            updateState({
                                myAsyncState: {
                                    resolvedValue: 1 + Math.random(),
                                },
                            });
                        })}
                    >
                        Assign Resolved Value
                    </button>
                `;
            },
        });

        // render the element
        const deferredPromiseWrappers: DeferredPromiseWrapper<number>[] = [];
        let renderCount: number = 0;

        const rendered = await renderFixture(html`
            <${ElementWithAsyncState}
                ${listen(ElementWithAsyncState.events.deferredPromiseCreated, (event) => {
                    deferredPromiseWrappers.push(event.detail);
                })}
                ${listen(ElementWithAsyncState.events.wasRendered, () => {
                    renderCount++;
                })}
            ></${ElementWithAsyncState}>
        `);

        // get elements
        const instance = getAssertedDeclarativeElement(ElementWithAsyncState, rendered);
        const newPromiseButton = instance.shadowRoot.querySelector('#new-promise');
        const forceUpdateButton = instance.shadowRoot.querySelector('#force-update');
        const assignResolvedButton = instance.shadowRoot.querySelector('#assign-resolved-value');

        typedAssertNotNullish(newPromiseButton);
        typedAssertNotNullish(forceUpdateButton);
        typedAssertNotNullish(assignResolvedButton);

        // initial render
        typedAssertNotNullish(deferredPromiseWrappers[0]);
        assert.lengthOf(deferredPromiseWrappers, 1);
        assert.instanceOf(instance.instanceState.myAsyncState, Promise);
        assert.strictEqual(renderCount, 1);

        // assign the same number to the input; the element should not re-render
        instance.assignInputs({
            promiseUpdateTrigger: startingNumber,
        });
        await waitUntil(() => renderCount === 2, 'Render count failed to reach 2');

        assert.lengthOf(deferredPromiseWrappers, 1);
        assert.instanceOf(instance.instanceState.myAsyncState, Promise);

        // assign a new number; the element should re-render
        instance.assignInputs({
            promiseUpdateTrigger: 2,
        });
        await waitUntil(() => renderCount === 3, 'Render count failed to reach 3');

        assert.lengthOf(deferredPromiseWrappers, 2);
        typedAssertNotNullish(deferredPromiseWrappers[1]);
        assert.instanceOf(instance.instanceState.myAsyncState, Promise);

        // resolve the promise; the element should re-render and the state should update
        const resolutionValue = 3;
        deferredPromiseWrappers[1].resolve(resolutionValue);

        await waitUntil(() => renderCount === 4, 'Render count failed to reach 4');

        assert.lengthOf(deferredPromiseWrappers, 2);
        assert.strictEqual(instance.instanceState.myAsyncState, resolutionValue);

        // assign a new input; element should re-render and create a new promise
        instance.assignInputs({
            promiseUpdateTrigger: 4,
        });
        await waitUntil(() => renderCount === 5, 'Render count failed to reach 5');

        assert.lengthOf(deferredPromiseWrappers, 3);
        typedAssertNotNullish(deferredPromiseWrappers[2]);
        assert.instanceOf(instance.instanceState.myAsyncState, Promise);

        // reject the error; element should re-render and update state
        const rejectionError = new Error('fake error');
        deferredPromiseWrappers[2].reject(rejectionError);

        await waitUntil(() => renderCount === 6, 'Render count failed to reach 6');

        assert.lengthOf(deferredPromiseWrappers, 3);
        assert.strictEqual(instance.instanceState.myAsyncState, rejectionError);

        // force an update; element should re-render and update state
        await clickElement(forceUpdateButton);

        await waitUntil(() => renderCount === 7, 'Render count failed to reach 7');

        assert.lengthOf(deferredPromiseWrappers, 4);
        typedAssertNotNullish(deferredPromiseWrappers[3]);
        assert.instanceOf(instance.instanceState.myAsyncState, Promise);

        // assign a new promise; element should not re-render (because the last promise never finished settling) and update state
        await clickElement(newPromiseButton);

        assert.lengthOf(deferredPromiseWrappers, 5);
        typedAssertNotNullish(deferredPromiseWrappers[4]);
        assert.instanceOf(instance.instanceState.myAsyncState, Promise);

        // it shouldn't render after resolution of a previous promise
        deferredPromiseWrappers[3].resolve(5);

        await assertRejects(() => waitUntil(() => renderCount === 8));
        assert.instanceOf(instance.instanceState.myAsyncState, Promise);

        // should render after resolving the current promise
        const finalResolutionValue = 6;
        deferredPromiseWrappers[4].resolve(finalResolutionValue);

        await waitUntil(() => renderCount === 8);
        assert.strictEqual(instance.instanceState.myAsyncState, finalResolutionValue);

        // assign an already resolved value; element should update once and immediately use the resolved value
        await clickElement(assignResolvedButton);

        assert.lengthOf(
            deferredPromiseWrappers,
            5,
            'no new deferred promises should have been created',
        );
        assert.typeOf(instance.instanceState.myAsyncState, 'number');
    });

    it('works even if the value is undefined', async () => {
        const ElementWithUndefinedAsyncState = defineElementNoInputs({
            tagName: `element-with-undefined-async-state-${randomString()}`,
            stateInit: {
                myAsyncState: asyncState<number | undefined>(undefined),
            },
            events: {
                wasRendered: defineElementEvent<void>(),
            },
            renderCallback: ({dispatch, events, state, updateState}) => {
                if (isRenderReady(state.myAsyncState)) {
                    assertTypeOf(state.myAsyncState).toEqualTypeOf<number | undefined>();
                }

                dispatch(new events.wasRendered());

                return html`
                    <button
                        id="new-promise"
                        ${listen('click', () => {
                            const newPromiseWrapper = createDeferredPromiseWrapper<
                                number | undefined
                            >();

                            updateState({
                                myAsyncState: {
                                    newPromise: newPromiseWrapper.promise,
                                },
                            });
                        })}
                    >
                        New Promise
                    </button>
                    <button
                        id="force-update"
                        ${listen('click', () => {
                            updateState({
                                myAsyncState: {
                                    forceUpdate: true,
                                },
                            });
                        })}
                    >
                        Force Update
                    </button>
                    <button
                        id="assign-resolved-value"
                        ${listen('click', () => {
                            updateState({
                                myAsyncState: {
                                    resolvedValue: Math.random(),
                                },
                            });
                        })}
                    >
                        Assign Resolved Value
                    </button>
                `;
            },
        });

        // render the element
        let renderCount: number = 0;

        const rendered = await renderFixture(html`
            <${ElementWithUndefinedAsyncState}
                ${listen(ElementWithUndefinedAsyncState.events.wasRendered, () => {
                    renderCount++;
                })}
            ></${ElementWithUndefinedAsyncState}>
        `);

        // get elements
        const instance = getAssertedDeclarativeElement(ElementWithUndefinedAsyncState, rendered);
        const newPromiseButton = instance.shadowRoot.querySelector('#new-promise');
        const forceUpdateButton = instance.shadowRoot.querySelector('#force-update');
        const assignResolvedButton = instance.shadowRoot.querySelector('#assign-resolved-value');

        typedAssertNotNullish(newPromiseButton);
        typedAssertNotNullish(forceUpdateButton);
        typedAssertNotNullish(assignResolvedButton);

        // initial render
        assert.isUndefined(instance.instanceState.myAsyncState);
        assert.strictEqual(renderCount, 1);

        // assign a new promise
        await clickElement(newPromiseButton);

        await waitUntil(() => renderCount === 2);
        assert.instanceOf(instance.instanceState.myAsyncState, Promise);

        // force an update (but we have no create promise so it should not resolve)
        await clickElement(forceUpdateButton);

        await waitUntil(() => renderCount === 3);
        assert.instanceOf(instance.instanceState.myAsyncState, Promise);

        // assign a new resolved value
        await clickElement(assignResolvedButton);

        await waitUntil(() => renderCount === 4);
        assert.isNumber(instance.instanceState.myAsyncState);
    });
});
