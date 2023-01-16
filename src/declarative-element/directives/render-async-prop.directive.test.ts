import {assertTypeOf, extractText} from '@augment-vir/browser-testing';
import {createDeferredPromiseWrapper} from '@augment-vir/common';
import {assert, fixture as render, waitUntil} from '@open-wc/testing';
import {
    asyncProp,
    AsyncProp,
    defineElement,
    defineElementEvent,
    defineElementNoInputs,
    html,
    listen,
    renderAsyncProp,
    SetAsyncPropInputs,
} from '../..';
import {getAssertedDeclarativeElement} from '../../augments/testing.test-helper';

describe(asyncProp.name, () => {
    const elementWithAsyncProps = defineElement<{
        shouldEnsureAsyncProp: SetAsyncPropInputs<number> | undefined;
    }>()({
        tagName: 'element-with-async-props',
        stateInit: {
            myAsyncProp: asyncProp<number>(),
        },
        events: {
            previousAsyncProp: defineElementEvent<AsyncProp<number>>(),
        },
        renderCallback: ({state, inputs, dispatch, events, ensureAsyncProp}) => {
            if (inputs.shouldEnsureAsyncProp) {
                ensureAsyncProp({
                    myAsyncProp: inputs.shouldEnsureAsyncProp,
                });
            }

            dispatch(new events.previousAsyncProp(state.myAsyncProp));

            return html`
                ${renderAsyncProp({
                    asyncProp: state.myAsyncProp,
                    fallback: 'Loading...',
                    errorRender: (error) => error.message,
                    resolutionRender: (value) => {
                        return html`
                            Got ${value.toFixed(0)}
                        `;
                    },
                })}
            `;
        },
    });

    async function setupAsyncPropTest() {
        const allAsyncPropValues: AsyncProp<number>[] = [];

        const rendered = await render(html`
            <${elementWithAsyncProps}
                ${listen(elementWithAsyncProps.events.previousAsyncProp, (event) => {
                    allAsyncPropValues.push(event.detail);
                })}
            ></${elementWithAsyncProps}>
        `);
        const instance = getAssertedDeclarativeElement(elementWithAsyncProps, rendered);
        assert.deepStrictEqual(allAsyncPropValues, [null]);
        const deferredPromise = createDeferredPromiseWrapper<number>();
        instance.assignInputs({
            shouldEnsureAsyncProp: {
                promise: deferredPromise.promise,
            },
        });

        // wait for the event to propagate
        await waitUntil(() => allAsyncPropValues.length > 1);

        assert.deepStrictEqual(allAsyncPropValues, [
            null,
            {
                isChainedAlready: true,
                promise: deferredPromise.promise,
            },
        ]);

        return {allAsyncPropValues, instance, deferredPromise};
    }

    it('should have proper types', () => {
        type SomethingObject = {something: number};

        defineElementNoInputs({
            tagName: 'element-with-async-prop',
            stateInit: {
                asyncProp: asyncProp<SomethingObject>(),
            },
            renderCallback: ({state}) => {
                assertTypeOf(state.asyncProp).toEqualTypeOf<AsyncProp<SomethingObject>>();
                return html`
                    ${renderAsyncProp({
                        asyncProp: state.asyncProp,
                        fallback: 'Loading...',
                        errorRender: (error) => error.message,
                        resolutionRender: (value: SomethingObject) => {
                            return html`
                                ${value.something}
                            `;
                        },
                    })}
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
