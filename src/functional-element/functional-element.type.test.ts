import {html} from '..';
import {defineFunctionalElement} from './define-functional-element';
import {defineElementEvent} from './element-events';
import {FunctionalElementInstance} from './functional-element';

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

function acceptInstanceWithProps(
    input: FunctionalElementInstance<typeof definedFunctionalElementWithProps>,
): void {
    input.props.thing;
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
