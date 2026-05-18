import {css, defineElement, html, keyedCache, listen, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const KeyedCacheChildElement = defineElement<{label: string}>()({
    tagName: 'keyed-cache-child-element',
    state() {
        return {
            count: 0,
        };
    },
    testIds: [
        'tab-key',
        'increment',
        'count',
        'input',
    ],
    render({state, updateState, inputs, testIds}) {
        return html`
            <span ${testId(testIds['tab-key'])}>${inputs.label}</span>
            <button
                ${testId(testIds.increment)}
                ${listen('click', () => {
                    updateState({
                        count: state.count + 1,
                    });
                })}
            >
                inc
            </button>
            <span ${testId(testIds.count)}>${state.count}</span>
            <input ${testId(testIds.input)} type="text" />
        `;
    },
});

const KeyedCacheParentElement = defineElement()({
    tagName: 'keyed-cache-parent-element',
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
    testIds: [
        'select-a',
        'select-b',
    ],
    render({state, updateState, testIds}) {
        return html`
            <button
                ${testId(testIds['select-a'])}
                ${listen('click', () => {
                    updateState({
                        activeKey: 'a',
                    });
                })}
            >
                a
            </button>
            <button
                ${testId(testIds['select-b'])}
                ${listen('click', () => {
                    updateState({
                        activeKey: 'b',
                    });
                })}
            >
                b
            </button>
            ${keyedCache(
                state.activeKey,
                html`
                    <${KeyedCacheChildElement.assign({
                        label: state.activeKey,
                    })}></${KeyedCacheChildElement}>
                `,
            )}
        `;
    },
});

export const keyedCacheTest = await defineBookTest(
    'keyed cache',
    {
        render() {
            return html`
                <${KeyedCacheParentElement}></${KeyedCacheParentElement}>
            `;
        },
    },
    {
        async 'keyedCache preserves element state across key swaps'({e2eUtil, page}) {
            const child = page.locator(KeyedCacheChildElement.tagName);
            const count = child.getByTestId(KeyedCacheChildElement.testIds.count);
            const input = child.getByTestId(KeyedCacheChildElement.testIds.input);

            await e2eUtil
                .expect(child.getByTestId(KeyedCacheChildElement.testIds['tab-key']))
                .toHaveText('a');
            await e2eUtil.expect(count).toHaveText('0');

            await child.getByTestId(KeyedCacheChildElement.testIds.increment).click();
            await child.getByTestId(KeyedCacheChildElement.testIds.increment).click();
            await input.fill('hello a');
            await e2eUtil.expect(count).toHaveText('2');

            await page.getByTestId(KeyedCacheParentElement.testIds['select-b']).click();
            await e2eUtil
                .expect(child.getByTestId(KeyedCacheChildElement.testIds['tab-key']))
                .toHaveText('b');
            await e2eUtil.expect(count).toHaveText('0');

            await child.getByTestId(KeyedCacheChildElement.testIds.increment).click();
            await e2eUtil.expect(count).toHaveText('1');
            await input.fill('hello b');

            await page.getByTestId(KeyedCacheParentElement.testIds['select-a']).click();
            await e2eUtil
                .expect(child.getByTestId(KeyedCacheChildElement.testIds['tab-key']))
                .toHaveText('a');
            await e2eUtil.expect(count).toHaveText('2');
            await e2eUtil.expect(input).toHaveValue('hello a');

            await page.getByTestId(KeyedCacheParentElement.testIds['select-b']).click();
            await e2eUtil.expect(count).toHaveText('1');
            await e2eUtil.expect(input).toHaveValue('hello b');
        },
    },
);
