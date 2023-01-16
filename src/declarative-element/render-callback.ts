import {getObjectTypedKeys, RequiredAndNotNullBy} from '@augment-vir/common';
import {TemplateResult} from 'lit';
import {TypedEvent} from '../typed-event/typed-event';
import {DeclarativeElement, HostInstanceType} from './declarative-element';
import {AsyncProp, ensureAsyncProp, SetAsyncPropInputs} from './properties/async-prop';
import {
    EventDescriptorMap,
    EventInitMapEventDetailExtractor,
    EventsInitMap,
} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';

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
        event:
            | TypedEvent<
                  EventTypeNameGeneric extends string ? EventTypeNameGeneric : never,
                  EventInitMapEventDetailExtractor<EventTypeNameGeneric, EventsInitGeneric>
              >
            | Event,
    ) => boolean;
    inputs: InputsGeneric;
    /**
     * Updates async props in the state if they have not already been set. Once promises settle,
     * this automatically updates the state. In order to re-trigger an async prop, set it to
     * undefined first.
     */
    ensureAsyncProp: (
        values: Partial<{
            [StateKey in keyof StateInitGeneric as StateInitGeneric[StateKey] extends AsyncProp<any>
                ? StateKey
                : never]: StateInitGeneric[StateKey] extends AsyncProp<infer ValueGeneric>
                ? SetAsyncPropInputs<ValueGeneric>
                : never;
        }>,
    ) => void;
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
    function updateState(partialProps: Parameters<UpdateStateCallback<StateGeneric>>[0]) {
        getObjectTypedKeys(partialProps).forEach((propKey) => {
            element.instanceState[propKey] = partialProps[propKey] as StateGeneric[typeof propKey];
        });
    }

    const renderParams: RenderParams<
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
        ensureAsyncProp: (values) => {
            Object.entries(values).forEach(
                ([
                    stateKey,
                    newSet,
                ]) => {
                    if (!(stateKey in element.instanceState)) {
                        throw new Error(`Invalid key given to ensureAsyncProp: ${stateKey}`);
                    }

                    ensureAsyncProp<any, any>({
                        state: element.instanceState as any,
                        updateState: updateState as any,
                        stateProp: stateKey,
                        ...(newSet as SetAsyncPropInputs<any>),
                    });
                },
            );
        },
    };
    return renderParams;
}
