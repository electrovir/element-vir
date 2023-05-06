import {typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {assign, defineElement, html} from '../../..';
import {createObservableProperty} from './create-observable-property';

describe(createObservableProperty.name, () => {
    it('should cause re-renders', async () => {
        const inputsObservable = createObservableProperty('three');
        const stateObservable = createObservableProperty(2);

        const MyElement = defineElement<{thing: string}>()({
            tagName: 'my-element-for-observable-property-test',
            stateInit: {
                myThing: stateObservable,
            },
            renderCallback({inputs, state}) {
                return html`
                    <span class="state">${state.myThing}</span>
                    <span class="inputs">${inputs.thing}</span>
                `;
            },
        });

        const fixture = await renderFixture(html`
            <${MyElement} ${assign(MyElement, {thing: inputsObservable})}></${MyElement}>
        `);

        const stateSpan = fixture.shadowRoot?.querySelector('.state');
        const inputsSpan = fixture.shadowRoot?.querySelector('.inputs');

        typedAssertInstanceOf(stateSpan, HTMLElement);
        typedAssertInstanceOf(inputsSpan, HTMLElement);

        assert.strictEqual(stateSpan.innerText, String(stateObservable.getValue()));
        assert.strictEqual(inputsSpan.innerText, inputsObservable.getValue());

        const newInput = 'derp';
        const newState = 42;

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
