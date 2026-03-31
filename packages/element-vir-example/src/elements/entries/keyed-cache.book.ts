import {defineBookPage} from 'element-book';
import {css, defineElement, html, keyedCache, listen} from 'element-vir';

const keys = [
    'tab-a',
    'tab-b',
    'tab-c',
];

const sharedStyles = css`
    :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
        font-family: sans-serif;
    }

    label {
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .tab-content {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .hint {
        font-size: 12px;
        color: #666;
    }
`;

const CacheKeyInitElement = defineElement<{activeKey: string}>()({
    tagName: 'vir-cache-key-init-example',
    styles: sharedStyles,
    cacheKey({inputs}) {
        return inputs.activeKey;
    },
    render({inputs}) {
        return html`
            <div class="tab-content">
                <strong>${inputs.activeKey}</strong>
                <input placeholder="Type something here..." />
                <textarea placeholder="Or type here..."></textarea>
                <label>
                    <input type="checkbox" />
                    Check me
                </label>
            </div>
        `;
    },
});

export const keyedCacheBookPage = defineBookPage({
    title: 'keyed cache',
    parent: undefined,
    defineExamples({defineExample}) {
        defineExample({
            title: 'keyedCache directive',
            styles: sharedStyles,
            state() {
                return {
                    activeKey: 'tab-a',
                };
            },
            render({state, updateState}) {
                return html`
                    <label>
                        Active tab:
                        <select
                            ${listen('change', (event) => {
                                updateState({
                                    activeKey: (event.target as HTMLSelectElement).value,
                                });
                            })}
                        >
                            ${keys.map((key) => {
                                return html`
                                    <option value=${key} ?selected=${key === state.activeKey}>
                                        ${key}
                                    </option>
                                `;
                            })}
                        </select>
                    </label>

                    <p class="hint">
                        Type something in the inputs below, switch tabs, then switch back. Your
                        typed text and checkbox state will be preserved.
                    </p>

                    ${keyedCache(
                        state.activeKey,
                        html`
                            <div class="tab-content">
                                <strong>${state.activeKey}</strong>
                                <input placeholder="Type something here..." />
                                <textarea placeholder="Or type here..."></textarea>
                                <label>
                                    <input type="checkbox" />
                                    Check me
                                </label>
                            </div>
                        `,
                    )}
                `;
            },
        });

        defineExample({
            title: 'cacheKey init property',
            styles: sharedStyles,
            state() {
                return {
                    activeKey: 'tab-a',
                };
            },
            render({state, updateState}) {
                return html`
                    <label>
                        Active tab:
                        <select
                            ${listen('change', (event) => {
                                updateState({
                                    activeKey: (event.target as HTMLSelectElement).value,
                                });
                            })}
                        >
                            ${keys.map((key) => {
                                return html`
                                    <option value=${key} ?selected=${key === state.activeKey}>
                                        ${key}
                                    </option>
                                `;
                            })}
                        </select>
                    </label>

                    <p class="hint">
                        Same behavior, but using the cacheKey property on defineElement instead of
                        the keyedCache directive directly.
                    </p>

                    <${CacheKeyInitElement.assign({
                        activeKey: state.activeKey,
                    })}></${CacheKeyInitElement}>
                `;
            },
        });
    },
});
