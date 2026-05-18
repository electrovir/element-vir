import {assert} from '@augment-vir/assert';
import {defineElement, html} from 'element-vir';

export type TestTypesProgressInputs = {
    thingA: number;
    thingB?: number;
};

export const TestTypesProgress = defineElement<TestTypesProgressInputs>()({
    tagName: 'vir-test-types-progress',
    render() {
        return html``;
    },
});

// test that this property exists
assert.tsType<typeof TestTypesProgress.InstanceType>().matches<{instanceInputs: any}>();
