import {itCases} from '@augment-vir/browser-testing';
import {referenceEqualityCheck} from './equality';

describe(referenceEqualityCheck.name, () => {
    const sharedObject = {a: 'start', b: 'end'} as const;

    itCases(referenceEqualityCheck, [
        {
            it: 'accepts identical numbers',
            inputs: [
                1,
                1,
            ],
            expect: true,
        },
        {
            it: 'rejects different numbers',
            inputs: [
                1,
                2,
            ],
            expect: false,
        },
        {
            it: 'rejects different objects that are otherwise identical',
            inputs: [
                {a: 'true'},
                {a: 'true'},
            ],
            expect: false,
        },
        {
            it: 'accepts the same object',
            inputs: [
                sharedObject,
                sharedObject,
            ],
            expect: true,
        },
    ]);
});
