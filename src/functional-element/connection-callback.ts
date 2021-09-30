import {EventsInitMap} from './element-events';
import {PropertyInitMapBase} from './element-properties';
import {FunctionalElementInstance} from './functional-element';
import {RenderParams} from './render-callback';

export type ConnectionCallbackParams<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = {
    element: FunctionalElementInstance<PropertyInitGeneric>;
} & RenderParams<PropertyInitGeneric, EventsInitGeneric>;

export type ConnectionCallback<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = (params: ConnectionCallbackParams<PropertyInitGeneric, EventsInitGeneric>) => void;
