import {randomBoolean} from '@augment-vir/browser';
import {assertTypeOf, typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {defineElement, html} from '../../..';
import {createObservableProperty} from './create-observable-property';

describe(createObservableProperty.name, () => {
    it('should cause re-renders', async () => {
        const inputsObservable = createObservableProperty('three');
        const complexInputsObservable = createObservableProperty({three: 2});
        const stateObservable = createObservableProperty({stuff: 2});

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
                assertTypeOf(state.simpleState).toEqualTypeOf<{stuff: number}>();
                assertTypeOf(state.stateWithUnion).toEqualTypeOf<{stuff: number} | undefined>();

                return html`
                    <span class="state">${state.simpleState}</span>
                    <span class="inputs">${inputs.simpleInput.getValue()}</span>
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

        typedAssertInstanceOf(fixture, MyElement);

        assertTypeOf(fixture.instanceInputs.complexInput).toEqualTypeOf(complexInputsObservable);

        const stateSpan = fixture.shadowRoot?.querySelector('.state');
        const inputsSpan = fixture.shadowRoot?.querySelector('.inputs');

        typedAssertInstanceOf(stateSpan, HTMLElement);
        typedAssertInstanceOf(inputsSpan, HTMLElement);

        assert.strictEqual(stateSpan.innerText, String(stateObservable.getValue()));
        assert.strictEqual(inputsSpan.innerText, inputsObservable.getValue());

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
