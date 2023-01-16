import {assertTypeOf} from '@augment-vir/browser-testing';
import {defineElementEvent, defineElementNoInputs, html} from '..';
import {TypedEvent} from '../typed-event/typed-event';
import {createEventDescriptorMap} from './properties/element-events';
import {createRenderParams} from './render-callback';

describe('RenderParams', () => {
    it('should produce proper types', () => {
        defineElementNoInputs({
            tagName: 'test-element',
            events: {
                testEventName: defineElementEvent<number>(),
                testEventName2: defineElementEvent<number>(),
            },
            renderCallback: ({events}) => {
                const testEventThing = events.testEventName;

                new testEventThing(4);
                // @ts-expect-error
                new testEventThing(undefined);
                // @ts-expect-error
                new testEventThing('not a number input');

                return html``;
            },
        });

        const renderParams = createRenderParams(
            {} as any,
            createEventDescriptorMap({
                testEventName: defineElementEvent<number>(),
            }),
        );

        const myEvent = renderParams.events.testEventName;
        const myEventInstance = new myEvent(4);
        // @ts-expect-error
        new myEvent('no number here');

        renderParams.dispatch(myEventInstance);
        renderParams.dispatch(new TypedEvent(renderParams.events.testEventName, 2));
        renderParams.dispatch(new Event('generic event type'));
        // there are no async props in this element
        assertTypeOf<Parameters<typeof renderParams.ensureAsyncProp>>().toEqualTypeOf<[{}]>();
    });
});
