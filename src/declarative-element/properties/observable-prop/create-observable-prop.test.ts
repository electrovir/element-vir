import {createDeferredPromiseWrapper, randomBoolean, randomInteger} from '@augment-vir/common';
import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {assertInstanceOf, assertTypeOf} from 'run-time-assertions';
import {createSetterObservableProp, defineElement, html} from '../../../index';
import {
    createIntervalObservableProp,
    createUpdatableObservableProp,
} from './create-observable-prop';

describe(createSetterObservableProp.name, () => {
    it('should cause re-renders', async () => {
        const inputsObservable = createSetterObservableProp('three');
        const complexInputsObservable = createSetterObservableProp({three: 2});
        const stateObservable = createSetterObservableProp({stuff: 2});

        const MyElement = defineElement<{
            simpleInput: typeof inputsObservable;
            complexInput: typeof complexInputsObservable;
            optionalInput?: string;
        }>()({
            tagName: 'my-element-for-observable-prop-test',
            stateInitStatic: {
                simpleState: stateObservable,
                complexState: {stuff: 4},
                stateWithUnion: undefined as undefined | typeof stateObservable,
            },
            renderCallback({inputs, updateState, state}) {
                if (!state.stateWithUnion) {
                    updateState({stateWithUnion: stateObservable});
                }

                updateState({complexState: {stuff: 5}});

                assertTypeOf(inputs.complexInput).toEqualTypeOf(complexInputsObservable);
                assertTypeOf(state.simpleState.value).toEqualTypeOf<{stuff: number}>();
                assertTypeOf(state.stateWithUnion?.value).toEqualTypeOf<
                    {stuff: number} | undefined
                >();

                return html`
                    <span class="state">${state.simpleState}</span>
                    <span class="inputs">${inputs.simpleInput.value}</span>
                `;
            },
        });

        const myRandomBoolean = randomBoolean();

        // for type testing purposes
        html`
            <${MyElement.assign({
                simpleInput: inputsObservable,
                complexInput: complexInputsObservable,
            })}></${MyElement}>
            <${MyElement.assign({
                simpleInput: inputsObservable,
                complexInput: complexInputsObservable,
                // @ts-expect-error
                anotherThing: 'five',
                optionalInput: 'hi',
            })}></${MyElement}>
            <${MyElement.assign(
                MyElement,
                // needs all required properties
                // @ts-expect-error
                {
                    simpleInput: 'four',
                },
            )}></${MyElement}>
            <${MyElement.assign({
                simpleInput: inputsObservable,
                // @ts-expect-error
                complexInput: {regex: 3},
            })}></${MyElement}>
            <${MyElement.assign(
                myRandomBoolean
                    ? {
                          simpleInput: inputsObservable,
                          complexInput: complexInputsObservable,
                      }
                    : {
                          simpleInput: inputsObservable,
                          complexInput: complexInputsObservable,
                          optionalInput: 'hi',
                      },
            )}></${MyElement}>
        `;

        const fixture = await renderFixture(html`
            <${MyElement.assign({
                simpleInput: inputsObservable,
                complexInput: complexInputsObservable,
            })}></${MyElement}>
        `);

        assertInstanceOf(fixture, MyElement);

        assertTypeOf(fixture.instanceInputs.complexInput).toEqualTypeOf(complexInputsObservable);

        const stateSpan = fixture.shadowRoot?.querySelector('.state');
        const inputsSpan = fixture.shadowRoot?.querySelector('.inputs');

        assertInstanceOf(stateSpan, HTMLElement);
        assertInstanceOf(inputsSpan, HTMLElement);

        assert.strictEqual(stateSpan.innerText, String(stateObservable.value));
        assert.strictEqual(inputsSpan.innerText, inputsObservable.value);

        const newInput = 'derp';
        const newState = {stuff: 42};

        inputsObservable.setValue(newInput);
        // @ts-expect-error
        stateObservable.setValue('hello');
        stateObservable.setValue(newState);

        await waitUntil(() => {
            try {
                assert.strictEqual(stateSpan.innerText, String(newState));
                assert.strictEqual(inputsSpan.innerText, newInput);
                return true;
            } catch (error) {
                return false;
            }
        });
    });
});

describe(createUpdatableObservableProp.name, () => {
    it('has proper types', () => {
        const asyncObservableProp = createUpdatableObservableProp({
            initInput: undefined,
            async updateCallback() {
                return Promise.resolve(5);
            },
        });

        assertTypeOf(asyncObservableProp.latestResolvedValue).toEqualTypeOf<number | undefined>();
        assertTypeOf(asyncObservableProp.value).toEqualTypeOf<number | Promise<number>>();

        const syncObservableProp = createUpdatableObservableProp({
            initInput: undefined,
            updateCallback() {
                return 5;
            },
        });

        assertTypeOf(syncObservableProp.latestResolvedValue).toEqualTypeOf<number>();
        assertTypeOf(syncObservableProp.value).toEqualTypeOf<number>();
    });

    it('updates .value with a promise and then the resolved value', async () => {
        const value = randomInteger({min: 0, max: 100});

        const asyncObservableProp = createUpdatableObservableProp({
            initInput: undefined,
            async updateCallback() {
                return await Promise.resolve(value);
            },
        });

        assert.instanceOf(asyncObservableProp.value, Promise);
        assert.isUndefined(asyncObservableProp.latestResolvedValue);

        await asyncObservableProp.value;

        assert.strictEqual(asyncObservableProp.value, value);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value);
    });

    it('never uses promises when the updater is synchronous', () => {
        const value = randomInteger({min: 0, max: 100});

        const asyncObservableProp = createUpdatableObservableProp({
            initInput: undefined,
            updateCallback() {
                return value;
            },
        });

        assert.strictEqual(asyncObservableProp.value, value);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value);
    });
});

describe(createIntervalObservableProp.name, () => {
    it('uses promises when the updater is async', async () => {
        const deferredPromiseWrapper = createDeferredPromiseWrapper<number>();
        const value = randomInteger({min: 0, max: 100});
        let updateCount = 0;

        const asyncObservableProp = createIntervalObservableProp({
            initInput: undefined,
            async updateCallback() {
                updateCount++;
                return deferredPromiseWrapper.promise;
            },
            intervalMs: 100,
        });

        assert.instanceOf(asyncObservableProp.value, Promise);
        assert.isUndefined(asyncObservableProp.latestResolvedValue);

        await waitUntil(() => updateCount >= 2);

        assert.instanceOf(asyncObservableProp.value, Promise);
        assert.isUndefined(asyncObservableProp.latestResolvedValue);

        deferredPromiseWrapper.resolve(value);

        await asyncObservableProp.value;

        assert.strictEqual(asyncObservableProp.value, value);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value);
    });

    it('does not use promises when the updater is sync', async () => {
        const value = randomInteger({min: 0, max: 100});
        let updateCount = 0;

        const asyncObservableProp = createIntervalObservableProp({
            initInput: undefined,
            updateCallback() {
                updateCount++;
                return value + updateCount;
            },
            intervalMs: 100,
        });

        assert.strictEqual(asyncObservableProp.value, value + updateCount);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value + updateCount);

        await waitUntil(() => updateCount >= 2);

        assert.strictEqual(asyncObservableProp.value, value + updateCount);
        assert.strictEqual(asyncObservableProp.latestResolvedValue, value + updateCount);
    });
});
