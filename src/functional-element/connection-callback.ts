import {PropertyInitMapBase} from './element-properties';
import {FunctionalElementInstance} from './functional-element';

export type ConnectionCallbackParams<PropertyInitGeneric extends PropertyInitMapBase> = {
    element: FunctionalElementInstance<PropertyInitGeneric>;
    props: PropertyInitGeneric;
};

export type ConnectionCallback<PropertyInitGeneric extends PropertyInitMapBase> = (
    params: ConnectionCallbackParams<PropertyInitGeneric>,
) => void;
