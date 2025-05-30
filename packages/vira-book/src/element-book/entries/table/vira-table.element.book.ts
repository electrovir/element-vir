import {type AnyFunction, createArray} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html} from 'element-vir';
import {createTable, ViraTable} from 'vira';
import {elementsBookPage} from '../../elements.book.js';

export const viraTableBookPage = defineBookPage({
    title: ViraTable.tagName,
    parent: elementsBookPage,
    defineExamples({defineExample}) {
        defineExample({
            title: 'basic',
            render() {
                return html`
                    <${ViraTable.assign({
                        stickyOffset: 28,
                        table: createTable(
                            [
                                {
                                    key: 'a',
                                    label: html`
                                        <div
                                            style=${css`
                                                padding: 16px;
                                                padding-left: 0;
                                                font-weight: normal;
                                                color: red;
                                            `}
                                        >
                                            Template Header
                                        </div>
                                    `,
                                },
                                {
                                    key: 'b',
                                    label: 'Header B',
                                },
                                {
                                    key: 'c',
                                    label: 'Header C',
                                },
                            ],
                            (createArray as AnyFunction)(100, () => {
                                return {
                                    value: {
                                        a: 1,
                                        b: html`
                                            <div
                                                style=${css`
                                                    border-bottom: 1px solid #eee;
                                                `}
                                            >
                                                2
                                            </div>
                                        `,
                                        c: 3,
                                    },
                                };
                            }),
                        ),
                    })}></${ViraTable}>
                `;
            },
        });
        defineExample({
            title: 'hidden headers',
            render() {
                return html`
                    <${ViraTable.assign({
                        stickyOffset: 28,
                        hideHeaderRow: true,
                        table: createTable(
                            [
                                {
                                    key: 'a',
                                    label: html`
                                        <div
                                            style=${css`
                                                padding: 16px;
                                                padding-left: 0;
                                                font-weight: normal;
                                                color: red;
                                            `}
                                        >
                                            Template Header
                                        </div>
                                    `,
                                },
                                {
                                    key: 'b',
                                    label: 'Header B',
                                },
                                {
                                    key: 'c',
                                    label: 'Header C',
                                },
                            ],
                            (createArray as AnyFunction)(100, () => {
                                return {
                                    value: {
                                        a: 1,
                                        b: html`
                                            <div
                                                style=${css`
                                                    border-bottom: 1px solid #eee;
                                                `}
                                            >
                                                2
                                            </div>
                                        `,
                                        c: 3,
                                    },
                                };
                            }),
                        ),
                    })}></${ViraTable}>
                `;
            },
        });
        defineExample({
            title: 'not sticky header',
            render() {
                return html`
                    <${ViraTable.assign({
                        stickyOffset: 28,
                        preventStickyHeader: true,
                        table: createTable(
                            [
                                {
                                    key: 'a',
                                    label: html`
                                        <div
                                            style=${css`
                                                border-bottom: 1px solid black;
                                                padding: 3px;
                                            `}
                                        >
                                            Template Header
                                        </div>
                                    `,
                                },
                                {
                                    key: 'b',
                                    label: html`
                                        <div
                                            style=${css`
                                                border-bottom: 1px solid black;
                                                padding: 3px;
                                            `}
                                        >
                                            Header B
                                        </div>
                                    `,
                                },
                                {
                                    key: 'c',
                                    label: html`
                                        <div
                                            style=${css`
                                                border-bottom: 1px solid black;
                                                padding: 3px;
                                            `}
                                        >
                                            Header C
                                        </div>
                                    `,
                                },
                            ],
                            (createArray as AnyFunction)(100, () => {
                                return {
                                    value: {
                                        a: 1,
                                        b: html`
                                            <div
                                                style=${css`
                                                    border-bottom: 1px solid #eee;
                                                `}
                                            >
                                                2
                                            </div>
                                        `,
                                        c: 3,
                                    },
                                };
                            }),
                        ),
                    })}></${ViraTable}>
                `;
            },
        });
    },
});
