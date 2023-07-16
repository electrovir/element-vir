import {typedHasProperty} from '@augment-vir/common';
import {DeclarativeElementDefinition} from '../declarative-element/declarative-element';
import {PropertyInitMapBase} from '../declarative-element/properties/element-properties';

export type MinimalElementDefinition = {
    tagName: DeclarativeElementDefinition['tagName'];
};

export type WrappedMinimalDefinition = {
    _elementVirIsWrappedDefinition: true;
    definition: MinimalElementDefinition;
    inputs: PropertyInitMapBase;
};

export function isWrappedMinimalDefinition(value: unknown): value is WrappedMinimalDefinition {
    return (
        typedHasProperty(value, '_elementVirIsWrappedDefinition') &&
        !!value._elementVirIsWrappedDefinition
    );
}

export function isMinimalElementDefinition(value: unknown): value is MinimalElementDefinition {
    return (
        typedHasProperty(value, 'tagName') &&
        !!value.tagName &&
        typeof value.tagName === 'string' &&
        value.tagName.includes('-')
    );
}
