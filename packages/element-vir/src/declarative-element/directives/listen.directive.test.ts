import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {awaitedForEach, wait} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {defineElement, defineTypedEvent, html, renderIf} from '../../index.js';
import {
    type Directive,
    getDirectiveClass,
    type PartInfo,
    PartType,
} from '../../lit-exports/all-lit-exports.js';
import {type DefinedTypedEvent} from '../../typed-event/typed-event.js';
import {type FullElementPartInfo} from './directive-helpers.js';
import {listen} from './listen.directive.js';

type ListenDirectiveInstance = Directive & {
    lastListenerMetaData: unknown;
    reconnected: () => void;
};

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

        document.createElement('input').addEventListener('click', (event) => {
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

        /** The old event type must no longer trigger the callback. */
        fixture.instanceState.lastEventType = 'not triggered';
        button.click();
        await wait({
            milliseconds: 100,
        });
        assert.strictEquals(fixture.instanceState.lastEventType, 'not triggered');
    });

    it('attaches exactly one listener and calls only the latest callback across re-renders', async () => {
        const calls: number[] = [];
        const RerenderElement = defineElement<{version: number}>()({
            tagName: 'listen-rerender-element',
            render({inputs}) {
                return html`
                    <button
                        ${listen('click', () => {
                            calls.push(inputs.version);
                        })}
                    >
                        target
                    </button>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${RerenderElement.assign({
                version: 1,
            })}></${RerenderElement}>
        `);
        assert.instanceOf(fixture, RerenderElement);
        const button = fixture.shadowRoot.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        await [
            2,
            3,
            4,
        ].reduce(async (previous, version) => {
            await previous;
            fixture.assignInputs({
                version,
            });
            await fixture.updateComplete;
        }, Promise.resolve());

        button.click();
        await wait({
            milliseconds: 100,
        });

        assert.deepEquals(calls, [4]);
    });

    it('fires on every dispatch instead of only once', async () => {
        let count = 0;
        const fixture = await testWeb.render(html`
            <button
                ${listen('click', () => {
                    count++;
                })}
            >
                target
            </button>
        `);
        assert.instanceOf(fixture, HTMLButtonElement);

        fixture.click();
        fixture.click();
        fixture.click();

        await waitUntil.strictEquals(3, () => count);
    });

    it('listens to a typed event and its detail', async () => {
        const MyCustomEvent = defineTypedEvent<number>()('listen-directive-typed-event');
        const details: number[] = [];
        const types: string[] = [];

        const fixture = await testWeb.render(html`
            <div
                ${listen(MyCustomEvent, (event) => {
                    details.push(event.detail);
                    types.push(event.type);
                })}
            >
                <span>child</span>
            </div>
        `);
        assert.instanceOf(fixture, HTMLDivElement);
        const child = fixture.querySelector('span');
        assert.instanceOf(child, HTMLSpanElement);

        child.dispatchEvent(new MyCustomEvent(42));

        await waitUntil.deepEquals([42], () => details);
        assert.deepEquals(types, ['listen-directive-typed-event']);
    });

    it('throws for an event type that is not a string', async () => {
        const badEventType: DefinedTypedEvent<string, unknown> = {
            // @ts-expect-error: an event type that is not a string
            type: 5,
        };

        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div ${listen(badEventType, () => {})}></div>
                `);
            },
            {
                matchMessage:
                    "Cannot listen to an event with a name that is not a string. Given event name: '5'",
                matchConstructor: TypeError,
            },
        );
    });

    it('does not attach a passive listener', async () => {
        const fixture = await testWeb.render(html`
            <button
                ${listen('click', (event) => {
                    event.preventDefault();
                })}
            >
                target
            </button>
        `);
        assert.instanceOf(fixture, HTMLButtonElement);

        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });
        fixture.dispatchEvent(event);

        assert.isTrue(event.defaultPrevented);
    });

    it('listens in the bubble phase instead of the capture phase', async () => {
        const order: string[] = [];

        const fixture = await testWeb.render(html`
            <div
                ${listen('click', () => {
                    order.push('parent');
                })}
            >
                <button
                    ${listen('click', () => {
                        order.push('child');
                    })}
                >
                    target
                </button>
            </div>
        `);
        assert.instanceOf(fixture, HTMLDivElement);
        const button = fixture.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        button.click();

        await waitUntil.deepEquals(
            [
                'child',
                'parent',
            ],
            () => order,
        );
    });

    it('supports multiple listeners for the same event on the same element', async () => {
        const order: string[] = [];

        const fixture = await testWeb.render(html`
            <button
                ${listen('click', () => {
                    order.push('first');
                })}
                ${listen('click', () => {
                    order.push('second');
                })}
            >
                target
            </button>
        `);
        assert.instanceOf(fixture, HTMLButtonElement);

        fixture.click();

        await waitUntil.deepEquals(
            [
                'first',
                'second',
            ],
            () => order,
        );
    });

    it('stops listening on disconnect and listens again on reconnect', async () => {
        let count = 0;
        const DisconnectElement = defineElement()({
            tagName: 'listen-disconnect-element',
            render() {
                return html`
                    <button
                        ${listen('click', () => {
                            count++;
                        })}
                    >
                        target
                    </button>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${DisconnectElement}></${DisconnectElement}>
        `);
        assert.instanceOf(fixture, DisconnectElement);
        const parent = fixture.parentElement;
        assert.isDefined(parent);
        const button = fixture.shadowRoot.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        button.click();
        await waitUntil.strictEquals(1, () => count);

        fixture.remove();
        await wait({
            milliseconds: 100,
        });
        button.click();
        await wait({
            milliseconds: 100,
        });
        assert.strictEquals(count as number, 1);

        parent.append(fixture);
        await wait({
            milliseconds: 100,
        });
        button.click();
        await waitUntil.strictEquals(2, () => count);
    });

    it('removes the listener when a conditional template drops the subtree', async () => {
        let count = 0;
        const ConditionalElement = defineElement<{show: boolean}>()({
            tagName: 'listen-conditional-element',
            render({inputs}) {
                return html`
                    ${renderIf(
                        inputs.show,
                        html`
                            <button
                                ${listen('click', () => {
                                    count++;
                                })}
                            >
                                target
                            </button>
                        `,
                    )}
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${ConditionalElement.assign({
                show: true,
            })}></${ConditionalElement}>
        `);
        assert.instanceOf(fixture, ConditionalElement);
        const button = fixture.shadowRoot.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        button.click();
        await waitUntil.strictEquals(1, () => count);

        fixture.assignInputs({
            show: false,
        });
        await fixture.updateComplete;
        assert.isNull(fixture.shadowRoot.querySelector('button'));

        button.click();
        await wait({
            milliseconds: 100,
        });
        assert.strictEquals(count as number, 1);
    });

    it('fires exactly once per event after repeated disconnect and reconnect cycles', async () => {
        let count = 0;
        const CycleElement = defineElement()({
            tagName: 'listen-cycle-element',
            render() {
                return html`
                    <button
                        ${listen('click', () => {
                            count++;
                        })}
                    >
                        target
                    </button>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${CycleElement}></${CycleElement}>
        `);
        assert.instanceOf(fixture, CycleElement);
        const parent = assertWrap.isDefined(fixture.parentElement);
        const button = fixture.shadowRoot.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        await awaitedForEach(
            [
                1,
                2,
                3,
            ],
            async () => {
                fixture.remove();
                await wait({
                    milliseconds: 10,
                });
                parent.append(fixture);
                await wait({
                    milliseconds: 10,
                });
            },
        );

        button.click();
        await waitUntil.strictEquals(1, () => count);
        await wait({
            milliseconds: 100,
        });
        assert.strictEquals(count as number, 1);
    });

    it('does nothing when reconnected before a listener was registered', () => {
        const element = document.createElement('button');
        const addedEventTypes: string[] = [];
        element.addEventListener = (eventType: string) => {
            addedEventTypes.push(eventType);
        };

        const partInfo = {
            type: PartType.ELEMENT,
            element,
            options: {
                host: element,
                renderBefore: element,
                isConnected: true,
            },
        } satisfies FullElementPartInfo as PartInfo;
        const DirectiveClass = assertWrap.isDefined(getDirectiveClass(listen('click', () => {})));
        const instance = new DirectiveClass(
            partInfo,
        ) satisfies Directive as ListenDirectiveInstance;

        assert.isUndefined(instance.lastListenerMetaData);
        instance.reconnected();
        assert.deepEquals(addedEventTypes, []);
    });

    it('swaps the event type and callback while disconnected without duplicating listeners', async () => {
        const calls: string[] = [];
        const SwapElement = defineElement<{eventType: 'click' | 'mouseover'; version: number}>()({
            tagName: 'listen-swap-element',
            render({inputs}) {
                return html`
                    <button
                        ${listen(inputs.eventType, (event) => {
                            calls.push(`${event.type}-${inputs.version}`);
                        })}
                    >
                        target
                    </button>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${SwapElement.assign({
                eventType: 'click',
                version: 1,
            })}></${SwapElement}>
        `);
        assert.instanceOf(fixture, SwapElement);
        const parent = assertWrap.isDefined(fixture.parentElement);
        const button = fixture.shadowRoot.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        button.click();
        await waitUntil.deepEquals(['click-1'], () => calls);

        fixture.remove();
        fixture.assignInputs({
            eventType: 'mouseover',
            version: 2,
        });
        await fixture.updateComplete;
        button.click();
        await wait({
            milliseconds: 100,
        });
        assert.deepEquals(calls, ['click-1']);

        /** An event type swap while disconnected must not attach the new listener yet. */
        button.dispatchEvent(
            new MouseEvent('mouseover', {
                bubbles: true,
            }),
        );
        await wait({
            milliseconds: 100,
        });
        assert.deepEquals(calls, ['click-1']);

        parent.append(fixture);
        await wait({
            milliseconds: 10,
        });
        button.dispatchEvent(
            new MouseEvent('mouseover', {
                bubbles: true,
            }),
        );
        await waitUntil.deepEquals(
            [
                'click-1',
                'mouseover-2',
            ],
            () => calls,
        );

        button.click();
        await wait({
            milliseconds: 100,
        });
        assert.deepEquals(calls, [
            'click-1',
            'mouseover-2',
        ]);
    });

    it('preserves bubbling, event canceling, and repeat firing across a reconnect', async () => {
        const order: string[] = [];
        const NestedElement = defineElement()({
            tagName: 'listen-nested-reconnect-element',
            render() {
                return html`
                    <div
                        ${listen('click', () => {
                            order.push('parent');
                        })}
                    >
                        <button
                            ${listen('click', (event) => {
                                order.push('child');
                                event.preventDefault();
                            })}
                        >
                            target
                        </button>
                    </div>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${NestedElement}></${NestedElement}>
        `);
        assert.instanceOf(fixture, NestedElement);
        const parent = assertWrap.isDefined(fixture.parentElement);
        const button = fixture.shadowRoot.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);

        fixture.remove();
        await wait({
            milliseconds: 10,
        });
        parent.append(fixture);
        await wait({
            milliseconds: 10,
        });

        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        });
        button.dispatchEvent(event);
        await waitUntil.deepEquals(
            [
                'child',
                'parent',
            ],
            () => order,
        );
        assert.isTrue(event.defaultPrevented);

        button.click();
        await waitUntil.deepEquals(
            [
                'child',
                'parent',
                'child',
                'parent',
            ],
            () => order,
        );
    });

    it('reattaches a typed event listener on reconnect', async () => {
        const MyCustomEvent = defineTypedEvent<number>()('listen-reconnect-typed-event');
        const details: number[] = [];
        const TypedEventElement = defineElement()({
            tagName: 'listen-typed-event-reconnect-element',
            render() {
                return html`
                    <div
                        ${listen(MyCustomEvent, (event) => {
                            details.push(event.detail);
                        })}
                    >
                        <span>child</span>
                    </div>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <${TypedEventElement}></${TypedEventElement}>
        `);
        assert.instanceOf(fixture, TypedEventElement);
        const parent = assertWrap.isDefined(fixture.parentElement);
        const child = fixture.shadowRoot.querySelector('span');
        assert.instanceOf(child, HTMLSpanElement);

        child.dispatchEvent(new MyCustomEvent(1));
        await waitUntil.deepEquals([1], () => details);

        fixture.remove();
        await wait({
            milliseconds: 10,
        });
        child.dispatchEvent(new MyCustomEvent(2));
        await wait({
            milliseconds: 100,
        });
        assert.deepEquals(details, [1]);

        parent.append(fixture);
        await wait({
            milliseconds: 10,
        });
        child.dispatchEvent(new MyCustomEvent(3));
        await waitUntil.deepEquals(
            [
                1,
                3,
            ],
            () => details,
        );
    });

    it('rejects being attached anywhere but directly to an element', async () => {
        await assert.throws(
            async () => {
                await testWeb.render(html`
                    <div>${listen('click', () => {})}</div>
                `);
            },
            {
                matchMessage: 'listen directive can only be attached directly to an element',
            },
        );
    });
});
