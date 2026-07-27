import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {defineElement, html, keyedCache, listen} from '../../index.js';

describe('keyedCache', () => {
    const TestKeyedCacheElement = defineElement<{activeKey: string}>()({
        tagName: 'test-keyed-cache-element',
        render({inputs}) {
            return html`
                <span class="key-label">${inputs.activeKey}</span>
                ${keyedCache(
                    inputs.activeKey,
                    html`
                        <input class="cached-input" />
                    `,
                )}
            `;
        },
    });

    function getKeyLabel(fixture: Element) {
        const shadowRoot = (fixture as HTMLElement & {shadowRoot: ShadowRoot}).shadowRoot;
        return shadowRoot.querySelector('.key-label')?.textContent.trim() || '';
    }

    function getInput(fixture: Element) {
        const shadowRoot = (fixture as HTMLElement & {shadowRoot: ShadowRoot}).shadowRoot;
        return shadowRoot.querySelector('.cached-input');
    }

    async function switchKey(
        fixture: Element & {assignInputs: (inputs: {activeKey: string}) => void},
        key: string,
    ) {
        fixture.assignInputs({
            activeKey: key,
        });
        await waitUntil.strictEquals(key, () => getKeyLabel(fixture));
    }

    it('preserves DOM state across key switches', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedCacheElement.assign({
                activeKey: 'a',
            })}></${TestKeyedCacheElement}>
        `);
        assert.instanceOf(fixture, TestKeyedCacheElement);

        /** Get the input and set a value. */
        const inputA = getInput(fixture);
        assert.instanceOf(inputA, HTMLInputElement);
        inputA.value = 'hello from A';

        /** Switch to key 'b'. */
        await switchKey(fixture, 'b');

        const inputB = getInput(fixture);
        assert.instanceOf(inputB, HTMLInputElement);
        assert.strictEquals(inputB.value, '');
        inputB.value = 'hello from B';

        /** Switch back to key 'a' and verify preserved state. */
        await switchKey(fixture, 'a');

        const restoredInputA = getInput(fixture);
        assert.instanceOf(restoredInputA, HTMLInputElement);
        assert.strictEquals(restoredInputA.value, 'hello from A');
        /** The restored DOM node should be the exact same reference. */
        assert.strictEquals(restoredInputA, inputA);

        /** Switch back to key 'b' and verify its state was also preserved. */
        await switchKey(fixture, 'b');

        const restoredInputB = getInput(fixture);
        assert.instanceOf(restoredInputB, HTMLInputElement);
        assert.strictEquals(restoredInputB.value, 'hello from B');
        assert.strictEquals(restoredInputB, inputB);
    });

    it('renders fresh DOM for unseen keys', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedCacheElement.assign({
                activeKey: 'x',
            })}></${TestKeyedCacheElement}>
        `);
        assert.instanceOf(fixture, TestKeyedCacheElement);

        const inputX = getInput(fixture);
        assert.instanceOf(inputX, HTMLInputElement);
        inputX.value = 'typed in x';

        /** Switch to a new key that has never been seen. */
        await switchKey(fixture, 'y');

        const inputY = getInput(fixture);
        assert.instanceOf(inputY, HTMLInputElement);
        assert.strictEquals(inputY.value, '');
    });

    it('does not disrupt DOM when key stays the same', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedCacheElement.assign({
                activeKey: 'same',
            })}></${TestKeyedCacheElement}>
        `);
        assert.instanceOf(fixture, TestKeyedCacheElement);

        const input = getInput(fixture);
        assert.instanceOf(input, HTMLInputElement);
        input.value = 'stable';

        /** Re-assign the same key. */
        await switchKey(fixture, 'same');

        const sameInput = getInput(fixture);
        assert.instanceOf(sameInput, HTMLInputElement);
        assert.strictEquals(sameInput.value, 'stable');
        assert.strictEquals(sameInput, input);
    });

    it('caches more than two keys', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedCacheElement.assign({
                activeKey: 'first',
            })}></${TestKeyedCacheElement}>
        `);
        assert.instanceOf(fixture, TestKeyedCacheElement);

        const inputFirst = getInput(fixture);
        assert.instanceOf(inputFirst, HTMLInputElement);
        inputFirst.value = 'value-first';

        await switchKey(fixture, 'second');
        const inputSecond = getInput(fixture);
        assert.instanceOf(inputSecond, HTMLInputElement);
        inputSecond.value = 'value-second';

        await switchKey(fixture, 'third');
        const inputThird = getInput(fixture);
        assert.instanceOf(inputThird, HTMLInputElement);
        inputThird.value = 'value-third';

        await switchKey(fixture, 'fourth');
        const inputFourth = getInput(fixture);
        assert.instanceOf(inputFourth, HTMLInputElement);
        inputFourth.value = 'value-fourth';

        /** Restore all four in reverse order and verify each one. */
        await switchKey(fixture, 'third');
        const restoredThird = getInput(fixture);
        assert.instanceOf(restoredThird, HTMLInputElement);
        assert.strictEquals(restoredThird.value, 'value-third');
        assert.strictEquals(restoredThird, inputThird);

        await switchKey(fixture, 'first');
        const restoredFirst = getInput(fixture);
        assert.instanceOf(restoredFirst, HTMLInputElement);
        assert.strictEquals(restoredFirst.value, 'value-first');
        assert.strictEquals(restoredFirst, inputFirst);

        await switchKey(fixture, 'fourth');
        const restoredFourth = getInput(fixture);
        assert.instanceOf(restoredFourth, HTMLInputElement);
        assert.strictEquals(restoredFourth.value, 'value-fourth');
        assert.strictEquals(restoredFourth, inputFourth);

        await switchKey(fixture, 'second');
        const restoredSecond = getInput(fixture);
        assert.instanceOf(restoredSecond, HTMLInputElement);
        assert.strictEquals(restoredSecond.value, 'value-second');
        assert.strictEquals(restoredSecond, inputSecond);
    });

    it('preserves complex DOM subtrees with multiple stateful children', async () => {
        const ComplexElement = defineElement<{activeKey: string}>()({
            tagName: 'test-keyed-cache-complex-element',
            render({inputs}) {
                return html`
                    <span class="key-label">${inputs.activeKey}</span>
                    ${keyedCache(
                        inputs.activeKey,
                        html`
                            <div class="cached-container">
                                <input class="text-input" />
                                <input class="checkbox-input" type="checkbox" />
                                <textarea class="text-area"></textarea>
                                <select class="select-input">
                                    <option value="opt-a">A</option>
                                    <option value="opt-b">B</option>
                                    <option value="opt-c">C</option>
                                </select>
                            </div>
                        `,
                    )}
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${ComplexElement.assign({
                activeKey: 'key-1',
            })}></${ComplexElement}>
        `);
        assert.instanceOf(fixture, ComplexElement);

        const shadowRoot = fixture.shadowRoot;

        /** Set diverse DOM state for key-1. */
        const textInput = shadowRoot.querySelector('.text-input');
        const checkboxInput = shadowRoot.querySelector('.checkbox-input');
        const textArea = shadowRoot.querySelector('.text-area');
        const selectInput = shadowRoot.querySelector('.select-input');
        assert.instanceOf(textInput, HTMLInputElement);
        assert.instanceOf(checkboxInput, HTMLInputElement);
        assert.instanceOf(textArea, HTMLTextAreaElement);
        assert.instanceOf(selectInput, HTMLSelectElement);

        textInput.value = 'text for key-1';
        checkboxInput.checked = true;
        textArea.value = 'textarea for key-1';
        selectInput.value = 'opt-c';

        /** Switch to key-2 and set different state. */
        fixture.assignInputs({
            activeKey: 'key-2',
        });
        await waitUntil.strictEquals('key-2', () => getKeyLabel(fixture));

        const textInput2 = shadowRoot.querySelector('.text-input');
        const checkboxInput2 = shadowRoot.querySelector('.checkbox-input');
        const textArea2 = shadowRoot.querySelector('.text-area');
        const selectInput2 = shadowRoot.querySelector('.select-input');
        assert.instanceOf(textInput2, HTMLInputElement);
        assert.instanceOf(checkboxInput2, HTMLInputElement);
        assert.instanceOf(textArea2, HTMLTextAreaElement);
        assert.instanceOf(selectInput2, HTMLSelectElement);

        textInput2.value = 'text for key-2';
        checkboxInput2.checked = false;
        textArea2.value = 'textarea for key-2';
        selectInput2.value = 'opt-a';

        /** Switch back to key-1 and verify all state is restored. */
        fixture.assignInputs({
            activeKey: 'key-1',
        });
        await waitUntil.strictEquals('key-1', () => getKeyLabel(fixture));

        const restoredText = shadowRoot.querySelector('.text-input');
        const restoredCheckbox = shadowRoot.querySelector('.checkbox-input');
        const restoredTextArea = shadowRoot.querySelector('.text-area');
        const restoredSelect = shadowRoot.querySelector('.select-input');
        assert.instanceOf(restoredText, HTMLInputElement);
        assert.instanceOf(restoredCheckbox, HTMLInputElement);
        assert.instanceOf(restoredTextArea, HTMLTextAreaElement);
        assert.instanceOf(restoredSelect, HTMLSelectElement);

        assert.strictEquals(restoredText.value, 'text for key-1');
        assert.strictEquals(restoredCheckbox.checked, true);
        assert.strictEquals(restoredTextArea.value, 'textarea for key-1');
        assert.strictEquals(restoredSelect.value, 'opt-c');

        /** Also verify DOM node identity for the whole subtree. */
        assert.strictEquals(restoredText, textInput);
        assert.strictEquals(restoredCheckbox, checkboxInput);
        assert.strictEquals(restoredTextArea, textArea);
        assert.strictEquals(restoredSelect, selectInput);
    });

    it('handles rapid key switching', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedCacheElement.assign({
                activeKey: 'r1',
            })}></${TestKeyedCacheElement}>
        `);
        assert.instanceOf(fixture, TestKeyedCacheElement);

        const inputR1 = getInput(fixture);
        assert.instanceOf(inputR1, HTMLInputElement);
        inputR1.value = 'rapid-1';

        /** Switch rapidly without waiting between each. */
        fixture.assignInputs({
            activeKey: 'r2',
        });
        fixture.assignInputs({
            activeKey: 'r3',
        });
        fixture.assignInputs({
            activeKey: 'r1',
        });

        /** Wait for the final state to settle. */
        await waitUntil.strictEquals('r1', () => getKeyLabel(fixture));
        await waitForAnimationFrame(2);

        const restoredR1 = getInput(fixture);
        assert.instanceOf(restoredR1, HTMLInputElement);
        assert.strictEquals(restoredR1.value, 'rapid-1');
        assert.strictEquals(restoredR1, inputR1);
    });

    it('updates template bindings on restored cached DOM', async () => {
        const BindingElement = defineElement<{
            activeKey: string;
            counter: number;
        }>()({
            tagName: 'test-keyed-cache-binding-element',
            render({inputs}) {
                return html`
                    <span class="key-label">${inputs.activeKey}</span>
                    ${keyedCache(
                        inputs.activeKey,
                        html`
                            <span class="counter-display">${inputs.counter}</span>
                            <input class="cached-input" />
                        `,
                    )}
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${BindingElement.assign({
                activeKey: 'bind-a',
                counter: 10,
            })}></${BindingElement}>
        `);
        assert.instanceOf(fixture, BindingElement);

        const shadowRoot = fixture.shadowRoot;

        await waitUntil.strictEquals('10', () =>
            shadowRoot.querySelector('.counter-display')?.textContent.trim(),
        );
        const inputA = shadowRoot.querySelector('.cached-input');
        assert.instanceOf(inputA, HTMLInputElement);
        inputA.value = 'binding test';

        /** Switch to key 'bind-b'. */
        fixture.assignInputs({
            activeKey: 'bind-b',
            counter: 20,
        });
        await waitUntil.strictEquals('bind-b', () => getKeyLabel(fixture));
        await waitUntil.strictEquals('20', () =>
            shadowRoot.querySelector('.counter-display')?.textContent.trim(),
        );

        /** Switch back to 'bind-a' with an updated counter. */
        fixture.assignInputs({
            activeKey: 'bind-a',
            counter: 99,
        });
        await waitUntil.strictEquals('bind-a', () => getKeyLabel(fixture));

        /** The counter binding should reflect the new value. */
        await waitUntil.strictEquals('99', () =>
            shadowRoot.querySelector('.counter-display')?.textContent.trim(),
        );

        /** But the DOM state (typed input value) should still be preserved. */
        const restoredInput = shadowRoot.querySelector('.cached-input');
        assert.instanceOf(restoredInput, HTMLInputElement);
        assert.strictEquals(restoredInput.value, 'binding test');
        assert.strictEquals(restoredInput, inputA);
    });

    it('works with numeric keys', async () => {
        const NumericKeyElement = defineElement<{activeKey: number}>()({
            tagName: 'test-keyed-cache-numeric-key-element',
            render({inputs}) {
                return html`
                    <span class="key-label">${inputs.activeKey}</span>
                    ${keyedCache(
                        inputs.activeKey,
                        html`
                            <input class="cached-input" />
                        `,
                    )}
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${NumericKeyElement.assign({
                activeKey: 0,
            })}></${NumericKeyElement}>
        `);
        assert.instanceOf(fixture, NumericKeyElement);

        const input0 = getInput(fixture);
        assert.instanceOf(input0, HTMLInputElement);
        input0.value = 'zero';

        fixture.assignInputs({
            activeKey: 1,
        });
        await waitUntil.strictEquals('1', () => getKeyLabel(fixture));

        const input1 = getInput(fixture);
        assert.instanceOf(input1, HTMLInputElement);
        assert.strictEquals(input1.value, '');
        input1.value = 'one';

        /** Switch back to 0 (falsy key). */
        fixture.assignInputs({
            activeKey: 0,
        });
        await waitUntil.strictEquals('0', () => getKeyLabel(fixture));

        const restoredInput0 = getInput(fixture);
        assert.instanceOf(restoredInput0, HTMLInputElement);
        assert.strictEquals(restoredInput0.value, 'zero');
        assert.strictEquals(restoredInput0, input0);
    });

    it('treats different key types as distinct', async () => {
        /**
         * Use a non-typed element so we can pass both string and number keys through the same
         * input.
         */
        const MixedKeyElement = defineElement<{activeKey: string | number}>()({
            tagName: 'test-keyed-cache-mixed-key-element',
            render({inputs}) {
                return html`
                    <span class="key-label">${String(inputs.activeKey)}</span>
                    ${keyedCache(
                        inputs.activeKey,
                        html`
                            <input class="cached-input" />
                        `,
                    )}
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${MixedKeyElement.assign({
                activeKey: 1,
            })}></${MixedKeyElement}>
        `);
        assert.instanceOf(fixture, MixedKeyElement);

        const inputNumber = getInput(fixture);
        assert.instanceOf(inputNumber, HTMLInputElement);
        inputNumber.value = 'number key';

        /** Switch to the string '1', which should be a different key. */
        fixture.assignInputs({
            activeKey: '1',
        });
        await waitForAnimationFrame(2);

        const inputString = getInput(fixture);
        assert.instanceOf(inputString, HTMLInputElement);
        assert.strictEquals(inputString.value, '');
        inputString.value = 'string key';

        /** Switch back to numeric 1. */
        fixture.assignInputs({
            activeKey: 1,
        });
        await waitForAnimationFrame(2);

        const restoredNumber = getInput(fixture);
        assert.instanceOf(restoredNumber, HTMLInputElement);
        assert.strictEquals(restoredNumber.value, 'number key');
        assert.strictEquals(restoredNumber, inputNumber);

        /** Switch back to string '1'. */
        fixture.assignInputs({
            activeKey: '1',
        });
        await waitForAnimationFrame(2);

        const restoredString = getInput(fixture);
        assert.instanceOf(restoredString, HTMLInputElement);
        assert.strictEquals(restoredString.value, 'string key');
        assert.strictEquals(restoredString, inputString);
    });

    it('preserves event listeners added to cached DOM', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedCacheElement.assign({
                activeKey: 'listener-a',
            })}></${TestKeyedCacheElement}>
        `);
        assert.instanceOf(fixture, TestKeyedCacheElement);

        const inputA = getInput(fixture);
        assert.instanceOf(inputA, HTMLInputElement);

        let clickCount = 0;
        inputA.addEventListener('click', () => {
            clickCount++;
        });

        inputA.click();
        assert.strictEquals(clickCount, 1 as number);

        /** Switch away then back. */
        await switchKey(fixture, 'listener-b');
        await switchKey(fixture, 'listener-a');

        const restoredInput = getInput(fixture);
        assert.instanceOf(restoredInput, HTMLInputElement);
        assert.strictEquals(restoredInput, inputA);

        /** The event listener should still be attached to the restored DOM node. */
        restoredInput.click();
        assert.strictEquals(clickCount, 2);
    });

    it('restores the same element instance with re-initialized state across key switches', async () => {
        const StatefulChild = defineElement<{label: string}>()({
            tagName: 'test-keyed-cache-stateful-child',
            state() {
                return {
                    clickCount: 0,
                    lastMessage: '',
                };
            },
            render({state, updateState, inputs}) {
                return html`
                    <span class="child-label">${inputs.label}</span>
                    <span class="click-count">${state.clickCount}</span>
                    <span class="last-message">${state.lastMessage}</span>
                    <button
                        class="increment-button"
                        ${listen('click', () => {
                            updateState({
                                clickCount: state.clickCount + 1,
                            });
                        })}
                    ></button>
                    <input
                        class="message-input"
                        ${listen('input', (event) => {
                            updateState({
                                lastMessage: (event.target as HTMLInputElement).value,
                            });
                        })}
                    />
                `;
            },
        });

        const ParentElement = defineElement<{activeKey: string}>()({
            tagName: 'test-keyed-cache-stateful-parent',
            render({inputs}) {
                return html`
                    <span class="key-label">${inputs.activeKey}</span>
                    ${keyedCache(
                        inputs.activeKey,
                        html`
                            <${StatefulChild.assign({
                                label: inputs.activeKey,
                            })}></${StatefulChild}>
                        `,
                    )}
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${ParentElement.assign({
                activeKey: 'state-a',
            })}></${ParentElement}>
        `);
        assert.instanceOf(fixture, ParentElement);

        const parentShadow = fixture.shadowRoot;

        /** Wait for the child to render. */
        await waitUntil.isTruthy(() =>
            parentShadow.querySelector('test-keyed-cache-stateful-child'),
        );

        const childA = parentShadow.querySelector('test-keyed-cache-stateful-child');
        assert.instanceOf(childA, StatefulChild);

        /** Mutate the child's internal state by clicking the button and typing in the input. */
        const buttonA = childA.shadowRoot.querySelector('.increment-button');
        assert.instanceOf(buttonA, HTMLButtonElement);
        buttonA.click();
        buttonA.click();
        buttonA.click();

        const inputA = childA.shadowRoot.querySelector('.message-input');
        assert.instanceOf(inputA, HTMLInputElement);
        inputA.value = 'hello from state-a';
        inputA.dispatchEvent(new Event('input'));

        await waitUntil.strictEquals(3, () => childA.instanceState.clickCount);
        await waitUntil.strictEquals('hello from state-a', () => childA.instanceState.lastMessage);

        /** Switch to key 'state-b'. */
        fixture.assignInputs({
            activeKey: 'state-b',
        });
        await waitUntil.strictEquals('state-b', () => getKeyLabel(fixture));
        await waitUntil.isTruthy(() =>
            parentShadow.querySelector('test-keyed-cache-stateful-child'),
        );

        const childB = parentShadow.querySelector('test-keyed-cache-stateful-child');
        assert.instanceOf(childB, StatefulChild);

        /** The new child should have fresh default state. */
        await waitUntil.strictEquals(0, () => childB.instanceState.clickCount);
        assert.strictEquals(childB.instanceState.lastMessage, '');

        /** Mutate child B's state. */
        const buttonB = childB.shadowRoot.querySelector('.increment-button');
        assert.instanceOf(buttonB, HTMLButtonElement);
        buttonB.click();

        await waitUntil.strictEquals(1, () => childB.instanceState.clickCount);

        /** Switch back to key 'state-a'. */
        fixture.assignInputs({
            activeKey: 'state-a',
        });
        await waitUntil.strictEquals('state-a', () => getKeyLabel(fixture));
        await waitForAnimationFrame(2);

        const restoredChildA = parentShadow.querySelector('test-keyed-cache-stateful-child');
        assert.instanceOf(restoredChildA, StatefulChild);

        /** The restored child should be the exact same element instance. */
        assert.strictEquals(restoredChildA, childA);

        /**
         * Reattaching an element re-runs its `state` callback, so element state resets to its
         * initial values. `keyedCache` only promises to preserve DOM state.
         */
        await waitUntil.strictEquals(0, () => restoredChildA.instanceState.clickCount);
        assert.strictEquals(restoredChildA.instanceState.lastMessage, '');

        /** DOM state that no binding controls survives the trip through the cache. */
        const restoredInputA = restoredChildA.shadowRoot.querySelector('.message-input');
        assert.instanceOf(restoredInputA, HTMLInputElement);
        assert.strictEquals(restoredInputA, inputA);
        assert.strictEquals(restoredInputA.value, 'hello from state-a');

        /** Switch back to 'state-b' and verify its state too. */
        fixture.assignInputs({
            activeKey: 'state-b',
        });
        await waitUntil.strictEquals('state-b', () => getKeyLabel(fixture));
        await waitForAnimationFrame(2);

        const restoredChildB = parentShadow.querySelector('test-keyed-cache-stateful-child');
        assert.instanceOf(restoredChildB, StatefulChild);
        assert.strictEquals(restoredChildB, childB);
        await waitUntil.strictEquals(0, () => restoredChildB.instanceState.clickCount);
        assert.strictEquals(restoredChildB.instanceState.lastMessage, '');
    });

    it('clears its cache on disconnect and rebuilds on reconnect', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedCacheElement.assign({
                activeKey: 'first',
            })}></${TestKeyedCacheElement}>
        `);
        assert.instanceOf(fixture, TestKeyedCacheElement);

        const input = getInput(fixture);
        assert.instanceOf(input, HTMLInputElement);
        input.value = 'typed';

        /** Switch keys to push the first key into the cache. */
        fixture.assignInputs({
            activeKey: 'second',
        });
        await waitUntil.strictEquals('second', () => getKeyLabel(fixture));

        /** Disconnect → reconnect to exercise the directive's lifecycle hooks. */
        const parent = fixture.parentNode;
        assert.isTruthy(parent);
        fixture.remove();
        parent.append(fixture);
        await waitForAnimationFrame(2);

        /** Re-rendering with the first key should produce a fresh input (cache was cleared). */
        fixture.assignInputs({
            activeKey: 'first',
        });
        await waitUntil.strictEquals('first', () => getKeyLabel(fixture));

        const inputAfter = getInput(fixture);
        assert.instanceOf(inputAfter, HTMLInputElement);
        assert.strictEquals(inputAfter.value, '');
    });

    it('has the expected type', () => {
        assert.tsType<Parameters<typeof keyedCache>>().equals<
            [
                PropertyKey,
                unknown,
            ]
        >();
    });

    it('preserves the active DOM across a disconnect and reconnect', async () => {
        const fixture = await testWeb.render(html`
            <${TestKeyedCacheElement.assign({
                activeKey: 'active',
            })}></${TestKeyedCacheElement}>
        `);
        assert.instanceOf(fixture, TestKeyedCacheElement);

        const input = getInput(fixture);
        assert.instanceOf(input, HTMLInputElement);
        input.value = 'still here';

        const parent = fixture.parentNode;
        assert.isTruthy(parent);
        fixture.remove();
        parent.append(fixture);
        await waitForAnimationFrame(2);

        const inputAfter = getInput(fixture);
        assert.instanceOf(inputAfter, HTMLInputElement);
        assert.strictEquals(inputAfter, input);
        assert.strictEquals(inputAfter.value, 'still here');
    });

    it('works with symbol keys', async () => {
        const firstKey = Symbol.for('keyed-cache-first');
        const secondKey = Symbol.for('keyed-cache-second');

        const SymbolKeyElement = defineElement<{activeKey: symbol; label: string}>()({
            tagName: 'test-keyed-cache-symbol-key-element',
            render({inputs}) {
                return html`
                    <span class="key-label">${inputs.label}</span>
                    ${keyedCache(
                        inputs.activeKey,
                        html`
                            <input class="cached-input" />
                        `,
                    )}
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${SymbolKeyElement.assign({
                activeKey: firstKey,
                label: 'first',
            })}></${SymbolKeyElement}>
        `);
        assert.instanceOf(fixture, SymbolKeyElement);

        const firstInput = getInput(fixture);
        assert.instanceOf(firstInput, HTMLInputElement);
        firstInput.value = 'first value';

        fixture.assignInputs({
            activeKey: secondKey,
            label: 'second',
        });
        await waitUntil.strictEquals('second', () => getKeyLabel(fixture));

        const secondInput = getInput(fixture);
        assert.instanceOf(secondInput, HTMLInputElement);
        assert.strictEquals(secondInput.value, '');

        fixture.assignInputs({
            activeKey: firstKey,
            label: 'first',
        });
        await waitUntil.strictEquals('first', () => getKeyLabel(fixture));

        const restoredFirst = getInput(fixture);
        assert.instanceOf(restoredFirst, HTMLInputElement);
        assert.strictEquals(restoredFirst, firstInput);
        assert.strictEquals(restoredFirst.value, 'first value');
    });

    it('keeps separate caches for separate directive instances', async () => {
        const TwoCacheElement = defineElement<{activeKey: string}>()({
            tagName: 'test-keyed-cache-two-cache-element',
            render({inputs}) {
                return html`
                    <span class="key-label">${inputs.activeKey}</span>
                    ${keyedCache(
                        inputs.activeKey,
                        html`
                            <input class="top-input" />
                        `,
                    )}
                    ${keyedCache(
                        inputs.activeKey,
                        html`
                            <input class="bottom-input" />
                        `,
                    )}
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${TwoCacheElement.assign({
                activeKey: 'shared-a',
            })}></${TwoCacheElement}>
        `);
        assert.instanceOf(fixture, TwoCacheElement);

        const topInput = fixture.shadowRoot.querySelector('.top-input');
        const bottomInput = fixture.shadowRoot.querySelector('.bottom-input');
        assert.instanceOf(topInput, HTMLInputElement);
        assert.instanceOf(bottomInput, HTMLInputElement);
        topInput.value = 'top a';
        bottomInput.value = 'bottom a';

        await switchKey(fixture, 'shared-b');

        const topInputB = fixture.shadowRoot.querySelector('.top-input');
        const bottomInputB = fixture.shadowRoot.querySelector('.bottom-input');
        assert.instanceOf(topInputB, HTMLInputElement);
        assert.instanceOf(bottomInputB, HTMLInputElement);
        assert.strictEquals(topInputB.value, '');
        assert.strictEquals(bottomInputB.value, '');

        await switchKey(fixture, 'shared-a');

        const restoredTop = fixture.shadowRoot.querySelector('.top-input');
        const restoredBottom = fixture.shadowRoot.querySelector('.bottom-input');
        assert.instanceOf(restoredTop, HTMLInputElement);
        assert.instanceOf(restoredBottom, HTMLInputElement);
        assert.strictEquals(restoredTop, topInput);
        assert.strictEquals(restoredBottom, bottomInput);
        assert.strictEquals(restoredTop.value, 'top a');
        assert.strictEquals(restoredBottom.value, 'bottom a');
    });

    it('updates the value when only the value changes', async () => {
        const SameKeyElement = defineElement<{counter: number}>()({
            tagName: 'test-keyed-cache-same-key-element',
            render({inputs}) {
                return html`
                    ${keyedCache(
                        'constant-key',
                        html`
                            <span class="counter-display">${inputs.counter}</span>
                            <input class="cached-input" />
                        `,
                    )}
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${SameKeyElement.assign({
                counter: 1,
            })}></${SameKeyElement}>
        `);
        assert.instanceOf(fixture, SameKeyElement);

        const input = getInput(fixture);
        assert.instanceOf(input, HTMLInputElement);
        input.value = 'typed';

        fixture.assignInputs({
            counter: 2,
        });
        await waitUntil.strictEquals('2', () =>
            fixture.shadowRoot.querySelector('.counter-display')?.textContent.trim(),
        );

        const sameInput = getInput(fixture);
        assert.instanceOf(sameInput, HTMLInputElement);
        assert.strictEquals(sameInput, input);
        assert.strictEquals(sameInput.value, 'typed');
    });

    it('swaps structurally different templates per key', async () => {
        const StructureElement = defineElement<{activeKey: string}>()({
            tagName: 'test-keyed-cache-structure-element',
            render({inputs}) {
                return html`
                    <span class="key-label">${inputs.activeKey}</span>
                    ${keyedCache(
                        inputs.activeKey,
                        inputs.activeKey === 'input-key'
                            ? html`
                                  <input class="cached-input" />
                              `
                            : html`
                                  <textarea class="cached-area"></textarea>
                              `,
                    )}
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${StructureElement.assign({
                activeKey: 'input-key',
            })}></${StructureElement}>
        `);
        assert.instanceOf(fixture, StructureElement);

        const input = getInput(fixture);
        assert.instanceOf(input, HTMLInputElement);
        input.value = 'in the input';

        await switchKey(fixture, 'area-key');

        const area = fixture.shadowRoot.querySelector('.cached-area');
        assert.instanceOf(area, HTMLTextAreaElement);
        assert.isNull(getInput(fixture));
        area.value = 'in the area';

        await switchKey(fixture, 'input-key');

        const restoredInput = getInput(fixture);
        assert.instanceOf(restoredInput, HTMLInputElement);
        assert.strictEquals(restoredInput, input);
        assert.strictEquals(restoredInput.value, 'in the input');
        assert.isNull(fixture.shadowRoot.querySelector('.cached-area'));

        await switchKey(fixture, 'area-key');

        const restoredArea = fixture.shadowRoot.querySelector('.cached-area');
        assert.instanceOf(restoredArea, HTMLTextAreaElement);
        assert.strictEquals(restoredArea, area);
        assert.strictEquals(restoredArea.value, 'in the area');
    });

    it('renders nothing for an undefined value', async () => {
        const EmptyElement = defineElement<{activeKey: string}>()({
            tagName: 'test-keyed-cache-empty-element',
            render({inputs}) {
                return html`
                    <span class="key-label">${inputs.activeKey}</span>
                    ${keyedCache(inputs.activeKey, undefined)}
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${EmptyElement.assign({
                activeKey: 'empty-a',
            })}></${EmptyElement}>
        `);
        assert.instanceOf(fixture, EmptyElement);
        assert.strictEquals(fixture.shadowRoot.textContent.trim(), 'empty-a');

        await switchKey(fixture, 'empty-b');
        assert.strictEquals(fixture.shadowRoot.textContent.trim(), 'empty-b');

        await switchKey(fixture, 'empty-a');
        assert.strictEquals(fixture.shadowRoot.textContent.trim(), 'empty-a');
    });
});
