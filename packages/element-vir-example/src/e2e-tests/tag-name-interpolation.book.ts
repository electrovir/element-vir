import {defineElement, html, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const TagNameInterpolationChild = defineElement<{message: string}>()({
    tagName: 'tag-name-interpolation-child',
    testIds: ['content'],
    render({inputs, testIds}) {
        return html`
            <span ${testId(testIds.content)}>${inputs.message}</span>
        `;
    },
});

export const tagNameInterpolationTest = await defineBookTest(
    'tag name interpolation',
    {
        render() {
            return html`
                <${TagNameInterpolationChild.assign({
                    message: 'hello',
                })}></${TagNameInterpolationChild}>
            `;
        },
    },
    {
        async 'interpolated tag renders the child element'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(TagNameInterpolationChild.testIds.content))
                .toHaveText('hello');
        },
        async 'interpolated tag emits the actual tag name in the DOM'({e2eUtil, page}) {
            await e2eUtil.expect(page.locator(TagNameInterpolationChild.tagName)).toBeVisible();
        },
    },
);
