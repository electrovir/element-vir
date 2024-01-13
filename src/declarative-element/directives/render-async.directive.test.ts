import {extractText} from '@augment-vir/browser-testing';
import {createDeferredPromiseWrapper} from '@augment-vir/common';
import {assert, fixture as render, waitUntil} from '@open-wc/testing';
import {assertInstanceOf, assertTypeOf} from 'run-time-assertions';
import {
    AsyncPropValue,
    asyncProp,
    defineElement,
    defineElementEvent,
    defineElementNoInputs,
    html,
    listen,
    renderAsync,
} from '../../index';

describe(asyncProp.name, () => {
    const elementWithAsyncProp = defineElement<{
        setAsyncProp: Promise<number>;
    }>()({
        tagName: 'element-with-async-prop',
        stateInitStatic: {
            myAsyncProp: asyncProp<number>(),
        },
        events: {
            previousAsyncProp: defineElementEvent<AsyncPropValue<number>>(),
        },
        renderCallback({state, inputs, dispatch, events}) {
            state.myAsyncProp.setNewPromise(inputs.setAsyncProp);

            dispatch(new events.previousAsyncProp(state.myAsyncProp.value));

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
        const allAsyncPropValues: AsyncPropValue<number>[] = [];

        const deferredPromise = createDeferredPromiseWrapper<number>();

        const instance = await render(html`
            <${elementWithAsyncProp.assign({setAsyncProp: deferredPromise.promise})}
                ${listen(elementWithAsyncProp.events.previousAsyncProp, (event) => {
                    allAsyncPropValues.push(event.detail);
                })}
            ></${elementWithAsyncProp}>
        `);
        assertInstanceOf(instance, elementWithAsyncProp);
        assert.lengthOf(allAsyncPropValues, 1);
        assert.instanceOf(allAsyncPropValues[0], Promise);

        // wait for the event to propagate
        await waitUntil(() => allAsyncPropValues.length === 1);

        assert.lengthOf(allAsyncPropValues, 1);

        return {allAsyncPropValues, instance, deferredPromise};
    }

    it('should have proper types', () => {
        type SomethingObject = {something: number};

        defineElementNoInputs({
            tagName: 'element-with-async-prop-again',
            stateInitStatic: {
                asyncProp: asyncProp<SomethingObject, any>(),
            },
            renderCallback({state}) {
                assertTypeOf(state.asyncProp.value).toEqualTypeOf<
                    AsyncPropValue<SomethingObject>
                >();
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
        await waitUntil(() => allAsyncPropValues.length > 1);

        assert.strictEqual(extractText(instance), `Got ${randomValue.toFixed()}`);
    });
});
