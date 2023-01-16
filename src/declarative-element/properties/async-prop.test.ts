import {randomString} from '@augment-vir/browser';
import {assertTypeOf} from '@augment-vir/browser-testing';
import {createDeferredPromiseWrapper} from '@augment-vir/common';
import {assert, fixture as render, waitUntil} from '@open-wc/testing';
import {
    asyncProp,
    AsyncProp,
    defineElementNoInputs,
    html,
    StaticElementPropertyDescriptor,
} from '../..';
import {defineElement, defineElementEvent, listen, SetAsyncPropInputs} from '../../../src';
import {getAssertedDeclarativeElement} from '../../augments/testing.test-helper';

describe(asyncProp.name, () => {
    it('should have proper types', () => {
        type SomethingObject = {something: number};

        const elementWithAsyncProperty = defineElementNoInputs({
            tagName: 'element-with-async-state',
            stateInit: {
                asyncProp: asyncProp<SomethingObject>(),
            },
            renderCallback: ({state}) => {
                assertTypeOf(state.asyncProp).toEqualTypeOf<AsyncProp<SomethingObject>>();
                return html``;
            },
        });

        assertTypeOf(elementWithAsyncProperty.stateInit.asyncProp).toEqualTypeOf<
            StaticElementPropertyDescriptor<string, AsyncProp<SomethingObject>>
        >();

        assertTypeOf<(typeof elementWithAsyncProperty)['stateType']['asyncProp']>().toEqualTypeOf<
            AsyncProp<SomethingObject>
        >();

        assertTypeOf<
            (typeof elementWithAsyncProperty)['instanceType']['instanceState']['asyncProp']
        >().toEqualTypeOf<AsyncProp<SomethingObject>>();
    });

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

            return html``;
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

    it('should create a resolution when the promise resolves', async () => {
        const {deferredPromise, allAsyncPropValues} = await setupAsyncPropTest();

        const randomValue = Math.floor(Math.random() * 100);

        deferredPromise.resolve(randomValue);

        // wait for the event to propagate
        await waitUntil(() => allAsyncPropValues.length > 2);

        assert.deepStrictEqual(allAsyncPropValues, [
            null,
            {
                isChainedAlready: true,
                promise: deferredPromise.promise,
            },
            {
                promise: deferredPromise.promise,
                resolution: randomValue,
            },
        ]);
    });

    it('should not overwrite a promise that already exists', async () => {
        const {instance, deferredPromise, allAsyncPropValues} = await setupAsyncPropTest();

        /** This will not actually get set since there is already a promise */
        instance.assignInputs({
            shouldEnsureAsyncProp: {
                promise: new Promise(() => {}),
            },
        });

        await waitUntil(() => allAsyncPropValues.length > 2);

        assert.strictEqual(instance.instanceState.myAsyncProp?.promise, deferredPromise.promise);
    });

    it('should create an error when the promise rejects', async () => {
        const {deferredPromise, allAsyncPropValues} = await setupAsyncPropTest();

        const thrownError = new Error(randomString());

        deferredPromise.reject(thrownError);

        // wait for the event to propagate
        await waitUntil(() => allAsyncPropValues.length > 2);

        assert.deepStrictEqual(allAsyncPropValues, [
            null,
            {
                isChainedAlready: true,
                promise: deferredPromise.promise,
            },
            {
                promise: deferredPromise.promise,
                error: thrownError,
            },
        ]);
    });
});
