import {getObjectTypedKeys, RequiredAndNotNullBy} from '@augment-vir/common';
import {TypedEvent} from '../typed-event/typed-event';
import {DeclarativeElement, DeclarativeElementHost} from './declarative-element';
import {CustomElementTagName} from './declarative-element-init';
import {BaseCssPropertyName} from './properties/css-properties';
import {
    EventDescriptorMap,
    EventInitMapEventDetailExtractor,
    EventsInitMap,
} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';
import {
    FlattenObservablePropertyGetters,
    FlattenObservablePropertySetters,
} from './properties/observable-property/observable-property-handler';

export type RenderCallback<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    StateInit extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseCssPropertyName<TagName> = any,
    CssVarKeys extends BaseCssPropertyName<TagName> = any,
    RenderOutput = any,
> = (
    params: RenderParams<TagName, Inputs, StateInit, EventsInit, HostClassKeys, CssVarKeys>,
) => RenderOutput;

export type InitCallback<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
> = (
    params: RenderParams<TagName, Inputs, StateInit, EventsInit, HostClassKeys, CssVarKeys>,
) => void;

export type UpdateStateCallback<StateInit extends PropertyInitMapBase> = <
    const SpecificInput extends Partial<Record<keyof StateInit, unknown>>,
>(
    newState: Partial<FlattenObservablePropertySetters<StateInit, SpecificInput>>,
) => void;

export type RenderParams<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
> = {
    state: Readonly<FlattenObservablePropertyGetters<StateInit>>;
    updateState: UpdateStateCallback<StateInit>;
    events: EventDescriptorMap<EventsInit>;
    host: DeclarativeElementHost<TagName, Inputs, StateInit, EventsInit, HostClassKeys, CssVarKeys>;
    dispatch: <EventTypeName extends keyof EventsInit>(
        event:
            | TypedEvent<
                  EventTypeName extends string ? EventTypeName : never,
                  EventInitMapEventDetailExtractor<EventTypeName, EventsInit>
              >
            | Event,
    ) => boolean;
    inputs: Readonly<Inputs>;
};

export function createRenderParams<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
    RenderOutput,
>(
    element: DeclarativeElement<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        RenderOutput
    >,
    eventsMap: EventDescriptorMap<EventsInit>,
): RenderParams<TagName, Inputs, StateInit, EventsInit, HostClassKeys, CssVarKeys> {
    function updateState(newStatePartial: Parameters<UpdateStateCallback<StateInit>>[0]) {
        getObjectTypedKeys(newStatePartial).forEach((stateKey) => {
            const newValue = newStatePartial[
                stateKey
            ] as FlattenObservablePropertyGetters<StateInit>[typeof stateKey];

            element.instanceState[stateKey] = newValue;
        });
    }

    const renderParams: RenderParams<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
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
