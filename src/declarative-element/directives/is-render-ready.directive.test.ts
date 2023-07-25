import {itCases} from '@augment-vir/browser-testing';
import {isRenderReady, isResolved, readyOrUndefined} from './is-render-ready.directive';

describe(isRenderReady.name, () => {
    itCases(isRenderReady, [
        {
            it: 'rejects promises',
            input: new Promise(() => {}),
            expect: false,
        },
        {
            it: 'rejects errors',
            input: new Error(),
            expect: false,
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

describe(readyOrUndefined.name, () => {
    itCases(readyOrUndefined, [
        {
            it: 'rejects promises',
            input: new Promise(() => {}),
            expect: undefined,
        },
        {
            it: 'rejects errors',
            input: new Error(),
            expect: undefined,
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
