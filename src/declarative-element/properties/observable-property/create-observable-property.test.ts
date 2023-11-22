import {createDeferredPromiseWrapper, randomBoolean, randomInteger} from '@augment-vir/common';
import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {assertInstanceOf, assertTypeOf} from 'run-time-assertions';
import {createObservablePropertyWithSetter, defineElement, html} from '../../../index';
import {
    createObservablePropertyWithIntervalUpdate,
    createObservablePropertyWithUpdater,
} from './create-observable-property';

describe(createObservablePropertyWithSetter.name, () => {
    it('should cause re-renders', async () => {
        const inputsObservable = createObservablePropertyWithSetter('three');
        const complexInputsObservable = createObservablePropertyWithSetter({three: 2});
        const stateObservable = createObservablePropertyWithSetter({stuff: 2});

        const MyElement = defineElement<{
            simpleInput: typeof inputsObservable;
            complexInput: typeof complexInputsObservable;
            optionalInput?: string;
        }>()({
            tagName: 'my-element-for-observable-property-test',
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

describe(createObservablePropertyWithUpdater.name, () => {
    it('has proper types', () => {
        const asyncObservableProperty = createObservablePropertyWithUpdater({
            initInput: undefined,
            async updateCallback() {
                return Promise.resolve(5);
            },
        });

        assertTypeOf(asyncObservableProperty.latestResolvedValue).toEqualTypeOf<
            number | undefined
        >();
        assertTypeOf(asyncObservableProperty.value).toEqualTypeOf<number | Promise<number>>();

        const syncObservableProperty = createObservablePropertyWithUpdater({
            initInput: undefined,
            updateCallback() {
                return 5;
            },
        });

        assertTypeOf(syncObservableProperty.latestResolvedValue).toEqualTypeOf<number>();
        assertTypeOf(syncObservableProperty.value).toEqualTypeOf<number>();
    });

    it('updates .value with a promise and then the resolved value', async () => {
        const value = randomInteger({min: 0, max: 100});

        const asyncObservableProperty = createObservablePropertyWithUpdater({
            initInput: undefined,
            async updateCallback() {
                return await Promise.resolve(value);
            },
        });

        assert.instanceOf(asyncObservableProperty.value, Promise);
        assert.isUndefined(asyncObservableProperty.latestResolvedValue);

        await asyncObservableProperty.value;

        assert.strictEqual(asyncObservableProperty.value, value);
        assert.strictEqual(asyncObservableProperty.latestResolvedValue, value);
    });

    it('never uses promises when the updater is synchronous', () => {
        const value = randomInteger({min: 0, max: 100});

        const asyncObservableProperty = createObservablePropertyWithUpdater({
            initInput: undefined,
            updateCallback() {
                return value;
            },
        });

        assert.strictEqual(asyncObservableProperty.value, value);
        assert.strictEqual(asyncObservableProperty.latestResolvedValue, value);
    });
});

describe(createObservablePropertyWithIntervalUpdate.name, () => {
    it('uses promises when the updater is async', async () => {
        const deferredPromiseWrapper = createDeferredPromiseWrapper<number>();
        const value = randomInteger({min: 0, max: 100});
        let updateCount = 0;

        const asyncObservableProperty = createObservablePropertyWithIntervalUpdate({
            initInput: undefined,
            async updateCallback() {
                updateCount++;
                return deferredPromiseWrapper.promise;
            },
            intervalMs: 100,
        });

        assert.instanceOf(asyncObservableProperty.value, Promise);
        assert.isUndefined(asyncObservableProperty.latestResolvedValue);

        await waitUntil(() => updateCount >= 2);

        assert.instanceOf(asyncObservableProperty.value, Promise);
        assert.isUndefined(asyncObservableProperty.latestResolvedValue);

        deferredPromiseWrapper.resolve(value);

        await asyncObservableProperty.value;

        assert.strictEqual(asyncObservableProperty.value, value);
        assert.strictEqual(asyncObservableProperty.latestResolvedValue, value);
    });

    it('does not use promises when the updater is sync', async () => {
        const value = randomInteger({min: 0, max: 100});
        let updateCount = 0;

        const asyncObservableProperty = createObservablePropertyWithIntervalUpdate({
            initInput: undefined,
            updateCallback() {
                updateCount++;
                return value + updateCount;
            },
            intervalMs: 100,
        });

        assert.strictEqual(asyncObservableProperty.value, value + updateCount);
        assert.strictEqual(asyncObservableProperty.latestResolvedValue, value + updateCount);

        await waitUntil(() => updateCount >= 2);

        assert.strictEqual(asyncObservableProperty.value, value + updateCount);
        assert.strictEqual(asyncObservableProperty.latestResolvedValue, value + updateCount);
    });
});
