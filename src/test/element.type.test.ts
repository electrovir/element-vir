import {getObjectTypedKeys, randomString} from 'augment-vir';
import {css, TemplateResult} from 'lit';
import {
    assign,
    assignWithCleanup,
    defineCustomEvent,
    defineFunctionalElement,
    ElementEvent,
    eventInit,
    EventObjectEventDetailExtractor,
    FunctionalElement,
    FunctionalElementInstance,
    html,
    listen,
    namedListen,
} from '..';
import {AppElement} from './elements/app.element';
import {ChildElement} from './elements/child.element';

// @ts-expect-error
const TestElementNoTagName = defineFunctionalElement({
    renderCallback: (): TemplateResult => {
        return html``;
    },
});

/** Verify that there's a base type that all functional elements can be assigned to. */
const elements: FunctionalElement[] = [AppElement, ChildElement];

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
const instance: FunctionalElementInstance<AppElementProps> = AppElement;

const TestElementVoidEvent = defineFunctionalElement({
    tagName: 'test-element-void-event',
    events: {
        thingHappened: eventInit<void>(),
    },
    renderCallback: ({props, dispatchElementEvent, events}): TemplateResult => {
        // @ts-expect-error
        console.info(props.thing);
        // @ts-expect-error
        dispatchElementEvent(new ElementEvent(events.thingHappened));
        dispatchElementEvent(new ElementEvent(events.thingHappened, undefined));
        // @ts-expect-error
        dispatchElementEvent(new ElementEvent(events.thingHappened, 5));
        return html``;
    },
});

const TestElementInvalidTagName = defineFunctionalElement({
    // @ts-expect-error
    tagName: 'invalidTagNameMissingDash',
    renderCallback: () => html``,
});

const MyElementEvent = defineCustomEvent<'customEvent', string>('customEvent');

const TestElementNoEventsOrProps = defineFunctionalElement({
    tagName: 'test-element-no-events-or-props',
    renderCallback: ({props, dispatchElementEvent, events}): TemplateResult => {
        // @ts-expect-error
        console.info(events.thing);
        // @ts-expect-error
        console.info(props.thing);
        // @ts-expect-error
        dispatchElementEvent(new ElementEvent(events.thingHappened));
        // @ts-expect-error
        dispatchElementEvent(new ElementEvent(events.thingHappened, 5));
        return html``;
    },
});

const thingie = {} as HTMLElement;

namedListen('click', (event) => {
    event.buttons;
});
namedListen('not a real event name', (event) => {
    // event type is unknown in this case
    // @ts-expect-error
    event.buttons;
});
thingie.addEventListener('click', (event) => {
    event.buttons;
});

// @ts-expect-error
const TestElementNoRender = defineFunctionalElement({
    tagName: 'element-vir-test-element-no-render',
});

const TestElement = defineFunctionalElement({
    tagName: 'element-vir-test-element',
    styles: css``,
    props: {
        stringProp: 'derp',
        numberProp: undefined as number | undefined,
    },
    events: {
        yo: eventInit<Record<string, string>>(),
        stringEvent: eventInit<string>(),
        numberEvent: eventInit<number>(),
    },
    renderCallback: ({props, dispatchElementEvent}) => {
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
                    console.log(event);
                })}
                @click=${() => {
                    dispatchElementEvent(
                        new ElementEvent(TestElement.events.stringEvent, randomString()),
                    );
                    dispatchElementEvent(new ElementEvent(TestElement.events.numberEvent, 4));
                    dispatchElementEvent(
                        // @ts-expect-error
                        new ElementEvent(TestElement.events.numberEvent, randomString()),
                    );
                    // @ts-expect-error
                    dispatchElementEvent(new ElementEvent(TestElement.events.numberEvent));
                    // @ts-expect-error
                    dispatchElementEvent(new ElementEvent(TestElement.events.stringEvent, 4));
                    // @ts-expect-error
                    dispatchElementEvent(new ElementEvent(TestElement.events.stringEvent));
                    // @ts-expect-error
                    dispatchElementEvent(new ElementEvent(TestElement.events.nonExistingEvent, 4));
                    // @ts-expect-error
                    dispatchElementEvent(new ElementEvent(TestElement.events.nonExistingEvent));
                    dispatchElementEvent(new ElementEvent(TestElement.events.yo, {hello: 'there'}));
                    // @ts-expect-error
                    dispatchElementEvent(new ElementEvent(TestElement.events.yo));
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
        const myEvent: ElementEvent<
            typeof TestElement.events.numberEvent['eventName'],
            EventObjectEventDetailExtractor<typeof TestElement.events.numberEvent>
        > = event;
        // @ts-expect-error
        const myEventString: ElementEvent<
            typeof TestElement.events.numberEvent['eventName'],
            string
        > = event;
    });
    listen(TestElement.events.yo, (event) => {
        const detail: Record<string, string> = event.detail;
        // @ts-expect-error
        const detailString: string = event.detail;
        const myEvent: ElementEvent<
            typeof TestElement.events.yo['eventName'],
            EventObjectEventDetailExtractor<typeof TestElement.events.yo>
        > = event;
        // @ts-expect-error
        const myEventString: ElementEvent<typeof TestElement.events.yo['eventName'], string> =
            event;
    });
}

/** Don't actually call this for anything, it's just being used to test types */
function assignTest() {
    assign(TestElement.props.numberProp, 5);
    assignWithCleanup(TestElement.props.numberProp, 5, () => {});

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
