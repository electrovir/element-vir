import {typedHasProperty} from '@augment-vir/common';
import {PropertyInitMapBase} from '../declarative-element/properties/element-properties';

export type MinimalElementDefinition = {
    tagName: string;
};

export type MinimalDefinitionWithInputs = {
    _elementVirIsMinimalDefinitionWithInputs: true;
    definition: MinimalElementDefinition;
    inputs: PropertyInitMapBase;
};

export function isMinimalDefinitionWithInputs(
    value: unknown,
): value is MinimalDefinitionWithInputs {
    return (
        typedHasProperty(value, '_elementVirIsMinimalDefinitionWithInputs') &&
        !!value._elementVirIsMinimalDefinitionWithInputs
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
