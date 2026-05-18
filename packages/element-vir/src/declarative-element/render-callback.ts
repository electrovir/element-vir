import {getObjectTypedKeys, type SetRequiredAndNotNull} from '@augment-vir/common';
import {type HtmlInterpolation} from '../template-transforms/vir-html/html-interpolation.js';
import {type TypedEvent} from '../typed-event/typed-event.js';
import {type CustomElementTagName} from './custom-tag-name.js';
import {type DeclarativeElement, type DeclarativeElementHost} from './declarative-element.js';
import {type CssVars} from './properties/css-vars.js';
import {
    type EventDescriptorMap,
    type EventInitMapEventDetailExtractor,
    type EventsInitMap,
} from './properties/element-events.js';
import {type PropertyInitMapBase} from './properties/element-properties.js';
import {
    type BaseStringName,
    type SlotNamesMap,
    type StringNameMap,
} from './properties/string-names.js';

/**
 * Type for the `render` element definition method.
 *
 * @category Internal
 */
export type RenderCallback<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    State extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseStringName<TagName> = any,
    CssVarKeys extends BaseStringName<TagName> = any,
    SlotNames extends ReadonlyArray<string> = any,
    TestIds extends ReadonlyArray<string> = any,
> = (
    params: RenderParams<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >,
) => HtmlInterpolation;

/**
 * Type for the `init` and `cleanup` element definition methods.
 *
 * @category Internal
 */
export type InitCallback<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    State extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseStringName<TagName>,
    CssVarKeys extends BaseStringName<TagName>,
    SlotNames extends ReadonlyArray<string>,
    TestIds extends ReadonlyArray<string>,
> = (
    params: RenderParams<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >,
) => undefined | void;

/**
 * Type for the `updateState` render parameter.
 *
 * @category Internal
 */
export type UpdateStateCallback<State extends PropertyInitMapBase> = (
    newState: Partial<State>,
) => void;

/**
 * The full parameters object passed to `render`, `init`, and `cleanup` element definition methods.
 *
 * @category Internal
 */
export type RenderParams<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    State extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseStringName<TagName>,
    CssVarKeys extends BaseStringName<TagName>,
    SlotNames extends ReadonlyArray<string>,
    TestIds extends ReadonlyArray<string>,
> = {
    state: Readonly<State>;
    cssVars: Readonly<CssVars<TagName, CssVarKeys>>;
    updateState: UpdateStateCallback<State>;
    events: EventDescriptorMap<TagName, EventsInit>;
    host: DeclarativeElementHost<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >;
    slotNames: SlotNamesMap<TagName, SlotNames>;
    testIds: Readonly<StringNameMap<TagName, 'test-id', TestIds>>;
    /** Dispatch an event from the current element. */
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

/**
 * This is used to create the parameters passed to the `render`, `init`, and `cleanup` element
 * definition methods whenever they are called.
 *
 * @category Internal
 */
export function createRenderParams<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    State extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseStringName<TagName>,
    CssVarKeys extends BaseStringName<TagName>,
    SlotNames extends ReadonlyArray<string>,
    TestIds extends ReadonlyArray<string>,
>({
    element,
    eventsMap,
    cssVars,
    slotNamesMap,
    testIdsMap,
}: {
    element: DeclarativeElement<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >;
    eventsMap: EventDescriptorMap<TagName, EventsInit>;
    cssVars: Readonly<CssVars<TagName, CssVarKeys>>;
    slotNamesMap: SlotNamesMap<TagName, SlotNames>;
    testIdsMap: Readonly<StringNameMap<TagName, 'test-id', TestIds>>;
}): RenderParams<
    TagName,
    Inputs,
    State,
    EventsInit,
    HostClassKeys,
    CssVarKeys,
    SlotNames,
    TestIds
> {
    function updateState(newStatePartial: Parameters<UpdateStateCallback<State>>[0]) {
        getObjectTypedKeys(newStatePartial).forEach((stateKey) => {
            const newValue = newStatePartial[stateKey] as State[typeof stateKey];

            element.instanceState[stateKey] = newValue;
        });
    }

    const renderParams: RenderParams<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    > = {
        cssVars,
        slotNames: slotNamesMap,
        testIds: testIdsMap,
        dispatch: (event) => element.dispatchEvent(event),
        events: eventsMap,
        host: element as SetRequiredAndNotNull<typeof element, 'shadowRoot'>,
        inputs: element.instanceInputs,
        state: element.instanceState,
        updateState,
    };
    return renderParams;
}
