import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {defineElement, defineTypedEvent, html} from '../../index.js';
import {listen} from './listen.directive.js';

describe(listen.name, () => {
    it('has proper types', () => {
        const MyCustomEvent = defineTypedEvent<number>()('my-custom-event');
        listen(MyCustomEvent, (event) => {
            assert.tsType(event.detail).equals<number>();
            assert.tsType(event.detail).notMatches<string>();
        });

        listen('click', (event) => {
            assert.tsType(event).equals<PointerEvent>();
        });

        (
            ({
                addEventListener() {},
            }) as unknown as HTMLInputElement
        ).addEventListener('click', (event) => {
            assert.tsType(event).equals<PointerEvent>();
        });
    });

    it('removes the previous listener when the event type changes between renders', async () => {
        const SwitchEventElement = defineElement<{eventType: 'click' | 'mouseover'}>()({
            tagName: 'listen-switch-event-element',
            state() {
                return {
                    lastEventType: '' as string,
                };
            },
            render({inputs, state, updateState}) {
                return html`
                    <button
                        ${listen(inputs.eventType, (event) => {
                            updateState({
                                lastEventType: event.type,
                            });
                        })}
                    >
                        target
                    </button>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${SwitchEventElement.assign({
                eventType: 'click',
            })}></${SwitchEventElement}>
        `);
        assert.instanceOf(fixture, SwitchEventElement);
        const button = fixture.shadowRoot.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        button.click();
        await waitUntil.strictEquals('click', () => fixture.instanceState.lastEventType);

        /** Switch event types: the click listener must be removed and a mouseover listener added. */
        fixture.assignInputs({
            eventType: 'mouseover',
        });
        await fixture.updateComplete;
        button.dispatchEvent(
            new MouseEvent('mouseover', {
                bubbles: true,
            }),
        );
        await waitUntil.strictEquals('mouseover', () => fixture.instanceState.lastEventType);
    });
});
