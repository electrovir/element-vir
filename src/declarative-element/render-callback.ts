import {getObjectTypedKeys, RequiredAndNotNullBy} from '@augment-vir/common';
import {TemplateResult} from 'lit';
import {TypedEvent} from '../typed-event/typed-event';
import {DeclarativeElement, HostInstanceType} from './declarative-element';
import {CustomElementTagName} from './declarative-element-init';
import {
    AsyncStateInputs,
    AsyncStateSetValue,
    MaybeAsyncStateToSync,
} from './properties/async-state';
import {
    EventDescriptorMap,
    EventInitMapEventDetailExtractor,
    EventsInitMap,
} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';

export type RenderOutput =
    | TemplateResult
    | string
    | ReadonlyArray<TemplateResult>
    | ReadonlyArray<string>;

export type RenderCallback<
    TagNameGeneric extends CustomElementTagName = any,
    InputsGeneric extends PropertyInitMapBase = any,
    StateGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = any,
    CssVarKeys extends string = any,
> = (
    params: RenderParams<
        TagNameGeneric,
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >,
) => RenderOutput;

export type InitCallback<
    TagNameGeneric extends CustomElementTagName,
    InputsGeneric extends PropertyInitMapBase,
    StateGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
> = (
    params: RenderParams<
        TagNameGeneric,
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
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
        CssVarKeys
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
>(
    element: DeclarativeElement<
        TagNameGeneric,
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >,
    eventsMap: EventDescriptorMap<EventsInitGeneric>,
): RenderParams<
    TagNameGeneric,
    InputsGeneric,
    StateGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys
> {
    function updateState(newStatePartial: Parameters<UpdateStateCallback<StateGeneric>>[0]) {
        getObjectTypedKeys(newStatePartial).forEach((stateKey) => {
            const newValue = newStatePartial[
                stateKey
            ] as MaybeAsyncStateToSync<StateGeneric>[typeof stateKey];

            const asyncState = element.asyncStateHandlerMap[stateKey];

            if (asyncState) {
                asyncState.setValue(newValue as AsyncStateSetValue<any>);
            } else {
                element.instanceState[stateKey] = newValue;
            }
        });
    }

    const renderParams: RenderParams<
        TagNameGeneric,
        InputsGeneric,
        StateGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
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
