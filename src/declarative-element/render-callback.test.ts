import {assertTypeOf} from '@augment-vir/browser-testing';
import {assert} from '@open-wc/testing';
import {
    asyncState,
    AsyncStateSetValue,
    createEventDescriptorMap,
    createRenderParams,
    defineElementEvent,
    defineElementNoInputs,
    html,
    RenderCallback,
    TypedEvent,
} from '..';

describe('RenderParams', () => {
    it('should produce proper types', () => {
        defineElementNoInputs({
            tagName: 'test-element',
            stateInit: {
                myAsyncState: asyncState<number>(),
                myAsyncState2: asyncState(Promise.resolve(3)),
                myAsyncState3: asyncState(3),
            },
            events: {
                testEventName: defineElementEvent<number>(),
                testEventName2: defineElementEvent<number>(),
            },
            renderCallback: ({events, state, updateState}) => {
                const testEventThing = events.testEventName;

                assertTypeOf(state.myAsyncState).toEqualTypeOf<Promise<number> | number | Error>();
                assertTypeOf(state.myAsyncState2).toEqualTypeOf<Promise<number> | number | Error>();
                assertTypeOf(state.myAsyncState3).toEqualTypeOf<Promise<number> | number | Error>();

                assertTypeOf<
                    NonNullable<Parameters<typeof updateState>[0]['myAsyncState']>
                >().toEqualTypeOf<AsyncStateSetValue<number>>();

                updateState({
                    myAsyncState: {
                        createPromise: () => Promise.resolve(5),
                        trigger: 'hi',
                    },
                });

                updateState({
                    myAsyncState: {
                        createPromise: () => Promise.resolve(5),
                        // allow undefined as a property value
                        trigger: {derp: undefined},
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
            // there are no async props in this element
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