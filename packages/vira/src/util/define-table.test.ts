import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {type HtmlInterpolation} from 'element-vir';
import {defineTable, ViraTableOrientation, type ViraTable} from './define-table.js';

describe('ViraTable', () => {
    it('defaults to vertical orientation', () => {
        const viraTable = {} as any as ViraTable;
        assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Vertical>();
        assert.tsType(viraTable.headerRow).equals<HtmlInterpolation[]>();
        assert.tsType(viraTable.rows).equals<HtmlInterpolation[][]>();
    });
    it('can use horizontal orientation', () => {
        const viraTable = {} as any as ViraTable<ViraTableOrientation.Horizontal>;
        assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Horizontal>();
        assert.tsType(viraTable.headerRow).equals<undefined>();
        assert.tsType(viraTable.rows).equals<HtmlInterpolation[][]>();
    });
    it('can be type guarded by orientation', () => {
        const viraTable = {} as any as ViraTable<ViraTableOrientation>;
        assert
            .tsType(viraTable.orientation)
            .equals<ViraTableOrientation.Horizontal | ViraTableOrientation.Vertical>();
        assert.tsType(viraTable.headerRow).equals<HtmlInterpolation[] | undefined>();
        assert.tsType(viraTable.rows).equals<HtmlInterpolation[][]>();

        if (viraTable.orientation === ViraTableOrientation.Horizontal) {
            assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Horizontal>();
            assert.tsType(viraTable.headerRow).equals<undefined>();
            assert.tsType(viraTable.rows).equals<HtmlInterpolation[][]>();
        } else {
            assert.tsType(viraTable.orientation).equals<ViraTableOrientation.Vertical>();
            assert.tsType(viraTable.headerRow).equals<HtmlInterpolation[]>();
            assert.tsType(viraTable.rows).equals<HtmlInterpolation[][]>();
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
                    'a',
                    'b-content',
                ],
                rows: [
                    [
                        'a1',
                        'b1',
                    ],
                    [
                        'a2',
                        'b2',
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
                        'a1',
                        'b1',
                    ],
                    [
                        'a2',
                        'b2',
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
                        'a',
                        'a1',
                        'a2',
                    ],
                    [
                        'b-content',
                        'b1',
                        'b2',
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
                        'a1',
                        'a2',
                    ],
                    [
                        'b1',
                        'b2',
                    ],
                ],
            },
        },
    ]);
});
