import {defineBookPage} from 'element-book';
import {css, defineElement, html, keyedCache, listen} from 'element-vir';

const keys = [
    'tab-a',
    'tab-b',
    'tab-c',
];

const ClickCounterElement = defineElement<{label: string}>()({
    tagName: 'keyed-cache-click-counter',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 12px;
            border: 1px solid #aaa;
            border-radius: 4px;
            background: #f9f9f9;
        }

        .count {
            font-size: 24px;
            font-weight: bold;
        }

        button {
            padding: 6px 12px;
            cursor: pointer;
        }

        input {
            padding: 4px 8px;
        }
    `,
    state() {
        return {
            clickCount: 0,
            note: '',
        };
    },
    render({state, updateState, inputs}) {
        return html`
            <strong>${inputs.label}</strong>
            <span class="count">Clicks: ${state.clickCount}</span>
            <button
                ${listen('click', () => {
                    updateState({
                        clickCount: state.clickCount + 1,
                    });
                })}
            >
                Increment
            </button>
            <input
                placeholder="Type a note..."
                .value=${state.note}
                ${listen('input', (event) => {
                    updateState({
                        note: (event.target as HTMLInputElement).value,
                    });
                })}
            />
        `;
    },
});

export const keyedCacheBookPage = defineBookPage({
    title: 'keyed cache',
    parent: undefined,
    defineExamples({defineExample}) {
        defineExample({
            title: 'swap tabs with cached inputs',
            styles: css`
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
            `,
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
            title: 'swap tabs with cached element state',
            styles: css`
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

                .hint {
                    font-size: 12px;
                    color: #666;
                }
            `,
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
                        Click the button and type a note, then switch tabs and switch back. The
                        click count and note are stored in the child element's internal state, not
                        just DOM state, and are preserved by keyedCache.
                    </p>

                    ${keyedCache(
                        state.activeKey,
                        html`
                            <${ClickCounterElement.assign({
                                label: state.activeKey,
                            })}></${ClickCounterElement}>
                        `,
                    )}
                `;
            },
        });
    },
});
