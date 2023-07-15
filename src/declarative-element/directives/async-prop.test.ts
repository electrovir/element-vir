import {randomString} from '@augment-vir/browser';
import {
    assertTypeOf,
    clickElement,
    typedAssertInstanceOf,
    typedAssertNotNullish,
} from '@augment-vir/browser-testing';
import {DeferredPromiseWrapper, createDeferredPromiseWrapper, typedMap} from '@augment-vir/common';
import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {
    AsyncProp,
    StaticElementPropertyDescriptor,
    assign,
    asyncProp,
    defineElement,
    defineElementEvent,
    defineElementNoInputs,
    html,
    isRenderReady,
    listen,
    renderAsync,
} from '../..';
import {assertRejects, getAssertedDeclarativeElement} from '../../augments/testing.test-helper';
import {AsyncObservablePropertyHandlerCreator} from './async-prop';

describe(asyncProp.name, () => {
    it('should have proper types', () => {
        type Dimensions = {width: number; length: number};
        type TriggerType = {
            imageUrl: string;
            max?: Dimensions | undefined;
            min?: Dimensions | undefined;
            originalImageSize?: Dimensions | undefined;
        };
        type SomethingObject = {something: number};

        const elementWithAsyncProp = defineElementNoInputs({
            tagName: `element-with-async-prop-${randomString()}`,
            stateInitStatic: {
                myAsyncProp: asyncProp({
                    updateCallback(trigger: TriggerType) {
                        return Promise.resolve({something: 4});
                    },
                }),
                syncProp: {value: 'hi'},
            },
            renderCallback({state, updateState}) {
                const bigType = {} as TriggerType;

                updateState({
                    myAsyncProp: {
                        serializableTrigger: bigType,
                    },
                    syncProp: {
                        value: 'yo',
                        // @ts-expect-error
                        hello: 'yo',
                    },
                });

                updateState({
                    myAsyncProp: {
                        serializableTrigger: bigType,
                        // @ts-expect-error
                        hello: 'yo',
                    },
                    syncProp: {
                        value: 'yo',
                    },
                });

                assertTypeOf(state.myAsyncProp).toEqualTypeOf<AsyncProp<SomethingObject>>();
                return html``;
            },
        });

        assertTypeOf(elementWithAsyncProp.stateInitStatic.myAsyncProp).toEqualTypeOf<
            StaticElementPropertyDescriptor<
                string,
                AsyncObservablePropertyHandlerCreator<SomethingObject, TriggerType>
            >
        >();

        assertTypeOf<(typeof elementWithAsyncProp)['stateType']['myAsyncProp']>().toEqualTypeOf<
            AsyncProp<SomethingObject>
        >();

        assertTypeOf<
            (typeof elementWithAsyncProp)['instanceType']['instanceState']['myAsyncProp']
        >().toEqualTypeOf<AsyncProp<SomethingObject>>();
    });

    it('updates and resolves async prop createPromise and updateTrigger', async () => {
        const startingNumber = 123;

        // render the element
        const deferredPromiseWrappers: DeferredPromiseWrapper<number>[] = [];
        let renderCount: number = 0;
        const circularReference = {derp: '' as any};
        circularReference.derp = circularReference;

        const ElementWithAsyncProp = defineElement<{
            promiseUpdateTrigger: number | undefined;
        }>()({
            tagName: `element-with-async-prop-${randomString()}`,
            stateInitStatic: {
                myAsyncProp: asyncProp({
                    updateCallback({newNumber}: {newNumber: number; circularReference: any}) {
                        const newDeferredPromise = createDeferredPromiseWrapper<typeof newNumber>();
                        deferredPromiseWrappers.push(newDeferredPromise);
                        return newDeferredPromise.promise;
                    },
                }),
            },
            renderCallback({inputs, state, updateState}) {
                updateState({
                    myAsyncProp: {
                        serializableTrigger: {
                            newNumber: inputs.promiseUpdateTrigger ?? startingNumber,
                            circularReference,
                        },
                    },
                });

                if (isRenderReady(state.myAsyncProp)) {
                    assertTypeOf(state.myAsyncProp).toEqualTypeOf<number>();
                }

                renderCount++;

                return html`
                    <button
                        id="new-promise"
                        ${listen('click', () => {
                            const newDeferredPromise = createDeferredPromiseWrapper<number>();

                            updateState({
                                myAsyncProp: {
                                    newPromise: newDeferredPromise.promise,
                                },
                            });

                            deferredPromiseWrappers.push(newDeferredPromise);
                        })}
                    >
                        New Promise
                    </button>
                    <button
                        id="force-update"
                        ${listen('click', () => {
                            updateState({
                                myAsyncProp: {
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
                                myAsyncProp: {
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

        const rendered = await renderFixture(html`
            <${ElementWithAsyncProp}></${ElementWithAsyncProp}>
        `);

        // get elements
        const instance = getAssertedDeclarativeElement(ElementWithAsyncProp, rendered);
        const newPromiseButton = instance.shadowRoot.querySelector('#new-promise');
        const forceUpdateButton = instance.shadowRoot.querySelector('#force-update');
        const assignResolvedButton = instance.shadowRoot.querySelector('#assign-resolved-value');

        typedAssertNotNullish(newPromiseButton);
        typedAssertNotNullish(forceUpdateButton);
        typedAssertNotNullish(assignResolvedButton);

        // initial render
        typedAssertNotNullish(deferredPromiseWrappers[0]);
        assert.lengthOf(deferredPromiseWrappers, 1);
        assert.instanceOf(instance.instanceState.myAsyncProp, Promise);
        assert.strictEqual(renderCount, 1);

        // assign the same number to the input; the element should not re-render
        instance.assignInputs({
            promiseUpdateTrigger: startingNumber,
        });
        await waitUntil(() => renderCount === 2, 'Render count failed to reach 2');

        assert.lengthOf(deferredPromiseWrappers, 1);
        assert.instanceOf(instance.instanceState.myAsyncProp, Promise);

        // assign a new number; the element should re-render
        instance.assignInputs({
            promiseUpdateTrigger: 2,
        });
        await waitUntil(() => renderCount === 3, 'Render count failed to reach 3');

        assert.lengthOf(deferredPromiseWrappers, 2);
        typedAssertNotNullish(deferredPromiseWrappers[1]);
        assert.instanceOf(instance.instanceState.myAsyncProp, Promise);

        // resolve the promise; the element should re-render and the state should update
        const resolutionValue = 3;
        deferredPromiseWrappers[1].resolve(resolutionValue);

        await waitUntil(() => renderCount === 4, 'Render count failed to reach 4');

        assert.lengthOf(deferredPromiseWrappers, 2);
        assert.strictEqual(instance.instanceState.myAsyncProp, resolutionValue);

        // assign a new input; element should re-render and create a new promise
        instance.assignInputs({
            promiseUpdateTrigger: 4,
        });
        await waitUntil(() => renderCount === 5, 'Render count failed to reach 5');

        assert.lengthOf(deferredPromiseWrappers, 3);
        typedAssertNotNullish(deferredPromiseWrappers[2]);
        assert.instanceOf(instance.instanceState.myAsyncProp, Promise);

        // reject the error; element should re-render and update state
        const rejectionError = new Error('fake error');
        deferredPromiseWrappers[2].reject(rejectionError);

        await waitUntil(() => renderCount === 6, 'Render count failed to reach 6');

        assert.lengthOf(deferredPromiseWrappers, 3);
        assert.strictEqual(instance.instanceState.myAsyncProp, rejectionError);

        // force an update; element should re-render and update state
        await clickElement(forceUpdateButton);

        await waitUntil(() => renderCount === 7, 'Render count failed to reach 7');

        assert.lengthOf(deferredPromiseWrappers, 4);
        typedAssertNotNullish(deferredPromiseWrappers[3]);
        assert.instanceOf(instance.instanceState.myAsyncProp, Promise);

        // assign a new promise; element should not re-render (because the last promise never finished settling) and update state
        await clickElement(newPromiseButton);

        assert.lengthOf(deferredPromiseWrappers, 5);
        typedAssertNotNullish(deferredPromiseWrappers[4]);
        assert.instanceOf(instance.instanceState.myAsyncProp, Promise);

        // it shouldn't render after resolution of a previous promise
        deferredPromiseWrappers[3].resolve(5);

        await assertRejects(() => waitUntil(() => renderCount === 8));
        assert.instanceOf(instance.instanceState.myAsyncProp, Promise);

        // should render after resolving the current promise
        const finalResolutionValue = 6;
        deferredPromiseWrappers[4].resolve(finalResolutionValue);

        await waitUntil(() => renderCount === 8);
        assert.strictEqual(instance.instanceState.myAsyncProp, finalResolutionValue);

        // assign an already resolved value; element should update once and immediately use the resolved value
        await clickElement(assignResolvedButton);

        assert.lengthOf(
            deferredPromiseWrappers,
            5,
            'no new deferred promises should have been created',
        );
        assert.typeOf(instance.instanceState.myAsyncProp, 'number');
    });

    it('does not clash with other instances', async () => {
        const ElementWithAsyncProp = defineElement<{
            promiseUpdateTrigger: number | undefined;
        }>()({
            tagName: `element-with-async-prop-${randomString()}`,
            stateInitStatic: {
                myRandomNumber: asyncProp({
                    async updateCallback({newNumber}: {newNumber: number | undefined}) {
                        return randomString();
                    },
                }),
            },
            renderCallback({inputs, state, updateState}) {
                updateState({
                    myRandomNumber: {
                        serializableTrigger: {
                            newNumber: inputs.promiseUpdateTrigger,
                        },
                    },
                });

                return html`
                    <span class="value-span">
                        ${renderAsync(state.myRandomNumber, 'loading', (resolved) => resolved)}
                    </span>
                `;
            },
        });

        const rendered = await renderFixture(html`
            <div>
                <${ElementWithAsyncProp}
                    ${assign(ElementWithAsyncProp, {promiseUpdateTrigger: undefined})}
                ></${ElementWithAsyncProp}>
                <${ElementWithAsyncProp}
                    ${assign(ElementWithAsyncProp, {promiseUpdateTrigger: undefined})}
                ></${ElementWithAsyncProp}>
            </div>
        `);

        // get elements
        const [
            instance1,
            instance2,
        ] = Array.from(rendered.querySelectorAll(ElementWithAsyncProp.tagName));

        typedAssertInstanceOf(instance1, ElementWithAsyncProp);
        typedAssertInstanceOf(instance2, ElementWithAsyncProp);

        const [
            span1,
            span2,
        ] = [
            instance1.shadowRoot.querySelector('.value-span'),
            instance2.shadowRoot.querySelector('.value-span'),
        ];
        typedAssertInstanceOf(span1, HTMLSpanElement);
        typedAssertInstanceOf(span2, HTMLSpanElement);

        const spans = [
            span1,
            span2,
        ] as const;

        function getSpanTexts() {
            return typedMap(spans, (span) => span.innerText);
        }

        const beforeTexts = getSpanTexts();

        assert.notStrictEqual(beforeTexts[0], beforeTexts[1]);

        instance1.instanceInputs.promiseUpdateTrigger = Math.random();

        await waitUntil(() => {
            return beforeTexts[0] !== span1.innerText;
        });

        const afterTexts = getSpanTexts();

        assert.notStrictEqual(afterTexts[0], afterTexts[1]);
        assert.notStrictEqual(beforeTexts[0], afterTexts[0]);
        assert.strictEqual(beforeTexts[1], afterTexts[1]);
    });

    it('works even if the value is undefined', async () => {
        const ElementWithUndefinedAsyncProp = defineElementNoInputs({
            tagName: `element-with-undefined-async-prop-${randomString()}`,
            stateInitStatic: {
                myAsyncProp: asyncProp({defaultValue: undefined as number | undefined}),
            },
            events: {
                wasRendered: defineElementEvent<void>(),
            },
            renderCallback({dispatch, events, state, updateState}) {
                if (isRenderReady(state.myAsyncProp)) {
                    assertTypeOf(state.myAsyncProp).toEqualTypeOf<number | undefined>();
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
                                myAsyncProp: {
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
                                myAsyncProp: {
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
                                myAsyncProp: {
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
            <${ElementWithUndefinedAsyncProp}
                ${listen(ElementWithUndefinedAsyncProp.events.wasRendered, () => {
                    renderCount++;
                })}
            ></${ElementWithUndefinedAsyncProp}>
        `);

        // get elements
        const instance = getAssertedDeclarativeElement(ElementWithUndefinedAsyncProp, rendered);
        const newPromiseButton = instance.shadowRoot.querySelector('#new-promise');
        const forceUpdateButton = instance.shadowRoot.querySelector('#force-update');
        const assignResolvedButton = instance.shadowRoot.querySelector('#assign-resolved-value');

        typedAssertNotNullish(newPromiseButton);
        typedAssertNotNullish(forceUpdateButton);
        typedAssertNotNullish(assignResolvedButton);

        // initial render
        assert.isUndefined(instance.instanceState.myAsyncProp);
        assert.strictEqual(renderCount, 1);

        // assign a new promise
        await clickElement(newPromiseButton);

        await waitUntil(() => renderCount === 2);
        assert.instanceOf(instance.instanceState.myAsyncProp, Promise);

        // force an update (but we have no create promise so it should not resolve)
        await clickElement(forceUpdateButton);

        await waitUntil(() => renderCount === 3);
        assert.instanceOf(instance.instanceState.myAsyncProp, Promise);

        // assign a new resolved value
        await clickElement(assignResolvedButton);

        await waitUntil(() => renderCount === 4);
        assert.isNumber(instance.instanceState.myAsyncProp);
    });
});
