import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {type HtmlInterpolation} from 'element-vir';
import {
    defineTable,
    ViraTableOrientation,
    type ViraTable,
    type ViraTableCell,
    type ViraTableRow,
} from './define-table.js';

describe('ViraTable', () => {
    it('defaults to vertical orientation', () => {
        const viraTable = {} as any as ViraTable;
        assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Vertical>();
        assert.tsType(viraTable.headerRow).equals<ViraTableCell<undefined, undefined>[]>();
        assert.tsType(viraTable.rows).equals<ViraTableRow<undefined, any, any>[]>();
    });
    it('can use horizontal orientation', () => {
        const viraTable = {} as any as ViraTable<undefined, ViraTableOrientation.Horizontal>;
        assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Horizontal>();
        assert.tsType(viraTable.headerRow).equals<undefined>();
        assert.tsType(viraTable.rows).equals<ViraTableRow<undefined, any, undefined>[]>();
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
                ViraTableRow<undefined, any, any>[] | ViraTableRow<undefined, any, undefined>[]
            >();

        if (viraTable.orientation === ViraTableOrientation.Horizontal) {
            assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Horizontal>();
            assert.tsType(viraTable.headerRow).equals<undefined>();
            assert.tsType(viraTable.rows).equals<ViraTableRow<undefined, any, undefined>[]>();
        } else {
            assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Vertical>();
            assert.tsType(viraTable.headerRow).equals<ViraTableCell<undefined, undefined>[]>();
            assert.tsType(viraTable.rows).equals<ViraTableRow<undefined, any, any>[]>();
        }
    });
});

describe(defineTable.name, () => {
    it('allows normal header keys', () => {
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
                1,
                2,
                3,
            ],
            (entry) => {
                return {
                    a: `a${entry}`,
                    b: `b${entry}`,
                };
            },
        );
    });
    it('has proper types', () => {
        const {headerRow, orientation, rows} = defineTable(
            [
                {
                    key: 'a',
                },
                {
                    key: 'b',
                },
            ],
            [
                1,
                2,
                3,
            ],
            (entry) => {
                return {
                    a: `a${entry}`,
                    b: `b${entry}`,
                };
            },
        );

        assert.tsType(orientation).equals<ViraTableOrientation.Vertical>();
        assert.strictEquals(orientation, ViraTableOrientation.Vertical);

        assert
            .tsType<NonNullable<(typeof headerRow)[0]>>()
            .equals<{content: HtmlInterpolation; key: 'a' | 'b'; data: undefined}>();
        assert.deepEquals(headerRow[0], {
            content: 'a',
            key: 'a',
            data: undefined,
        });

        assert.tsType<NonNullable<(typeof rows)[0]>>().equals<{
            cells: {content: HtmlInterpolation; key: 'a' | 'b'; data: number}[];
            data: number;
        }>();
        assert.deepEquals(rows[0], {
            cells: [
                {
                    content: 'a1',
                    key: 'a',
                    data: 1,
                },
                {
                    content: 'b1',
                    key: 'b',
                    data: 1,
                },
            ],
            data: 1,
        });
    });
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
                1,
                2,
                3,
            ],
            // @ts-expect-error: missing property in return object
            (entry) => {
                return {
                    a: `a${entry}`,
                };
            },
        );
    });
    it('allows extra header keys', () => {
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
                1,
                2,
                3,
            ],
            (entry) => {
                return {
                    a: `a${entry}`,
                    b: `b${entry}`,
                    c: `c${entry}`,
                };
            },
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
                    1,
                    2,
                ],
                (entry) => {
                    return {
                        a: `a${entry}`,
                        b: `b${entry}`,
                    };
                },
            ],
            expect: {
                orientation: ViraTableOrientation.Vertical,
                headerRow: [
                    {content: 'a', key: 'a', data: undefined},
                    {content: 'b-content', key: 'b', data: undefined},
                ],
                rows: [
                    {
                        cells: [
                            {content: 'a1', key: 'a', data: 1},
                            {content: 'b1', key: 'b', data: 1},
                        ],
                        data: 1,
                    },
                    {
                        cells: [
                            {content: 'a2', key: 'a', data: 2},
                            {content: 'b2', key: 'b', data: 2},
                        ],
                        data: 2,
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
                    1,
                    2,
                ],
                (entry) => {
                    return {
                        a: `a${entry}`,
                        b: `b${entry}`,
                    };
                },
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
                            {content: 'a1', key: 'a', data: 1},
                            {content: 'b1', key: 'b', data: 1},
                        ],
                        data: 1,
                    },
                    {
                        cells: [
                            {content: 'a2', key: 'a', data: 2},
                            {content: 'b2', key: 'b', data: 2},
                        ],
                        data: 2,
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
                    1,
                    2,
                ],
                (entry) => {
                    return {
                        a: `a${entry}`,
                        b: `b${entry}`,
                    };
                },
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
                            {content: 'a', key: 'a', data: undefined},
                            {content: 'a1', key: 'a', data: 1},
                            {content: 'a2', key: 'a', data: 2},
                        ],
                        data: undefined,
                    },
                    {
                        cells: [
                            {content: 'b-content', key: 'b', data: undefined},
                            {content: 'b1', key: 'b', data: 1},
                            {content: 'b2', key: 'b', data: 2},
                        ],
                        data: undefined,
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
                    1,
                    2,
                ],
                (entry) => {
                    return {
                        a: `a${entry}`,
                        b: `b${entry}`,
                    };
                },
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
                            {content: 'a1', key: 'a', data: 1},
                            {content: 'a2', key: 'a', data: 2},
                        ],
                        data: undefined,
                    },
                    {
                        cells: [
                            {content: 'b1', key: 'b', data: 1},
                            {content: 'b2', key: 'b', data: 2},
                        ],
                        data: undefined,
                    },
                ],
            },
        },
    ]);
});
