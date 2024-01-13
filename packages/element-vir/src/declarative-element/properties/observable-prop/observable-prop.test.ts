import {itCases} from '@augment-vir/browser-testing';
import {ensureType, omitObjectKeys} from '@augment-vir/common';
import {ObservableProp, basicObservablePropShape, isObservableProp} from './observable-prop';

describe(isObservableProp.name, () => {
    itCases(isObservableProp, [
        {
            it: 'rejects an empty object',
            input: {},
            expect: false,
        },
        {
            it: 'rejects an object missing a value property',
            input: ensureType<Omit<ObservableProp<unknown>, 'value'>>(
                omitObjectKeys(basicObservablePropShape.defaultValue, ['value']),
            ),
            expect: false,
        },
        {
            it: 'rejects an object missing one of the methods',
            input: ensureType<Omit<ObservableProp<unknown>, 'addListener'>>(
                omitObjectKeys(basicObservablePropShape.defaultValue, ['addListener']),
            ),
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
                    return () => false;
                },
                removeListener() {
                    return true;
                },
                destroy() {},
                value: 'hello there',
            }),
            expect: true,
        },
    ]);
});
