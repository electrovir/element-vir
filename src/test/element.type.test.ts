import {getObjectTypedKeys, randomString} from 'augment-vir';
import {css, TemplateResult} from 'lit';
import {
    assign,
    assignWithCleanup,
    DeclarativeElement,
    defineElementEvent,
    defineElementNoInputs,
    defineTypedEvent,
    EventObjectEventDetailExtractor,
    html,
    listen,
    TypedEvent,
} from '..';
import {DeclarativeElementDefinition} from '../declarative-element/declarative-element';
import {AppElement} from './elements/app.element';
import {TestChildElement} from './elements/child.element';

// host classes test
const WithHostClassesAndCssVars = defineElementNoInputs({
    tagName: 'derp-whatever',
    hostClasses: {
        stuff: false,
    },
    cssVars: {
        myCssVar: 'blue',
    },
    renderCallback: () => html``,
});

WithHostClassesAndCssVars.hostClasses.stuff;
// @ts-expect-error
WithHostClassesAndCssVars.hostClasses.derp;

WithHostClassesAndCssVars.cssVarNames.myCssVar;
WithHostClassesAndCssVars.cssVarValues.myCssVar;
// @ts-expect-error
WithHostClassesAndCssVars.cssVarNames.derp;
// @ts-expect-error
WithHostClassesAndCssVars.cssVarValues.derp;

// @ts-expect-error
const TestElementNoTagName = defineElementNoInputs({
    renderCallback: (): TemplateResult => {
        return html``;
    },
});

/** Verify that there's a base type that all declarative elements can be assigned to. */
const elements: DeclarativeElementDefinition[] = [
    AppElement,
    TestChildElement,
];

type AppElementProps = {
    funnyNumber: number;
    eventsReceived: number;
    lastReceivedMessage: string;
    width: number;
    showChild: boolean;
};

const props: (keyof AppElementProps)[] = getObjectTypedKeys(AppElement.props);

// element constructor should not be able to be assigned to an instance
// @ts-expect-error
const instance: typeof AppElement.instanceType = AppElement;
// @ts-expect-error
const instance: DeclarativeElement = AppElement;

const TestElementVoidEvent = defineElementNoInputs({
    tagName: 'test-element-void-event',
    events: {
        thingHappened: defineElementEvent<void>(),
    },
    renderCallback: ({props, dispatch, events}): TemplateResult => {
        // @ts-expect-error
        console.info(props.thing);
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
    renderCallback: () => html``,
});

const MyElementEvent = defineTypedEvent<string>()('customEvent');

const TestElementNoEventsOrProps = defineElementNoInputs({
    tagName: 'test-element-no-events-or-props',
    renderCallback: ({props, genericDispatch, dispatch, events}): TemplateResult => {
        // @ts-expect-error
        console.info(events.thing);
        // @ts-expect-error
        console.info(props.thing);
        // should only allow strings
        // @ts-expect-error
        genericDispatch(new MyElementEvent(5));
        genericDispatch(new MyElementEvent('derp'));
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

const TestElement = defineElementNoInputs({
    tagName: 'element-vir-test-element',
    styles: css``,
    stateInit: {
        stringProp: 'derp',
        numberProp: undefined as number | undefined,
    },
    events: {
        yo: defineElementEvent<Record<string, string>>(),
        stringEvent: defineElementEvent<string>(),
        numberEvent: defineElementEvent<number>(),
    },
    renderCallback: ({props, dispatch, events}) => {
        // @ts-expect-error
        const stuff: number = props.stringProp;

        return html`
            <span>width: ${props.stringProp}</span>
            <span>
                input number:
                ${
                    // @ts-expect-error
                    props.nonExistingProp
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

                    dispatch(new TypedEvent(TestElement.events.stringEvent, randomString()));
                    dispatch(new TypedEvent(TestElement.events.numberEvent, 4));

                    // @ts-expect-error
                    dispatch(new TestElement.events.numberEvent(randomString()));
                    // @ts-expect-error
                    dispatch(new TypedEvent(TestElement.events.numberEvent, randomString()));
                    // @ts-expect-error
                    dispatch(new events.numberEvent(randomString()));

                    // @ts-expect-error
                    dispatch(new TypedEvent(TestElement.events.numberEvent));
                    // @ts-expect-error
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
            typeof TestElement.events.numberEvent['type'],
            EventObjectEventDetailExtractor<typeof TestElement.events.numberEvent>
        > = event;
        // @ts-expect-error
        const myEventString: TypedEvent<typeof TestElement.events.numberEvent['type'], string> =
            event;
    });
    listen(TestElement.events.yo, (event) => {
        const detail: Record<string, string> = event.detail;
        // @ts-expect-error
        const detailString: string = event.detail;
        const myEvent: TypedEvent<
            typeof TestElement.events.yo['type'],
            EventObjectEventDetailExtractor<typeof TestElement.events.yo>
        > = event;
        // @ts-expect-error
        const myEventString: ElementEvent<typeof TestElement.events.yo['eventName'], string> =
            event;
    });
}

/** Don't actually call this for anything, it's just being used to test types */
function assignTest() {
    assign(TestElement, {
        numberProp: 5,
        stringProp: '',
    });
    assignWithCleanup(
        TestElement,
        {
            numberProp: 5,
            stringProp: '',
        },
        () => {},
    );

    // @ts-expect-error
    assignWithCleanup(TestElement.props.numberProp, 'derp', () => {});
    // @ts-expect-error
    assignWithCleanup(TestElement.props.numberProp, 5, (input: string) => {});
    // @ts-expect-error
    assignWithCleanup(TestElement.props.numberProp, 5);
    // @ts-expect-error
    assign(TestElement.props.thisDoesNotExist, 5);
    // @ts-expect-error
    assign(TestElement.props.stringProp, 5);
    // @ts-expect-error
    assign(TestElement.props.numberProp, 'yo hello');
}
