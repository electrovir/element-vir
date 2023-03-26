import {assertTypeOf} from '@augment-vir/browser-testing';
import {assert} from '@open-wc/testing';
import {
    createEventDescriptorMap,
    createRenderParams,
    defineElementEvent,
    defineElementNoInputs,
    html,
    TypedEvent,
} from '..';
import {RenderCallback} from './render-callback';

describe('RenderParams', () => {
    it('should produce proper types', () => {
        defineElementNoInputs({
            tagName: 'test-element',
            stateInit: {
                myNumber: 5,
            },
            events: {
                testEventName: defineElementEvent<number>(),
                testEventName2: defineElementEvent<number>(),
            },
            renderCallback: ({events, state, updateState}) => {
                const testEventThing = events.testEventName;

                assertTypeOf(state.myNumber).toEqualTypeOf<number>();

                assertTypeOf<
                    NonNullable<Parameters<typeof updateState>[0]['myNumber']>
                >().toEqualTypeOf<number>();

                updateState({
                    myNumber: 6,
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
        function doNotExecuteThis() {
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
            // there are no props in this element
            assert.isEmpty(Object.keys(renderParams.state));
        }
    });
});

describe('RenderCallback', () => {
    it('requires a return of something', () => {
        const renderSomething: RenderCallback = () => {
            return undefined;
        };
        const renderSomething2: RenderCallback = () => {
            return;
        };
    });
});
