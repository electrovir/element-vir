import {defineElement, html, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const UndefinedInterpolationElement = defineElement()({
    tagName: 'undefined-interpolation-element',
    testIds: [
        'undefined',
        'null',
        'empty',
        'zero',
        'false',
    ],
    render({testIds}) {
        return html`
            <span ${testId(testIds.undefined)}>[${undefined}]</span>
            <span ${testId(testIds.null)}>[${null}]</span>
            <span ${testId(testIds.empty)}>[${''}]</span>
            <span ${testId(testIds.zero)}>[${0}]</span>
            <span ${testId(testIds.false)}>[${false}]</span>
        `;
    },
});

export const undefinedInterpolationTest = await defineBookTest(
    'undefined interpolation',
    {
        render() {
            return html`
                <${UndefinedInterpolationElement}></${UndefinedInterpolationElement}>
            `;
        },
    },
    {
        async 'undefined renders as empty'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(UndefinedInterpolationElement.testIds.undefined))
                .toHaveText('[]');
        },
        async 'null renders as empty'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(UndefinedInterpolationElement.testIds.null))
                .toHaveText('[]');
        },
        async 'empty string renders as empty'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(UndefinedInterpolationElement.testIds.empty))
                .toHaveText('[]');
        },
        async '0 renders as 0'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(UndefinedInterpolationElement.testIds.zero))
                .toHaveText('[0]');
        },
        async 'false renders as the string "false"'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(UndefinedInterpolationElement.testIds.false))
                .toHaveText('[false]');
        },
    },
);
