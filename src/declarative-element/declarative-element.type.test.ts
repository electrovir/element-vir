import {html} from '..';
import {defineElement} from './define-element';
import {defineElementEvent} from './element-events';

const definedDeclarativeElementWithProps = defineElement({
    renderCallback: () => html``,
    stateInit: {
        thing: '',
    },
    events: {
        stuff: defineElementEvent<boolean>(),
    },
    tagName: 'defined-declarative-element',
});

const definedDeclarativeElementWithoutProps = defineElement({
    renderCallback: () => html``,
    tagName: 'defined-declarative-element',
});

definedDeclarativeElementWithProps.props.thing;

function acceptInstanceWithProps(
    input: typeof definedDeclarativeElementWithProps.instanceType,
): void {
    // @ts-expect-error
    input.thing;
    input.instanceProps;
    input.instanceProps.thing;
    // @ts-expect-error
    input.events.stuff;
}

function acceptInstanceWithoutProps(
    input: typeof definedDeclarativeElementWithoutProps.instanceType,
): void {
    // @ts-expect-error
    input.props.thing;
    // @ts-expect-error
    input.events.stuff;
}

function assertInstanceOf<T>(
    element: unknown,
    constructor: new (...args: any[]) => T,
): asserts element is T {}

const testInstance: unknown = {} as any;
assertInstanceOf(testInstance, definedDeclarativeElementWithProps);
testInstance;
acceptInstanceWithProps(testInstance);
acceptInstanceWithoutProps(new definedDeclarativeElementWithoutProps());
