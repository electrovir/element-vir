import {getObjectTypedKeys, RequiredAndNotNullBy} from '@augment-vir/common';
import {TemplateResult} from 'lit';
import {TypedEvent} from '../typed-event/typed-event';
import {DeclarativeElement, HostInstanceType} from './declarative-element';
import {
    EventDescriptorMap,
    EventInitMapEventDetailExtractor,
    EventsInitMap,
} from './element-events';
import {PropertyInitMapBase} from './element-properties';

export type RenderCallback<
    InputsGeneric extends PropertyInitMapBase = any,
    StateGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = any,
    CssVarKeys extends string = any,
> = (
    params: RenderParams<InputsGeneric, StateGeneric, EventsInitGeneric, HostClassKeys, CssVarKeys>,
) => TemplateResult;

export type InitCallback<
    InputsGeneric extends PropertyInitMapBase,
    StateGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
> = (
    params: RenderParams<InputsGeneric, StateGeneric, EventsInitGeneric, HostClassKeys, CssVarKeys>,
) => void;

export type UpdateStateCallback<StateGeneric extends PropertyInitMapBase> = (
    newState: Partial<StateGeneric>,
) => void;

export type RenderParams<
    InputsGeneric extends PropertyInitMapBase,
    StateInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
> = {
    state: Readonly<StateInitGeneric>;
    updateState: UpdateStateCallback<StateInitGeneric>;
    events: EventDescriptorMap<EventsInitGeneric>;
    host: HostInstanceType<
        InputsGeneric,
        StateInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
    dispatch: <EventTypeNameGeneric extends keyof EventsInitGeneric>(
        event: TypedEvent<
            EventTypeNameGeneric extends string ? EventTypeNameGeneric : never,
            EventInitMapEventDetailExtractor<EventTypeNameGeneric, EventsInitGeneric>
        >,
    ) => boolean;
    inputs: InputsGeneric;
    /**
     * Same as dispatchElementEvent but without the extra types. This allows you to emit any events,
     * even events from other custom elements.
     */
    genericDispatch: (event: Event) => boolean;
};

export function createRenderParams<
    InputsGeneric extends PropertyInitMapBase,
    StateGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
>(
    element: DeclarativeElement<
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >,
    eventsMap: EventDescriptorMap<EventsInitGeneric>,
): RenderParams<InputsGeneric, StateGeneric, EventsInitGeneric, HostClassKeys, CssVarKeys> {
    const renderParams: RenderParams<
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    > = {
        /**
         * These two dispatch properties do the same thing but their interfaces are different.
         * DispatchEvent's type interface is much stricter.
         */
        dispatch: (event) => element.dispatchEvent(event),
        genericDispatch: (event) => element.dispatchEvent(event),
        updateState: (partialProps) => {
            getObjectTypedKeys(partialProps).forEach((propKey) => {
                element.instanceState[propKey] = partialProps[
                    propKey
                ] as StateGeneric[typeof propKey];
            });
        },
        inputs: element.instanceInputs,
        host: element as RequiredAndNotNullBy<typeof element, 'shadowRoot'>,
        state: element.instanceState,
        events: eventsMap,
    };
    return renderParams;
}
