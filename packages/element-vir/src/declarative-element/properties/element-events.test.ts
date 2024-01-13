import {assert} from '@open-wc/testing';
import {assertTypeOf} from 'run-time-assertions';
import {defineElementNoInputs, html} from '../../index';
import {
    EventInitMapEventDetailExtractor,
    EventsInitMap,
    defineElementEvent,
} from './element-events';

describe('element events', () => {
    it('has proper types', () => {
        const customElement = defineElementNoInputs({
            tagName: 'test-element',
            events: {
                'test-event-name': defineElementEvent<number>(),
            },
            renderCallback({events}) {
                const testEventThing = events['test-event-name'];

                const eventInstance = new testEventThing(4);
                // @ts-expect-error
                const badEventInstance1 = new testEventThing(undefined);
                // @ts-expect-error
                const badEventInstance2 = new testEventThing('not a number input');

                return html``;
            },
        });

        assertTypeOf(
            customElement.events['test-event-name'].type,
        ).toEqualTypeOf<'test-element-test-event-name'>();

        assert.strictEqual(
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
        // @ts-expect-error
        const badEventInstance1 = new extractedEvent(undefined);
        // @ts-expect-error
        const badEventInstance2 = new extractedEvent('not a number input');
    });
});
