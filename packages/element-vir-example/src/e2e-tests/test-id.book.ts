import {defineElement, html, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const interpolatedSuffix = 'suffix';

const TestIdElement = defineElement()({
    tagName: 'test-id-element',
    testIds: [
        'direct',
        'interpolated',
    ],
    render({testIds}) {
        return html`
            <div ${testId(testIds.direct)}>direct</div>
            <div ${testId(`${testIds.interpolated}-${interpolatedSuffix}`)}>interpolated</div>
        `;
    },
});

export const testIdTest = await defineBookTest(
    'test id attribute',
    {
        render() {
            return html`
                <${TestIdElement}></${TestIdElement}>
            `;
        },
    },
    {
        async 'testId directive applies the data-test-id attribute'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(TestIdElement.testIds.direct))
                .toHaveText('direct');
            await e2eUtil
                .expect(page.locator(`[data-test-id="${TestIdElement.testIds.direct}"]`))
                .toHaveText('direct');
        },
        async 'testId supports interpolated strings'({e2eUtil, page}) {
            await e2eUtil
                .expect(
                    page.getByTestId(`${TestIdElement.testIds.interpolated}-${interpolatedSuffix}`),
                )
                .toHaveText('interpolated');
        },
    },
);
