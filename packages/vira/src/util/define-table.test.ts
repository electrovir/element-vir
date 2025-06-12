import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {
    defineTable,
    ViraTableOrientation,
    type ViraTable,
    type ViraTableCell,
    type ViraTableEntry,
    type ViraTableRow,
} from './define-table.js';

describe('ViraTable', () => {
    it('defaults to vertical orientation', () => {
        const viraTable = {} as any as ViraTable;
        assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Vertical>();
        assert.tsType(viraTable.headerRow).equals<ViraTableCell<undefined, undefined>[]>();
        assert
            .tsType(viraTable.rows)
            .equals<ViraTableRow<undefined, ViraTableEntry, ViraTableEntry>[]>();
    });
    it('can use horizontal orientation', () => {
        const viraTable = {} as any as ViraTable<undefined, ViraTableOrientation.Horizontal>;
        assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Horizontal>();
        assert.tsType(viraTable.headerRow).equals<undefined>();
        assert
            .tsType(viraTable.rows)
            .equals<ViraTableRow<undefined, ViraTableEntry | undefined, undefined>[]>();
    });
    it('can be type guarded by orientation', () => {
        const viraTable = {} as any as ViraTable<undefined, ViraTableOrientation>;
        assert
            .tsType(viraTable.orientation)
            .equals<ViraTableOrientation.Horizontal | ViraTableOrientation.Vertical>();
        assert
            .tsType(viraTable.headerRow)
            .equals<ViraTableCell<undefined, undefined>[] | undefined>();
        assert
            .tsType(viraTable.rows)
            .equals<
                | ViraTableRow<undefined, ViraTableEntry, ViraTableEntry>[]
                | ViraTableRow<undefined, ViraTableEntry | undefined, undefined>[]
            >();

        if (viraTable.orientation === ViraTableOrientation.Horizontal) {
            assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Horizontal>();
            assert.tsType(viraTable.headerRow).equals<undefined>();
            assert
                .tsType(viraTable.rows)
                .equals<ViraTableRow<undefined, ViraTableEntry | undefined, undefined>[]>();
        } else {
            assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Vertical>();
            assert.tsType(viraTable.headerRow).equals<ViraTableCell<undefined, undefined>[]>();
            assert
                .tsType(viraTable.rows)
                .equals<ViraTableRow<undefined, ViraTableEntry, ViraTableEntry>[]>();
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
    it('allows extra keys', () => {
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
                    c: 'c1',
                },
                {
                    a: 'a1',
                    b: 'b1',
                    c: 'c2',
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
                    {content: 'a', key: 'a', entry: undefined},
                    {content: 'b-content', key: 'b', entry: undefined},
                ],
                rows: [
                    {
                        cells: [
                            {content: 'a1', key: 'a', entry: {a: 'a1', b: 'b1'}},
                            {content: 'b1', key: 'b', entry: {a: 'a1', b: 'b1'}},
                        ],
                        entry: {a: 'a1', b: 'b1'},
                    },
                    {
                        cells: [
                            {content: 'a2', key: 'a', entry: {a: 'a2', b: 'b2'}},
                            {content: 'b2', key: 'b', entry: {a: 'a2', b: 'b2'}},
                        ],
                        entry: {a: 'a2', b: 'b2'},
                    },
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
                    {
                        cells: [
                            {content: 'a1', key: 'a', entry: {a: 'a1', b: 'b1'}},
                            {content: 'b1', key: 'b', entry: {a: 'a1', b: 'b1'}},
                        ],
                        entry: {a: 'a1', b: 'b1'},
                    },
                    {
                        cells: [
                            {content: 'a2', key: 'a', entry: {a: 'a2', b: 'b2'}},
                            {content: 'b2', key: 'b', entry: {a: 'a2', b: 'b2'}},
                        ],
                        entry: {a: 'a2', b: 'b2'},
                    },
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
                    {
                        cells: [
                            {content: 'a', key: 'a', entry: undefined},
                            {content: 'a1', key: 'a', entry: {a: 'a1', b: 'b1'}},
                            {content: 'a2', key: 'a', entry: {a: 'a2', b: 'b2'}},
                        ],
                        entry: undefined,
                    },
                    {
                        cells: [
                            {content: 'b-content', key: 'b', entry: undefined},
                            {content: 'b1', key: 'b', entry: {a: 'a1', b: 'b1'}},
                            {content: 'b2', key: 'b', entry: {a: 'a2', b: 'b2'}},
                        ],
                        entry: undefined,
                    },
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
                    {
                        cells: [
                            {content: 'a1', key: 'a', entry: {a: 'a1', b: 'b1'}},
                            {content: 'a2', key: 'a', entry: {a: 'a2', b: 'b2'}},
                        ],
                        entry: undefined,
                    },
                    {
                        cells: [
                            {content: 'b1', key: 'b', entry: {a: 'a1', b: 'b1'}},
                            {content: 'b2', key: 'b', entry: {a: 'a2', b: 'b2'}},
                        ],
                        entry: undefined,
                    },
                ],
            },
        },
    ]);
});
