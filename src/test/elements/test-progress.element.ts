import {defineFunctionalElement, html, requireAllCustomElementsToBeFunctionalElement} from '../..';

requireAllCustomElementsToBeFunctionalElement();

export type TestTypesProgressInputs = {
    thingA: number;
    thingB?: number;
};

export const TestTypesProgress = defineFunctionalElement<TestTypesProgressInputs>({
    tagName: 'vir-test-types-progress',
    renderCallback: () => {
        return html``;
    },
});

function doThing(thing: typeof TestTypesProgress.instanceType) {
    thing.currentInputs;
}

const thing = new TestTypesProgress();

if (thing instanceof TestTypesProgress) {
    thing;
} else {
    thing;
}
