import {defineElementNoInputs, html, requireAllCustomElementsToBeDeclarativeElements} from '../..';

requireAllCustomElementsToBeDeclarativeElements();

export type TestTypesProgressInputs = {
    thingA: number;
    thingB?: number;
};

export const TestTypesProgress = defineElementNoInputs<TestTypesProgressInputs>({
    tagName: 'vir-test-types-progress',
    renderCallback: () => {
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
