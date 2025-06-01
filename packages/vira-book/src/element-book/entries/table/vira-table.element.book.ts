import {type AnyFunction, createArray} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {css, html, listen} from 'element-vir';
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
                                    cells: {
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
                    })}
                        ${listen(ViraTable.events.rowClick, (event) => {
                            console.info(event.detail);
                        })}
                    ></${ViraTable}>
                `;
            },
        });
        defineExample({
            title: 'not sticky header',
            render() {
                return html`
                    <${ViraTable.assign({
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
                                    cells: {
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
                            (createArray as AnyFunction)(5, () => {
                                return {
                                    cells: {
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
            title: 'header column',
            render() {
                return html`
                    <${ViraTable.assign({
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
                                    isHeader: true,
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
                            (createArray as AnyFunction)(5, () => {
                                return {
                                    cells: {
                                        a: 'header',
                                        b: 2,
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
