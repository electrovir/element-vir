import {assertTypeOf, typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {assign, defineElement, html} from '../../..';
import {createObservableProperty} from './create-observable-property';

describe(createObservableProperty.name, () => {
    it('should cause re-renders', async () => {
        const inputsObservable = createObservableProperty('three');
        const complexInputsObservable = createObservableProperty({three: 2});
        const stateObservable = createObservableProperty({stuff: 2});

        const MyElement = defineElement<{
            simpleInput: string;
            complexInput: {three: number};
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

                assertTypeOf(state.simpleState).toEqualTypeOf<{stuff: number}>();
                assertTypeOf(state.stateWithUnion).toEqualTypeOf<{stuff: number} | undefined>();

                return html`
                    <span class="state">${state.simpleState}</span>
                    <span class="inputs">${inputs.simpleInput}</span>
                `;
            },
        });

        // for type testing purposes
        html`
            <${MyElement}
                ${assign(MyElement, {
                    simpleInput: inputsObservable,
                    complexInput: complexInputsObservable,
                })}
                ${assign(MyElement, {
                    simpleInput: inputsObservable,
                    complexInput: {three: 3},
                })}
                ${assign(MyElement, {
                    simpleInput: 'four',
                    complexInput: {three: 3},
                    optionalInput: 'hi',
                })}
                ${assign(
                    MyElement,
                    // needs all required properties
                    // @ts-expect-error
                    {
                        simpleInput: 'four',
                    },
                )}
                ${assign(MyElement, {
                    simpleInput: 'four',
                    // @ts-expect-error
                    complexInput: {regex: 3},
                    // @ts-expect-error
                    anotherThing: 'five',
                })}
            ></${MyElement}>
        `;

        const fixture = await renderFixture(html`
            <${MyElement}
                ${assign(MyElement, {
                    simpleInput: inputsObservable,
                    complexInput: complexInputsObservable,
                })}
            ></${MyElement}>
        `);

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
