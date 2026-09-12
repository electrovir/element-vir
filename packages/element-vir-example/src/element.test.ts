import {assert} from '@augment-vir/assert';
import {randomString} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {
    type DeclarativeElement,
    type DeclarativeElementDefinition,
    type EventDetail,
    type Observable,
    type TemplateResult,
    type TypedCustomEvent,
    css,
    defineElement,
    defineElementEvent,
    defineTypedCustomEvent,
    html,
    listen,
} from 'element-vir';
import {TestChildElement} from './elements/entries/old-test-app/child.element.js';
import {VirOldTestApp} from './elements/entries/old-test-app/vir-old-test-app.element.js';
import {VirTestBookApp} from './elements/vir-test-book-app.element.js';

describe('test elements', () => {
    it('has proper types', () => {
        assert.throws(() => {
            defineElement()({
                tagName: 'invalid-derp-whatever',
                hostClasses: {
                    'invalid-derp-whatever-stuff': false,
                    // @ts-expect-error: missing tag name prefix
                    stuff: false,
                },
                state() {
                    return {
                        color: 'purple',
                    };
                },
                cssVars: {
                    'invalid-derp-whatever-css-var': 'blue',
                    // @ts-expect-error: missing tag name prefix
                    derp: 'blue',
                },
                render({state, updateState}) {
                    // purple
                    console.info(state.color);
                    updateState({
                        color: 'green',
                    });
                    // green
                    console.info(state.color);

                    return html``;
                },
            });
        });

        // host classes test
        const WithHostClassesAndCssVars = defineElement()({
            tagName: 'derp-whatever',
            hostClasses: {
                'derp-whatever-stuff': false,
            },
            state() {
                return {
                    color: 'purple',
                };
            },
            cssVars: {
                'derp-whatever-css-var': 'blue',
            },
            render({state, updateState}) {
                // purple
                console.info(state.color);
                updateState({
                    color: 'green',
                });
                // green
                console.info(state.color);

                return html``;
            },
        });

        WithHostClassesAndCssVars.hostClasses['derp-whatever-stuff'];
        // @ts-expect-error: can't access non-existent host classes
        WithHostClassesAndCssVars.hostClasses.derp;

        WithHostClassesAndCssVars.cssVars['derp-whatever-css-var'].name;
        WithHostClassesAndCssVars.cssVars['derp-whatever-css-var'].default;
        WithHostClassesAndCssVars.cssVars['derp-whatever-css-var'].value;
        // @ts-expect-error: can't access non-existent css vars
        WithHostClassesAndCssVars.cssVars.derp;

        assert.throws(() => {
            // @ts-expect-error: missing tagName
            defineElement()({
                render(): TemplateResult {
                    return html`
                        <${WithHostClassesAndCssVars}
                            class=${WithHostClassesAndCssVars.hostClasses['derp-whatever-stuff']}
                        ></${WithHostClassesAndCssVars}>
                    `;
                },
            });
        });

        /** Verify that there's a base type that all declarative elements can be assigned to. */
        const elements: DeclarativeElementDefinition[] = [
            VirOldTestApp,
            TestChildElement,
        ];

        type AppElementProps = {
            funnyNumber: number;
            eventsReceived: number;
            lastReceivedMessage: string;
            width: number;
            showChild: boolean;
            derp: Record<string, string>;
            myObservable: Observable<number>;
        };

        // @ts-expect-error: element constructor should not be able to be assigned to an instance
        const instance: typeof VirTestBookApp.InstanceType = VirTestBookApp;
        // @ts-expect-error: I don't know why I added this check
        const instance2: DeclarativeElement = VirTestBookApp;

        const TestElementVoidEvent = defineElement()({
            tagName: 'test-element-void-event',
            events: {
                thingHappened: defineElementEvent<void>(),
            },
            render({state, dispatch, events}): TemplateResult {
                // @ts-expect-error: this has no state
                console.info(state.thing);
                dispatch(
                    new events.thingHappened({
                        detail: undefined,
                    }),
                );
                // @ts-expect-error: this event requires an init object
                dispatch(new events.thingHappened());
                dispatch(
                    new events.thingHappened({
                        // @ts-expect-error: this event requires an undefined detail
                        detail: 5,
                    }),
                );
                return html``;
            },
        });

        assert.throws(() => {
            return defineElement()({
                // @ts-expect-error: tag name must have dashes in it
                tagName: 'invalidTagNameMissingDash',
                render() {
                    return html``;
                },
            });
        });

        const MyElementEvent = defineTypedCustomEvent<string>()('customEvent');

        defineElement()({
            tagName: 'test-element-no-events-or-state',
            render({state, dispatch, events}): TemplateResult {
                // @ts-expect-error: this has no events
                console.info(events.thing);
                // @ts-expect-error: this has no state
                console.info(state.thing);
                // should only allow strings
                dispatch(
                    new MyElementEvent({
                        // @ts-expect-error: this event requires a string
                        detail: 5,
                    }),
                );
                dispatch(
                    new MyElementEvent({
                        detail: 'derp',
                    }),
                );
                // @ts-expect-error: this property does not exist
                events.thingHappened;
                return html``;
            },
        });

        assert.throws(() => {
            // @ts-expect-error: missing render
            return defineElement()({
                tagName: 'element-vir-test-element-no-render',
            });
        });

        const TestElement = defineElement<{
            stringInput: string;
            numberInput: number;
            optionalInput?: string;
        }>()({
            tagName: 'element-vir-test-element',
            styles: css``,
            state() {
                return {
                    stringProp: 'derp',
                    numberProp: undefined as number | undefined,
                };
            },
            events: {
                yo: defineElementEvent<Record<string, string>>(),
                stringEvent: defineElementEvent<string>(),
                numberEvent: defineElementEvent<number>(),
            },
            render({state, dispatch, events}) {
                // @ts-expect-error: string is not a number
                const stuff: number = state.stringProp;

                return html`
                    <span>width: ${state.stringProp}</span>
                    <span>
                        input number:
                        ${
                            // @ts-expect-error: this does not exist
                            state.nonExistingProp
                        }
                    </span>
                    <button
                        ${listen(MyElementEvent, (event) => {
                            console.info(event);
                        })}
                        @click=${() => {
                            dispatch(
                                new TestElement.events.stringEvent({
                                    detail: randomString(),
                                }),
                            );
                            dispatch(
                                new TestElement.events.numberEvent({
                                    detail: 4,
                                }),
                            );

                            dispatch(
                                new events.stringEvent({
                                    detail: randomString(),
                                }),
                            );
                            dispatch(
                                new events.numberEvent({
                                    detail: 4,
                                }),
                            );

                            dispatch(
                                new TestElement.events.numberEvent({
                                    // @ts-expect-error: requires a number input
                                    detail: randomString(),
                                }),
                            );
                            dispatch(
                                new events.numberEvent({
                                    // @ts-expect-error: requires a number input
                                    detail: randomString(),
                                }),
                            );

                            // @ts-expect-error: requires an init object
                            dispatch(new TestElement.events.numberEvent());
                            dispatch(
                                new TestElement.events.stringEvent({
                                    // @ts-expect-error: requires a string detail
                                    detail: 4,
                                }),
                            );
                            // @ts-expect-error: this event does not exist
                            TestElement.events.nonExistingEvent;
                            dispatch(
                                new TestElement.events.yo({
                                    detail: {
                                        hello: 'there',
                                    },
                                }),
                            );
                        }}
                    >
                        click me
                    </button>
                `;
            },
        });

        /** Don't actually call this for anything, it's just being used to test types */
        function listenTest() {
            listen(TestElement.events.numberEvent, (event) => {
                const detail: number = event.detail;
                // @ts-expect-error: event.detail is a number
                const detailString: string = event.detail;
                assert
                    .tsType<EventDetail<typeof TestElement.events.numberEvent>>()
                    .equals<number>();

                const myEvent: TypedCustomEvent<
                    EventDetail<typeof TestElement.events.numberEvent>,
                    (typeof TestElement.events.numberEvent)['type']
                > = event;
                // @ts-expect-error: `event` requires a number
                const myEventString: TypedCustomEvent<
                    string,
                    (typeof TestElement.events.numberEvent)['type']
                > = event;
            });
            listen(TestElement.events.yo, (event) => {
                const detail: Record<string, string> = event.detail;
                // @ts-expect-error: detail is not a string
                const detailString: string = event.detail;
                const myEvent: TypedCustomEvent<
                    EventDetail<typeof TestElement.events.yo>,
                    (typeof TestElement.events.yo)['type']
                > = event;
            });
        }
    });
});
