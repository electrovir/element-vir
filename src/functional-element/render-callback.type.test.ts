import {defineElementEvent, defineFunctionalElement, html} from '..';
import {TypedEvent} from '../typed-event/typed-event';
import {createEventDescriptorMap} from './element-events';
import {createRenderParams} from './render-callback';

function main() {
    const customElement = defineFunctionalElement({
        tagName: 'test-element',
        events: {
            testEventName: defineElementEvent<number>(),
            testEventName2: defineElementEvent<number>(),
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

    const renderParams = createRenderParams(
        // {} as FunctionalElementInstanceFromInit<{}>,
        {} as any,
        createEventDescriptorMap({
            testEventName: defineElementEvent<number>(),
        }),
    );

    const myEvent = renderParams.events.testEventName;
    const myEventInstance = new myEvent(4);
    // @ts-expect-error
    const myBadEventInstance1 = new myEvent('no number here');

    renderParams.dispatch(myEventInstance);
    renderParams.dispatch(new TypedEvent(renderParams.events.testEventName, 2));
    renderParams.genericDispatch(new Event('generic event type'));
}
