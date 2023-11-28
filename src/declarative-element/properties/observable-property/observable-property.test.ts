import {itCases} from '@augment-vir/browser-testing';
import {ensureType} from '@augment-vir/common';
import {ObservableProp, basicObservablePropShape, isObservableProp} from './observable-property';

describe(isObservableProp.name, () => {
    itCases(isObservableProp, [
        {
            it: 'rejects an empty object',
            input: {},
            expect: false,
        },
        {
            it: 'rejects an object missing a value property',
            input: ensureType<Omit<ObservableProp<unknown>, 'value'>>({
                addListener: basicObservablePropShape.defaultValue.addListener,
                removeListener: basicObservablePropShape.defaultValue.removeListener,
            }),
            expect: false,
        },
        {
            it: 'rejects an object missing one of the methods',
            input: ensureType<Omit<ObservableProp<unknown>, 'addListener'>>({
                removeListener: basicObservablePropShape.defaultValue.removeListener,
                value: {},
            }),
            expect: false,
        },
        {
            it: 'accepts the default shape value',
            input: basicObservablePropShape.defaultValue,
            expect: true,
        },
        {
            it: 'accepts a newly created valid shape',
            input: ensureType<ObservableProp<any>>({
                addListener() {
                    return false;
                },
                removeListener() {
                    return true;
                },
                value: 'hello there',
            }),
            expect: true,
        },
    ]);
});
