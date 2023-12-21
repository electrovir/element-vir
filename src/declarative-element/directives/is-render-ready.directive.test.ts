import {itCases} from '@augment-vir/browser-testing';
import {isResolved, resolvedOrUndefined} from './is-render-ready.directive';

describe(isResolved.name, () => {
    itCases(isResolved, [
        {
            it: 'rejects promises',
            input: new Promise(() => {}),
            expect: false,
        },
        {
            it: 'accepts errors',
            input: new Error(),
            expect: true,
        },
        {
            it: 'accepts plain values',
            input: {
                stuff: 'hello',
            },
            expect: true,
        },
    ]);
});

describe(resolvedOrUndefined.name, () => {
    const errorInstance = new Error();

    itCases(resolvedOrUndefined, [
        {
            it: 'rejects promises',
            input: new Promise(() => {}),
            expect: undefined,
        },
        {
            it: 'passes errors',
            input: errorInstance,
            expect: errorInstance,
        },
        {
            it: 'accepts plain values',
            input: {
                stuff: 'hello',
            },
            expect: {
                stuff: 'hello',
            },
        },
    ]);
});
