import {assert} from '@augment-vir/assert';
import {defineElement, html} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const SlotNamesElement = defineElement()({
    tagName: 'slot-names-element',
    slotNames: [
        'slot-names-element-primary',
        'slot-names-element-secondary',
    ],
    render({slotNames}) {
        return html`
            <header data-region="primary">
                <slot name=${slotNames['slot-names-element-primary']}></slot>
            </header>
            <footer data-region="secondary">
                <slot name=${slotNames['slot-names-element-secondary']}></slot>
            </footer>
        `;
    },
});

export const slotNamesTest = await defineBookTest(
    'slot names',
    {
        render() {
            return html`
                <${SlotNamesElement}>
                    <span
                        slot=${SlotNamesElement.slotNames['slot-names-element-primary']}
                        data-test-id="slot-names-primary-content"
                    >
                        primary content
                    </span>
                    <span
                        slot=${SlotNamesElement.slotNames['slot-names-element-secondary']}
                        data-test-id="slot-names-secondary-content"
                    >
                        secondary content
                    </span>
                </${SlotNamesElement}>
            `;
        },
    },
    {
        'slot names map keys to themselves when tag-prefixed'() {
            assert.strictEquals(
                SlotNamesElement.slotNames['slot-names-element-primary'],
                'slot-names-element-primary',
            );
            assert.strictEquals(
                SlotNamesElement.slotNames['slot-names-element-secondary'],
                'slot-names-element-secondary',
            );
        },
        async 'content lands in the correct slot regions'({e2eUtil, page}) {
            const host = page.locator(SlotNamesElement.tagName);
            const primarySlotName = SlotNamesElement.slotNames['slot-names-element-primary'];
            const secondarySlotName = SlotNamesElement.slotNames['slot-names-element-secondary'];

            await e2eUtil
                .expect(host.locator(`[slot="${primarySlotName}"]`))
                .toHaveText(/primary content/);
            await e2eUtil
                .expect(host.locator(`[slot="${secondarySlotName}"]`))
                .toHaveText(/secondary content/);
        },
    },
);
