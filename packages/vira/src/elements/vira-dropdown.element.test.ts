import {assert, assertWrap, waitUntil} from '@augment-vir/assert';
import {mapObjectValues, randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {extractElementText, queryThroughShadow, waitForAnimationFrame} from '@augment-vir/web';
import {css, html, listen, testIdSelector} from 'element-vir';
import {Element24Icon} from '../icons/index.js';
import {mockMenuItems} from './pop-up/pop-up-menu-item.mock.js';
import {viraMenuTriggerTestIds} from './pop-up/vira-menu-trigger.element.js';
import {viraMenuTestIds} from './pop-up/vira-menu.element.js';
import {ViraDropdown, viraDropdownTestIds} from './vira-dropdown.element.js';

async function setupDropdownTest(inputs?: Partial<(typeof ViraDropdown)['InputsType']>) {
    const events: {openChange: boolean[]; selectedChange: PropertyKey[][]} = {
        openChange: [],
        selectedChange: [],
    };
    const fixture = await testWeb.render(html`
        <div
            style=${css`
                height: 1000px;
            `}
        >
            <${ViraDropdown.assign({
                options: mockMenuItems,
                selected: [],
                ...inputs,
            })}
                ${listen(ViraDropdown.events.openChange, (event) => {
                    events.openChange.push(!!event.detail);
                })}
                ${listen(ViraDropdown.events.selectedChange, (event) => {
                    events.selectedChange.push(event.detail);
                })}
            ></${ViraDropdown}>
        </div>
    `);

    const instance = assertWrap.instanceOf(
        fixture.querySelector(ViraDropdown.tagName),
        ViraDropdown,
    );

    function findMenu() {
        return queryThroughShadow(instance, testIdSelector(viraMenuTriggerTestIds.menu));
    }

    const triggerElement = instance.shadowRoot.querySelector(
        testIdSelector(viraDropdownTestIds.trigger),
    );
    assert.instanceOf(triggerElement, HTMLElement);

    assert.isNullish(findMenu());
    assert.isEmpty(events.openChange);
    assert.isEmpty(events.selectedChange);

    return {
        events,
        fixture,
        instance,
        triggerElement,
        findMenu,
        queryByTestId: mapObjectValues(viraDropdownTestIds, (testIdKey, testId) => {
            return () => {
                return instance.shadowRoot.querySelector(testIdSelector(testId));
            };
        }),
        async toggle(this: void) {
            const menuExisted: boolean = !!findMenu();

            await testWeb.click(triggerElement);

            await waitUntil.isTruthy(
                () => {
                    const menuExistsNow = !!findMenu();

                    return menuExisted !== menuExistsNow;
                },
                {timeout: {seconds: 1}},
                'the options never popped up',
            );
        },
    };
}

describe(ViraDropdown.tagName, () => {
    it('opens on a click', async () => {
        const {toggle, events} = await setupDropdownTest();

        await toggle();
        assert.deepEquals(events.openChange, [true]);
    });

    it('closes on a click', async () => {
        const {toggle, events, findMenu} = await setupDropdownTest();

        await toggle();
        assert.deepEquals(events.openChange, [true]);
        await toggle();
        assert.deepEquals(events.openChange, [
            true,
            false,
        ]);
        await waitUntil(() => {
            return !findMenu();
        });
    });

    it('selects an option on click', async (testContext) => {
        const {instance, fixture, toggle, events, findMenu} = await setupDropdownTest();

        await toggle();
        const options = queryThroughShadow(instance, testIdSelector(viraMenuTestIds.item), {
            all: true,
        });

        assert.isLengthExactly(options, mockMenuItems.length);
        assert.isDefined(options[1]);
        await testWeb.click(options[1]);

        await waitUntil(() => {
            return !findMenu();
        });
        assert.deepEquals(events.openChange, [
            true,
            false,
        ]);
        assert.deepEquals(events.selectedChange, [
            [1],
        ]);
    });

    it('does not render prefix if nothing is selected', async () => {
        const {queryByTestId} = await setupDropdownTest({
            selectionPrefix: randomString(),
        });
        await waitForAnimationFrame(5);
        assert.isNull(queryByTestId.prefix());
    });

    it('renders a prefix', async () => {
        const prefix = randomString();
        const {queryByTestId} = await setupDropdownTest({
            selectionPrefix: prefix,
            selected: [1],
        });
        const prefixElement = await waitUntil.isTruthy(
            () => {
                return queryByTestId.prefix();
            },
            {timeout: {seconds: 1}},
            'prefix element never showed up',
        );

        assert.strictEquals(extractElementText(prefixElement), prefix);
    });

    it('renders an icon', async () => {
        const {queryByTestId} = await setupDropdownTest({
            icon: Element24Icon,
        });
        await waitUntil.isTruthy(
            () => {
                return queryByTestId.icon();
            },
            {timeout: {seconds: 1}},
            'icon element never showed up',
        );
    });

    it('does not render an icon if not assigned', async () => {
        const {queryByTestId} = await setupDropdownTest();
        await waitForAnimationFrame(5);
        assert.isNull(queryByTestId.icon());
    });

    it('renders a placeholder', async () => {
        const placeholder = randomString();
        const {triggerElement} = await setupDropdownTest({
            placeholder,
        });

        assert.strictEquals(extractElementText(triggerElement), placeholder);
    });
});
