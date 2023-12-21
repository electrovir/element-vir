import {getObjectTypedKeys, RequiredAndNotNullBy} from '@augment-vir/common';
import {TypedEvent} from '../typed-event/typed-event';
import {CustomElementTagName} from './custom-tag-name';
import type {DeclarativeElement, DeclarativeElementHost} from './declarative-element';
import {BaseCssPropertyName} from './properties/css-properties';
import {
    EventDescriptorMap,
    EventInitMapEventDetailExtractor,
    EventsInitMap,
} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';
import {
    AllowElementVirStateSetup,
    FlattenElementVirStateSetup,
} from './properties/element-vir-state-setup';

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
    const SpecificState extends Partial<Record<keyof StateInit, unknown>>,
>(
    newState: Partial<AllowElementVirStateSetup<StateInit, SpecificState>>,
) => void;

export type RenderParams<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
> = {
    state: Readonly<FlattenElementVirStateSetup<StateInit>>;
    updateState: UpdateStateCallback<StateInit>;
    events: EventDescriptorMap<TagName, EventsInit>;
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
    eventsMap: EventDescriptorMap<TagName, EventsInit>,
): RenderParams<TagName, Inputs, StateInit, EventsInit, HostClassKeys, CssVarKeys> {
    function updateState(newStatePartial: Parameters<UpdateStateCallback<StateInit>>[0]) {
        getObjectTypedKeys(newStatePartial).forEach((stateKey) => {
            const newValue = newStatePartial[
                stateKey
            ] as FlattenElementVirStateSetup<StateInit>[typeof stateKey];

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
