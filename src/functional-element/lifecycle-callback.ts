import {EventsInitMap} from './element-events';
import {PropertyInitMapBase} from './element-properties';
import {FunctionalElementInstance} from './functional-element';
import {RenderParams} from './render-callback';

export type LifecycleCallbackParams<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = {
    element: FunctionalElementInstance<PropertyInitGeneric>;
} & RenderParams<PropertyInitGeneric, EventsInitGeneric>;

export type LifecycleCallback<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = (params: LifecycleCallbackParams<PropertyInitGeneric, EventsInitGeneric>) => void;
