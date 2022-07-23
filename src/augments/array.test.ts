import {assert} from '@open-wc/testing';
import {filterOutArrayIndexes} from './array';

describe(filterOutArrayIndexes.name, () => {
    const experimentArray = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
    ] as const;

    it('removes array indexes', () => {
        assert.deepEqual(
            filterOutArrayIndexes(
                experimentArray,
                [
                    1,
                    4,
                    5,
                    6,
                ],
            ),
            [
                'a',
                'c',
                'd',
            ],
        );
    });

    it('does not modify the original array', () => {
        filterOutArrayIndexes(
            experimentArray,
            [
                1,
                4,
                5,
                6,
            ],
        );
        assert.deepEqual(experimentArray, [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
        ]);
    });

    it("doesn't do anything if no indexes are given to remove", () => {
        assert.deepEqual(
            filterOutArrayIndexes(experimentArray, []) as Readonly<string[]>,
            experimentArray,
        );
    });
});
