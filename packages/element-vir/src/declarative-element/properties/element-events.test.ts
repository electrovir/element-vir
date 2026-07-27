import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {defineElement} from 'element-vir';
import {html, listen} from '../../index.js';
import {
    type EventInitMapEventDetailExtractor,
    type EventsInitMap,
    createEventDescriptorMap,
    defineElementEvent,
} from './element-events.js';

describe('element events', () => {
    it('has proper types', () => {
        const customElement = defineElement()({
            tagName: 'test-element',
            events: {
                'test-event-name': defineElementEvent<number>(),
            },
            render({events}) {
                const testEventThing = events['test-event-name'];

                const eventInstance = new testEventThing(4);
                // @ts-expect-error: requires a number input
                const badEventInstance1 = new testEventThing(undefined);
                // @ts-expect-error: requires a number input
                const badEventInstance2 = new testEventThing('not a number input');

                return html``;
            },
        });

        assert
            .tsType(customElement.events['test-event-name'].type)
            .equals<'test-element-test-event-name'>();

        assert.strictEquals(
            customElement.events['test-event-name'].type,
            'test-element-test-event-name',
        );

        function createEventsInitMap<Input extends EventsInitMap>(input: Input): Input {
            return input;
        }

        const eventInit = createEventsInitMap({
            'test-event-name': defineElementEvent<number>(),
        });

        const myNumber: EventInitMapEventDetailExtractor<'test-event-name', typeof eventInit> = 4;

        const thing = eventInit['test-event-name']('my-event-type');

        const extractedEvent = customElement.events['test-event-name'];

        const eventInstance = new extractedEvent(4);
        // @ts-expect-error: requires a number input
        const badEventInstance1 = new extractedEvent(undefined);
        // @ts-expect-error: requires a number input
        const badEventInstance2 = new extractedEvent('not a number input');
    });
});

describe(defineElementEvent.name, () => {
    it('uses the given event type string for the created event class', () => {
        const CreatedEvent = defineElementEvent<string>()('some-event-type');

        assert.strictEquals(CreatedEvent.type, 'some-event-type');
        assert.strictEquals(new CreatedEvent('detail').type, 'some-event-type');
    });

    it('creates a distinct event class per call', () => {
        const defineEvent = defineElementEvent<string>();

        assert.notStrictEquals(
            defineEvent('same-event-type') as object,
            defineEvent('same-event-type') as object,
        );
    });

    it('creates events that bubble, are composed, and carry the given detail', () => {
        const DetailEvent = defineElementEvent<{count: number}>()('detail-event-type');
        const detail = {
            count: 4,
        };
        const event = new DetailEvent(detail);

        assert.isTrue(event.bubbles);
        assert.isTrue(event.composed);
        assert.instanceOf(event, CustomEvent);
        /** The detail is passed through by reference, not copied. */
        assert.strictEquals(event.detail, detail);
    });
});

describe(createEventDescriptorMap.name, () => {
    it('joins the tag name and each event key with a dash', () => {
        const eventsMap = createEventDescriptorMap('my-element', {
            'first-event': defineElementEvent<number>(),
            'second-event': defineElementEvent<string>(),
        });

        assert.strictEquals(eventsMap['first-event'].type, 'my-element-first-event');
        assert.strictEquals(eventsMap['second-event'].type, 'my-element-second-event');
    });

    it('preserves event key order', () => {
        const eventsMap = createEventDescriptorMap('my-element', {
            zebra: defineElementEvent<number>(),
            apple: defineElementEvent<number>(),
        });

        assert.deepEquals(Object.keys(eventsMap), [
            'zebra',
            'apple',
        ]);
    });

    it('keeps non-kebab-case event keys verbatim', () => {
        const eventsMap = createEventDescriptorMap('my-element', {
            camelCaseEvent: defineElementEvent<number>(),
        });

        assert.strictEquals(eventsMap.camelCaseEvent.type, 'my-element-camelCaseEvent');
    });

    it('returns an empty map when there are no events', () => {
        assert.isEmpty(Object.keys(createEventDescriptorMap('my-element', undefined)));
        assert.isEmpty(Object.keys(createEventDescriptorMap('my-element', {})));
    });

    it('does not share references between calls', () => {
        const eventsInit = {
            'shared-event': defineElementEvent<number>(),
        };
        const first = createEventDescriptorMap('my-element', eventsInit);
        const second = createEventDescriptorMap('my-element', eventsInit);

        assert.notStrictEquals(first as object, second as object);
        assert.notStrictEquals(first['shared-event'] as object, second['shared-event'] as object);
        assert.strictEquals(first['shared-event'].type, second['shared-event'].type);
    });

    it('throws on an empty string event key', () => {
        assert.throws(
            () =>
                createEventDescriptorMap('my-element', {
                    '': defineElementEvent<number>(),
                }),
            {
                matchMessage: 'Got empty string for events key.',
            },
        );
    });

    it('accepts a numeric event key', () => {
        const eventsMap = createEventDescriptorMap('my-element', {
            42: defineElementEvent<number>(),
        });

        /** Numeric keys produce a `never` type name statically but still work at run time. */
        assert.strictEquals(eventsMap[42].type as string, 'my-element-42');
        assert.strictEquals(new eventsMap[42](5).type as string, 'my-element-42');
    });

    it('ignores symbol event keys', () => {
        const symbolKey = Symbol.for('element-events-symbol-key');
        const eventsMap = createEventDescriptorMap('my-element', {
            [symbolKey]: defineElementEvent<number>(),
            'real-event': defineElementEvent<number>(),
        });

        assert.deepEquals(Object.keys(eventsMap), ['real-event']);
        assert.isFalse(Reflect.has(eventsMap, symbolKey));
    });

    it('throws for an empty string event key that comes after valid keys', () => {
        assert.throws(
            () =>
                createEventDescriptorMap('my-element', {
                    'valid-event': defineElementEvent<number>(),
                    '': defineElementEvent<number>(),
                }),
            {
                matchMessage: 'Got empty string for events key.',
            },
        );
    });

    it('creates event classes that construct events with the joined type', () => {
        const eventsMap = createEventDescriptorMap('my-element', {
            'my-event': defineElementEvent<number>(),
        });
        const event = new eventsMap['my-event'](5);

        assert.strictEquals(event.type, 'my-element-my-event');
        assert.strictEquals(event.detail, 5);
        assert.isTrue(event.bubbles);
        assert.isTrue(event.composed);
    });
});

describe('element event dispatching', () => {
    it('escapes the shadow root and bubbles up to ancestors', async () => {
        const DispatchingElement = defineElement()({
            tagName: 'element-events-dispatching',
            events: {
                'my-event': defineElementEvent<number>(),
            },
            render({events, dispatch}) {
                return html`
                    <button
                        ${listen('click', () => {
                            dispatch(new events['my-event'](42));
                        })}
                    >
                        dispatch
                    </button>
                `;
            },
        });

        const fixture = await testWeb.render(html`
            <div>
                <${DispatchingElement}></${DispatchingElement}>
            </div>
        `);
        assert.instanceOf(fixture, HTMLDivElement);
        const element = fixture.querySelector('element-events-dispatching');
        assert.instanceOf(element, DispatchingElement);

        const receivedDetails: number[] = [];
        const receivedTypes: string[] = [];
        fixture.addEventListener(DispatchingElement.events['my-event'].type, (event) => {
            assert.instanceOf(event, CustomEvent);
            receivedDetails.push(event.detail as number);
            receivedTypes.push(event.type);
        });

        const button = element.shadowRoot.querySelector('button');
        assert.instanceOf(button, HTMLButtonElement);
        button.click();

        assert.deepEquals(receivedDetails, [42]);
        assert.deepEquals(receivedTypes, ['element-events-dispatching-my-event']);
    });

    it('reports the dispatch return value from the render params', async () => {
        const dispatchResults: boolean[] = [];
        const DispatchResultElement = defineElement()({
            tagName: 'element-events-dispatch-result',
            events: {
                'my-event': defineElementEvent<undefined>(),
            },
            init({events, dispatch}) {
                dispatchResults.push(dispatch(new events['my-event'](undefined)));
            },
            render() {
                return 'hi';
            },
        });

        const fixture = await testWeb.render(html`
            <${DispatchResultElement}></${DispatchResultElement}>
        `);
        assert.instanceOf(fixture, DispatchResultElement);

        assert.deepEquals(dispatchResults, [true]);
    });
});
