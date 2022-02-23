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
    ];

    it('removes array indexes', () => {
        expect(
            filterOutArrayIndexes(
                experimentArray,
                [
                    1,
                    4,
                    5,
                    6,
                ],
            ),
        ).toEqual([
            'a',
            'c',
            'd',
        ]);
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
        expect(experimentArray).toEqual([
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
        expect(filterOutArrayIndexes(experimentArray, [])).toEqual(experimentArray);
    });
});
