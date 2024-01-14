import {clickElement, typeString} from '@augment-vir/browser-testing';
import {randomString} from '@augment-vir/common';
import {assert, fixture as renderFixture} from '@open-wc/testing';
import {html, listen} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {ReadonlyDeep} from 'type-fest';
import {ViraInput} from './vira-input.element';

describe(ViraInput.tagName, () => {
    async function renderTestViraInput(initValue: string = '') {
        const valueChangeEvents: InstanceType<typeof ViraInput.events.valueChange>[] = [];

        const fixture = await renderFixture(html`
            <${ViraInput.assign({
                value: initValue,
            })}
                ${listen(ViraInput.events.valueChange, (event) => {
                    valueChangeEvents.push(event);
                })}
            ></${ViraInput}>
        `);

        assertInstanceOf(fixture, ViraInput);

        return {
            instance: fixture,
            events: valueChangeEvents as ReadonlyDeep<typeof valueChangeEvents>,
        };
    }

    it('accepts user input', async () => {
        const {instance, events} = await renderTestViraInput();

        const textToType = randomString();

        await clickElement(instance);
        assert.strictEqual(document.activeElement, instance);

        await typeString(textToType);

        const lastEvent = events.slice(-1)[0];

        assert.strictEqual(lastEvent?.detail, textToType);
    });
});
