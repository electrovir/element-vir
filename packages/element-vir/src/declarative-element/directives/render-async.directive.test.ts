import {assert, waitUntil} from '@augment-vir/assert';
import {DeferredPromise} from '@augment-vir/common';
import {describe, it, itCases, testWeb} from '@augment-vir/test';
import {extractElementText} from '@augment-vir/web';
import {
    asyncProp,
    defineElement,
    defineElementEvent,
    html,
    listen,
    renderAsync,
    type AsyncValue,
    type RenderAsyncOptions,
    type RenderAsyncPropInput,
} from '../../index.js';

describe(asyncProp.name, () => {
    const elementWithAsyncProp = defineElement<{
        setAsyncProp: Promise<number>;
    }>()({
        tagName: 'element-with-async-prop',
        state() {
            return {
                myAsyncProp: asyncProp<number>(),
            };
        },
        events: {
            previousAsyncProp: defineElementEvent<AsyncValue<number>>(),
        },
        render({state, inputs, dispatch, events}) {
            state.myAsyncProp.setValue(inputs.setAsyncProp);

            dispatch(new events.previousAsyncProp(state.myAsyncProp.value));

            return renderAsync(
                state.myAsyncProp,
                'Loading...',
                (value) => {
                    return html`
                        Got ${value.toFixed(0)}
                    `;
                },
                // (error) => error.message,
            );
        },
    });

    async function setupAsyncPropTest() {
        const allAsyncValues: AsyncValue<number>[] = [];

        const deferredPromise = new DeferredPromise<number>();

        const instance = await testWeb.render(html`
            <${elementWithAsyncProp.assign({
                setAsyncProp: deferredPromise.promise,
            })}
                ${listen(elementWithAsyncProp.events.previousAsyncProp, (event) => {
                    allAsyncValues.push(event.detail);
                })}
            ></${elementWithAsyncProp}>
        `);
        assert.instanceOf(instance, elementWithAsyncProp);
        assert.isLengthExactly(allAsyncValues, 1);
        assert.instanceOf(allAsyncValues[0], Promise);

        assert.isLengthExactly(allAsyncValues, 1);

        return {
            allAsyncValues,
            instance,
            deferredPromise,
        };
    }

    it('has proper types', () => {
        type SomethingObject = {something: number};

        defineElement()({
            tagName: 'element-with-async-prop-again',
            state() {
                return {
                    asyncProp: asyncProp<SomethingObject, any>(),
                };
            },
            render({state}) {
                assert.tsType(state.asyncProp.value).equals<AsyncValue<SomethingObject>>();
                return html`
                    ${renderAsync(
                        state.asyncProp,
                        'Loading...',
                        (value: SomethingObject) => {
                            return html`
                                ${value.something}
                            `;
                        },
                        (error) => error.message,
                    )}
                `;
            },
        });
    });

    it('renders the resolution callback', async () => {
        const {instance, deferredPromise, allAsyncValues} = await setupAsyncPropTest();

        const randomValue = Math.random() * 100;

        assert.strictEquals(extractElementText(instance), 'Loading...');

        deferredPromise.resolve(randomValue);

        // wait for the event to propagate
        await waitUntil(() => (allAsyncValues.length as number) > 1);

        assert.strictEquals(extractElementText(instance), `Got\n${randomValue.toFixed()}`);
    });
});

describe(renderAsync.name, () => {
    it('returns the error message by default when no errorRender is provided', () => {
        const result = renderAsync(
            {
                value: new Error('boom'),
                lastResolvedValue: undefined,
            },
            'fallback',
        );
        assert.strictEquals(result, 'boom');
    });

    it('invokes errorRender when provided and the value is an Error', () => {
        const result = renderAsync(
            {
                value: new Error('boom'),
                lastResolvedValue: undefined,
            },
            'fallback',
            undefined,
            (error) => `caught: ${error.message}`,
        );
        assert.strictEquals(result, 'caught: boom');
    });

    it('returns the raw value when no resolutionRender is provided', () => {
        const result = renderAsync(
            {
                value: 'resolved',
                lastResolvedValue: undefined,
            },
            'fallback',
        );
        assert.strictEquals(result, 'resolved');
    });

    it('returns fallback while pending', () => {
        const pendingPromise = Promise.resolve('eventual');
        const result = renderAsync(
            {
                value: pendingPromise,
                lastResolvedValue: undefined,
            },
            'fallback',
        );
        assert.strictEquals(result, 'fallback');
    });

    it('with useLastResolvedValue renders the fallback before the first resolution', () => {
        const resolvedValues: unknown[] = [];

        const result = renderAsync<string | undefined, string, string>(
            {
                value: Promise.resolve('eventual'),
                lastResolvedValue: undefined,
            },
            'fallback',
            (resolved) => {
                resolvedValues.push(resolved);
                return 'rendered';
            },
            undefined,
            {
                useLastResolvedValue: true,
            },
        );

        assert.strictEquals(result, 'fallback');
        assert.isEmpty(resolvedValues);
    });

    it('with useLastResolvedValue treats a settled undefined value as a resolution', () => {
        const resolvedValues: unknown[] = [];

        const result = renderAsync<string | undefined, string, string>(
            {
                value: undefined,
                lastResolvedValue: undefined,
            },
            'fallback',
            (resolved) => {
                resolvedValues.push(resolved);
                return 'rendered';
            },
            undefined,
            {
                useLastResolvedValue: true,
            },
        );

        assert.strictEquals(result, 'rendered');
        assert.deepEquals(resolvedValues, [undefined]);
    });

    it('with useLastResolvedValue returns the fallback when no resolutionRender exists', () => {
        assert.strictEquals(
            renderAsync(
                {
                    value: Promise.resolve('eventual'),
                    lastResolvedValue: undefined,
                },
                'fallback',
                undefined,
                undefined,
                {
                    useLastResolvedValue: true,
                },
            ),
            'fallback',
        );
    });

    it('with useLastResolvedValue returns the last resolved value while a new request is pending', () => {
        const result = renderAsync<string, string>(
            {
                value: Promise.resolve('next'),
                lastResolvedValue: 'last',
            },
            'fallback',
            undefined,
            undefined,
            {
                useLastResolvedValue: true,
            },
        );
        assert.strictEquals(result, 'last');
    });

    it('has the expected overload return types', () => {
        const stringProp: RenderAsyncPropInput<string> = {
            value: 'resolved',
            lastResolvedValue: undefined,
        };

        assert
            .tsType(
                renderAsync(
                    stringProp,
                    'fallback',
                    () => 4,
                    () => true,
                ),
            )
            .equals<string | number | boolean>();
        assert.tsType(renderAsync(stringProp, 'fallback', () => 4)).equals<string | number>();
        assert
            .tsType(renderAsync(stringProp, 'fallback', undefined, () => true))
            .equals<string | boolean>();
        assert.tsType(renderAsync(stringProp, 4)).equals<number | string>();
        assert.tsType<RenderAsyncOptions>().equals<{useLastResolvedValue?: boolean | undefined}>();
    });

    it('returns an undefined value as a resolution instead of the fallback', () => {
        assert.isUndefined(
            renderAsync(
                {
                    value: undefined,
                    lastResolvedValue: undefined,
                },
                'fallback',
            ),
        );
    });

    it('calls resolutionRender exactly once with the resolved value', () => {
        const resolvedValues: string[] = [];

        const result = renderAsync(
            {
                value: 'resolved',
                lastResolvedValue: undefined,
            },
            'fallback',
            (resolved) => {
                resolvedValues.push(resolved);
                return 'rendered';
            },
        );

        assert.strictEquals(result, 'rendered');
        assert.deepEquals(resolvedValues, ['resolved']);
    });

    it('does not call resolutionRender when the value is an Error', () => {
        const resolvedValues: string[] = [];
        const caughtErrors: Error[] = [];
        const error = new Error('exploded');

        const result = renderAsync<string, string, string, string>(
            {
                value: error,
                lastResolvedValue: undefined,
            },
            'fallback',
            (resolved) => {
                resolvedValues.push(resolved);
                return 'rendered';
            },
            (caught) => {
                caughtErrors.push(caught);
                return 'error rendered';
            },
        );

        assert.strictEquals(result, 'error rendered');
        assert.isLengthExactly(resolvedValues, 0);
        assert.isLengthExactly(caughtErrors, 1);
        /** The exact Error instance is passed through. */
        assert.strictEquals(caughtErrors[0], error);
    });

    it('returns an empty string for an Error with no message', () => {
        const result = renderAsync(
            {
                value: new Error(''),
                lastResolvedValue: undefined,
            },
            'fallback',
        );
        assert.strictEquals(result, '');
    });

    it('uses the message of an Error subclass', () => {
        class CustomError extends Error {
            public override name = 'CustomError';
        }

        const result = renderAsync(
            {
                value: new CustomError('custom failure'),
                lastResolvedValue: undefined,
            },
            'fallback',
        );
        assert.strictEquals(result, 'custom failure');
    });

    it('with useLastResolvedValue renders an errored last resolved value as an error', () => {
        const result = renderAsync<string | Error, string, string, string>(
            {
                value: 'ignored',
                lastResolvedValue: new Error('last error'),
            },
            'fallback',
            () => 'rendered',
            (error) => `caught: ${error.message}`,
            {
                useLastResolvedValue: true,
            },
        );
        assert.strictEquals(result, 'caught: last error');
    });

    it('with useLastResolvedValue ignores an errored current value', () => {
        const result = renderAsync<string, string, string, string>(
            {
                value: new Error('current error'),
                lastResolvedValue: 'last',
            },
            'fallback',
            (resolved) => `rendered ${resolved}`,
            (error) => `caught: ${error.message}`,
            {
                useLastResolvedValue: true,
            },
        );
        assert.strictEquals(result, 'rendered last');
    });

    it('with useLastResolvedValue passes the last resolved value to resolutionRender', () => {
        const resolvedValues: string[] = [];

        const result = renderAsync<string, string, string>(
            {
                value: Promise.resolve('next'),
                lastResolvedValue: 'last',
            },
            'fallback',
            (resolved) => {
                resolvedValues.push(resolved);
                return 'rendered';
            },
            undefined,
            {
                useLastResolvedValue: true,
            },
        );

        assert.strictEquals(result, 'rendered');
        assert.deepEquals(resolvedValues, ['last']);
    });

    it('an explicitly false useLastResolvedValue matches the default behavior', () => {
        const result = renderAsync<string, string>(
            {
                value: Promise.resolve('next'),
                lastResolvedValue: 'last',
            },
            'fallback',
            undefined,
            undefined,
            {
                useLastResolvedValue: false,
            },
        );
        assert.strictEquals(result, 'fallback');
    });

    it('with useLastResolvedValue tracks a real asyncProp through pending and error phases', async () => {
        const instance = asyncProp<string>();

        function renderLastResolved() {
            return renderAsync(instance, 'fallback', undefined, undefined, {
                useLastResolvedValue: true,
            });
        }

        const firstDeferred = new DeferredPromise<string>();
        instance.setValue(firstDeferred.promise);
        assert.strictEquals(renderLastResolved(), 'fallback');

        firstDeferred.resolve('first');
        await waitUntil.isTruthy(() => instance.isResolved());
        assert.strictEquals(renderLastResolved(), 'first');

        const secondDeferred = new DeferredPromise<string>();
        instance.setValue(secondDeferred.promise);
        assert.isTrue(instance.isWaiting());
        assert.strictEquals(renderLastResolved(), 'first');

        secondDeferred.reject(new Error('second failed'));
        await waitUntil.isTruthy(() => instance.isError());
        /** An error never overwrites `lastResolvedValue`, so it is invisible to this option. */
        assert.strictEquals(renderLastResolved(), 'first');

        instance.setValue('third');
        assert.strictEquals(renderLastResolved(), 'third');
    });

    it('re-renders through pending, resolved, and pending again', async () => {
        const renderedTexts: string[] = [];
        const deferredPromises: DeferredPromise<string>[] = [];

        const VirRenderAsyncCycle = defineElement<{trigger: number}>()({
            tagName: 'vir-render-async-cycle',
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

                const result = renderAsync(state.myProp, 'loading', (resolved) => resolved);

                if (renderedTexts.at(-1) !== result) {
                    renderedTexts.push(result);
                }

                return html`
                    <span class="value-span">${result}</span>
                `;
            },
        });

        const instance = await testWeb.render(html`
            <${VirRenderAsyncCycle.assign({
                trigger: 0,
            })}></${VirRenderAsyncCycle}>
        `);

        assert.instanceOf(instance, VirRenderAsyncCycle);
        const span = instance.shadowRoot.querySelector('.value-span');
        assert.instanceOf(span, HTMLSpanElement);
        assert.strictEquals(span.innerText, 'loading');

        assert.isDefined(deferredPromises[0]);
        deferredPromises[0].resolve('first');
        await waitUntil(() => span.innerText === 'first');

        instance.assignInputs({
            trigger: 1,
        });
        await waitUntil(() => deferredPromises.length === 2);
        await waitUntil(() => span.innerText === 'loading');

        assert.isDefined(deferredPromises[1]);
        deferredPromises[1].resolve('second');
        await waitUntil(() => span.innerText === 'second');

        assert.deepEquals(renderedTexts, [
            'loading',
            'first',
            'loading',
            'second',
        ]);
    });
});

enum RenderAsyncValueState {
    Pending = 'pending',
    Resolved = 'resolved',
    ResolvedUndefined = 'resolved-undefined',
    Errored = 'errored',
}

const renderAsyncStateValues: Record<RenderAsyncValueState, unknown> = {
    [RenderAsyncValueState.Pending]: new Promise(() => {}),
    [RenderAsyncValueState.Resolved]: 'resolved value',
    [RenderAsyncValueState.ResolvedUndefined]: undefined,
    [RenderAsyncValueState.Errored]: new Error('matrix error'),
};

function renderAsyncMatrixCase({
    valueState,
    useLastResolvedValue,
    withErrorRender,
}: Readonly<{
    valueState: RenderAsyncValueState;
    useLastResolvedValue: boolean;
    withErrorRender: boolean;
}>) {
    const stateValue = renderAsyncStateValues[valueState];
    const resolvedValues: unknown[] = [];
    const caughtErrorMessages: string[] = [];

    const asyncPropInput: RenderAsyncPropInput<unknown> = {
        value: stateValue,
        /** Both fields hold the same value so that only branch selection is under test. */
        lastResolvedValue: stateValue,
    };
    const options: RenderAsyncOptions = {
        useLastResolvedValue,
    };
    const resolutionRender = (resolved: unknown) => {
        resolvedValues.push(resolved);
        return 'resolution render';
    };

    const result = withErrorRender
        ? renderAsync(
              asyncPropInput,
              'fallback',
              resolutionRender,
              (error) => {
                  caughtErrorMessages.push(error.message);
                  return 'error render';
              },
              options,
          )
        : renderAsync(asyncPropInput, 'fallback', resolutionRender, undefined, options);

    return {
        result,
        resolvedValues,
        caughtErrorMessages,
    };
}

describe('renderAsync state matrix', () => {
    itCases(renderAsyncMatrixCase, [
        {
            it: 'renders the fallback for a pending value',
            input: {
                valueState: RenderAsyncValueState.Pending,
                useLastResolvedValue: false,
                withErrorRender: false,
            },
            expect: {
                result: 'fallback',
                resolvedValues: [],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders the fallback for a pending value with an errorRender',
            input: {
                valueState: RenderAsyncValueState.Pending,
                useLastResolvedValue: false,
                withErrorRender: true,
            },
            expect: {
                result: 'fallback',
                resolvedValues: [],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders the fallback for a pending last resolved value',
            input: {
                valueState: RenderAsyncValueState.Pending,
                useLastResolvedValue: true,
                withErrorRender: false,
            },
            expect: {
                result: 'fallback',
                resolvedValues: [],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders the fallback for a pending last resolved value with an errorRender',
            input: {
                valueState: RenderAsyncValueState.Pending,
                useLastResolvedValue: true,
                withErrorRender: true,
            },
            expect: {
                result: 'fallback',
                resolvedValues: [],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders the resolution for a resolved value',
            input: {
                valueState: RenderAsyncValueState.Resolved,
                useLastResolvedValue: false,
                withErrorRender: false,
            },
            expect: {
                result: 'resolution render',
                resolvedValues: ['resolved value'],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders the resolution for a resolved value with an errorRender',
            input: {
                valueState: RenderAsyncValueState.Resolved,
                useLastResolvedValue: false,
                withErrorRender: true,
            },
            expect: {
                result: 'resolution render',
                resolvedValues: ['resolved value'],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders the resolution for a resolved last value',
            input: {
                valueState: RenderAsyncValueState.Resolved,
                useLastResolvedValue: true,
                withErrorRender: false,
            },
            expect: {
                result: 'resolution render',
                resolvedValues: ['resolved value'],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders the resolution for a resolved last value with an errorRender',
            input: {
                valueState: RenderAsyncValueState.Resolved,
                useLastResolvedValue: true,
                withErrorRender: true,
            },
            expect: {
                result: 'resolution render',
                resolvedValues: ['resolved value'],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders the resolution for a resolved undefined value',
            input: {
                valueState: RenderAsyncValueState.ResolvedUndefined,
                useLastResolvedValue: false,
                withErrorRender: false,
            },
            expect: {
                result: 'resolution render',
                resolvedValues: [undefined],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders the resolution for a resolved undefined value with an errorRender',
            input: {
                valueState: RenderAsyncValueState.ResolvedUndefined,
                useLastResolvedValue: false,
                withErrorRender: true,
            },
            expect: {
                result: 'resolution render',
                resolvedValues: [undefined],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders the resolution for an undefined last resolved value',
            input: {
                valueState: RenderAsyncValueState.ResolvedUndefined,
                useLastResolvedValue: true,
                withErrorRender: false,
            },
            expect: {
                result: 'resolution render',
                resolvedValues: [undefined],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders the resolution for an undefined last resolved value with an errorRender',
            input: {
                valueState: RenderAsyncValueState.ResolvedUndefined,
                useLastResolvedValue: true,
                withErrorRender: true,
            },
            expect: {
                result: 'resolution render',
                resolvedValues: [undefined],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders the error message for an errored value',
            input: {
                valueState: RenderAsyncValueState.Errored,
                useLastResolvedValue: false,
                withErrorRender: false,
            },
            expect: {
                result: 'matrix error',
                resolvedValues: [],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders errorRender for an errored value',
            input: {
                valueState: RenderAsyncValueState.Errored,
                useLastResolvedValue: false,
                withErrorRender: true,
            },
            expect: {
                result: 'error render',
                resolvedValues: [],
                caughtErrorMessages: ['matrix error'],
            },
        },
        {
            it: 'renders the error message for an errored last resolved value',
            input: {
                valueState: RenderAsyncValueState.Errored,
                useLastResolvedValue: true,
                withErrorRender: false,
            },
            expect: {
                result: 'matrix error',
                resolvedValues: [],
                caughtErrorMessages: [],
            },
        },
        {
            it: 'renders errorRender for an errored last resolved value',
            input: {
                valueState: RenderAsyncValueState.Errored,
                useLastResolvedValue: true,
                withErrorRender: true,
            },
            expect: {
                result: 'error render',
                resolvedValues: [],
                caughtErrorMessages: ['matrix error'],
            },
        },
    ]);
});
