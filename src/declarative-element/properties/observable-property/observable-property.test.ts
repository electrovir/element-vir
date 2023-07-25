import {itCases} from '@augment-vir/browser-testing';
import {ensureType} from '@augment-vir/common';
import {
    ObservableProperty,
    basicObservablePropertyShape,
    isObservableProperty,
} from './observable-property';

describe(isObservableProperty.name, () => {
    itCases(isObservableProperty, [
        {
            it: 'rejects an empty object',
            input: {},
            expect: false,
        },
        {
            it: 'rejects an object missing a value property',
            input: ensureType<Omit<ObservableProperty<unknown>, 'value'>>({
                addListener: basicObservablePropertyShape.defaultValue.addListener,
                removeListener: basicObservablePropertyShape.defaultValue.removeListener,
            }),
            expect: false,
        },
        {
            it: 'rejects an object missing one of the methods',
            input: ensureType<Omit<ObservableProperty<unknown>, 'addListener'>>({
                removeListener: basicObservablePropertyShape.defaultValue.removeListener,
                value: {},
            }),
            expect: false,
        },
        {
            it: 'accepts the default shape value',
            input: basicObservablePropertyShape.defaultValue,
            expect: true,
        },
        {
            it: 'accepts a newly created valid shape',
            input: ensureType<ObservableProperty<any>>({
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
