import {defineElement, html, requireAllCustomElementsToBeDeclarativeElements} from '../..';

requireAllCustomElementsToBeDeclarativeElements();

export type TestTypesProgressInputs = {
    thingA: number;
    thingB?: number;
};

export const TestTypesProgress = defineElement<TestTypesProgressInputs>({
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
