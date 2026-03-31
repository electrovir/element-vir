import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {waitForAnimationFrame} from '@augment-vir/web';
import {defineElement, html, keyedCache} from '../../index.js';

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

    async function switchKey(fixture: InstanceType<typeof TestKeyedCacheElement>, key: string) {
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
});

describe('cacheKey element init property', () => {
    const CacheKeyElement = defineElement<{activeKey: string}>()({
        tagName: 'test-cache-key-init-element',
        cacheKey({inputs}) {
            return inputs.activeKey;
        },
        render({inputs}) {
            return html`
                <span class="key-label">${inputs.activeKey}</span>
                <input class="cached-input" />
            `;
        },
    });

    function getKeyLabel(fixture: Element) {
        const shadowRoot = (fixture as HTMLElement & {shadowRoot: ShadowRoot}).shadowRoot;
        return shadowRoot.querySelector('.key-label')?.textContent?.trim() || '';
    }

    function getInput(fixture: Element) {
        const shadowRoot = (fixture as HTMLElement & {shadowRoot: ShadowRoot}).shadowRoot;
        return shadowRoot.querySelector('.cached-input');
    }

    it('preserves DOM state across key switches', async () => {
        const fixture = await testWeb.render(html`
            <${CacheKeyElement.assign({
                activeKey: 'a',
            })}></${CacheKeyElement}>
        `);
        assert.instanceOf(fixture, CacheKeyElement);

        const inputA = getInput(fixture);
        assert.instanceOf(inputA, HTMLInputElement);
        inputA.value = 'init property A';

        fixture.assignInputs({
            activeKey: 'b',
        });
        await waitUntil.strictEquals('b', () => getKeyLabel(fixture));

        const inputB = getInput(fixture);
        assert.instanceOf(inputB, HTMLInputElement);
        assert.strictEquals(inputB.value, '');
        inputB.value = 'init property B';

        fixture.assignInputs({
            activeKey: 'a',
        });
        await waitUntil.strictEquals('a', () => getKeyLabel(fixture));

        const restoredA = getInput(fixture);
        assert.instanceOf(restoredA, HTMLInputElement);
        assert.strictEquals(restoredA.value, 'init property A');
        assert.strictEquals(restoredA, inputA);
    });

    it('derives cache key from state', async () => {
        const StateCacheKeyElement = defineElement<{tab: string}>()({
            tagName: 'test-cache-key-state-element',
            state() {
                return {
                    derivedKey: '',
                };
            },
            cacheKey({state}) {
                return state.derivedKey;
            },
            render({inputs, updateState}) {
                updateState({
                    derivedKey: inputs.tab,
                });

                return html`
                    <span class="key-label">${inputs.tab}</span>
                    <input class="cached-input" />
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${StateCacheKeyElement.assign({
                tab: 'x',
            })}></${StateCacheKeyElement}>
        `);
        assert.instanceOf(fixture, StateCacheKeyElement);

        /**
         * Wait for the second render after updateState sets derivedKey. The first render has
         * derivedKey='', the second has derivedKey='x'.
         */
        await waitUntil.strictEquals('x', () => getKeyLabel(fixture));

        const inputX = getInput(fixture);
        assert.instanceOf(inputX, HTMLInputElement);
        inputX.value = 'state-derived X';

        fixture.assignInputs({
            tab: 'y',
        });
        await waitUntil.strictEquals('y', () => getKeyLabel(fixture));

        const inputY = getInput(fixture);
        assert.instanceOf(inputY, HTMLInputElement);
        assert.strictEquals(inputY.value, '');

        fixture.assignInputs({
            tab: 'x',
        });
        await waitUntil.strictEquals('x', () => getKeyLabel(fixture));

        const restoredX = getInput(fixture);
        assert.instanceOf(restoredX, HTMLInputElement);
        assert.strictEquals(restoredX.value, 'state-derived X');
    });

    it('does not disrupt DOM when key stays the same', async () => {
        const fixture = await testWeb.render(html`
            <${CacheKeyElement.assign({
                activeKey: 'stable',
            })}></${CacheKeyElement}>
        `);
        assert.instanceOf(fixture, CacheKeyElement);

        const input = getInput(fixture);
        assert.instanceOf(input, HTMLInputElement);
        input.value = 'stable value';

        fixture.assignInputs({
            activeKey: 'stable',
        });
        await waitUntil.strictEquals('stable', () => getKeyLabel(fixture));

        const sameInput = getInput(fixture);
        assert.instanceOf(sameInput, HTMLInputElement);
        assert.strictEquals(sameInput.value, 'stable value');
        assert.strictEquals(sameInput, input);
    });
});
