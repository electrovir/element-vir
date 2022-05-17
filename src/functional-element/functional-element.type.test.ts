import {html} from '..';
import {defineFunctionalElement} from './define-functional-element';
import {defineElementEvent} from './element-events';
import {FunctionalElementInstance, FunctionalElementInstanceFromInit} from './functional-element';

const definedFunctionalElementWithProps = defineFunctionalElement({
    renderCallback: () => html``,
    props: {
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
    input: FunctionalElementInstance<typeof definedFunctionalElementWithProps>,
): void {
    input.thing;
    input.instanceProps;
    input.instanceProps.thing;
    // @ts-expect-error
    input.events.stuff;
}

function acceptInstanceWithPropsFromInit(
    input: FunctionalElementInstanceFromInit<
        typeof definedFunctionalElementWithProps['init']['props']
    >,
): void {
    input.thing;
    input.instanceProps;
    input.instanceProps.thing;
    // @ts-expect-error
    input.events.stuff;
}

function acceptInstanceWithoutProps(
    input: FunctionalElementInstance<typeof definedFunctionalElementWithoutProps>,
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
acceptInstanceWithPropsFromInit(testInstance);
