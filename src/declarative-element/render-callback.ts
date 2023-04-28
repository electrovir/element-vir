import {getObjectTypedKeys, RequiredAndNotNullBy} from '@augment-vir/common';
import {TypedEvent} from '../typed-event/typed-event';
import {DeclarativeElement, HostInstanceType} from './declarative-element';
import {CustomElementTagName} from './declarative-element-init';
import {AsyncStateInputs, MaybeAsyncStateToSync} from './properties/async-state';
import {
    EventDescriptorMap,
    EventInitMapEventDetailExtractor,
    EventsInitMap,
} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';

export type RenderCallback<
    TagNameGeneric extends CustomElementTagName = any,
    InputsGeneric extends PropertyInitMapBase = any,
    StateGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = any,
    CssVarKeys extends string = any,
    RenderOutputGeneric = any,
    InputsDefinerFunction extends ((input: any) => any) | undefined = any,
> = (
    params: RenderParams<
        TagNameGeneric,
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        InputsDefinerFunction
    >,
) => RenderOutputGeneric;

export type InitCallback<
    TagNameGeneric extends CustomElementTagName,
    InputsGeneric extends PropertyInitMapBase,
    StateGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
    InputsDefinerFunction extends ((input: any) => any) | undefined,
> = (
    params: RenderParams<
        TagNameGeneric,
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        InputsDefinerFunction
    >,
) => void;

export type UpdateStateCallback<StateGeneric extends PropertyInitMapBase> = (
    newState: Partial<AsyncStateInputs<StateGeneric>>,
) => void;

export type RenderParams<
    TagNameGeneric extends CustomElementTagName,
    InputsGeneric extends PropertyInitMapBase,
    StateInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
    InputsDefinerFunction extends ((input: any) => any) | undefined,
> = {
    state: Readonly<MaybeAsyncStateToSync<StateInitGeneric>>;
    updateState: UpdateStateCallback<StateInitGeneric>;
    events: EventDescriptorMap<EventsInitGeneric>;
    host: HostInstanceType<
        TagNameGeneric,
        InputsGeneric,
        StateInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        InputsDefinerFunction
    >;
    dispatch: <EventTypeNameGeneric extends keyof EventsInitGeneric>(
        event:
            | TypedEvent<
                  EventTypeNameGeneric extends string ? EventTypeNameGeneric : never,
                  EventInitMapEventDetailExtractor<EventTypeNameGeneric, EventsInitGeneric>
              >
            | Event,
    ) => boolean;
    inputs: InputsGeneric;
};

export function createRenderParams<
    TagNameGeneric extends CustomElementTagName,
    InputsGeneric extends PropertyInitMapBase,
    StateGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
    RenderOutputGeneric,
    InputsDefinerFunction extends ((input: any) => any) | undefined,
>(
    element: DeclarativeElement<
        TagNameGeneric,
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric,
        InputsDefinerFunction
    >,
    eventsMap: EventDescriptorMap<EventsInitGeneric>,
): RenderParams<
    TagNameGeneric,
    InputsGeneric,
    StateGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys,
    InputsDefinerFunction
> {
    function updateState(newStatePartial: Parameters<UpdateStateCallback<StateGeneric>>[0]) {
        getObjectTypedKeys(newStatePartial).forEach((stateKey) => {
            const newValue = newStatePartial[
                stateKey
            ] as MaybeAsyncStateToSync<StateGeneric>[typeof stateKey];

            element.instanceState[stateKey] = newValue;
        });
    }

    const renderParams: RenderParams<
        TagNameGeneric,
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        InputsDefinerFunction
    > = {
        dispatch: (event) => element.dispatchEvent(event),
        updateState,
        inputs: element.instanceInputs,
        host: element as RequiredAndNotNullBy<typeof element, 'shadowRoot'>,
        state: element.instanceState,
        events: eventsMap,
    };
    return renderParams;
}
