import {defineElement, html, listen, onDomRendered, renderIf, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const cleanupSink: {count: number} = {
    count: 0,
};

const LifecycleChildElement = defineElement()({
    tagName: 'lifecycle-child-element',
    state() {
        return {
            initFired: 0,
            renderDomCount: 0,
        };
    },
    init({updateState, state}) {
        updateState({
            initFired: state.initFired + 1,
        });
    },
    cleanup() {
        cleanupSink.count += 1;
    },
    testIds: [
        'init-report',
        'render-count',
    ],
    render({state, updateState, testIds}) {
        return html`
            <span ${testId(testIds['init-report'])}>${state.initFired}</span>
            <span
                ${testId(testIds['render-count'])}
                ${onDomRendered(() => {
                    updateState({
                        renderDomCount: state.renderDomCount + 1,
                    });
                })}
            >
                ${state.renderDomCount}
            </span>
        `;
    },
});

const LifecycleParentElement = defineElement()({
    tagName: 'lifecycle-parent-element',
    state() {
        return {
            bump: 0,
            showChild: true,
        };
    },
    testIds: [
        'bump',
        'toggle-child',
        'cleanup-report',
    ],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.bump)}
                ${listen('click', () => {
                    updateState({
                        bump: state.bump + 1,
                    });
                })}
            >
                bump (${state.bump})
            </button>
            <button
                ${testId(testIds['toggle-child'])}
                ${listen('click', () => {
                    updateState({
                        showChild: !state.showChild,
                    });
                })}
            >
                toggle child
            </button>
            <span ${testId(testIds['cleanup-report'])}>${cleanupSink.count}</span>
            ${renderIf(
                state.showChild,
                html`
                    <${LifecycleChildElement}></${LifecycleChildElement}>
                `,
            )}
        `;
    },
});

export const lifecycleTest = await defineBookTest(
    'lifecycle',
    {
        render() {
            return html`
                <${LifecycleParentElement}></${LifecycleParentElement}>
            `;
        },
    },
    {
        async 'init fires exactly once before first render'({e2eUtil, page}) {
            await e2eUtil
                .expect(page.getByTestId(LifecycleChildElement.testIds['init-report']))
                .toHaveText('1');

            await page.getByTestId(LifecycleParentElement.testIds.bump).click();
            await page.getByTestId(LifecycleParentElement.testIds.bump).click();

            await e2eUtil
                .expect(page.getByTestId(LifecycleChildElement.testIds['init-report']))
                .toHaveText('1');
        },
        async 'onDomRendered fires on every render'({e2eUtil, page}) {
            const count = page.getByTestId(LifecycleChildElement.testIds['render-count']);
            const initial = Number(await count.textContent());

            await page.getByTestId(LifecycleParentElement.testIds.bump).click();
            await e2eUtil.expect(count).not.toHaveText(String(initial));
        },
        async 'cleanup fires when element is removed from the DOM'({e2eUtil, page}) {
            const cleanupReport = page.getByTestId(
                LifecycleParentElement.testIds['cleanup-report'],
            );
            const before = Number(await cleanupReport.textContent());

            await page.getByTestId(LifecycleParentElement.testIds['toggle-child']).click();
            /** Force an outer re-render so the cleanup-counter span re-reads its value. */
            await page.getByTestId(LifecycleParentElement.testIds.bump).click();
            await e2eUtil.expect(cleanupReport).toHaveText(String(before + 1));
        },
    },
);
