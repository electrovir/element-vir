import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {assignInputs} from './assign-inputs.js';

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
        assert.strictEquals((plain as unknown as Record<string, unknown>).customField, 'value');
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
});
