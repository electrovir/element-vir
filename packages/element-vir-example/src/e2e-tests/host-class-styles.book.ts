import {css, defineElement, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const HostClassStylesElement = defineElement()({
    tagName: 'host-class-styles-element',
    state() {
        return {
            highlighted: false,
        };
    },
    hostClasses: {
        'host-class-styles-element-highlighted': ({state}) => state.highlighted,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: block;
        }
        ${hostClasses['host-class-styles-element-highlighted'].selector} .inner {
            background-color: rgb(244, 233, 222);
        }
        .inner {
            background-color: rgb(11, 22, 33);
            padding: 8px;
            color: white;
        }
    `,
    testIds: [
        'toggle',
        'inner',
    ],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.toggle)}
                ${listen('click', () => {
                    updateState({
                        highlighted: !state.highlighted,
                    });
                })}
            >
                toggle
            </button>
            <div ${testId(testIds.inner)} class="inner">styled by host class</div>
        `;
    },
});

export const hostClassStylesTest = await defineBookTest(
    'host class selector in styles',
    {
        render() {
            return html`
                <${HostClassStylesElement}></${HostClassStylesElement}>
            `;
        },
    },
    {
        async 'host class selector in styles applies on toggle'({e2eUtil, page}) {
            const inner = page
                .locator(HostClassStylesElement.tagName)
                .getByTestId(HostClassStylesElement.testIds.inner);
            await e2eUtil.expect(inner).toHaveCSS('background-color', 'rgb(11, 22, 33)');

            await page.getByTestId(HostClassStylesElement.testIds.toggle).click();
            await e2eUtil.expect(inner).toHaveCSS('background-color', 'rgb(244, 233, 222)');
        },
    },
);
