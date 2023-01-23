import {assertTypeOf, extractText} from '@augment-vir/browser-testing';
import {createDeferredPromiseWrapper} from '@augment-vir/common';
import {assert, fixture as render, waitUntil} from '@open-wc/testing';
import {
    asyncState,
    AsyncState,
    defineElement,
    defineElementEvent,
    defineElementNoInputs,
    html,
    listen,
    renderAsyncState,
} from '../..';
import {getAssertedDeclarativeElement} from '../../augments/testing.test-helper';

describe(asyncState.name, () => {
    const elementWithAsyncState = defineElement<{
        setAsyncState: Promise<number>;
    }>()({
        tagName: 'element-with-async-state',
        stateInit: {
            myAsyncState: asyncState<number>(),
        },
        events: {
            previousAsyncState: defineElementEvent<AsyncState<number>>(),
        },
        renderCallback: ({state, updateState, inputs, dispatch, events}) => {
            updateState({
                myAsyncState: {
                    newPromise: inputs.setAsyncState,
                },
            });

            dispatch(new events.previousAsyncState(state.myAsyncState));

            return html`
                ${renderAsyncState(
                    state.myAsyncState,
                    'Loading...',
                    (value) => {
                        return html`
                            Got ${value.toFixed(0)}
                        `;
                    },
                    (error) => error.message,
                )}
            `;
        },
    });

    async function setupAsyncStateTest() {
        const allAsyncStateValues: AsyncState<number>[] = [];

        const rendered = await render(html`
            <${elementWithAsyncState}
                ${listen(elementWithAsyncState.events.previousAsyncState, (event) => {
                    allAsyncStateValues.push(event.detail);
                })}
            ></${elementWithAsyncState}>
        `);
        const instance = getAssertedDeclarativeElement(elementWithAsyncState, rendered);
        assert.lengthOf(allAsyncStateValues, 1);
        assert.instanceOf(allAsyncStateValues[0], Promise);

        const deferredPromise = createDeferredPromiseWrapper<number>();

        instance.assignInputs({
            setAsyncState: deferredPromise.promise,
        });

        // wait for the event to propagate
        await waitUntil(() => allAsyncStateValues.length === 2);

        assert.lengthOf(allAsyncStateValues, 2);
        assert.instanceOf(allAsyncStateValues[1], Promise);

        return {allAsyncStateValues, instance, deferredPromise};
    }

    it('should have proper types', () => {
        type SomethingObject = {something: number};

        defineElementNoInputs({
            tagName: 'element-with-async-prop',
            stateInit: {
                asyncState: asyncState<SomethingObject>(),
            },
            renderCallback: ({state}) => {
                assertTypeOf(state.asyncState).toEqualTypeOf<AsyncState<SomethingObject>>();
                return html`
                    ${renderAsyncState(
                        state.asyncState,
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

    it('should render the resolution callback', async () => {
        const {instance, deferredPromise, allAsyncStateValues} = await setupAsyncStateTest();

        const randomValue = Math.random() * 100;

        assert.strictEqual(extractText(instance), 'Loading...');

        deferredPromise.resolve(randomValue);

        // wait for the event to propagate
        await waitUntil(() => allAsyncStateValues.length > 2);

        assert.strictEqual(extractText(instance), `Got ${randomValue.toFixed()}`);
    });
});
