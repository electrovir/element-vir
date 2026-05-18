import {css, defineElement, html, listen, onResize, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const OnResizeElement = defineElement()({
    tagName: 'on-resize-element',
    styles: css`
        .target {
            display: block;
            background: gray;
            height: 40px;
        }
    `,
    state() {
        return {
            lastWidth: 0,
            width: 200,
        };
    },
    testIds: [
        'target',
        'report',
        'grow',
    ],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.grow)}
                ${listen('click', () => {
                    updateState({
                        width: state.width + 100,
                    });
                })}
            >
                grow
            </button>
            <span ${testId(testIds.report)}>${state.lastWidth}</span>
            <div
                ${testId(testIds.target)}
                class="target"
                style="width: ${state.width}px"
                ${onResize((size) => {
                    updateState({
                        lastWidth: Math.round(size.contentRect.width),
                    });
                })}
            >
                target
            </div>
        `;
    },
});

export const onResizeTest = await defineBookTest(
    'on resize',
    {
        render() {
            return html`
                <${OnResizeElement}></${OnResizeElement}>
            `;
        },
    },
    {
        async 'onResize fires on initial layout and on resize'({e2eUtil, page}) {
            const report = page.getByTestId(OnResizeElement.testIds.report);
            await e2eUtil.expect(report).toHaveText('200');

            await page.getByTestId(OnResizeElement.testIds.grow).click();
            await e2eUtil.expect(report).toHaveText('300');

            await page.getByTestId(OnResizeElement.testIds.grow).click();
            await e2eUtil.expect(report).toHaveText('400');
        },
    },
);
