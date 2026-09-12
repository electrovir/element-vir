import {assert, waitUntil} from '@augment-vir/assert';
import {DeferredPromise, randomString, typedMap, wait, waitValue} from '@augment-vir/common';
import {describe, it, itCases, testWeb} from '@augment-vir/test';
import {AsyncValueState, isObservableBase, noUpdate} from 'observavir';
import {nothing} from '../../lit-exports/all-lit-exports.js';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {defineElementEvent} from '../properties/element-events.js';
import {type AsyncProp, type AsyncValue, InternalAsyncPropClass, asyncProp} from './async-prop.js';
import {listen} from './listen.directive.js';
import {renderAsync} from './render-async.directive.js';

describe(asyncProp.name, () => {
    it('has proper types', () => {
        type Dimensions = {width: number; length: number};
        type TriggerType = {
            imageUrl: string;
            max?: Dimensions | undefined;
            min?: Dimensions | undefined;
            originalImageSize?: Dimensions | undefined;
        };
        type SomethingObject = {something: number};

        asyncProp({
            async updateCallback(trigger: {callback: number}) {
                await wait({
                    milliseconds: 0,
                });
                return 'five';
            },
        });

        asyncProp({
            async updateCallback(trigger: {callback: () => number}) {
                await wait({
                    milliseconds: 0,
                });
                return 'five';
            },
        });

        const elementWithAsyncProp = defineElement()({
            tagName: 'element-with-async-prop-2',
            state() {
                return {
                    myAsyncProp: asyncProp({
                        updateCallback(trigger: TriggerType) {
                            return Promise.resolve({
                                something: 4,
                            });
                        },
                    }),
                    myAsyncPropAgain: asyncProp({
                        updateCallback(trigger: TriggerType & {hello: string; goodbye: number}) {
                            return Promise.resolve({
                                something: 4,
                            });
                        },
                    }),
                    myProp: asyncProp({
                        defaultValue: waitValue(
                            {
                                seconds: 10,
                            },
                            'value',
                        ),
                    }),
                    syncProp: {
                        value: 'hi',
                    },
                };
            },
            render({state, updateState}) {
                updateState({
                    myAsyncProp: asyncProp({
                        updateCallback(trigger: TriggerType) {
                            return Promise.resolve({
                                something: 4,
                            });
                        },
                    }),
                });
                const exampleTrigger = {} as TriggerType;

                state.myAsyncProp.update(exampleTrigger);
                state.myAsyncPropAgain.update({
                    ...exampleTrigger,
                    goodbye: 4,
                    hello: 'hi',
                });

                updateState({
                    syncProp: {
                        value: 'yo',
                        // @ts-expect-error: invalid extra property
                        hello: 'yo',
                    },
                });

                state.myAsyncProp.update({
                    ...exampleTrigger,
                    // @ts-expect-error: invalid extra property
                    hello: 'yo',
                });
                state.myAsyncPropAgain.update({
                    ...exampleTrigger,
                    goodbye: 4,
                    hello: 'hi',
                });

                updateState({
                    syncProp: {
                        value: 'yo',
                    },
                });

                state.myAsyncPropAgain.setValue(Promise.resolve({} as any));

                assert.tsType(state.myAsyncProp.value).equals<AsyncValue<SomethingObject>>();
                return html``;
            },
        });

        assert
            .tsType<
                ReturnType<NonNullable<typeof elementWithAsyncProp.init.state>>['myAsyncProp']
            >()
            .equals<AsyncProp<SomethingObject, TriggerType>>();

        assert
            .tsType<(typeof elementWithAsyncProp)['StateType']['myAsyncProp']['value']>()
            .equals<AsyncValue<SomethingObject>>();

        assert
            .tsType<
                (typeof elementWithAsyncProp)['InstanceType']['instanceState']['myAsyncProp']['value']
            >()
            .equals<AsyncValue<SomethingObject>>();
    });

    it('passes isObservableBase', () => {
        const instance = asyncProp();
        assert.isTrue(isObservableBase(instance));
    });

    it('updates and resolves async prop createPromise and update', async () => {
        const startingNumber = 123;

        // render the element
        const deferredPromiseWrappers: DeferredPromise<number>[] = [];
        let renderCount: number = 0;
        const circularReference = {
            derp: '' as any,
        };
        circularReference.derp = circularReference;

        const ElementWithAsyncProp = defineElement<{
            promiseUpdateTrigger: number | undefined;
        }>()({
            tagName: 'element-with-async-prop-3',
            state() {
                return {
                    myAsyncProp: asyncProp({
                        updateCallback({newNumber}: {newNumber: number; circularReference: any}) {
                            const newDeferredPromise = new DeferredPromise<typeof newNumber>();
                            deferredPromiseWrappers.push(newDeferredPromise);
                            return newDeferredPromise.promise;
                        },
                    }),
                };
            },
            render({inputs, state}) {
                state.myAsyncProp.update({
                    newNumber: inputs.promiseUpdateTrigger ?? startingNumber,
                    circularReference,
                });

                if (
                    !(state.myAsyncProp.settledValue instanceof Error) &&
                    state.myAsyncProp.settledValue
                ) {
                    assert.tsType(state.myAsyncProp.settledValue).equals<number>();
                }

                renderCount++;

                return html`
                    <button
                        id="new-promise"
                        ${listen('click', () => {
                            const newDeferredPromise = new DeferredPromise<number>();

                            state.myAsyncProp.setValue(newDeferredPromise.promise);

                            deferredPromiseWrappers.push(newDeferredPromise);
                        })}
                    >
                        New Promise
                    </button>
                    <button
                        id="force-update"
                        ${listen('click', () => {
                            state.myAsyncProp.forceUpdate({
                                newNumber: inputs.promiseUpdateTrigger ?? startingNumber,
                                circularReference,
                            });
                        })}
                    >
                        Force Update
                    </button>
                    <button
                        id="assign-resolved-value"
                        ${listen('click', () => {
                            state.myAsyncProp.setValue(1 + Math.random());
                        })}
                    >
                        Assign Resolved Value
                    </button>
                `;
            },
        });

        const instance = await testWeb.render(html`
            <${ElementWithAsyncProp.assign({
                promiseUpdateTrigger: startingNumber,
            })}></${ElementWithAsyncProp}>
        `);

        // get elements
        assert.instanceOf(instance, ElementWithAsyncProp);
        const newPromiseButton = instance.shadowRoot.querySelector('#new-promise');
        const forceUpdateButton = instance.shadowRoot.querySelector('#force-update');
        const assignResolvedButton = instance.shadowRoot.querySelector('#assign-resolved-value');

        assert.isUndefined(instance.instanceState.myAsyncProp.lastResolvedValue);
        const initialPromise = instance.instanceState.myAsyncProp.value;

        assert.isDefined(newPromiseButton);
        assert.isDefined(forceUpdateButton);
        assert.isDefined(assignResolvedButton);

        // initial render
        assert.isDefined(deferredPromiseWrappers[0]);
        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 1);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);
        assert.strictEquals(renderCount, 1);

        // assign the same number to the input; the element should not re-render
        instance.assignInputs({
            promiseUpdateTrigger: startingNumber,
        });
        await assert.throws(
            async () => await waitUntil(() => renderCount === 2),
            undefined,
            'should not have rendered again',
        );

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 1);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // assign a new number; the element should re-render
        instance.assignInputs({
            promiseUpdateTrigger: 2,
        });
        await waitUntil(() => renderCount === 2, undefined, 'Render count failed to reach 2');

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 2);
        assert.isDefined(deferredPromiseWrappers[1]);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // resolve the promise; the element should re-render and the state should update
        const resolutionValue = 3;
        deferredPromiseWrappers[1].resolve(resolutionValue);

        await waitUntil(() => renderCount === 3, undefined, 'Render count failed to reach 3');
        const initialPromiseResult = await initialPromise;

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 2);
        /**
         * Read into fresh locals because `assert.strictEquals` narrows its first argument for the
         * rest of the scope, which would otherwise pin `.value` to the promise it was first
         * compared against.
         */
        const resolvedValue: unknown = instance.instanceState.myAsyncProp.value;
        const lastResolvedValue: unknown = instance.instanceState.myAsyncProp.lastResolvedValue;

        assert.strictEquals(resolvedValue, resolutionValue);
        assert.strictEquals(initialPromiseResult, resolutionValue);
        assert.strictEquals(lastResolvedValue, resolutionValue);

        // assign a new input; element should re-render and create a new promise
        instance.assignInputs({
            promiseUpdateTrigger: 4,
        });
        await waitUntil(() => renderCount === 4, undefined, 'Render count failed to reach 4');

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 3);
        assert.isDefined(deferredPromiseWrappers[2]);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // reject the error; element should re-render and update state
        const rejectionError = new Error('fake error');
        deferredPromiseWrappers[2].reject(rejectionError);

        await waitUntil(() => renderCount === 5, undefined, 'Render count failed to reach 5');

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 3);
        const rejectedValue: unknown = instance.instanceState.myAsyncProp.value;
        assert.strictEquals(rejectedValue, rejectionError);

        // force an update; element should re-render and update state
        await testWeb.click(forceUpdateButton);

        await waitUntil(() => renderCount === 6, undefined, 'Render count failed to reach 6');

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 4);
        assert.isDefined(deferredPromiseWrappers[3]);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // assign a new promise; element should not re-render (because the last promise never finished settling) and update state
        await testWeb.click(newPromiseButton);

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 5);
        assert.isDefined(deferredPromiseWrappers[4]);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // it shouldn't render after resolution of a previous promise
        deferredPromiseWrappers[3].resolve(5);

        await assert.throws(() => waitUntil(() => renderCount === 7));
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // should render after resolving the current promise
        const finalResolutionValue = 6;
        deferredPromiseWrappers[4].resolve(finalResolutionValue);

        await waitUntil(() => renderCount === 7, undefined, 'Render count failed to reach 7');
        const finalValue: unknown = instance.instanceState.myAsyncProp.value;
        assert.strictEquals(finalValue, finalResolutionValue);

        // assign an already resolved value; element should update once and immediately use the resolved value
        await testWeb.click(assignResolvedButton);

        assert.isLengthExactly(
            deferredPromiseWrappers,
            5,
            'no new deferred promises should have been created',
        );
        assert.isNumber(instance.instanceState.myAsyncProp.value);
    });

    it('resolves to an error if one is thrown', async () => {
        const errorMessage = [
            'intentional error:',
            randomString(),
        ].join(' ');

        const ElementWithAsyncPropError = defineElement()({
            tagName: 'element-with-async-prop-error-4',
            state() {
                return {
                    myAsyncProp: asyncProp({
                        async updateCallback() {
                            await wait({
                                seconds: 1,
                            });
                            throw new Error(errorMessage);
                        },
                    }),
                };
            },
            render({state}) {
                state.myAsyncProp.update();
                return 'hello';
            },
        });

        const instance = await testWeb.render(html`
            <${ElementWithAsyncPropError}></${ElementWithAsyncPropError}>
        `);

        // get elements
        assert.instanceOf(instance, ElementWithAsyncPropError);
        await waitUntil.isTruthy(() => {
            return (
                instance.instanceState.myAsyncProp.value instanceof Error &&
                instance.instanceState.myAsyncProp.value.message === errorMessage
            );
        });
    });

    it('does not clash with other instances', async () => {
        const ElementWithAsyncProp = defineElement<{
            promiseUpdateTrigger: number | undefined;
        }>()({
            tagName: 'element-with-async-prop-5',
            state() {
                return {
                    myRandomNumber: asyncProp({
                        async updateCallback({newNumber}: {newNumber: number | undefined}) {
                            await wait({
                                milliseconds: 0,
                            });
                            return randomString();
                        },
                    }),
                };
            },
            render({inputs, state, host}) {
                state.myRandomNumber.update({
                    newNumber: inputs.promiseUpdateTrigger,
                });

                return html`
                    <span class="value-span">
                        ${renderAsync(state.myRandomNumber, 'loading', (resolved) => resolved)}
                    </span>
                `;
            },
        });

        const rendered = await testWeb.render(html`
            <div>
                <${ElementWithAsyncProp.assign({
                    promiseUpdateTrigger: undefined,
                })}></${ElementWithAsyncProp}>
                <${ElementWithAsyncProp.assign({
                    promiseUpdateTrigger: undefined,
                })}></${ElementWithAsyncProp}>
            </div>
        `);

        // get elements
        const [
            instance1,
            instance2,
        ] = Array.from(rendered.querySelectorAll(ElementWithAsyncProp.tagName));

        assert.instanceOf(instance1, ElementWithAsyncProp);
        assert.instanceOf(instance2, ElementWithAsyncProp);

        const [
            span1,
            span2,
        ] = [
            instance1.shadowRoot.querySelector('.value-span'),
            instance2.shadowRoot.querySelector('.value-span'),
        ];
        assert.instanceOf(span1, HTMLSpanElement);
        assert.instanceOf(span2, HTMLSpanElement);

        const spans = [
            span1,
            span2,
        ] as const;

        function getSpanTexts() {
            return typedMap(spans, (span) => span.innerText);
        }

        await waitUntil(() => {
            return span1.innerText !== 'loading' && span2.innerText !== 'loading';
        });

        const beforeTexts = getSpanTexts();

        assert.notStrictEquals(beforeTexts[0], beforeTexts[1]);

        instance1.instanceInputs.promiseUpdateTrigger = Math.random();

        await waitUntil(() => {
            return beforeTexts[0] !== span1.innerText;
        });

        const afterTexts = getSpanTexts();

        assert.notStrictEquals(afterTexts[0], afterTexts[1]);
        assert.notStrictEquals(beforeTexts[0], afterTexts[0]);
        assert.strictEquals(beforeTexts[1], afterTexts[1]);
    });

    it('works even if the value is undefined', async () => {
        const ElementWithUndefinedAsyncProp = defineElement()({
            tagName: 'element-with-undefined-async-prop-1',
            state() {
                return {
                    myAsyncProp: asyncProp({
                        defaultValue: undefined as number | undefined,
                    }),
                };
            },
            events: {
                wasRendered: defineElementEvent<void>(),
            },
            render({dispatch, events, state}) {
                if (state.myAsyncProp.isResolved()) {
                    assert.tsType(state.myAsyncProp.value).equals<number | undefined>();
                }

                dispatch(
                    new events.wasRendered({
                        detail: undefined,
                    }),
                );

                return html`
                    <button
                        id="new-promise"
                        ${listen('click', () => {
                            const newPromiseWrapper = new DeferredPromise<number | undefined>();

                            state.myAsyncProp.setValue(newPromiseWrapper.promise);
                        })}
                    >
                        New Promise
                    </button>
                    <button
                        id="force-update"
                        ${listen('click', () => {
                            try {
                                state.myAsyncProp.forceUpdate();
                            } catch (error) {
                                state.myAsyncProp.setValue(error as any);
                            }
                        })}
                    >
                        Force Update
                    </button>
                    <button
                        id="assign-resolved-value"
                        ${listen('click', () => {
                            state.myAsyncProp.setValue(Math.random());
                        })}
                    >
                        Assign Resolved Value
                    </button>
                `;
            },
        });

        // render the element
        let renderCount: number = 0;

        const instance = await testWeb.render(html`
            <${ElementWithUndefinedAsyncProp}
                ${listen(ElementWithUndefinedAsyncProp.events.wasRendered, () => {
                    renderCount++;
                })}
            ></${ElementWithUndefinedAsyncProp}>
        `);

        // get elements
        assert.instanceOf(instance, ElementWithUndefinedAsyncProp);
        const newPromiseButton = instance.shadowRoot.querySelector('#new-promise');
        const forceUpdateButton = instance.shadowRoot.querySelector('#force-update');
        const assignResolvedButton = instance.shadowRoot.querySelector('#assign-resolved-value');

        assert.isDefined(newPromiseButton);
        assert.isDefined(forceUpdateButton);
        assert.isDefined(assignResolvedButton);

        // initial render
        assert.isUndefined(instance.instanceState.myAsyncProp.value);
        assert.strictEquals(renderCount, 1);

        // assign a new promise
        await testWeb.click(newPromiseButton);

        await waitUntil(() => renderCount === 2);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // force an update (but we have no create promise so it will error out)
        await testWeb.click(forceUpdateButton);

        await waitUntil(() => renderCount === 3);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Error);

        // assign a new resolved value
        await testWeb.click(assignResolvedButton);

        await waitUntil(() => renderCount === 4);
        assert.isNumber(instance.instanceState.myAsyncProp.value);
    });

    it('has a simplified interface', () => {
        const instance = asyncProp();

        instance.destroy;
        instance.forceUpdate;
        instance.lastParams;
        instance.lastResolvedValue;
        instance.setParams;
        instance.setValue;
        instance.update;
        instance.value;
        instance.settledValue;
        void instance.promiseValue;
        instance.state;
        instance.isResolved;
        instance.isSettled;
        instance.isWaiting;
        instance.isError;
        instance.isNotError;

        /**
         * These properties are set to `protected` to hide them so the `AsyncProp` interface is
         * simpler.
         */
        // @ts-expect-error: should not exist publicly
        instance.dispatch;
        // @ts-expect-error: should not exist publicly
        instance.equalityCheck;
        // @ts-expect-error: should not exist publicly
        instance.getListenerCount;
        // @ts-expect-error: should not exist publicly
        instance.updateCallback;
        // @ts-expect-error: should not exist publicly
        instance.removeListener;
        // @ts-expect-error: should not exist publicly
        instance.removeAllListeners;
        // @ts-expect-error: should not exist publicly
        instance.listenToEvent;
        // @ts-expect-error: should not exist publicly
        instance.listen;
        // @ts-expect-error: should not exist publicly
        instance.resolvedValue;
    });

    it('does not trigger updates with a function input changing', () => {
        let callCount = 0;
        const instance = asyncProp({
            updateCallback(inputs: {prop1: string; callback: () => any}) {
                return callCount++;
            },
        });

        instance.update({
            prop1: 'hi',
            callback() {},
        });
        instance.update({
            prop1: 'hi',
            callback() {},
        });
        instance.update({
            prop1: 'hi',
            callback() {},
        });
        instance.update({
            prop1: 'hi',
            callback() {},
        });
        instance.update({
            prop1: 'bye',
            callback() {},
        });

        assert.strictEquals(callCount, 2);
    });

    it('does not automatically read new proxy values', async () => {
        let callCount = 0;

        const ElementWithProxyAsyncPropInput = defineElement<{inputValue: string}>()({
            tagName: 'vir-element-with-proxy-async-prop-input',
            state() {
                return {
                    myProp: asyncProp({
                        updateCallback(inputsProxy: {inputValue: string}) {
                            callCount++;
                            return inputsProxy.inputValue;
                        },
                    }),
                };
            },
            init({state, inputs}) {
                state.myProp.update(inputs);
            },
            render({state}) {
                if (state.myProp.isResolved()) {
                    return state.myProp.value;
                } else if (state.myProp.isError()) {
                    return 'error';
                } else {
                    return 'loading...';
                }
            },
        });

        const rendered = await testWeb.render(html`
            <${ElementWithProxyAsyncPropInput.assign({
                inputValue: 'hello there',
            })}></${ElementWithProxyAsyncPropInput}>
        `);

        assert.instanceOf(rendered, ElementWithProxyAsyncPropInput);

        assert.strictEquals(rendered.shadowRoot.textContent, 'hello there');
        rendered.assignInputs({
            inputValue: 'new value',
        });
        assert.strictEquals(rendered.shadowRoot.textContent, 'hello there');
        rendered.instanceState.myProp.forceUpdate();
        assert.strictEquals(rendered.shadowRoot.textContent, 'hello there');
        assert.strictEquals(callCount, 2);
    });

    it('ignores ongoing promises if setValue is called', async () => {
        let resolved = false;
        const updateDuration = {
            milliseconds: 500,
        };

        const RaceConditionElement = defineElement()({
            tagName: 'vir-element-race-condition-between-set-value-and-promise-resolution',
            state() {
                return {
                    myProp: asyncProp({
                        async updateCallback() {
                            await wait(updateDuration);
                            setTimeout(() => {
                                resolved = true;
                            });
                            return 5;
                        },
                    }),
                };
            },
            render({state}) {
                state.myProp.update();
                return nothing;
            },
        });

        const rendered = await testWeb.render(html`
            <${RaceConditionElement}></${RaceConditionElement}>
        `);

        assert.instanceOf(rendered, RaceConditionElement);
        assert.instanceOf(rendered.instanceState.myProp.value, Promise);

        rendered.instanceState.myProp.setValue(42);

        assert.isFalse(resolved);
        await waitUntil.isTruthy(() => resolved);
        await wait({
            milliseconds: updateDuration.milliseconds * 2,
        });
        const settledPropValue: unknown = rendered.instanceState.myProp.value;
        assert.strictEquals(settledPropValue, 42);
    });

    it('allows noUpdate', async () => {
        const VirAsyncPropWithNoUpdate = defineElement()({
            tagName: 'vir-async-prop-with-update',
            state() {
                return {
                    asyncValues: asyncProp({
                        updateCallback({
                            shouldBypass,
                            value,
                        }: {
                            value: string;
                            shouldBypass: boolean;
                        }): ReadonlyArray<string> | typeof noUpdate {
                            if (shouldBypass) {
                                return noUpdate;
                            }

                            return new Array(10).fill(0).map(() => value);
                        },
                    }),
                };
            },
            render({state}) {
                state.asyncValues.update({
                    value: 'hello there',
                    shouldBypass: true,
                });
                return 'hi';
            },
        });

        const rendered = await testWeb.render(html`
            <${VirAsyncPropWithNoUpdate}></${VirAsyncPropWithNoUpdate}>
        `);

        assert.instanceOf(rendered, VirAsyncPropWithNoUpdate);
        await waitUntil.isTruthy(() => rendered._internalRenderCount > 0);
        assert.instanceOf(rendered.instanceState.asyncValues.value, Promise);
    });

    it('resolves a promise of noUpdate into the last resolved value', async () => {
        const instance = asyncProp<string>({
            defaultValue: 'first',
        });

        assert.strictEquals(instance.setValue(Promise.resolve(noUpdate)), true);
        await waitUntil.isTruthy(() => !(instance.value instanceof Promise));
        assert.strictEquals(instance.value, 'first');
        assert.strictEquals(instance.lastResolvedValue, 'first');
    });

    it('creates a new instance of the internal class', () => {
        assert.instanceOf(asyncProp(), InternalAsyncPropClass);
        assert.notStrictEquals(asyncProp(), asyncProp());
    });

    it('starts with a pending promise and no params', () => {
        const instance = asyncProp<string, {value: string}>();

        assert.instanceOf(instance.value, Promise);
        assert.isUndefined(instance.settledValue);
        assert.isUndefined(instance.lastResolvedValue);
        assert.isUndefined(instance.lastParams);
        assert.strictEquals(instance.state, AsyncValueState.Waiting);
    });

    it('reuses the pending value promise until it settles', async () => {
        const instance = asyncProp<number>();
        const initialPromise = instance.value;
        const firstDeferred = new DeferredPromise<number>();

        assert.isTrue(instance.setValue(firstDeferred.promise));
        assert.strictEquals(instance.value, initialPromise);
        /** Setting the exact same promise again is a no-op. */
        assert.isFalse(instance.setValue(firstDeferred.promise));

        firstDeferred.resolve(4);
        assert.strictEquals(await initialPromise, 4);
        assert.strictEquals(instance.value, 4);

        const secondDeferred = new DeferredPromise<number>();
        assert.isTrue(instance.setValue(secondDeferred.promise));
        assert.instanceOf(instance.value, Promise);
        assert.notStrictEquals(instance.value, initialPromise);
        assert.strictEquals(instance.lastResolvedValue, 4);

        secondDeferred.resolve(5);
        await waitUntil.isTruthy(() => instance.value === 5);
    });

    it('discards a stale promise resolution', async () => {
        const instance = asyncProp<string>();
        const firstDeferred = new DeferredPromise<string>();
        const secondDeferred = new DeferredPromise<string>();

        instance.setValue(firstDeferred.promise);
        instance.setValue(secondDeferred.promise);

        firstDeferred.resolve('first');
        await wait({
            milliseconds: 0,
        });
        assert.instanceOf(instance.value, Promise);

        secondDeferred.resolve('second');
        await waitUntil.isTruthy(() => !(instance.value instanceof Promise));
        const secondValue: unknown = instance.value;
        assert.strictEquals(secondValue, 'second');
        assert.strictEquals(instance.lastResolvedValue, 'second');
    });

    it('discards a stale promise rejection', async () => {
        const instance = asyncProp<string>();
        const firstDeferred = new DeferredPromise<string>();
        const secondDeferred = new DeferredPromise<string>();

        instance.setValue(firstDeferred.promise);
        instance.setValue(secondDeferred.promise);

        firstDeferred.reject(new Error('stale rejection'));
        await wait({
            milliseconds: 0,
        });
        assert.instanceOf(instance.value, Promise);

        secondDeferred.resolve('second');
        await waitUntil.isTruthy(() => !(instance.value instanceof Promise));
        const secondValue: unknown = instance.value;
        assert.strictEquals(secondValue, 'second');
    });

    it('ignores a promise that settles after setValue', async () => {
        const instance = asyncProp<number>();
        const deferred = new DeferredPromise<number>();

        instance.setValue(deferred.promise);
        assert.isTrue(instance.setValue(1));

        deferred.resolve(2);
        await wait({
            milliseconds: 0,
        });

        assert.strictEquals(instance.value, 1);
        assert.strictEquals(instance.lastResolvedValue, 1);
    });

    it('wraps a non-error promise rejection reason into an Error', async () => {
        const instance = asyncProp<number>();

        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
        instance.setValue(Promise.reject('just a string'));

        await waitUntil.isTruthy(() => instance.value instanceof Error);
        assert.isError(instance.value as Error, {
            matchMessage: 'just a string',
        });
    });

    it('captures an error thrown synchronously by updateCallback', () => {
        const errorMessage = [
            'intentional sync error:',
            randomString(),
        ].join(' ');
        const instance = asyncProp<number>({
            updateCallback() {
                throw new Error(errorMessage);
            },
        });

        assert.isTrue(instance.update());
        assert.isError(instance.value as Error, {
            matchMessage: errorMessage,
        });
        assert.isUndefined(instance.lastResolvedValue);
    });

    it('does not change lastResolvedValue when an error is set', () => {
        const instance = asyncProp<string>({
            defaultValue: 'first',
        });

        assert.strictEquals(instance.lastResolvedValue, 'first');

        instance.setValue(new Error('nope'));

        assert.instanceOf(instance.value, Error);
        assert.strictEquals(instance.lastResolvedValue, 'first');
        assert.strictEquals(instance.state, AsyncValueState.Rejected);
    });

    it('throws when updating without a callback', () => {
        const instance = asyncProp<number>();

        assert.throws(() => instance.forceUpdate(), {
            matchConstructor: TypeError,
            matchMessage: 'Cannot update value: updateCallback was never set.',
        });
    });

    it('throws when updating without params', () => {
        const instance = asyncProp<number, {value: number}>({
            updateCallback({value}) {
                return value;
            },
        });

        assert.throws(() => instance.forceUpdate(), {
            matchConstructor: TypeError,
            matchMessage: 'Cannot update value: params were never set.',
        });
    });

    it('only calls updateCallback when params deeply change', () => {
        let callCount: number = 0;
        const instance = asyncProp({
            updateCallback(params: {nested: {value: number}}) {
                callCount++;
                return params.nested.value;
            },
        });

        assert.isTrue(
            instance.update({
                nested: {
                    value: 1,
                },
            }),
        );
        assert.isFalse(
            instance.update({
                nested: {
                    value: 1,
                },
            }),
        );
        assert.isTrue(
            instance.update({
                nested: {
                    value: 2,
                },
            }),
        );
        assert.strictEquals(callCount, 2);
    });

    it('treats repeated void params as unchanged', () => {
        let callCount: number = 0;
        const instance = asyncProp({
            updateCallback() {
                callCount++;
                return callCount;
            },
        });

        assert.isTrue(instance.update());
        assert.isFalse(instance.update());
        assert.isTrue(instance.forceUpdate());
        assert.strictEquals(callCount, 2);
    });

    it('passes the previous resolved value to updateCallback', () => {
        const previousValues: unknown[] = [];
        const instance = asyncProp({
            updateCallback(params: {value: number}, previousResolvedValue) {
                previousValues.push(previousResolvedValue);
                return params.value;
            },
        });

        instance.update({
            value: 1,
        });
        instance.update({
            value: 2,
        });

        assert.deepEquals(previousValues, [
            undefined,
            1,
        ]);
    });

    it('sets params without calling updateCallback', () => {
        const callParams: {value: number}[] = [];
        const instance = asyncProp({
            updateCallback(params: {value: number}) {
                callParams.push(params);
                return params.value;
            },
        });

        assert.isTrue(
            instance.setParams({
                value: 1,
            }),
        );
        assert.deepEquals(callParams, []);
        assert.deepEquals(instance.lastParams, {
            value: 1,
        });
        assert.isFalse(
            instance.setParams({
                value: 1,
            }),
        );
        assert.isFalse(
            instance.update({
                value: 1,
            }),
        );
        assert.deepEquals(callParams, []);
        assert.isTrue(
            instance.update({
                value: 2,
            }),
        );
        assert.deepEquals(callParams, [
            {
                value: 2,
            },
        ]);
    });

    it('does not call updateCallback for defaultParams', () => {
        let callCount: number = 0;
        const instance = asyncProp({
            defaultParams: {
                value: 1,
            },
            updateCallback(params: {value: number}) {
                callCount++;
                return params.value;
            },
        });

        assert.deepEquals(instance.lastParams, {
            value: 1,
        });
        assert.strictEquals(callCount, 0);
        assert.instanceOf(instance.value, Promise);
        assert.isFalse(
            instance.update({
                value: 1,
            }),
        );
        assert.strictEquals(callCount, 0);
    });

    it('updates on every call when equalityCheck is undefined', () => {
        let callCount: number = 0;
        const instance = asyncProp({
            equalityCheck: undefined,
            updateCallback(params: {value: number}) {
                callCount++;
                return callCount;
            },
        });

        assert.isTrue(
            instance.update({
                value: 1,
            }),
        );
        assert.isTrue(
            instance.update({
                value: 1,
            }),
        );
        assert.strictEquals(callCount, 2);
        assert.strictEquals(instance.value, 2);
    });

    it('never updates when equalityCheck always matches', () => {
        let callCount: number = 0;
        const instance = asyncProp({
            equalityCheck() {
                return true;
            },
            updateCallback(params: {value: number}) {
                callCount++;
                return params.value;
            },
        });

        assert.isTrue(
            instance.update({
                value: 1,
            }),
        );
        assert.isFalse(
            instance.update({
                value: 2,
            }),
        );
        assert.strictEquals(callCount, 1);
    });

    it('captures an error thrown by the equality check', () => {
        const errorMessage = [
            'intentional equality check error:',
            randomString(),
        ].join(' ');
        const instance = asyncProp<number, {value: number}>({
            updateCallback({value}) {
                return value;
            },
        });

        instance.update({
            value: 1,
        });

        assert.isFalse(
            instance.update({
                get value(): number {
                    throw new Error(errorMessage);
                },
            }),
        );
        assert.isError(instance.value as Error, {
            matchMessage: errorMessage,
        });
    });

    it('destroys state async props when the element is removed', async () => {
        let destroyCount = 0;

        const VirAsyncPropDestroy = defineElement()({
            tagName: 'vir-async-prop-destroy',
            state() {
                const myProp = asyncProp<string>({
                    defaultValue: 'hi',
                });
                const originalDestroy = myProp.destroy.bind(myProp);
                myProp.destroy = () => {
                    destroyCount++;
                    originalDestroy();
                };

                return {
                    myProp,
                };
            },
            render({state}) {
                return renderAsync(state.myProp, 'loading');
            },
        });

        const instance = await testWeb.render(html`
            <${VirAsyncPropDestroy}></${VirAsyncPropDestroy}>
        `);

        assert.instanceOf(instance, VirAsyncPropDestroy);
        assert.strictEquals(destroyCount, 0);

        instance.remove();

        await waitUntil(() => destroyCount === 1, undefined, 'async prop was never destroyed');
    });

    it('never exposes an Error through an isResolved check in a render callback', async () => {
        const observedValues: string[] = [];

        const VirIsResolvedConsumer = defineElement()({
            tagName: 'vir-is-resolved-consumer',
            state() {
                return {
                    myProp: asyncProp<string>(),
                };
            },
            render({state}) {
                if (state.myProp.isResolved()) {
                    assert.tsType(state.myProp.value).equals<string>();
                    observedValues.push(state.myProp.value);
                    return state.myProp.value;
                } else if (state.myProp.isError()) {
                    return 'error';
                } else {
                    return 'loading';
                }
            },
        });

        const instance = await testWeb.render(html`
            <${VirIsResolvedConsumer}></${VirIsResolvedConsumer}>
        `);

        assert.instanceOf(instance, VirIsResolvedConsumer);
        assert.strictEquals(instance.shadowRoot.textContent, 'loading');

        instance.instanceState.myProp.setValue(new Error('consumer error'));
        await waitUntil(() => instance.shadowRoot.textContent === 'error');

        instance.instanceState.myProp.setValue('all good');
        await waitUntil(() => instance.shadowRoot.textContent === 'all good');

        assert.deepEquals(observedValues, ['all good']);
    });

    it('keeps rendering the last resolved value while a new promise is pending', async () => {
        const deferredPromises: DeferredPromise<string>[] = [];

        const VirAsyncPropLastResolved = defineElement<{trigger: number}>()({
            tagName: 'vir-async-prop-last-resolved',
            state() {
                return {
                    myProp: asyncProp({
                        updateCallback(params: {trigger: number}) {
                            const deferred = new DeferredPromise<string>();
                            deferredPromises.push(deferred);
                            return deferred.promise;
                        },
                    }),
                };
            },
            render({inputs, state}) {
                state.myProp.update({
                    trigger: inputs.trigger,
                });

                return html`
                    <span class="value-span">
                        ${renderAsync(state.myProp, 'loading', undefined, undefined, {
                            useLastResolvedValue: true,
                        })}
                    </span>
                `;
            },
        });

        const instance = await testWeb.render(html`
            <${VirAsyncPropLastResolved.assign({
                trigger: 0,
            })}></${VirAsyncPropLastResolved}>
        `);

        assert.instanceOf(instance, VirAsyncPropLastResolved);
        const span = instance.shadowRoot.querySelector('.value-span');
        assert.instanceOf(span, HTMLSpanElement);
        /** Nothing has resolved yet, so `useLastResolvedValue` still renders the fallback. */
        assert.strictEquals(span.innerText, 'loading');

        assert.isDefined(deferredPromises[0]);
        deferredPromises[0].resolve('first');
        await waitUntil(() => span.innerText === 'first');

        instance.assignInputs({
            trigger: 1,
        });
        await waitUntil(() => deferredPromises.length === 2);
        assert.strictEquals(span.innerText as string, 'first');

        assert.isDefined(deferredPromises[1]);
        deferredPromises[1].resolve('second');
        await waitUntil(() => span.innerText === 'second');
    });
});

describe('AsyncProp value type guards', () => {
    it('type guards itself', () => {
        const myAsyncProp = asyncProp({
            async updateCallback(trigger: {callback: number}) {
                await wait({
                    milliseconds: 0,
                });
                return 'five';
            },
        });

        assert.tsType(myAsyncProp.value).equals<AsyncValue<string>>();

        if (myAsyncProp.isNotError()) {
            assert.tsType(myAsyncProp.value).equals<Promise<string> | string>();
        } else if (myAsyncProp.isResolved()) {
            assert.tsType(myAsyncProp.value).equals<string>();
        } else if (myAsyncProp.isWaiting()) {
            assert.tsType(myAsyncProp.value).equals<Promise<string>>();
        } else if (myAsyncProp.isSettled()) {
            assert.tsType(myAsyncProp.value).equals<string | Error>();
        } else if (myAsyncProp.isError()) {
            assert.tsType(myAsyncProp.value).equals<Error>();
        }

        assert.tsType(myAsyncProp.settledValue).equals<string | Error | undefined>();
    });
    it('narrows each guard independently', () => {
        const myAsyncProp = asyncProp({
            async updateCallback(trigger: {callback: number}) {
                await wait({
                    milliseconds: 0,
                });
                return 'five';
            },
        });

        if (myAsyncProp.isResolved()) {
            assert.tsType(myAsyncProp.value).equals<string>();
        }
        if (myAsyncProp.isSettled()) {
            assert.tsType(myAsyncProp.value).equals<string | Error>();
        }
        if (myAsyncProp.isWaiting()) {
            assert.tsType(myAsyncProp.value).equals<Promise<string>>();
        }
        if (myAsyncProp.isError()) {
            assert.tsType(myAsyncProp.value).equals<Error>();
        }
        if (myAsyncProp.isNotError()) {
            assert.tsType(myAsyncProp.value).equals<Promise<string> | string>();
        }
    });

    function testAllGuards(value: unknown) {
        const myAsyncProp = asyncProp();

        myAsyncProp.setValue(value);

        return {
            isResolved: myAsyncProp.isResolved(),
            isSettled: myAsyncProp.isSettled(),
            isWaiting: myAsyncProp.isWaiting(),
            isError: myAsyncProp.isError(),
            isNotError: myAsyncProp.isNotError(),
            state: myAsyncProp.state,
        };
    }

    itCases(testAllGuards, [
        {
            it: 'detects a pending promise',
            input: new Promise(() => {}),
            expect: {
                isResolved: false,
                isSettled: false,
                isWaiting: true,
                isError: false,
                isNotError: true,
                state: AsyncValueState.Waiting,
            },
        },
        {
            it: 'detects an error',
            input: new Error('guard error'),
            expect: {
                isResolved: false,
                isSettled: true,
                isWaiting: false,
                isError: true,
                isNotError: false,
                state: AsyncValueState.Rejected,
            },
        },
        {
            it: 'detects a resolved value',
            input: {
                stuff: 'hello',
            },
            expect: {
                isResolved: true,
                isSettled: true,
                isWaiting: false,
                isError: false,
                isNotError: true,
                state: AsyncValueState.Resolved,
            },
        },
        {
            it: 'detects a resolved undefined value',
            input: undefined,
            expect: {
                isResolved: true,
                isSettled: true,
                isWaiting: false,
                isError: false,
                isNotError: true,
                state: AsyncValueState.Resolved,
            },
        },
        {
            it: 'detects an Error subclass',
            input: new (class CustomGuardError extends Error {
                public override name = 'CustomGuardError';
            })('subclass error'),
            expect: {
                isResolved: false,
                isSettled: true,
                isWaiting: false,
                isError: true,
                isNotError: false,
                state: AsyncValueState.Rejected,
            },
        },
        {
            it: 'treats an error-shaped object as resolved',
            input: {
                message: 'x',
                name: 'Error',
            },
            expect: {
                isResolved: true,
                isSettled: true,
                isWaiting: false,
                isError: false,
                isNotError: true,
                state: AsyncValueState.Resolved,
            },
        },
        {
            it: 'treats an error-shaped string as resolved',
            input: 'Error: boom',
            expect: {
                isResolved: true,
                isSettled: true,
                isWaiting: false,
                isError: false,
                isNotError: true,
                state: AsyncValueState.Resolved,
            },
        },
    ]);

    it('excludes Error from the isResolved narrowed value type', () => {
        const errorOrStringProp = asyncProp<string | Error>();

        assert.tsType(errorOrStringProp.value).equals<AsyncValue<string | Error>>();

        if (errorOrStringProp.isResolved()) {
            assert.tsType(errorOrStringProp.value).equals<string>();
        }
        if (errorOrStringProp.isSettled()) {
            assert.tsType(errorOrStringProp.value).equals<string | Error>();
        }
        if (errorOrStringProp.isNotError()) {
            assert.tsType(errorOrStringProp.value).equals<string | Promise<string | Error>>();
        }
    });

    it('reports an intentionally resolved Error value as unresolved', () => {
        const instance = asyncProp<Error>();
        const resolvedError = new Error('resolved on purpose');

        instance.setValue(resolvedError);

        assert.deepEquals(
            {
                isResolved: instance.isResolved(),
                isError: instance.isError(),
                isSettled: instance.isSettled(),
                lastResolvedValue: instance.lastResolvedValue,
            },
            {
                isResolved: false,
                isError: true,
                isSettled: true,
                lastResolvedValue: undefined,
            },
        );
    });

    it('flips isResolved across the error and success lifecycle', () => {
        const instance = asyncProp<string, {shouldFail: boolean}>({
            updateCallback({shouldFail}) {
                if (shouldFail) {
                    throw new Error('lifecycle failure');
                }
                return 'success';
            },
        });

        assert.isFalse(instance.isResolved());
        assert.isTrue(instance.isWaiting());

        instance.update({
            shouldFail: true,
        });
        assert.isFalse(instance.isResolved());
        assert.isTrue(instance.isError());

        instance.update({
            shouldFail: false,
        });
        assert.isTrue(instance.isResolved());
        assert.strictEquals(instance.value, 'success');

        instance.setValue(new Error('later failure'));
        assert.isFalse(instance.isResolved());
        assert.strictEquals(instance.lastResolvedValue, 'success');

        instance.forceUpdate({
            shouldFail: false,
        });
        assert.isTrue(instance.isResolved());
    });

    it('resolves back to true after a rejected promise is replaced', async () => {
        const instance = asyncProp<string>();
        const failingDeferred = new DeferredPromise<string>();

        instance.setValue(failingDeferred.promise);
        assert.isFalse(instance.isResolved());

        failingDeferred.reject(new Error('rejected promise'));
        await waitUntil.isTruthy(() => instance.isError());
        assert.isFalse(instance.isResolved());

        const succeedingDeferred = new DeferredPromise<string>();
        instance.setValue(succeedingDeferred.promise);
        assert.isFalse(instance.isResolved());

        succeedingDeferred.resolve('recovered');
        await waitUntil.isTruthy(() => instance.isResolved());
        assert.strictEquals(instance.value, 'recovered');
    });

    it('exposes settledValue for each value phase', async () => {
        const instance = asyncProp<string>();
        const deferred = new DeferredPromise<string>();

        instance.setValue(deferred.promise);
        assert.isUndefined(instance.settledValue);

        deferred.resolve('hi');
        await waitUntil.isTruthy(() => instance.settledValue === 'hi');

        const error = new Error('settled error');
        instance.setValue(error);
        const settledError: unknown = instance.settledValue;
        assert.strictEquals(settledError, error);
    });

    it('reuses the pending promise for promiseValue', async () => {
        const instance = asyncProp<string>();

        const pendingValue: unknown = instance.value;
        assert.strictEquals(pendingValue, instance.promiseValue);

        instance.setValue('hi');
        assert.notStrictEquals(instance.promiseValue, instance.value);
        assert.strictEquals(await instance.promiseValue, 'hi');

        const error = new Error('promise value error');
        instance.setValue(error);
        await assert.throws(async () => await instance.promiseValue, {
            matchMessage: error.message,
        });
    });

    function testIsSettled(value: unknown) {
        const myAsyncProp = asyncProp();

        myAsyncProp.setValue(value);

        return myAsyncProp.isSettled();
    }

    itCases(testIsSettled, [
        {
            it: 'rejects promises',
            input: new Promise(() => {}),
            expect: false,
        },
        {
            it: 'accepts errors',
            input: new Error() as AsyncValue<any>,
            expect: true,
        },
        {
            it: 'accepts plain values',
            input: {
                stuff: 'hello',
            } as AsyncValue<any>,
            expect: true,
        },
    ]);

    it('works with isSettled', () => {
        const exampleAsyncProp = asyncProp({
            defaultValue: Promise.resolve('hi'),
        });

        if (exampleAsyncProp.isSettled()) {
            assert.tsType(exampleAsyncProp.value).equals<string | Error>();
        }
    });

    it('works with isError', () => {
        const myAsyncProp = asyncProp({
            defaultValue: {
                hi: '',
            },
        });

        if (myAsyncProp.isError()) {
            assert.tsType(myAsyncProp.value).equals<Error>();
            throw myAsyncProp.value;
        } else if (myAsyncProp.isSettled()) {
            assert.tsType(myAsyncProp.value).equals<
                | {
                      hi: string;
                  }
                | Error
            >();
            assert.isObject(myAsyncProp.value);
        }
    });

    it('works with promiseValue', async () => {
        const myAsyncProp = asyncProp({
            defaultValue: {
                hi: '',
            },
        });
        assert.instanceOf(myAsyncProp.promiseValue, Promise);
        assert.deepEquals(await myAsyncProp.promiseValue, {
            hi: '',
        });

        myAsyncProp.setValue(new Error());
        await assert.throws(async () => await myAsyncProp.promiseValue);

        myAsyncProp.setValue(
            Promise.resolve({
                hi: 'bye',
            }),
        );
        assert.instanceOf(myAsyncProp.promiseValue, Promise);
        assert.deepEquals(await myAsyncProp.promiseValue, {
            hi: 'bye',
        });
    });

    it('enables a type guard chain', () => {
        const myAsyncProp = asyncProp({
            defaultValue: {
                hi: '',
            },
        });

        if (myAsyncProp.settledValue instanceof Error) {
            assert.tsType(myAsyncProp.settledValue).equals<Error>();
            return;
        } else if (!myAsyncProp.settledValue) {
            assert.tsType(myAsyncProp.settledValue).equals<undefined>();
            return;
        }

        assert.tsType(myAsyncProp.settledValue).equals<{hi: string}>;
    });
});
