import {getObjectTypedKeys, randomString} from '@augment-vir/common';
import {assertThrows} from 'run-time-assertions';
import {
    DeclarativeElement,
    DeclarativeElementDefinition,
    EventObjectEventDetailExtractor,
    ObservableProp,
    TemplateResult,
    TypedEvent,
    assign,
    css,
    defineElement,
    defineElementEvent,
    defineElementNoInputs,
    defineTypedEvent,
    html,
    listen,
} from '../index';
import {TestChildElement} from './elements/entries/old-test-app/child.element';
import {VirOldTestApp} from './elements/entries/old-test-app/vir-old-test-app.element';
import {VirTestBookApp} from './elements/vir-test-book-app.element';

describe('test elements', () => {
    it('has proper types', () => {
        assertThrows(() => {
            defineElementNoInputs({
                tagName: 'invalid-derp-whatever',
                hostClasses: {
                    'invalid-derp-whatever-stuff': false,
                    // @ts-expect-error
                    stuff: false,
                },
                stateInitStatic: {
                    color: 'purple',
                },
                cssVars: {
                    'invalid-derp-whatever-css-var': 'blue',
                    // @ts-expect-error
                    derp: 'blue',
                },
                renderCallback({state, updateState}) {
                    // purple
                    console.info(state.color);
                    updateState({color: 'green'});
                    // green
                    console.info(state.color);

                    return html``;
                },
            });
        });

        // host classes test
        const WithHostClassesAndCssVars = defineElementNoInputs({
            tagName: 'derp-whatever',
            hostClasses: {
                'derp-whatever-stuff': false,
            },
            stateInitStatic: {
                color: 'purple',
            },
            cssVars: {
                'derp-whatever-css-var': 'blue',
            },
            renderCallback({state, updateState}) {
                // purple
                console.info(state.color);
                updateState({color: 'green'});
                // green
                console.info(state.color);

                return html``;
            },
        });

        WithHostClassesAndCssVars.hostClasses['derp-whatever-stuff'];
        // @ts-expect-error
        WithHostClassesAndCssVars.hostClasses.derp;

        WithHostClassesAndCssVars.cssVars['derp-whatever-css-var'].name;
        WithHostClassesAndCssVars.cssVars['derp-whatever-css-var'].default;
        WithHostClassesAndCssVars.cssVars['derp-whatever-css-var'].value;
        // @ts-expect-error
        WithHostClassesAndCssVars.cssVars.derp;
        // @ts-expect-error
        WithHostClassesAndCssVars.cssVars.derp;

        assertThrows(() => {
            // @ts-expect-error: missing tagName
            defineElementNoInputs({
                renderCallback(): TemplateResult {
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
            myObservable: ObservableProp<number>;
        };

        const stateInitStatic: ReadonlyArray<keyof AppElementProps> = getObjectTypedKeys(
            VirOldTestApp.stateInitStatic,
        );

        // element constructor should not be able to be assigned to an instance
        // @ts-expect-error
        const instance: typeof VirTestBookApp.instanceType = VirTestBookApp;
        // @ts-expect-error
        const instance2: DeclarativeElement = VirTestApp;

        const TestElementVoidEvent = defineElementNoInputs({
            tagName: 'test-element-void-event',
            events: {
                thingHappened: defineElementEvent<void>(),
            },
            renderCallback({state, dispatch, events}): TemplateResult {
                // @ts-expect-error
                console.info(state.thing);
                dispatch(new events.thingHappened());
                dispatch(new events.thingHappened(undefined));
                // @ts-expect-error
                dispatch(new events.thingHappened(5));
                return html``;
            },
        });

        const TestElementInvalidTagName = defineElementNoInputs({
            // @ts-expect-error
            tagName: 'invalidTagNameMissingDash',
            renderCallback() {
                return html``;
            },
        });

        const MyElementEvent = defineTypedEvent<string>()('customEvent');

        const TestElementNoEventsOrState = defineElementNoInputs({
            tagName: 'test-element-no-events-or-state',
            renderCallback({state, dispatch, events}): TemplateResult {
                // @ts-expect-error
                console.info(events.thing);
                // @ts-expect-error
                console.info(state.thing);
                // should only allow strings
                // @ts-expect-error
                dispatch(new MyElementEvent(5));
                dispatch(new MyElementEvent('derp'));
                // @ts-expect-error
                events.thingHappened; // this property does not exist
                // @ts-expect-error
                dispatch(new events.thingHappened(events.thingHappened));
                // @ts-expect-error
                dispatch(new TypedEvent(events.thingHappened, 5));
                return html``;
            },
        });

        const thingie = {} as HTMLElement;

        thingie.addEventListener('click', (event) => {
            event.buttons;
        });

        // @ts-expect-error
        const TestElementNoRender = defineElementNoInputs({
            tagName: 'element-vir-test-element-no-render',
        });

        const TestElement = defineElement<{
            stringInput: string;
            numberInput: number;
            optionalInput?: string;
        }>()({
            tagName: 'element-vir-test-element',
            styles: css``,
            stateInitStatic: {
                stringProp: 'derp',
                numberProp: undefined as number | undefined,
            },
            events: {
                yo: defineElementEvent<Record<string, string>>(),
                stringEvent: defineElementEvent<string>(),
                numberEvent: defineElementEvent<number>(),
            },
            renderCallback({state, dispatch, events}) {
                // @ts-expect-error
                const stuff: number = state.stringProp;

                return html`
                    <span>width: ${state.stringProp}</span>
                    <span>
                        input number:
                        ${
                            // @ts-expect-error
                            state.nonExistingProp
                        }
                    </span>
                    <button
                        ${listen(MyElementEvent, (event) => {
                            console.debug(event);
                        })}
                        @click=${() => {
                            dispatch(new TestElement.events.stringEvent(randomString()));
                            dispatch(new TestElement.events.numberEvent(4));

                            dispatch(new events.stringEvent(randomString()));
                            dispatch(new events.numberEvent(4));

                            dispatch(
                                new TypedEvent(TestElement.events.stringEvent, randomString()),
                            );
                            dispatch(new TypedEvent(TestElement.events.numberEvent, 4));

                            // @ts-expect-error
                            dispatch(new TestElement.events.numberEvent(randomString()));
                            dispatch(
                                new TypedEvent(TestElement.events.numberEvent, randomString()),
                            );
                            // @ts-expect-error
                            dispatch(new events.numberEvent(randomString()));

                            // @ts-expect-error
                            dispatch(new TypedEvent(TestElement.events.numberEvent));
                            dispatch(new TypedEvent(TestElement.events.stringEvent, 4));
                            // @ts-expect-error
                            dispatch(new TypedEvent(TestElement.events.stringEvent));
                            // @ts-expect-error
                            dispatch(new TypedEvent(TestElement.events.nonExistingEvent, 4));
                            // @ts-expect-error
                            dispatch(new TypedEvent(TestElement.events.nonExistingEvent));
                            dispatch(new TypedEvent(TestElement.events.yo, {hello: 'there'}));
                            // @ts-expect-error
                            dispatch(new TypedEvent(TestElement.events.yo));
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
                // @ts-expect-error
                const detailString: string = event.detail;
                const myEvent: TypedEvent<
                    (typeof TestElement.events.numberEvent)['type'],
                    EventObjectEventDetailExtractor<typeof TestElement.events.numberEvent>
                > = event;
                // @ts-expect-error
                const myEventString: TypedEvent<
                    (typeof TestElement.events.numberEvent)['type'],
                    string
                > = event;
            });
            listen(TestElement.events.yo, (event) => {
                const detail: Record<string, string> = event.detail;
                // @ts-expect-error: detail is not a string
                const detailString: string = event.detail;
                const myEvent: TypedEvent<
                    (typeof TestElement.events.yo)['type'],
                    EventObjectEventDetailExtractor<typeof TestElement.events.yo>
                > = event;
            });
        }

        /** Don't actually call this for anything, it's just being used to test types */
        function assignTest() {
            assign(TestElement, {
                numberInput: 5,
                stringInput: '',
            });
            assign(TestElement, {
                numberInput: 5,
                stringInput: '',
                optionalInput: '',
            });
            // @ts-expect-error
            assign(TestElement);
            assign(TestElement, {
                numberInput: 5,
                // @ts-expect-error
                thisDoesNotExist: 5,
                stringInput: '',
            });
        }
    });
});
