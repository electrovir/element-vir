import {getObjectTypedKeys} from 'augment-vir';
import {TemplateResult} from 'lit';
import {TypedEvent} from '../typed-event/typed-event';
import {DeclarativeElement} from './declarative-element';
import {
    EventDescriptorMap,
    EventInitMapEventDetailExtractor,
    EventsInitMap,
} from './element-events';
import {PropertyInitMapBase} from './element-properties';

export type RenderCallback<
    InputsGeneric extends PropertyInitMapBase = any,
    PropertyInitGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = any,
    CssVarKeys extends string = any,
> = (
    params: RenderParams<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >,
) => TemplateResult;

export type InitCallback<
    InputsGeneric extends PropertyInitMapBase,
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
> = (
    params: RenderParams<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >,
) => void;

export type SetPropCallback<PropertyInitGeneric extends PropertyInitMapBase> = (
    props: Partial<PropertyInitGeneric>,
) => void;

export type RenderParams<
    InputsGeneric extends PropertyInitMapBase,
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
> = {
    props: Readonly<PropertyInitGeneric>;
    setProps: SetPropCallback<PropertyInitGeneric>;
    events: EventDescriptorMap<EventsInitGeneric>;
    host: DeclarativeElement<
        InputsGeneric,
        PropertyInitGeneric,
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
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
>(
    element: DeclarativeElement<
        InputsGeneric,
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >,
    eventsMap: EventDescriptorMap<EventsInitGeneric>,
): RenderParams<InputsGeneric, PropertyInitGeneric, EventsInitGeneric, HostClassKeys, CssVarKeys> {
    const renderParams: RenderParams<
        InputsGeneric,
        PropertyInitGeneric,
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
        setProps: (partialProps) => {
            getObjectTypedKeys(partialProps).forEach((propKey) => {
                element.instanceProps[propKey] = partialProps[
                    propKey
                ] as PropertyInitGeneric[typeof propKey];
            });
        },
        inputs: element.currentInputs,
        host: element,
        props: element.instanceProps,
        events: eventsMap,
    };
    return renderParams;
}
