import {testGroup} from 'test-vir';
import {deleteArrayIndexes} from './array';

testGroup({
    description: deleteArrayIndexes.name,
    tests: (runTest) => {
        const experimentArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

        runTest({
            description: 'removes array indexes',
            expect: ['a', 'c', 'd'],
            test: () => deleteArrayIndexes(experimentArray, [1, 4, 5, 6]),
        });

        runTest({
            description: 'does not modify the original array',
            expect: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
            test: () => {
                deleteArrayIndexes(experimentArray, [1, 4, 5, 6]);
                return experimentArray;
            },
        });

        runTest({
            description: "doesn't do anything if no indexes are given to remove",
            expect: experimentArray,
            test: () => deleteArrayIndexes(experimentArray, []),
        });
    },
});
