import {css, TemplateResult} from 'lit';
import {randomString} from '../augments/string';
import {createFunctionalElement} from '../functional-element/create-functional-element';
import {
    ElementEvent,
    eventInit,
    EventObjectEventDetailExtractor,
} from '../functional-element/functional-element-event';
import {listen} from '../functional-element/functional-event-listener';
import {html} from '../vir-html/vir-html';

// @ts-expect-error
const TestElementNoTagName = createFunctionalElement({
    renderCallback: (): TemplateResult => {
        return html``;
    },
});

// @ts-expect-error
const TestElementNoRender = createFunctionalElement({
    tagName: 'element-vir-test-element-no-render',
});

const TestElement = createFunctionalElement({
    tagName: 'element-vir-test-element',
    styles: css``,
    propertyInit: {
        stringProp: 'derp',
        numberProp: undefined as number | undefined,
    },
    events: {
        yo: eventInit<Record<string, string>>(),
        stringEvent: eventInit<string>(),
        numberEvent: eventInit<number>(),
    },
    connectedCallback(element) {
        window.addEventListener('resize', () => {
            element.numberProp = window.innerWidth;
        });
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
                    dispatchEvent(new ElementEvent(TestElement.events.stringEvent, 4));
                    // @ts-expect-error
                    dispatchEvent(new ElementEvent(TestElement.events.nonExistingEvent, 4));
                    dispatchEvent(new ElementEvent(TestElement.events.yo, {hello: 'there'}));
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
