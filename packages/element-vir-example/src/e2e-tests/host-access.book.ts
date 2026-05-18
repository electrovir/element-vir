import {defineElement, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const HostAccessElement = defineElement()({
    tagName: 'host-access-element',
    testIds: [
        'tag-report',
        'set-attr',
    ],
    render({host, testIds}) {
        return html`
            <span ${testId(testIds['tag-report'])}>${host.tagName.toLowerCase()}</span>
            <button
                ${testId(testIds['set-attr'])}
                ${listen('click', () => {
                    host.setAttribute('data-host-flag', 'set');
                })}
            >
                set host attr
            </button>
        `;
    },
});

export const hostAccessTest = await defineBookTest(
    'host access',
    {
        render() {
            return html`
                <${HostAccessElement}></${HostAccessElement}>
            `;
        },
    },
    {
        async 'host reports its own tag name'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(HostAccessElement.testIds['tag-report']))
                .toHaveText(HostAccessElement.tagName);
        },
        async 'host attributes can be set imperatively'({e2eUtil, page}) {
            const host = page.locator(HostAccessElement.tagName);
            await e2eUtil.expect(host).not.toHaveAttribute('data-host-flag');

            await page.getByTestId(HostAccessElement.testIds['set-attr']).click();
            await e2eUtil.expect(host).toHaveAttribute('data-host-flag', 'set');
        },
    },
);
