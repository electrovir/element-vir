import {randomString} from '@augment-vir/browser';
import {assertTypeOf, clickElement, typedAssertNotNullish} from '@augment-vir/browser-testing';
import {DeferredPromiseWrapper, createDeferredPromiseWrapper} from '@augment-vir/common';
import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {
    AsyncState,
    AsyncStateInit,
    StaticElementPropertyDescriptor,
    asyncState,
    defineElement,
    defineElementEvent,
    defineElementNoInputs,
    html,
    listen,
} from '../..';
import {assertRejects, getAssertedDeclarativeElement} from '../../augments/testing.test-helper';
import {isRenderReady} from './async-state';

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
            StaticElementPropertyDescriptor<string, AsyncStateInit<SomethingObject>>
        >();

        assertTypeOf<(typeof elementWithAsyncState)['stateType']['myAsyncState']>().toEqualTypeOf<
            AsyncState<SomethingObject>
        >();

        assertTypeOf<
            (typeof elementWithAsyncState)['instanceType']['instanceState']['myAsyncState']
        >().toEqualTypeOf<AsyncState<SomethingObject>>();
    });

    it('should properly update and resolve with createPromise and updateTrigger', async () => {
        const startingNumber = Math.random();

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
                let newDeferredPromise: DeferredPromiseWrapper<number> | undefined;

                updateState({
                    myAsyncState: {
                        createPromise: () => {
                            newDeferredPromise = createDeferredPromiseWrapper<number>();
                            return newDeferredPromise.promise;
                        },
                        trigger: inputs.promiseUpdateTrigger ?? startingNumber,
                    },
                });

                if (isRenderReady(state.myAsyncState)) {
                    assertTypeOf(state.myAsyncState).toEqualTypeOf<number>();
                }

                if (newDeferredPromise) {
                    dispatch(new events.deferredPromiseCreated(newDeferredPromise));
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
            promiseUpdateTrigger: Math.random(),
        });
        await waitUntil(() => renderCount === 3, 'Render count failed to reach 3');

        assert.lengthOf(deferredPromiseWrappers, 2);
        typedAssertNotNullish(deferredPromiseWrappers[1]);
        assert.instanceOf(instance.instanceState.myAsyncState, Promise);

        // resolve the promise; the element should re-render and the state should update
        const resolutionValue = Math.random();
        deferredPromiseWrappers[1].resolve(resolutionValue);

        await waitUntil(() => renderCount === 4, 'Render count failed to reach 4');

        assert.lengthOf(deferredPromiseWrappers, 2);
        assert.strictEqual(instance.instanceState.myAsyncState, resolutionValue);

        // assign a new input; element should re-render and create a new promise
        instance.assignInputs({
            promiseUpdateTrigger: Math.random(),
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
        deferredPromiseWrappers[3].resolve(Math.random());

        await assertRejects(() => waitUntil(() => renderCount === 8));
        assert.instanceOf(instance.instanceState.myAsyncState, Promise);

        // should render after resolving the current promise
        const finalResolutionValue = Math.random();
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
});
