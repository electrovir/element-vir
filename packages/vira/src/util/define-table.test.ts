import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {
    defineTable,
    ViraTableOrientation,
    type ViraTable,
    type ViraTableCell,
} from './define-table.js';

describe('ViraTable', () => {
    it('defaults to vertical orientation', () => {
        const viraTable = {} as any as ViraTable;
        assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Vertical>();
        assert.tsType(viraTable.headerRow).equals<ViraTableCell[]>();
        assert.tsType(viraTable.rows).equals<ViraTableCell[][]>();
    });
    it('can use horizontal orientation', () => {
        const viraTable = {} as any as ViraTable<undefined, ViraTableOrientation.Horizontal>;
        assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Horizontal>();
        assert.tsType(viraTable.headerRow).equals<undefined>();
        assert.tsType(viraTable.rows).equals<ViraTableCell[][]>();
    });
    it('can be type guarded by orientation', () => {
        const viraTable = {} as any as ViraTable<undefined, ViraTableOrientation>;
        assert
            .tsType(viraTable.orientation)
            .equals<ViraTableOrientation.Horizontal | ViraTableOrientation.Vertical>();
        assert.tsType(viraTable.headerRow).equals<ViraTableCell[] | undefined>();
        assert.tsType(viraTable.rows).equals<ViraTableCell[][]>();

        if (viraTable.orientation === ViraTableOrientation.Horizontal) {
            assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Horizontal>();
            assert.tsType(viraTable.headerRow).equals<undefined>();
            assert.tsType(viraTable.rows).equals<ViraTableCell[][]>();
        } else {
            assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Vertical>();
            assert.tsType(viraTable.headerRow).equals<ViraTableCell[]>();
            assert.tsType(viraTable.rows).equals<ViraTableCell[][]>();
        }
    });
});

describe(defineTable.name, () => {
    it('requires all header keys', () => {
        defineTable(
            [
                {
                    key: 'a',
                },
                {
                    key: 'b',
                },
            ],
            [
                {
                    a: 'a1',
                    b: 'b1',
                },
                // @ts-expect-error: missing key `b`
                {
                    a: 'a2',
                },
                {
                    a: 'a3',
                    b: 'b3',
                    // @ts-expect-error: unexpected key `c`
                    c: 'c3',
                },
            ],
        );
    });

    itCases(defineTable, [
        {
            it: 'creates a vertical table',
            inputs: [
                [
                    {
                        key: 'a',
                    },
                    {
                        key: 'b',
                        content: 'b-content',
                    },
                ],
                [
                    {
                        a: 'a1',
                        b: 'b1',
                    },
                    {
                        a: 'a2',
                        b: 'b2',
                    },
                ],
            ],
            expect: {
                orientation: ViraTableOrientation.Vertical,
                headerRow: [
                    {content: 'a', key: 'a'},
                    {content: 'b-content', key: 'b'},
                ],
                rows: [
                    [
                        {content: 'a1', key: 'a'},
                        {content: 'b1', key: 'b'},
                    ],
                    [
                        {content: 'a2', key: 'a'},
                        {content: 'b2', key: 'b'},
                    ],
                ],
            },
        },
        {
            it: 'hides vertical headers',
            inputs: [
                [
                    {
                        key: 'a',
                    },
                    {
                        key: 'b',
                        content: 'b-content',
                    },
                ],
                [
                    {
                        a: 'a1',
                        b: 'b1',
                    },
                    {
                        a: 'a2',
                        b: 'b2',
                    },
                ],
                {
                    hideHeaders: true,
                },
            ],
            expect: {
                orientation: ViraTableOrientation.Vertical,
                headerRow: [],
                rows: [
                    [
                        {content: 'a1', key: 'a'},
                        {content: 'b1', key: 'b'},
                    ],
                    [
                        {content: 'a2', key: 'a'},
                        {content: 'b2', key: 'b'},
                    ],
                ],
            },
        },
        {
            it: 'creates a horizontal table',
            inputs: [
                [
                    {
                        key: 'a',
                    },
                    {
                        key: 'b',
                        content: 'b-content',
                    },
                ],
                [
                    {
                        a: 'a1',
                        b: 'b1',
                    },
                    {
                        a: 'a2',
                        b: 'b2',
                    },
                ],
                {
                    orientation: ViraTableOrientation.Horizontal,
                },
            ],
            expect: {
                orientation: ViraTableOrientation.Horizontal,
                headerRow: undefined,
                rows: [
                    [
                        {content: 'a', key: 'a'},
                        {content: 'a1', key: 'a'},
                        {content: 'a2', key: 'a'},
                    ],
                    [
                        {content: 'b-content', key: 'b'},
                        {content: 'b1', key: 'b'},
                        {content: 'b2', key: 'b'},
                    ],
                ],
            },
        },
        {
            it: 'hides horizontal headers',
            inputs: [
                [
                    {
                        key: 'a',
                    },
                    {
                        key: 'b',
                        content: 'b-content',
                    },
                ],
                [
                    {
                        a: 'a1',
                        b: 'b1',
                    },
                    {
                        a: 'a2',
                        b: 'b2',
                    },
                ],
                {
                    orientation: ViraTableOrientation.Horizontal,
                    hideHeaders: true,
                },
            ],
            expect: {
                orientation: ViraTableOrientation.Horizontal,
                headerRow: undefined,
                rows: [
                    [
                        {content: 'a1', key: 'a'},
                        {content: 'a2', key: 'a'},
                    ],
                    [
                        {content: 'b1', key: 'b'},
                        {content: 'b2', key: 'b'},
                    ],
                ],
            },
        },
    ]);
});
