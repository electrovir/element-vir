import {html} from '..';
import {defineFunctionalElement} from './define-functional-element';
import {defineElementEvent} from './element-events';

const definedFunctionalElementWithProps = defineFunctionalElement({
    renderCallback: () => html``,
    stateInit: {
        thing: '',
    },
    events: {
        stuff: defineElementEvent<boolean>(),
    },
    tagName: 'defined-functional-element',
});

const definedFunctionalElementWithoutProps = defineFunctionalElement({
    renderCallback: () => html``,
    tagName: 'defined-functional-element',
});

definedFunctionalElementWithProps.props.thing;

function acceptInstanceWithProps(
    input: typeof definedFunctionalElementWithProps.instanceType,
): void {
    // @ts-expect-error
    input.thing;
    input.instanceProps;
    input.instanceProps.thing;
    // @ts-expect-error
    input.events.stuff;
}

function acceptInstanceWithoutProps(
    input: typeof definedFunctionalElementWithoutProps.instanceType,
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
assertInstanceOf(testInstance, definedFunctionalElementWithProps);
testInstance;
acceptInstanceWithProps(testInstance);
acceptInstanceWithoutProps(new definedFunctionalElementWithoutProps());
