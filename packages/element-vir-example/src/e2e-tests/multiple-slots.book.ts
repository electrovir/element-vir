import {css, defineElement, html} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const MultipleSlotsElement = defineElement()({
    tagName: 'multiple-slots-element',
    styles: css`
        .main {
            font-weight: bold;
        }
        .secondary {
            display: flex;
            flex-direction: column;
        }
    `,
    render() {
        return html`
            <div class="main">
                <slot name="main-slot"></slot>
            </div>
            <div class="secondary">
                <slot name="secondary-slot"></slot>
            </div>
        `;
    },
});

export const multipleSlotsTest = await defineBookTest(
    'multiple slots',
    {
        render() {
            return html`
                <${MultipleSlotsElement}>
                    <p slot="main-slot" data-test-id="multiple-slots-main">main content</p>
                    <p slot="secondary-slot" data-test-id="multiple-slots-secondary-1">one</p>
                    <p slot="secondary-slot" data-test-id="multiple-slots-secondary-2">two</p>
                    <p slot="secondary-slot" data-test-id="multiple-slots-secondary-3">three</p>
                </${MultipleSlotsElement}>
            `;
        },
    },
    {
        async 'main and secondary slots render distinct content'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId('multiple-slots-main'))
                .toHaveText('main content');
            await e2eUtil.expect(page.getByTestId('multiple-slots-secondary-1')).toHaveText('one');
            await e2eUtil.expect(page.getByTestId('multiple-slots-secondary-2')).toHaveText('two');
            await e2eUtil
                .expect(page.getByTestId('multiple-slots-secondary-3'))
                .toHaveText('three');
        },
        async 'all secondary-slot children appear under the secondary container'({e2eUtil, page}) {
            const host = page.locator(MultipleSlotsElement.tagName);
            await e2eUtil.expect(host.locator('[slot="secondary-slot"]')).toHaveCount(3);
        },
    },
);
