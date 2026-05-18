import {html, testId, wrapDefineElement} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const transformedTagsSink: string[] = [];

const defineWrappedElement = wrapDefineElement({
    transformInputs(inputs) {
        transformedTagsSink.push(inputs.tagName);
        return inputs;
    },
});

const WrappedElement = defineWrappedElement()({
    tagName: 'wrapped-element',
    testIds: ['target'],
    render({testIds}) {
        return html`
            <span ${testId(testIds.target)}>wrapped</span>
        `;
    },
});

export const wrapDefineElementTest = await defineBookTest(
    'wrap define element',
    {
        render() {
            return html`
                <${WrappedElement}></${WrappedElement}>
            `;
        },
    },
    {
        async 'wrapped element renders normally'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(WrappedElement.testIds.target))
                .toHaveText('wrapped');
        },
        'wrapper transformInputs runs at definition time'({e2eUtil}) {
            e2eUtil.expect(transformedTagsSink).toContain('wrapped-element');
        },
    },
);
