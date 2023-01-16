import {html} from '..';
import {defineElementNoInputs} from './define-element-no-inputs';
import {defineElementEvent} from './properties/element-events';

const definedDeclarativeElementWithProps = defineElementNoInputs({
    renderCallback: () => html``,
    stateInit: {
        thing: '',
    },
    events: {
        stuff: defineElementEvent<boolean>(),
    },
    tagName: 'defined-declarative-element',
});

const definedDeclarativeElementWithoutProps = defineElementNoInputs({
    renderCallback: () => html``,
    stateInit: {
        thing: 5,
    },
    tagName: 'defined-declarative-element',
});

definedDeclarativeElementWithProps.init.stateInit.thing;

function acceptInstanceWithProps(
    input: typeof definedDeclarativeElementWithProps.instanceType,
): void {
    // @ts-expect-error
    input.thing;
    input.instanceState;
    input.instanceState.thing;
    // @ts-expect-error
    input.events.stuff;
}

function acceptInstanceWithoutProps(
    input: typeof definedDeclarativeElementWithoutProps.instanceType,
): void {
    input.instanceState.thing;
    // static properties should not be accessible from an instance
    // @ts-expect-error
    input.events;
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
