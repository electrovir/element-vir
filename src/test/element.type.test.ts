import {getObjectTypedKeys} from 'augment-vir';
import {css, TemplateResult} from 'lit';
import {
    assign,
    defineFunctionalElement,
    ElementEvent,
    eventInit,
    EventObjectEventDetailExtractor,
    html,
    listen,
} from '..';
import {randomString} from '../augments/string';
import {assignWithCleanup} from '../functional-element/directives/assign-with-clean-up.directive';
import {
    FunctionalElement,
    FunctionalElementInstance,
} from '../functional-element/functional-element';
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
    renderCallback: ({props, dispatchEvent, events}): TemplateResult => {
        // @ts-expect-error
        console.info(props.thing);
        // @ts-expect-error
        dispatchEvent(new ElementEvent(events.thingHappened));
        dispatchEvent(new ElementEvent(events.thingHappened, undefined));
        // @ts-expect-error
        dispatchEvent(new ElementEvent(events.thingHappened, 5));
        return html``;
    },
});

const TestElementNoEventsOrProps = defineFunctionalElement({
    tagName: 'test-element-no-events-or-props',
    renderCallback: ({props, dispatchEvent, events}): TemplateResult => {
        // @ts-expect-error
        console.info(events.thing);
        // @ts-expect-error
        console.info(props.thing);
        // @ts-expect-error
        dispatchEvent(new ElementEvent(events.thingHappened));
        // @ts-expect-error
        dispatchEvent(new ElementEvent(events.thingHappened, 5));
        return html``;
    },
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
    renderCallback: ({props, dispatchEvent}) => {
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
                @click=${() => {
                    dispatchEvent(new ElementEvent(TestElement.events.stringEvent, randomString()));
                    dispatchEvent(new ElementEvent(TestElement.events.numberEvent, 4));
                    // @ts-expect-error
                    dispatchEvent(new ElementEvent(TestElement.events.numberEvent, randomString()));
                    // @ts-expect-error
                    dispatchEvent(new ElementEvent(TestElement.events.numberEvent));
                    // @ts-expect-error
                    dispatchEvent(new ElementEvent(TestElement.events.stringEvent, 4));
                    // @ts-expect-error
                    dispatchEvent(new ElementEvent(TestElement.events.stringEvent));
                    // @ts-expect-error
                    dispatchEvent(new ElementEvent(TestElement.events.nonExistingEvent, 4));
                    // @ts-expect-error
                    dispatchEvent(new ElementEvent(TestElement.events.nonExistingEvent));
                    dispatchEvent(new ElementEvent(TestElement.events.yo, {hello: 'there'}));
                    // @ts-expect-error
                    dispatchEvent(new ElementEvent(TestElement.events.yo));
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
