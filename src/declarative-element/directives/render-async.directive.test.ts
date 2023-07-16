import {assertTypeOf, extractText} from '@augment-vir/browser-testing';
import {createDeferredPromiseWrapper} from '@augment-vir/common';
import {assert, fixture as render, waitUntil} from '@open-wc/testing';
import {
    AsyncProp,
    asyncProp,
    defineElement,
    defineElementEvent,
    defineElementNoInputs,
    html,
    listen,
    renderAsync,
} from '../..';
import {getAssertedDeclarativeElement} from '../../util/testing.test-helper';

describe(asyncProp.name, () => {
    const elementWithAsyncProp = defineElement<{
        setAsyncProp: Promise<number>;
    }>()({
        tagName: 'element-with-async-prop',
        stateInitStatic: {
            myAsyncProp: asyncProp<number>(),
        },
        events: {
            previousAsyncProp: defineElementEvent<AsyncProp<number>>(),
        },
        renderCallback({state, updateState, inputs, dispatch, events}) {
            updateState({
                myAsyncProp: {
                    newPromise: inputs.setAsyncProp,
                },
            });

            dispatch(new events.previousAsyncProp(state.myAsyncProp));

            return renderAsync(
                state.myAsyncProp,
                'Loading...',
                (value) => {
                    // return {what: 'hello'};
                    return html`
                        Got ${value.toFixed(0)}
                    `;
                },
                // (error) => error.message,
            );
        },
    });

    async function setupAsyncPropTest() {
        const allAsyncPropValues: AsyncProp<number>[] = [];

        const rendered = await render(html`
            <${elementWithAsyncProp}
                ${listen(elementWithAsyncProp.events.previousAsyncProp, (event) => {
                    allAsyncPropValues.push(event.detail);
                })}
            ></${elementWithAsyncProp}>
        `);
        const instance = getAssertedDeclarativeElement(elementWithAsyncProp, rendered);
        assert.lengthOf(allAsyncPropValues, 1);
        assert.instanceOf(allAsyncPropValues[0], Promise);

        const deferredPromise = createDeferredPromiseWrapper<number>();

        instance.assignInputs({
            setAsyncProp: deferredPromise.promise,
        });

        // wait for the event to propagate
        await waitUntil(() => allAsyncPropValues.length === 2);

        assert.lengthOf(allAsyncPropValues, 2);
        assert.instanceOf(allAsyncPropValues[1], Promise);

        return {allAsyncPropValues, instance, deferredPromise};
    }

    it('should have proper types', () => {
        type SomethingObject = {something: number};

        defineElementNoInputs({
            tagName: 'element-with-async-prop',
            stateInitStatic: {
                asyncProp: asyncProp<SomethingObject, any>(),
            },
            renderCallback({state}) {
                assertTypeOf(state.asyncProp).toEqualTypeOf<AsyncProp<SomethingObject>>();
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

    it('should render the resolution callback', async () => {
        const {instance, deferredPromise, allAsyncPropValues} = await setupAsyncPropTest();

        const randomValue = Math.random() * 100;

        assert.strictEqual(extractText(instance), 'Loading...');

        deferredPromise.resolve(randomValue);

        // wait for the event to propagate
        await waitUntil(() => allAsyncPropValues.length > 2);

        assert.strictEqual(extractText(instance), `Got ${randomValue.toFixed()}`);
    });
});
