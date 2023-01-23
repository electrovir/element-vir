import {assertTypeOf} from '@augment-vir/browser-testing';
import {assert} from '@open-wc/testing';
import {Promisable} from 'type-fest';
import {asyncState, defineElementEvent, defineElementNoInputs, html} from '..';
import {TypedEvent} from '../typed-event/typed-event';
import {AsyncStateSetValue} from './properties/async-state';
import {createEventDescriptorMap} from './properties/element-events';
import {createRenderParams} from './render-callback';

describe('RenderParams', () => {
    it('should produce proper types', () => {
        defineElementNoInputs({
            tagName: 'test-element',
            stateInit: {
                myAsyncState: asyncState<number>(),
            },
            events: {
                testEventName: defineElementEvent<number>(),
                testEventName2: defineElementEvent<number>(),
            },
            renderCallback: ({events, state, updateState}) => {
                const testEventThing = events.testEventName;

                assertTypeOf(state.myAsyncState).toEqualTypeOf<Promisable<number> | Error>();

                assertTypeOf<
                    NonNullable<Parameters<typeof updateState>[0]['myAsyncState']>
                >().toEqualTypeOf<AsyncStateSetValue<number>>();
                updateState({
                    myAsyncState: {
                        createPromise: () => Promise.resolve(5),
                        trigger: 'hi',
                    },
                });

                new testEventThing(4);
                // @ts-expect-error
                new testEventThing(undefined);
                // @ts-expect-error
                new testEventThing('not a number input');

                return html``;
            },
        });
    });

    it('should have proper types for an empty element', () => {
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
        assert.isEmpty(Object.keys(renderParams.state));
    });
});
