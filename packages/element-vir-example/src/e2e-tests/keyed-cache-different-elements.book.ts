import {css, defineElement, html, keyedCache, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const KeyedCacheDiffA = defineElement()({
    tagName: 'keyed-cache-diff-a',
    state() {
        return {
            count: 0,
        };
    },
    testIds: [
        'output',
        'inc',
        'count',
    ],
    render({state, updateState, testIds}) {
        return html`
            <span ${testId(testIds.output)}>A</span>
            <button
                ${testId(testIds.inc)}
                ${listen('click', () => {
                    updateState({
                        count: state.count + 1,
                    });
                })}
            >
                inc a
            </button>
            <span ${testId(testIds.count)}>${state.count}</span>
        `;
    },
});

const KeyedCacheDiffB = defineElement()({
    tagName: 'keyed-cache-diff-b',
    state() {
        return {
            count: 0,
        };
    },
    testIds: [
        'output',
        'inc',
        'count',
    ],
    render({state, updateState, testIds}) {
        return html`
            <span ${testId(testIds.output)}>B</span>
            <button
                ${testId(testIds.inc)}
                ${listen('click', () => {
                    updateState({
                        count: state.count + 1,
                    });
                })}
            >
                inc b
            </button>
            <span ${testId(testIds.count)}>${state.count}</span>
        `;
    },
});

const KeyedCacheDiffParent = defineElement()({
    tagName: 'keyed-cache-diff-parent',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    `,
    state() {
        return {
            activeKey: 'a',
        };
    },
    testIds: ['swap'],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds.swap)}
                ${listen('click', () => {
                    updateState({
                        activeKey: state.activeKey === 'a' ? 'b' : 'a',
                    });
                })}
            >
                swap
            </button>
            ${keyedCache(
                state.activeKey,
                state.activeKey === 'a'
                    ? html`
                          <${KeyedCacheDiffA}></${KeyedCacheDiffA}>
                      `
                    : html`
                          <${KeyedCacheDiffB}></${KeyedCacheDiffB}>
                      `,
            )}
        `;
    },
});

export const keyedCacheDifferentElementsTest = await defineBookTest(
    'keyed cache different elements',
    {
        render() {
            return html`
                <${KeyedCacheDiffParent}></${KeyedCacheDiffParent}>
            `;
        },
    },
    {
        async 'keyedCache preserves each cached element separately'({e2eUtil, page}) {
            const aCount = page.getByTestId(KeyedCacheDiffA.testIds.count);
            const bCount = page.getByTestId(KeyedCacheDiffB.testIds.count);

            await e2eUtil.expect(page.getByTestId(KeyedCacheDiffA.testIds.output)).toHaveText('A');

            await page.getByTestId(KeyedCacheDiffA.testIds.inc).click();
            await page.getByTestId(KeyedCacheDiffA.testIds.inc).click();
            await e2eUtil.expect(aCount).toHaveText('2');

            await page.getByTestId(KeyedCacheDiffParent.testIds.swap).click();
            await e2eUtil.expect(page.getByTestId(KeyedCacheDiffB.testIds.output)).toHaveText('B');
            await page.getByTestId(KeyedCacheDiffB.testIds.inc).click();
            await e2eUtil.expect(bCount).toHaveText('1');

            await page.getByTestId(KeyedCacheDiffParent.testIds.swap).click();
            await e2eUtil.expect(aCount).toHaveText('2');

            await page.getByTestId(KeyedCacheDiffParent.testIds.swap).click();
            await e2eUtil.expect(bCount).toHaveText('1');
        },
    },
);
