import {defineElement, html, requireAllCustomElementsToBeDeclarativeElements} from 'element-vir';

requireAllCustomElementsToBeDeclarativeElements();

export type TestTypesProgressInputs = {
    thingA: number;
    thingB?: number;
};

export const TestTypesProgress = defineElement<TestTypesProgressInputs>()({
    tagName: 'vir-test-types-progress',
    renderCallback() {
        return html``;
    },
});

function doThing(thing: typeof TestTypesProgress.instanceType) {
    thing.instanceInputs;
}

const thing = new TestTypesProgress();

if (thing instanceof TestTypesProgress) {
    thing;
} else {
    thing;
}
