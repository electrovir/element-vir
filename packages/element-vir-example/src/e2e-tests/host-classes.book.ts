import {defineElement, html, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const HostClassesElement = defineElement()({
    tagName: 'host-classes-element',
    state() {
        return {
            isActive: false,
        };
    },
    hostClasses: {
        'host-classes-element-active': ({state}) => state.isActive,
        'host-classes-element-manual': false,
    },
    testIds: [
        'toggle-state',
        'toggle-manual',
    ],
    render({state, updateState, host, testIds}) {
        return html`
            <button
                ${testId(testIds['toggle-state'])}
                ${listen('click', () => {
                    updateState({
                        isActive: !state.isActive,
                    });
                })}
            >
                toggle state
            </button>
            <button
                ${testId(testIds['toggle-manual'])}
                ${listen('click', () => {
                    host.classList.toggle(
                        HostClassesElement.hostClasses['host-classes-element-manual'],
                    );
                })}
            >
                toggle manual
            </button>
        `;
    },
});

export const hostClassesTest = await defineBookTest(
    'host classes',
    {
        render() {
            return html`
                <${HostClassesElement}></${HostClassesElement}>
            `;
        },
    },
    {
        async 'host class toggles based on state callback'({e2eUtil, page}) {
            const host = page.locator(HostClassesElement.tagName);

            await e2eUtil.expect(host).not.toHaveClass(/host-classes-element-active/);
            await page.getByTestId(HostClassesElement.testIds['toggle-state']).click();
            await e2eUtil.expect(host).toHaveClass(/host-classes-element-active/);
            await page.getByTestId(HostClassesElement.testIds['toggle-state']).click();
            await e2eUtil.expect(host).not.toHaveClass(/host-classes-element-active/);
        },
        async 'manual host class can be toggled imperatively'({e2eUtil, page}) {
            const host = page.locator(HostClassesElement.tagName);

            await e2eUtil.expect(host).not.toHaveClass(/host-classes-element-manual/);
            await page.getByTestId(HostClassesElement.testIds['toggle-manual']).click();
            await e2eUtil.expect(host).toHaveClass(/host-classes-element-manual/);
        },
    },
);
