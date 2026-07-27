import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {ElementPropertyType, assignInputs, createPropertyCollisionError} from './assign-inputs.js';

const AssignInputsTarget = defineElement<{label: string; count: number}>()({
    tagName: 'assign-inputs-target',
    render({inputs}) {
        return html`
            <span class="label">${inputs.label}</span>
            <span class="count">${inputs.count}</span>
        `;
    },
});

describe(assignInputs.name, () => {
    it('writes inputs onto a declarative element instance', async () => {
        const fixture = await testWeb.render(html`
            <${AssignInputsTarget.assign({
                label: 'initial',
                count: 0,
            })}></${AssignInputsTarget}>
        `);
        assert.instanceOf(fixture, AssignInputsTarget);

        assignInputs(fixture, {
            label: 'updated',
            count: 9,
        });

        assert.strictEquals(fixture.instanceInputs.label, 'updated');
        assert.strictEquals(fixture.instanceInputs.count, 9);
    });

    it('wipes out inputs that are absent from the new inputs object', async () => {
        const fixture = await testWeb.render(html`
            <${AssignInputsTarget.assign({
                label: 'will-stay',
                count: 5,
            })}></${AssignInputsTarget}>
        `);
        assert.instanceOf(fixture, AssignInputsTarget);

        assignInputs(fixture, {
            label: 'still-here',
        });

        assert.strictEquals(fixture.instanceInputs.label, 'still-here');
        assert.strictEquals(fixture.instanceInputs.count as number | undefined, undefined);
    });

    it('falls back to writing on the element directly when there is no instanceInputs', () => {
        const plain = document.createElement('div');
        assignInputs(plain, {
            customField: 'value',
        });
        assert.hasKey(plain, 'customField');
        assert.strictEquals(plain.customField, 'value');
    });

    it('throws if an input key collides with an existing state property', async () => {
        const StateCollisionTarget = defineElement<{label: string}>()({
            tagName: 'assign-inputs-state-collision',
            state() {
                return {
                    other: 0,
                };
            },
            render({inputs}) {
                return html`
                    <span>${inputs.label}</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${StateCollisionTarget.assign({
                label: 'value',
            })}></${StateCollisionTarget}>
        `);
        assert.instanceOf(fixture, StateCollisionTarget);

        assert.throws(
            () => {
                assignInputs(fixture, {
                    other: 'colliding',
                });
            },
            {
                matchMessage: 'already has a state property',
            },
        );
    });

    it('throws with the lower cased tag name and applies no keys at all', async () => {
        const PartialAssignTarget = defineElement<{label: string}>()({
            tagName: 'assign-inputs-partial-assign',
            state() {
                return {
                    other: 0,
                };
            },
            render({inputs}) {
                return html`
                    <span>${inputs.label}</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${PartialAssignTarget.assign({
                label: 'first',
            })}></${PartialAssignTarget}>
        `);
        assert.instanceOf(fixture, PartialAssignTarget);

        assert.throws(
            () => {
                assignInputs(fixture, {
                    label: 'never applied',
                    other: 'colliding',
                });
            },
            {
                matchMessage:
                    "Cannot set input 'other' on 'assign-inputs-partial-assign'. 'assign-inputs-partial-assign' already has a state property with the same name.",
            },
        );

        assert.strictEquals(fixture.instanceInputs.label, 'first');
    });

    it('does not bind or render an earlier input key when a later key collides', async () => {
        const AtomicAssignTarget = defineElement<{label: string}>()({
            tagName: 'assign-inputs-atomic',
            state() {
                return {
                    other: 0,
                };
            },
            render({inputs}) {
                return html`
                    <span>${inputs.label}</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${AtomicAssignTarget.assign({
                label: 'first',
            })}></${AtomicAssignTarget}>
        `);
        assert.instanceOf(fixture, AtomicAssignTarget);
        await fixture.updateComplete;
        const startingRenderCount = fixture._internalRenderCount;

        assert.throws(
            () => {
                assignInputs(fixture, {
                    label: 'never applied',
                    freshKey: 'never applied',
                    other: 'colliding',
                });
            },
            {
                matchMessage: 'already has a state property',
            },
        );

        assert.isFalse('freshKey' in fixture);
        assert.deepEquals(Object.keys(fixture.instanceInputs), ['label']);
        assert.strictEquals(fixture.instanceInputs.label, 'first');
        await fixture.updateComplete;
        assert.strictEquals(fixture._internalRenderCount, startingRenderCount);
    });

    it('does not treat inherited state object keys as collisions', async () => {
        const InheritedKeyTarget = defineElement<{label: string}>()({
            tagName: 'assign-inputs-inherited-key',
            state() {
                return {
                    other: 0,
                };
            },
            render({inputs}) {
                return html`
                    <span>${inputs.label}</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${InheritedKeyTarget.assign({
                label: 'value',
            })}></${InheritedKeyTarget}>
        `);
        assert.instanceOf(fixture, InheritedKeyTarget);
        await fixture.updateComplete;

        /** `in` sees inherited element keys but only own state keys count as collisions. */
        assert.isTrue('title' in fixture.instanceState);
        assert.isFalse(Object.hasOwn(fixture.instanceState, 'title'));

        assert.doesNotThrow(() => {
            assignInputs(fixture, {
                label: 'value',
                title: 'element property',
            });
        });
        assert.strictEquals(fixture.title, 'element property');
    });

    it('does not check for state collisions on elements without state', () => {
        const plain = document.createElement('div');
        assert.doesNotThrow(() => {
            assignInputs(plain, {
                title: 'not a collision',
            });
        });
        assert.strictEquals(plain.title, 'not a collision');
    });

    it('does not wipe out untouched properties on non declarative elements', () => {
        const plain = document.createElement('div');
        assignInputs(plain, {
            first: 'one',
        });
        assignInputs(plain, {
            second: 'two',
        });

        assert.hasKey(plain, 'first');

        assert.strictEquals(plain.first, 'one');
        assert.hasKey(plain, 'second');
        assert.strictEquals(plain.second, 'two');
    });

    it('writes input keys that are not part of the element definition', async () => {
        const UnknownKeyTarget = defineElement<{label: string}>()({
            tagName: 'assign-inputs-unknown-key',
            render({inputs}) {
                return html`
                    <span>${inputs.label}</span>
                `;
            },
        });
        const fixture = await testWeb.render(html`
            <${UnknownKeyTarget.assign({
                label: 'value',
            })}></${UnknownKeyTarget}>
        `);
        assert.instanceOf(fixture, UnknownKeyTarget);

        assignInputs(fixture, {
            label: 'value',
            notInTheDefinition: 'extra',
        });

        assert.strictEquals(
            (fixture.instanceInputs as Record<string, unknown>).notInTheDefinition,
            'extra',
        );
    });

    it('preserves explicitly undefined input values as keys', async () => {
        const UndefinedInputTarget = defineElement<{label: string | undefined}>()({
            tagName: 'assign-inputs-undefined-value',
            render({inputs}) {
                return html`
                    <span>${inputs.label}</span>
                `;
            },
        });
        const fixture = await testWeb.render(html`
            <${UndefinedInputTarget.assign({
                label: 'value',
            })}></${UndefinedInputTarget}>
        `);
        assert.instanceOf(fixture, UndefinedInputTarget);

        assignInputs(fixture, {
            label: undefined,
        });

        assert.isTrue('label' in fixture.instanceInputs);
        assert.isUndefined(fixture.instanceInputs.label);
    });

    it('wipes every input when given an empty inputs object', async () => {
        const WipeAllTarget = defineElement<{label: string; count: number}>()({
            tagName: 'assign-inputs-wipe-all',
            render({inputs}) {
                return html`
                    <span>${inputs.label}${inputs.count}</span>
                `;
            },
        });
        const fixture = await testWeb.render(html`
            <${WipeAllTarget.assign({
                label: 'value',
                count: 3,
            })}></${WipeAllTarget}>
        `);
        assert.instanceOf(fixture, WipeAllTarget);

        assignInputs(fixture, {});

        /** Every input was wiped, which the declared input types do not allow. */
        const spreadInputs: Record<string, unknown> = {
            ...fixture.instanceInputs,
        };
        assert.deepEquals(spreadInputs, {
            label: undefined,
            count: undefined,
        });
    });

    it('triggers a re-render', async () => {
        const RerenderTarget = defineElement<{label: string}>()({
            tagName: 'assign-inputs-rerender',
            render({inputs}) {
                return html`
                    <span class="label">${inputs.label}</span>
                `;
            },
        });
        const fixture = await testWeb.render(html`
            <${RerenderTarget.assign({
                label: 'before',
            })}></${RerenderTarget}>
        `);
        assert.instanceOf(fixture, RerenderTarget);
        const span = fixture.shadowRoot.querySelector('.label');
        assert.instanceOf(span, HTMLSpanElement);

        assignInputs(fixture, {
            label: 'after',
        });
        await fixture.updateComplete;

        assert.strictEquals(span.textContent.trim(), 'after');
    });
});

describe(createPropertyCollisionError.name, () => {
    it('lower cases the tag name for every property key type', () => {
        const symbolKey = Symbol.for('assign-inputs-collision-symbol');

        assert.deepEquals(
            [
                'myKey',
                42,
                symbolKey,
            ].map((propertyKey) => {
                return createPropertyCollisionError({
                    propertyKey,
                    propertyType: ElementPropertyType.Input,
                    tagName: 'MY-ELEMENT',
                }).message;
            }),
            [
                "Cannot set input 'myKey' on 'my-element'. 'my-element' already has a state property with the same name.",
                "Cannot set input '42' on 'my-element'. 'my-element' already has a state property with the same name.",
                "Cannot set input 'Symbol(assign-inputs-collision-symbol)' on 'my-element'. 'my-element' already has a state property with the same name.",
            ],
        );
    });

    it('names the colliding side that was written to', () => {
        assert.deepEquals(
            [
                ElementPropertyType.Input,
                ElementPropertyType.State,
            ].map((propertyType) => {
                return createPropertyCollisionError({
                    propertyKey: 'myKey',
                    propertyType,
                    tagName: 'my-element',
                }).message;
            }),
            [
                "Cannot set input 'myKey' on 'my-element'. 'my-element' already has a state property with the same name.",
                "Cannot set state 'myKey' on 'my-element'. 'my-element' already has an input property with the same name.",
            ],
        );
    });

    it('returns an Error instance', () => {
        assert.instanceOf(
            createPropertyCollisionError({
                propertyKey: 'myKey',
                propertyType: ElementPropertyType.Input,
                tagName: 'my-element',
            }),
            Error,
        );
    });
});
