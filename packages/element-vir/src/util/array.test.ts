import {assert} from '@augment-vir/assert';
import {createArray} from '@augment-vir/common';
import {describe, it, itCases} from '@augment-vir/test';
import {insertAndRemoveValues} from './array.js';

describe(insertAndRemoveValues.name, () => {
    itCases(insertAndRemoveValues, [
        {
            it: 'does not modify an array if no operations are given',
            inputs: [
                [
                    'a',
                    'b',
                    'c',
                ],
                [],
                [],
            ],
            expect: [
                'a',
                'b',
                'c',
            ],
        },
        {
            it: 'does not modify an empty array',
            inputs: [
                [],
                [
                    {
                        index: 4,
                        values: ['a value'],
                    },
                ],
                [
                    8,
                    9,
                ],
            ],
            expect: [],
        },
        {
            it: 'does not modify an empty array',
            inputs: [
                [],
                [
                    {
                        index: 4,
                        values: ['a value'],
                    },
                ],
                [
                    8,
                    9,
                ],
            ],
            expect: [],
        },
        {
            it: 'will insert a value into index 0 of an empty array, ignoring everything else',
            inputs: [
                [],
                [
                    {
                        index: 0,
                        values: ['a value 1'],
                    },
                    {
                        index: 5,
                        values: ['a value 2'],
                    },
                ],
                [
                    8,
                    9,
                ],
            ],
            expect: ['a value 1'],
        },
        {
            it: 'inserts values into an array with existing values',
            inputs: [
                [
                    'a',
                    'b',
                    'c',
                    'd',
                    'e',
                    'f',
                    'g',
                ],
                [
                    {
                        index: 3,
                        values: [
                            'extra 1-1',
                            'extra 1-2',
                            'extra 1-3',
                        ],
                    },
                    {
                        index: 5,
                        values: ['extra 2'],
                    },
                ],
                [
                    0,
                    6,
                ],
            ],
            expect: [
                'b',
                'c',
                'extra 1-1',
                'extra 1-2',
                'extra 1-3',
                'd',
                'e',
                'extra 2',
                'f',
            ],
        },
        {
            it: 'ignores a negative insertion index',
            inputs: [
                [
                    'a',
                    'b',
                ],
                [
                    {
                        index: -1,
                        values: ['ignored'],
                    },
                ],
                [],
            ],
            expect: [
                'a',
                'b',
            ],
        },
        {
            it: 'ignores an insertion index beyond the end of the array',
            inputs: [
                [
                    'a',
                    'b',
                ],
                [
                    {
                        index: 5,
                        values: ['ignored'],
                    },
                ],
                [],
            ],
            expect: [
                'a',
                'b',
            ],
        },
        {
            it: 'ignores an insertion index equal to the array length',
            inputs: [
                [
                    'a',
                    'b',
                ],
                [
                    {
                        index: 2,
                        values: ['ignored'],
                    },
                ],
                [],
            ],
            expect: [
                'a',
                'b',
            ],
        },
        {
            it: 'ignores an insertion with no values',
            inputs: [
                [
                    'a',
                    'b',
                ],
                [
                    {
                        index: 0,
                        values: [],
                    },
                ],
                [],
            ],
            expect: [
                'a',
                'b',
            ],
        },
        {
            it: 'ignores a negative removal index',
            inputs: [
                [
                    'a',
                    'b',
                ],
                [],
                [-1],
            ],
            expect: [
                'a',
                'b',
            ],
        },
        {
            it: 'ignores removal indexes at or beyond the array length',
            inputs: [
                [
                    'a',
                    'b',
                ],
                [],
                [
                    2,
                    10,
                ],
            ],
            expect: [
                'a',
                'b',
            ],
        },
        {
            it: 'ignores duplicated removal indexes',
            inputs: [
                [
                    'a',
                    'b',
                    'c',
                ],
                [],
                [
                    1,
                    1,
                ],
            ],
            expect: [
                'a',
                'c',
            ],
        },
        {
            it: 'removes every entry',
            inputs: [
                [
                    'a',
                    'b',
                ],
                [],
                [
                    0,
                    1,
                ],
            ],
            expect: [],
        },
        {
            it: 'still inserts values at an index that was also removed',
            inputs: [
                [
                    'a',
                    'b',
                    'c',
                ],
                [
                    {
                        index: 1,
                        values: ['inserted'],
                    },
                ],
                [1],
            ],
            expect: [
                'a',
                'inserted',
                'c',
            ],
        },
        {
            it: 'places later insertions before earlier insertions at the same index',
            inputs: [
                [
                    'a',
                    'b',
                ],
                [
                    {
                        index: 1,
                        values: ['first'],
                    },
                    {
                        index: 1,
                        values: ['second'],
                    },
                ],
                [],
            ],
            expect: [
                'a',
                'second',
                'first',
                'b',
            ],
        },
        {
            it: 'ignores removals on an empty array',
            inputs: [
                [],
                [],
                [0],
            ],
            expect: [],
        },
        {
            it: 'inserts an index 0 insertion into an empty array when it is the only insertion',
            inputs: [
                [],
                [
                    {
                        index: 0,
                        values: ['inserted'],
                    },
                ],
                [],
            ],
            expect: ['inserted'],
        },
        {
            it: 'prepends values to a non-empty array',
            inputs: [
                [
                    'a',
                    'b',
                ],
                [
                    {
                        index: 0,
                        values: [
                            'first',
                            'second',
                        ],
                    },
                ],
                [],
            ],
            expect: [
                'first',
                'second',
                'a',
                'b',
            ],
        },
        {
            it: 'removes only the last entry',
            inputs: [
                [
                    'a',
                    'b',
                    'c',
                ],
                [],
                [2],
            ],
            expect: [
                'a',
                'b',
            ],
        },
        {
            it: 'removes only the first entry',
            inputs: [
                [
                    'a',
                    'b',
                    'c',
                ],
                [],
                [0],
            ],
            expect: [
                'b',
                'c',
            ],
        },
        {
            it: 'ignores an index 0 insertion with no values on an empty array',
            inputs: [
                [],
                [
                    {
                        index: 0,
                        values: [],
                    },
                ],
                [],
            ],
            expect: [],
        },
        {
            it: 'ignores removals when inserting into an empty array',
            inputs: [
                [],
                [
                    {
                        index: 0,
                        values: ['inserted'],
                    },
                ],
                [
                    0,
                    1,
                ],
            ],
            expect: ['inserted'],
        },
        {
            it: 'inserts all index 0 values into an empty array when a nonzero index also exists',
            inputs: [
                [],
                [
                    {
                        index: 0,
                        values: [
                            'kept 1',
                            'kept 2',
                        ],
                    },
                    {
                        index: 9,
                        values: ['dropped'],
                    },
                ],
                [],
            ],
            expect: [
                'kept 1',
                'kept 2',
            ],
        },
    ]);

    it('never mutates the original array', () => {
        const originalArray = [
            'a',
            'b',
            'c',
        ];

        const result = insertAndRemoveValues(
            originalArray,
            [
                {
                    index: 1,
                    values: ['inserted'],
                },
            ],
            [2],
        );

        assert.deepEquals(originalArray, [
            'a',
            'b',
            'c',
        ]);
        assert.deepEquals(result, [
            'a',
            'inserted',
            'b',
        ]);
        assert.notStrictEquals(result, originalArray);
    });

    it('never mutates the operation inputs', () => {
        const insertion = {
            index: 0,
            values: [
                'inserted 1',
                'inserted 2',
            ],
        };
        const valuesToInsert = [insertion];
        const indexesToRemove = [
            1,
            5,
        ];

        insertAndRemoveValues(
            [
                'a',
                'b',
            ],
            valuesToInsert,
            indexesToRemove,
        );

        assert.deepEquals(
            {
                insertion,
                valuesToInsert,
                indexesToRemove,
            },
            {
                insertion: {
                    index: 0,
                    values: [
                        'inserted 1',
                        'inserted 2',
                    ],
                },
                valuesToInsert: [insertion],
                indexesToRemove: [
                    1,
                    5,
                ],
            },
        );
    });

    it('handles a large array in a single pass', () => {
        const entryCount = 10_000;
        const originalArray = createArray(entryCount, (index) => {
            return index;
        });
        const startTime = performance.now();

        const result = insertAndRemoveValues(
            originalArray,
            [
                {
                    index: 5000,
                    values: [-1],
                },
            ],
            createArray(entryCount / 2, (index) => {
                return index * 2;
            }),
        );
        const duration = performance.now() - startTime;

        assert.isLengthExactly(result, entryCount / 2 + 1);
        assert.strictEquals(result[0], 1);
        /**
         * A single linear pass takes single digit milliseconds. The budget is only this generous
         * because it exists to catch a change in complexity, not to measure a machine.
         */
        assert.isBelow(duration, 500);
    });

    it('returns a new array even when there is nothing to do', () => {
        const originalArray = [
            'a',
            'b',
        ];

        assert.notStrictEquals(insertAndRemoveValues(originalArray, [], []), originalArray);
    });
});
