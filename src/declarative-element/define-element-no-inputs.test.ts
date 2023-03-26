import {randomString} from '@augment-vir/browser';
import {defineElementNoInputs} from './define-element-no-inputs';

describe(defineElementNoInputs.name, () => {
    it('blocks render callbacks without a return type', () => {
        defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            // render callback must return something
            // @ts-expect-error
            renderCallback() {},
        });
        defineElementNoInputs({
            tagName: `some-tag-2-${randomString()}`,
            // returning undefined is cool
            renderCallback() {
                return undefined;
            },
        });
    });
});
