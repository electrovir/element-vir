import {defineElementNoInputs, html} from '..';
import {
    EventInitMapEventDetailExtractor,
    EventsInitMap,
    defineElementEvent,
} from './properties/element-events';

function main() {
    const customElement = defineElementNoInputs({
        tagName: 'test-element',
        events: {
            testEventName: defineElementEvent<number>(),
        },
        renderCallback: ({events}) => {
            const testEventThing = events.testEventName;

            const eventInstance = new testEventThing(4);
            // @ts-expect-error
            const badEventInstance1 = new testEventThing(undefined);
            // @ts-expect-error
            const badEventInstance2 = new testEventThing('not a number input');

            return html``;
        },
    });

    function createEventsInitMap<Input extends EventsInitMap>(input: Input): Input {
        return input;
    }

    const eventInit = createEventsInitMap({
        testEventName: defineElementEvent<number>(),
    });

    const myNumber: EventInitMapEventDetailExtractor<'testEventName', typeof eventInit> = 4;

    const thing = eventInit.testEventName('my-event-type');

    const extractedEvent = customElement.events.testEventName;

    const eventInstance = new extractedEvent(4);
    // @ts-expect-error
    const badEventInstance1 = new extractedEvent(undefined);
    // @ts-expect-error
    const badEventInstance2 = new extractedEvent('not a number input');
}
