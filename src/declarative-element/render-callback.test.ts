import {assert} from '@open-wc/testing';
import {assertTypeOf} from 'run-time-assertions';
import {
    AsyncObservableProp,
    ObservableProp,
    RenderCallback,
    TypedEvent,
    asyncProp,
    createEventDescriptorMap,
    createRenderParams,
    createSetterObservableProp,
    defineElementEvent,
    defineElementNoInputs,
    html,
} from '../index';

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
                myNumber: undefined as undefined | ObservableProp<number>,
            },
            events: {
                testEventName: defineElementEvent<number>(),
                testEventName2: defineElementEvent<number>(),
            },
            renderCallback({events, state, updateState}) {
                if (state.myNumber == undefined) {
                    updateState({myNumber: createSetterObservableProp(6)});
                }

                const testEventThing = events.testEventName;

                assertTypeOf(state.myAsyncProp.value).toEqualTypeOf<
                    Promise<number> | number | Error
                >();
                assertTypeOf(state.myAsyncProp2.value).toEqualTypeOf<
                    Promise<number> | number | Error
                >();
                assertTypeOf(state.myAsyncProp3.value).toEqualTypeOf<
                    Promise<number> | number | Error
                >();

                assertTypeOf<
                    Exclude<Parameters<typeof updateState>[0]['myAsyncProp'], undefined>
                >().toEqualTypeOf<AsyncObservableProp<number, MyAsyncPropTriggerType, undefined>>();

                state.myAsyncProp.updateTrigger({input: 'hi'});

                updateState({
                    myAsyncProp: asyncProp({defaultValue: 5}),
                });

                state.myAsyncProp.updateTrigger({input: undefined});

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
                createEventDescriptorMap('my-element', {
                    testEventName: defineElementEvent<number>(),
                }),
            );

            const myEvent = renderParams.events.testEventName;
            const myEventInstance = new myEvent(4);
            // @ts-expect-error
            new myEvent('no number here');

            assert.strictEqual(myEventInstance.type, 'my-element-testEventName');

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
            renderCallback({state}) {
                acceptStateFromElementDefinition(state);

                return 'hi';
            },
        });

        function acceptStateFromElementDefinition(state: (typeof customElement)['stateType']) {
            state.doThing.setResolvedValue('yo');
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
