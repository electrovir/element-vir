import {assert, assertWrap} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {Observable} from 'observavir';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {bindReactiveProperty} from './property-proxy.js';

const PropertyProxyChild = defineElement<{value: number; obs: Observable<string>}>()({
    tagName: 'property-proxy-child',
    render({inputs}) {
        return html`
            <span class="value">${inputs.value}</span>
            <span class="obs">${inputs.obs.value}</span>
        `;
    },
});

const DeletableInputChild = defineElement<{
    value?: number | undefined;
    obs?: Observable<string> | undefined;
}>()({
    tagName: 'property-proxy-deletable-child',
    render({inputs}) {
        return html`
            <span class="value">${inputs.value}</span>
            <span class="obs">${inputs.obs?.value}</span>
        `;
    },
});

describe('property-proxy', () => {
    it('reads input values back through the proxy', async () => {
        const initialObservable = new Observable({
            defaultValue: 'first',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 7,
                obs: initialObservable,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);
        assert.strictEquals(fixture.instanceInputs.value, 7);
    });

    it('re-renders the child when an observable input value changes', async () => {
        const observable = new Observable({
            defaultValue: 'before',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 1,
                obs: observable,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);

        const obsSpan = fixture.shadowRoot.querySelector('.obs');
        assert.instanceOf(obsSpan, HTMLSpanElement);
        assert.strictEquals(obsSpan.textContent.trim(), 'before');

        observable.setValue('after');
        await fixture.updateComplete;
        assert.strictEquals(obsSpan.textContent.trim(), 'after');
    });

    it('detaches the listener from a previous observable when an input is reassigned', async () => {
        const first = new Observable({
            defaultValue: 'first',
        });
        const second = new Observable({
            defaultValue: 'second',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 1,
                obs: first,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);

        fixture.assignInputs({
            value: 1,
            obs: second,
        });
        await fixture.updateComplete;

        const obsSpan = fixture.shadowRoot.querySelector('.obs');
        assert.instanceOf(obsSpan, HTMLSpanElement);
        assert.strictEquals(obsSpan.textContent.trim(), 'second');

        /** Updating the first (now-detached) observable should not affect rendering. */
        first.setValue('first-updated');
        await fixture.updateComplete;
        assert.strictEquals(obsSpan.textContent.trim(), 'second');

        /** Updating the new observable should still re-render. */
        second.setValue('second-updated');
        await fixture.updateComplete;
        assert.strictEquals(obsSpan.textContent.trim(), 'second-updated');
    });

    it('clears the listener entry when an observable input is replaced with a non-observable', async () => {
        const ObsOrStringChild = defineElement<{obs: Observable<string> | string}>()({
            tagName: 'property-proxy-obs-or-string',
            render({inputs}) {
                const value = typeof inputs.obs === 'string' ? inputs.obs : inputs.obs.value;
                return html`
                    <span class="value">${value}</span>
                `;
            },
        });
        const observable = new Observable({
            defaultValue: 'before',
        });
        const fixture = await testWeb.render(html`
            <${ObsOrStringChild.assign({
                obs: observable,
            })}></${ObsOrStringChild}>
        `);
        assert.instanceOf(fixture, ObsOrStringChild);

        fixture.assignInputs({
            obs: 'literal',
        });
        await fixture.updateComplete;

        const span = fixture.shadowRoot.querySelector('.value');
        assert.instanceOf(span, HTMLSpanElement);
        assert.strictEquals(span.textContent.trim(), 'literal');

        /** Listener should be cleared so observable mutations no longer cause re-renders. */
        observable.setValue('orphan');
        await fixture.updateComplete;
        assert.strictEquals(span.textContent.trim(), 'literal');
    });

    it('throws when reading a non-existent state property through the state proxy', async () => {
        const StateProxyElement = defineElement()({
            tagName: 'property-proxy-state-element',
            state() {
                return {
                    real: 0,
                };
            },
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${StateProxyElement}></${StateProxyElement}>
        `);
        assert.instanceOf(fixture, StateProxyElement);

        assert.throws(
            () => {
                /** State proxy uses shouldAlreadyExist=true; missing keys throw. */
                (fixture.instanceState as Record<string, unknown>).nonExistentKey;
            },
            {
                matchMessage: 'does not exist on',
            },
        );
    });

    it('throws with the lower cased tag name when writing an unknown state key', async () => {
        const StateWriteElement = defineElement()({
            tagName: 'property-proxy-state-write',
            state() {
                return {
                    real: 0,
                };
            },
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${StateWriteElement}></${StateWriteElement}>
        `);
        assert.instanceOf(fixture, StateWriteElement);

        assert.throws(
            () => {
                (fixture.instanceState as Record<string, unknown>).nonExistentKey = 5;
            },
            {
                matchMessage:
                    "Property 'nonExistentKey' does not exist on 'property-proxy-state-write'.",
            },
        );
    });

    it('allows arbitrary state keys when allowPolymorphicState is enabled', async () => {
        const PolymorphicStateElement = defineElement()({
            tagName: 'property-proxy-polymorphic-state',
            options: {
                allowPolymorphicState: true,
            },
            state() {
                return {
                    real: 0,
                };
            },
            render({state}) {
                return html`
                    <span class="extra">
                        ${assertWrap.isString(assertWrap.hasKey(state, 'extra').extra)}
                    </span>
                `;
            },
        });
        const fixture = await testWeb.render(html`
            <${PolymorphicStateElement}></${PolymorphicStateElement}>
        `);
        assert.instanceOf(fixture, PolymorphicStateElement);

        (fixture.instanceState as Record<string, unknown>).extra = 'added';
        await fixture.updateComplete;

        const span = fixture.shadowRoot.querySelector('.extra');
        assert.instanceOf(span, HTMLSpanElement);
        assert.strictEquals(span.textContent.trim(), 'added');
    });

    it('does not define a key on the element just from reading it', async () => {
        const UnassignedInputElement = defineElement<{maybe?: string | undefined}>()({
            tagName: 'property-proxy-unassigned-input',
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${UnassignedInputElement}></${UnassignedInputElement}>
        `);
        assert.instanceOf(fixture, UnassignedInputElement);

        assert.isFalse('neverAssigned' in fixture);
        assert.isUndefined((fixture.instanceInputs as Record<string, unknown>).neverAssigned);
        assert.isFalse('neverAssigned' in fixture);
    });

    it('does not bind a reactive property or render when an unassigned input is read', async () => {
        const ReadOnlyInputElement = defineElement<{maybe?: string | undefined}>()({
            tagName: 'property-proxy-read-no-bind',
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${ReadOnlyInputElement}></${ReadOnlyInputElement}>
        `);
        assert.instanceOf(fixture, ReadOnlyInputElement);
        await fixture.updateComplete;
        const startingRenderCount = fixture._internalRenderCount;

        assert.isUndefined(fixture.instanceInputs.maybe);
        await fixture.updateComplete;

        assert.strictEquals(fixture._internalRenderCount, startingRenderCount);
        assert.isFalse('maybe' in fixture);
        assert.isEmpty(Object.keys(fixture.instanceInputs));
        assert.isEmpty(Object.keys(fixture.observablePropertyListenerMap));
    });

    it('throws for missing number and symbol state keys on read and on write', async () => {
        const StateKeyTypesElement = defineElement()({
            tagName: 'property-proxy-state-key-types',
            state() {
                return {
                    real: 0,
                };
            },
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${StateKeyTypesElement}></${StateKeyTypesElement}>
        `);
        assert.instanceOf(fixture, StateKeyTypesElement);
        const missingSymbol = Symbol.for('property-proxy-missing-symbol');
        const state = fixture.instanceState as Record<PropertyKey, unknown>;

        assert.throws(
            () => {
                state[42];
            },
            {
                matchMessage: "Property '42' does not exist on 'property-proxy-state-key-types'.",
            },
        );
        assert.throws(
            () => {
                state[42] = 1;
            },
            {
                matchMessage: "Property '42' does not exist on 'property-proxy-state-key-types'.",
            },
        );
        assert.throws(
            () => {
                state[missingSymbol];
            },
            {
                matchMessage:
                    "Property 'Symbol(property-proxy-missing-symbol)' does not exist on 'property-proxy-state-key-types'.",
            },
        );
        assert.throws(
            () => {
                state[missingSymbol] = 1;
            },
            {
                matchMessage:
                    "Property 'Symbol(property-proxy-missing-symbol)' does not exist on 'property-proxy-state-key-types'.",
            },
        );
    });

    it('supports string, number, and symbol keys through get, set, has, and delete', async () => {
        const AllKeyTypesElement = defineElement()({
            tagName: 'property-proxy-all-key-types',
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${AllKeyTypesElement}></${AllKeyTypesElement}>
        `);
        assert.instanceOf(fixture, AllKeyTypesElement);
        const symbolKey = Symbol.for('property-proxy-symbol-key');
        const inputs = fixture.instanceInputs as Record<PropertyKey, unknown>;

        inputs.stringKey = 'string value';
        inputs[42] = 'number value';
        inputs[symbolKey] = 'symbol value';

        assert.deepEquals(
            {
                string: inputs.stringKey,
                number: inputs[42],
                symbol: inputs[symbolKey],
            },
            {
                string: 'string value',
                number: 'number value',
                symbol: 'symbol value',
            },
        );
        assert.deepEquals(
            {
                string: 'stringKey' in inputs,
                number: 42 in inputs,
                symbol: symbolKey in inputs,
            },
            {
                string: true,
                number: true,
                symbol: true,
            },
        );
        assert.deepEquals(Reflect.ownKeys(inputs), [
            '42',
            'stringKey',
            symbolKey,
        ]);

        assert.deepEquals(
            [
                'stringKey',
                42,
                symbolKey,
            ].map((propertyKey) => {
                return Reflect.deleteProperty(inputs, propertyKey);
            }),
            [
                true,
                true,
                true,
            ],
        );
        assert.isEmpty(Reflect.ownKeys(inputs));
        assert.deepEquals(
            {
                string: inputs.stringKey,
                number: inputs[42],
                symbol: inputs[symbolKey],
            },
            {
                string: undefined,
                number: undefined,
                symbol: undefined,
            },
        );
    });

    it('binds a key as a reactive property when it is written through the inputs proxy', async () => {
        const LateAssignedInputElement = defineElement<{late?: string | undefined}>()({
            tagName: 'property-proxy-late-assigned-input',
            render({inputs}) {
                return html`
                    <span class="late">${inputs.late}</span>
                `;
            },
        });
        const fixture = await testWeb.render(html`
            <${LateAssignedInputElement}></${LateAssignedInputElement}>
        `);
        assert.instanceOf(fixture, LateAssignedInputElement);
        const span = fixture.shadowRoot.querySelector('.late');
        assert.instanceOf(span, HTMLSpanElement);

        assert.isFalse('late' in fixture);
        (fixture.instanceInputs as Record<string, unknown>).late = 'written';
        assert.isTrue('late' in fixture);

        await fixture.updateComplete;
        assert.strictEquals(span.textContent.trim(), 'written');
    });

    it('lists only keys that were assigned through the proxy', async () => {
        const observable = new Observable({
            defaultValue: 'value',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 3,
                obs: observable,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);

        assert.deepEquals(Object.keys(fixture.instanceInputs), [
            'value',
            'obs',
        ]);
        /** `has` matches `get`, which reads through to the element. */
        assert.isTrue('value' in fixture.instanceInputs);
        assert.isTrue('tagName' in fixture.instanceInputs);
        assert.isTrue('updateComplete' in fixture.instanceInputs);
        assert.isFalse('notOnTheElementAtAll' in fixture.instanceInputs);
    });

    it('reports element properties that were set directly rather than through the proxy', async () => {
        const DirectSetElement = defineElement<{value?: number | undefined}>()({
            tagName: 'property-proxy-direct-set',
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${DirectSetElement}></${DirectSetElement}>
        `);
        assert.instanceOf(fixture, DirectSetElement);

        (fixture as Record<string, unknown>).value = 5;

        assert.isTrue('value' in fixture.instanceInputs);
        assert.strictEquals(fixture.instanceInputs.value, 5);
    });

    it('spreads current element values rather than stale target values', async () => {
        const observable = new Observable({
            defaultValue: 'value',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 3,
                obs: observable,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);

        (fixture as Record<string, unknown>).value = 44;

        const spreadInputs = {
            ...fixture.instanceInputs,
        };
        assert.strictEquals(spreadInputs.value, 44);
    });

    it('reports a live, configurable, enumerable descriptor for assigned keys', async () => {
        const observable = new Observable({
            defaultValue: 'value',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 3,
                obs: observable,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);

        const descriptor = Object.getOwnPropertyDescriptor(fixture.instanceInputs, 'value');
        assert.isDefined(descriptor);
        assert.isTrue(descriptor.configurable);
        assert.isTrue(descriptor.enumerable);
        assert.strictEquals(descriptor.value, 3);

        (fixture as Record<string, unknown>).value = 99;
        assert.strictEquals(
            Object.getOwnPropertyDescriptor(fixture.instanceInputs, 'value')?.value,
            99,
        );
    });

    it('reports no descriptor for keys that were never assigned through the proxy', async () => {
        const observable = new Observable({
            defaultValue: 'value',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 3,
                obs: observable,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);

        assert.isUndefined(Object.getOwnPropertyDescriptor(fixture.instanceInputs, 'nothingHere'));
        assert.isUndefined(Object.getOwnPropertyDescriptor(fixture.instanceInputs, 'tagName'));
    });

    it('mirrors proxy writes onto the element itself', async () => {
        const observable = new Observable({
            defaultValue: 'value',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 3,
                obs: observable,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);

        assert.strictEquals((fixture as Record<string, unknown>).value, 3);
        fixture.assignInputs({
            value: 12,
            obs: observable,
        });
        assert.strictEquals((fixture as Record<string, unknown>).value, 12);
    });

    it('clears the element value when a proxy key is deleted', async () => {
        const fixture = await testWeb.render(html`
            <${DeletableInputChild.assign({
                value: 3,
            })}></${DeletableInputChild}>
        `);
        assert.instanceOf(fixture, DeletableInputChild);

        assert.isTrue(
            Reflect.deleteProperty(fixture.instanceInputs as Record<string, unknown>, 'value'),
        );

        assert.isEmpty(Object.keys(fixture.instanceInputs));
        assert.isUndefined(fixture.instanceInputs.value);
        assert.isUndefined((fixture as Record<string, unknown>).value);
    });

    it('removes the observable listener when an observable input key is deleted', async () => {
        const observable = new Observable({
            defaultValue: 'value',
        });
        const fixture = await testWeb.render(html`
            <${DeletableInputChild.assign({
                obs: observable,
            })}></${DeletableInputChild}>
        `);
        assert.instanceOf(fixture, DeletableInputChild);
        assert.isTrue('obs' in fixture.observablePropertyListenerMap);

        Reflect.deleteProperty(fixture.instanceInputs as Record<string, unknown>, 'obs');

        assert.isFalse('obs' in fixture.observablePropertyListenerMap);
    });

    it('throws when a state key was already assigned as an input', async () => {
        const StateCollisionElement = defineElement()({
            tagName: 'property-proxy-state-collision',
            state() {
                return {
                    collides: 'state value',
                };
            },
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${StateCollisionElement}></${StateCollisionElement}>
        `);
        assert.instanceOf(fixture, StateCollisionElement);

        (fixture.instanceInputs as Record<string, unknown>).collides = 'input value';

        assert.throws(
            () => {
                (fixture.instanceState as Record<string, unknown>).collides = 'state value';
            },
            {
                matchMessage:
                    "Cannot set state 'collides' on 'property-proxy-state-collision'. 'property-proxy-state-collision' already has an input property with the same name.",
            },
        );
    });

    it('leaves the element unchanged when a state write collides with an input', async () => {
        const CollisionAtomicElement = defineElement()({
            tagName: 'property-proxy-collision-atomic',
            state() {
                return {
                    existing: 'state value',
                };
            },
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${CollisionAtomicElement}></${CollisionAtomicElement}>
        `);
        assert.instanceOf(fixture, CollisionAtomicElement);

        (fixture.instanceInputs as Record<string, unknown>).collides = 'input value';
        await fixture.updateComplete;
        const startingRenderCount = fixture._internalRenderCount;

        assert.throws(
            () => {
                (fixture.instanceState as Record<string, unknown>).collides = 'state value';
            },
            {
                matchMessage: 'already has an input property with the same name.',
            },
        );

        assert.strictEquals((fixture as Record<string, unknown>).collides, 'input value');
        assert.deepEquals(Object.keys(fixture.instanceState), ['existing']);
        await fixture.updateComplete;
        assert.strictEquals(fixture._internalRenderCount, startingRenderCount);
    });

    it('does not treat an inputs proxy write as a collision with itself', async () => {
        const SelfCollisionElement = defineElement<{value?: number | undefined}>()({
            tagName: 'property-proxy-self-collision',
            render({inputs}) {
                return html`
                    <span class="value">${inputs.value}</span>
                `;
            },
        });
        const fixture = await testWeb.render(html`
            <${SelfCollisionElement.assign({
                value: 1,
            })}></${SelfCollisionElement}>
        `);
        assert.instanceOf(fixture, SelfCollisionElement);

        assert.doesNotThrow(() => {
            (fixture.instanceInputs as Record<string, unknown>).value = 2;
        });
        assert.strictEquals(fixture.instanceInputs.value, 2);
    });

    it('clears a colliding state key instead of blocking the delete', async () => {
        const CollisionDeleteElement = defineElement()({
            tagName: 'property-proxy-collision-delete',
            state() {
                return {
                    existing: 'state value',
                };
            },
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${CollisionDeleteElement}></${CollisionDeleteElement}>
        `);
        assert.instanceOf(fixture, CollisionDeleteElement);

        (fixture.instanceInputs as Record<string, unknown>).collides = 'input value';
        (fixture.instanceState as Record<string, unknown>)['existing'] = 'mutated';

        assert.doesNotThrow(() => {
            Reflect.deleteProperty(fixture.instanceState as Record<string, unknown>, 'collides');
        });
        assert.isUndefined((fixture as Record<string, unknown>).collides);
    });

    it('re-renders and drops the descriptor when a proxy key is deleted', async () => {
        const fixture = await testWeb.render(html`
            <${DeletableInputChild.assign({
                value: 3,
            })}></${DeletableInputChild}>
        `);
        assert.instanceOf(fixture, DeletableInputChild);
        await fixture.updateComplete;
        const valueSpan = fixture.shadowRoot.querySelector('.value');
        assert.instanceOf(valueSpan, HTMLSpanElement);
        assert.strictEquals(valueSpan.textContent.trim(), '3');
        const startingRenderCount = fixture._internalRenderCount;

        Reflect.deleteProperty(fixture.instanceInputs as Record<string, unknown>, 'value');
        await fixture.updateComplete;

        assert.strictEquals(fixture._internalRenderCount, startingRenderCount + 1);
        assert.strictEquals(valueSpan.textContent.trim(), '');
        assert.isUndefined(Object.getOwnPropertyDescriptor(fixture.instanceInputs, 'value'));
        /** The key still reads through to the element, which cannot lose its lit accessor. */
        assert.isTrue('value' in fixture.instanceInputs);
    });

    it('keeps enumeration limited to proxy writes while "in" matches reads', async () => {
        const InAgreementElement = defineElement<{assigned?: string | undefined}>()({
            tagName: 'property-proxy-in-agreement',
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${InAgreementElement.assign({
                assigned: 'value',
            })}></${InAgreementElement}>
        `);
        assert.instanceOf(fixture, InAgreementElement);
        const inputs = fixture.instanceInputs as Record<string, unknown>;

        assert.deepEquals(
            {
                assigned: 'assigned' in inputs,
                elementOnly: 'tagName' in inputs,
                absent: 'notAnywhere' in inputs,
            },
            {
                assigned: true,
                elementOnly: true,
                absent: false,
            },
        );
        assert.deepEquals(
            {
                assigned: inputs.assigned,
                elementOnly: inputs.tagName,
                absent: inputs.notAnywhere,
            },
            {
                assigned: 'value',
                elementOnly: 'PROPERTY-PROXY-IN-AGREEMENT',
                absent: undefined,
            },
        );
        assert.deepEquals(
            {
                ...inputs,
            },
            {
                assigned: 'value',
            },
        );
        assert.strictEquals(JSON.stringify(inputs), '{"assigned":"value"}');
    });

    it('uses separate proxies for inputs and state', async () => {
        const SeparateProxyElement = defineElement<{input1: string}>()({
            tagName: 'property-proxy-separate',
            state() {
                return {
                    state1: 'state',
                };
            },
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${SeparateProxyElement.assign({
                input1: 'input',
            })}></${SeparateProxyElement}>
        `);
        assert.instanceOf(fixture, SeparateProxyElement);

        assert.notStrictEquals(fixture.instanceInputs as object, fixture.instanceState as object);
        assert.deepEquals(Object.keys(fixture.instanceState), ['state1']);
    });

    it('does not re-render when an identical non-observable input value is re-assigned', async () => {
        const observable = new Observable({
            defaultValue: 'value',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 3,
                obs: observable,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);
        const startingRenderCount = fixture._internalRenderCount;

        fixture.assignInputs({
            value: 3,
            obs: observable,
        });
        await fixture.updateComplete;

        assert.strictEquals(fixture._internalRenderCount, startingRenderCount);
    });

    it('does not react to mutations of a nested input object', async () => {
        const NestedInputElement = defineElement<{nested: {count: number}}>()({
            tagName: 'property-proxy-nested-input',
            render({inputs}) {
                return html`
                    <span class="count">${inputs.nested.count}</span>
                `;
            },
        });
        const nested = {
            count: 1,
        };
        const fixture = await testWeb.render(html`
            <${NestedInputElement.assign({
                nested,
            })}></${NestedInputElement}>
        `);
        assert.instanceOf(fixture, NestedInputElement);
        const span = fixture.shadowRoot.querySelector('.count');
        assert.instanceOf(span, HTMLSpanElement);
        assert.strictEquals(span.textContent.trim(), '1');

        nested.count = 2;
        await fixture.updateComplete;

        assert.strictEquals(span.textContent.trim(), '1');
        /** The proxy hands back the original object reference, not a copy. */
        assert.strictEquals(fixture.instanceInputs.nested, nested);
    });

    it('reuses the same listener reference when swapping between observables', async () => {
        const first = new Observable({
            defaultValue: 'first',
        });
        const second = new Observable({
            defaultValue: 'second',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 1,
                obs: first,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);

        const firstListener = fixture.observablePropertyListenerMap.obs;
        assert.isDefined(firstListener);

        fixture.assignInputs({
            value: 1,
            obs: second,
        });
        assert.strictEquals(fixture.observablePropertyListenerMap.obs, firstListener);
    });

    it('deletes the listener entry when an observable input becomes a non-observable', async () => {
        const ObsOrStringElement = defineElement<{obs: Observable<string> | string}>()({
            tagName: 'property-proxy-listener-delete',
            render({inputs}) {
                return html`
                    <span>${typeof inputs.obs === 'string' ? inputs.obs : inputs.obs.value}</span>
                `;
            },
        });
        const observable = new Observable({
            defaultValue: 'obs',
        });
        const fixture = await testWeb.render(html`
            <${ObsOrStringElement.assign({
                obs: observable,
            })}></${ObsOrStringElement}>
        `);
        assert.instanceOf(fixture, ObsOrStringElement);
        assert.isTrue('obs' in fixture.observablePropertyListenerMap);

        fixture.assignInputs({
            obs: 'literal',
        });

        assert.isFalse('obs' in fixture.observablePropertyListenerMap);
    });

    it('only re-renders once per observable change after re-assigning the same observable', async () => {
        const observable = new Observable({
            defaultValue: 'first',
        });
        const fixture = await testWeb.render(html`
            <${PropertyProxyChild.assign({
                value: 1,
                obs: observable,
            })}></${PropertyProxyChild}>
        `);
        assert.instanceOf(fixture, PropertyProxyChild);

        fixture.assignInputs({
            value: 1,
            obs: observable,
        });
        await fixture.updateComplete;
        const startingRenderCount = fixture._internalRenderCount;

        observable.setValue('second');
        await fixture.updateComplete;

        assert.strictEquals(fixture._internalRenderCount, startingRenderCount + 1);
    });
});

describe(bindReactiveProperty.name, () => {
    it('leaves an already existing property untouched', async () => {
        const BindTargetElement = defineElement()({
            tagName: 'property-proxy-bind-target',
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${BindTargetElement}></${BindTargetElement}>
        `);
        assert.instanceOf(fixture, BindTargetElement);

        (fixture as Record<string, unknown>).alreadyHere = 'original';
        bindReactiveProperty(fixture, 'alreadyHere');

        assert.strictEquals((fixture as Record<string, unknown>).alreadyHere, 'original');
    });

    it('binds a new key so that setting it triggers a re-render', async () => {
        const BindNewKeyElement = defineElement()({
            tagName: 'property-proxy-bind-new-key',
            render() {
                return 'hi';
            },
        });
        const fixture = await testWeb.render(html`
            <${BindNewKeyElement}></${BindNewKeyElement}>
        `);
        assert.instanceOf(fixture, BindNewKeyElement);

        assert.isFalse('freshKey' in fixture);
        bindReactiveProperty(fixture, 'freshKey');
        assert.isTrue('freshKey' in fixture);

        const startingRenderCount = fixture._internalRenderCount;
        (fixture as Record<string, unknown>).freshKey = 'new value';
        await fixture.updateComplete;

        assert.strictEquals(fixture._internalRenderCount, startingRenderCount + 1);
    });
});
