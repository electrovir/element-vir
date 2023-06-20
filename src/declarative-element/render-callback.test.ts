import {assertTypeOf} from '@augment-vir/browser-testing';
import {assert} from '@open-wc/testing';
import {
    AnyObservablePropertyType,
    AsyncProp,
    AsyncPropSetValue,
    ObservablePropertyHandlerInstance,
    RenderCallback,
    TypedEvent,
    UpdateStateCallback,
    asyncProp,
    createEventDescriptorMap,
    createObservableProperty,
    createRenderParams,
    defineElementEvent,
    defineElementNoInputs,
    html,
} from '..';

describe('RenderParams', () => {
    it('should produce proper types', () => {
        type MyAsyncPropTriggerType = {input: string | undefined};

        defineElementNoInputs({
            tagName: 'test-element',
            stateInitStatic: {
                myAsyncProp: asyncProp({
                    async updateCallback({input}: MyAsyncPropTriggerType) {
                        return 5;
                    },
                }),
                myAsyncProp2: asyncProp({defaultValue: Promise.resolve(3)}),
                myAsyncProp3: asyncProp({defaultValue: 3}),
                myNumber: undefined as
                    | undefined
                    | ObservablePropertyHandlerInstance<number, number>,
            },
            events: {
                testEventName: defineElementEvent<number>(),
                testEventName2: defineElementEvent<number>(),
            },
            renderCallback({events, state, updateState}) {
                if (state.myNumber == undefined) {
                    updateState({myNumber: createObservableProperty(6)});
                }

                const testEventThing = events.testEventName;

                assertTypeOf(state.myAsyncProp).toEqualTypeOf<Promise<number> | number | Error>();
                assertTypeOf(state.myAsyncProp2).toEqualTypeOf<Promise<number> | number | Error>();
                assertTypeOf(state.myAsyncProp3).toEqualTypeOf<Promise<number> | number | Error>();

                assertTypeOf<
                    Exclude<Parameters<typeof updateState>[0]['myAsyncProp'], undefined>
                >().toEqualTypeOf<
                    | AsyncPropSetValue<number, MyAsyncPropTriggerType>
                    | AnyObservablePropertyType<
                          AsyncPropSetValue<number, MyAsyncPropTriggerType>,
                          AsyncProp<number>
                      >
                >();

                updateState({
                    myAsyncProp: {
                        serializableTrigger: {input: 'hi'},
                    },
                });

                updateState({
                    myAsyncProp: asyncProp({defaultValue: 5}),
                });

                updateState({
                    myAsyncProp: {
                        // allow undefined as a property value
                        serializableTrigger: {input: undefined},
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

describe('UpdateStateCallback', () => {
    it("can be used for an element's updateState method", () => {
        const stateInit = {
            doThing: asyncProp({defaultValue: 'string input'}),
        };

        const customElement = defineElementNoInputs({
            tagName: 'custom-element-for-testing-update-state-callback-type',
            stateInitStatic: stateInit,
            renderCallback({updateState}) {
                acceptUpdateStateFromElementDefinition(updateState);
                acceptUpdateStateFromStateInitType(updateState);

                return 'hi';
            },
        });

        function acceptUpdateStateFromElementDefinition(
            updateState: (typeof customElement)['updateStateType'],
        ) {
            updateState({
                doThing: {
                    resolvedValue: 'yo',
                },
            });
        }

        function acceptUpdateStateFromStateInitType(
            updateState: UpdateStateCallback<typeof stateInit>,
        ) {
            updateState({
                doThing: {
                    resolvedValue: 'yo',
                },
            });
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
