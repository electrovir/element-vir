/* eslint-disable @typescript-eslint/no-deprecated */

import {assert, waitUntil} from '@augment-vir/assert';
import {type PartialWithUndefined} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {assign} from './assign.directive.js';

describe(assign.name, () => {
    const SampleElementDefinition = defineElement<{stuff: string}>()({
        tagName: 'sample-element',
        render() {
            return '';
        },
    });

    it('has proper types for element definitions', () => {
        assign(SampleElementDefinition, {
            stuff: 'hi',
        });
        assign(SampleElementDefinition, {
            // @ts-expect-error: blocks invalid property value types
            stuff: 5,
        });
        assign(
            SampleElementDefinition,
            // @ts-expect-error: blocks invalid inputs
            42,
        );
    });

    it('has proper types for bare assigns', () => {
        assign({
            hi: 'there',
        });
        // @ts-expect-error: blocks invalid inputs
        assign(57);
    });

    it('has typescript error if a bare HTMLElement input', () => {
        // @ts-expect-error: cannot a bare html input
        assign(SampleElementDefinition);
    });

    it('assigns inputs with the element definition form', async () => {
        const AssignedElement = defineElement<{stuff?: string | undefined}>()({
            tagName: 'assign-directive-definition-form',
            render({inputs}) {
                return html`
                    <span>${inputs.stuff}</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${AssignedElement}
                ${assign(AssignedElement, {
                    stuff: 'from directive',
                })}
            ></${AssignedElement}>
        `);
        assert.instanceOf(fixture, AssignedElement);

        assert.strictEquals(fixture.instanceInputs.stuff, 'from directive');
        await waitUntil.strictEquals(
            'from directive',
            () => fixture.shadowRoot.querySelector('span')?.innerText,
        );
    });

    it('assigns inputs with the bare inputs form', async () => {
        const AssignedElement = defineElement<{stuff?: string | undefined}>()({
            tagName: 'assign-directive-bare-form',
            render({inputs}) {
                return html`
                    <span>${inputs.stuff}</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${AssignedElement}
                ${assign({
                    stuff: 'bare',
                })}
            ></${AssignedElement}>
        `);
        assert.instanceOf(fixture, AssignedElement);

        assert.strictEquals(fixture.instanceInputs.stuff, 'bare');
    });

    it('ignores the element definition argument at runtime', async () => {
        const AssignedElement = defineElement<{stuff?: string | undefined}>()({
            tagName: 'assign-directive-ignored-definition',
            render({inputs}) {
                return html`
                    <span>${inputs.stuff}</span>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${AssignedElement}
                ${assign(SampleElementDefinition, {
                    stuff: 'mismatched definition',
                })}
            ></${AssignedElement}>
        `);
        assert.instanceOf(fixture, AssignedElement);

        assert.strictEquals(fixture.instanceInputs.stuff, 'mismatched definition');
    });

    it('sets raw properties on non-declarative elements', async () => {
        const fixture = await testWeb.render(html`
            <div
                ${assign({
                    myRawProperty: 42,
                })}
            ></div>
        `);
        assert.instanceOf(fixture, HTMLDivElement);

        assert.hasKey(fixture, 'myRawProperty');

        assert.strictEquals(fixture.myRawProperty, 42);
        assert.isFalse(fixture.hasAttribute('myRawProperty'));
    });

    it('updates and wipes inputs across renders', async () => {
        const AssignedElement = defineElement<
            PartialWithUndefined<{first: string; second: string}>
        >()({
            tagName: 'assign-directive-update-target',
            render({inputs}) {
                return html`
                    <span>${inputs.first} ${inputs.second}</span>
                `;
            },
        });
        const WrapperElement = defineElement<{includeSecond: boolean}>()({
            tagName: 'assign-directive-update-wrapper',
            render({inputs}) {
                return html`
                    <${AssignedElement}
                        ${inputs.includeSecond
                            ? assign({
                                  first: 'first value',
                                  second: 'second value',
                              })
                            : assign({
                                  first: 'updated first',
                              })}
                    ></${AssignedElement}>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${WrapperElement.assign({
                includeSecond: true,
            })}></${WrapperElement}>
        `);
        assert.instanceOf(fixture, WrapperElement);
        const inner = fixture.shadowRoot.querySelector(AssignedElement.tagName);
        assert.instanceOf(inner, AssignedElement);
        assert.deepEquals(
            {
                ...inner.instanceInputs,
            },
            {
                first: 'first value',
                second: 'second value',
            },
        );

        fixture.assignInputs({
            includeSecond: false,
        });

        await waitUntil.deepEquals(
            {
                first: 'updated first',
                second: undefined,
            },
            () => {
                return {
                    ...inner.instanceInputs,
                };
            },
        );
    });

    it('rejects being attached anywhere but directly to an element', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div>
                        ${assign({
                            stuff: 'nope',
                        })}
                    </div>
                `);
            },
            {
                matchMessage: 'assign directive can only be attached directly to an element',
            },
        );
    });

    it('reports state name collisions', async () => {
        const CollisionElement = defineElement()({
            tagName: 'assign-directive-collision-element',
            state() {
                return {
                    collides: 'state value',
                };
            },
            render() {
                return '';
            },
        });

        const fixture = await testWeb.render(html`
            <${CollisionElement}
                ${assign({
                    collides: 'input value',
                })}
            ></${CollisionElement}>
        `);
        assert.instanceOf(fixture, CollisionElement);
        await fixture.updateComplete;

        assert.strictEquals(
            fixture._lastRenderError?.message,
            "Failed to render assign-directive-collision-element: Cannot set state 'collides' on 'assign-directive-collision-element'. 'assign-directive-collision-element' already has an input property with the same name.",
        );
    });
});
