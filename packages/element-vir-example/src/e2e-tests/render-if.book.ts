import {defineElement, html, listen, renderIf, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const RenderIfElement = defineElement()({
    tagName: 'render-if-element',
    state() {
        return {
            showTrue: true,
        };
    },
    testIds: [
        'toggle',
        'container',
        'true',
        'false',
    ],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.toggle)}
                ${listen('click', () => {
                    updateState({
                        showTrue: !state.showTrue,
                    });
                })}
            >
                toggle
            </button>
            <div ${testId(testIds.container)}>
                ${renderIf(
                    state.showTrue,
                    html`
                        <span ${testId(testIds.true)}>true branch</span>
                    `,
                    html`
                        <span ${testId(testIds.false)}>false branch</span>
                    `,
                )}
            </div>
        `;
    },
});

export const renderIfTest = await defineBookTest(
    'render if',
    {
        render() {
            return html`
                <${RenderIfElement}></${RenderIfElement}>
            `;
        },
    },
    {
        async 'renderIf swaps between true and false branches'({e2eUtil, page}) {
            await e2eUtil.expect(page.getByTestId(RenderIfElement.testIds.true)).toBeVisible();
            await e2eUtil.expect(page.getByTestId(RenderIfElement.testIds.false)).toHaveCount(0);

            await page.getByTestId(RenderIfElement.testIds.toggle).click();

            await e2eUtil.expect(page.getByTestId(RenderIfElement.testIds.false)).toBeVisible();
            await e2eUtil.expect(page.getByTestId(RenderIfElement.testIds.true)).toHaveCount(0);
        },
        async 'renderIf without ifFalse renders nothing on false'({e2eUtil, page}) {
            const truthy = page.getByTestId(RenderIfElement.testIds.true);
            await e2eUtil.expect(truthy).toBeVisible();
            await page.getByTestId(RenderIfElement.testIds.toggle).click();
            await e2eUtil.expect(truthy).toHaveCount(0);
        },
    },
);
