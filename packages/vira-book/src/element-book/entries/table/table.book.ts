import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {
    defineTable,
    ViraTableOrientation,
    type ViraTableEntry,
    type ViraTableHeaders,
    type ViraTableOptions,
} from 'vira';
import {utilBookPage} from '../../top-level-pages.js';

const headers = [
    {
        key: 'a',
    },
    {
        key: 'b',
        content: 'b-content',
    },
] as const satisfies ViraTableHeaders;

const entries = [
    {
        a: 'a1',
        b: 'b1',
    },
    {
        a: 'a2',
        b: 'b2',
    },
    {
        a: 'a3',
        b: 'b3',
    },
] satisfies ReadonlyArray<Readonly<ViraTableEntry<typeof headers>>>;

const examples: {
    title: string;
    options?: ViraTableOptions | undefined;
}[] = [
    {
        title: 'Vertical (default)',
    },
    {
        title: 'Vertical without headers',
        options: {
            hideHeaders: true,
        },
    },
    {
        title: 'Horizontal',
        options: {
            orientation: ViraTableOrientation.Horizontal,
        },
    },
    {
        title: 'Horizontal without headers',
        options: {
            hideHeaders: true,
            orientation: ViraTableOrientation.Horizontal,
        },
    },
];

export const defineTableBookPage = defineBookPage({
    parent: utilBookPage,
    title: defineTable.name,
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                render() {
                    const table = defineTable(headers, entries, example.options);

                    return html`
                        <table>
                            <thead>
                                ${(table.headerRow || []).map(
                                    (header) => html`
                                        <th>${header.content}</th>
                                    `,
                                )}
                            </thead>
                            <tbody>
                                ${table.rows.map((row) => {
                                    const cells = row.map((cell) => {
                                        return html`
                                            <td>${cell.content}</td>
                                        `;
                                    });

                                    return html`
                                        <tr>${cells}</tr>
                                    `;
                                })}
                            </tbody>
                        </table>
                    `;
                },
            });
        });
    },
});
