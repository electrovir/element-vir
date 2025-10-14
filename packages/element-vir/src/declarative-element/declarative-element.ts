import {type SetRequiredAndNotNull} from '@augment-vir/common';
import {type EmptyObject, type IsAny, type IsEmptyObject} from 'type-fest';
import {LitElement, type CSSResult} from '../lit-exports/base-lit-exports.js';
import {type MinimalDefinitionWithInputs} from '../template-transforms/minimal-element-definition.js';
import {type CustomElementTagName} from './custom-tag-name.js';
import {type DeclarativeElementInit} from './declarative-element-init.js';
import {type DeclarativeElementDefinitionOptions} from './definition-options.js';
import {type CssVars} from './properties/css-vars.js';
import {type EventDescriptorMap, type EventsInitMap} from './properties/element-events.js';
import {type PropertyInitMapBase} from './properties/element-properties.js';
import {type HostClassNamesMap} from './properties/host-classes.js';
import {type ObservableListenerMap} from './properties/property-proxy.js';
import {type BaseStringName, type StringNameMap} from './properties/string-names.js';
import {
    type RenderCallback,
    type RenderParams,
    type UpdateStateCallback,
} from './render-callback.js';

/**
 * The `host` type for a declarative element. This references a declarative element instance's
 * top-level HTML element and always contains a shadow root (wherein the element is rendered).
 *
 * @category Internal
 */
export type DeclarativeElementHost<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    State extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseStringName<TagName> = any,
    CssVarKeys extends BaseStringName<TagName> = any,
    SlotNames extends ReadonlyArray<string> = any,
    TestIds extends ReadonlyArray<string> = any,
> = SetRequiredAndNotNull<
    Omit<
        DeclarativeElement<
            TagName,
            Inputs,
            State,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames,
            TestIds
        >,
        Exclude<
            keyof StaticDeclarativeElementProperties<any, any, any, any, any, any, any, any>,
            keyof HTMLElement
        >
    >,
    'shadowRoot'
>;

/**
 * The full definition for a declarative element.
 *
 * @category Internal
 */
export type DeclarativeElementDefinition<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    State extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseStringName<TagName> = any,
    CssVarKeys extends BaseStringName<TagName> = any,
    SlotNames extends ReadonlyArray<string> = any,
    TestIds extends ReadonlyArray<string> = any,
> = (new () => DeclarativeElementHost<
    TagName,
    Inputs,
    State,
    EventsInit,
    HostClassKeys,
    CssVarKeys,
    SlotNames,
    TestIds
>) &
    StaticDeclarativeElementProperties<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    > & {
        InstanceType: DeclarativeElementHost<
            TagName,
            Inputs,
            State,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames,
            TestIds
        >;
    };

/**
 * Abstract class base for all declarative elements.
 *
 * @category Internal
 */
export abstract class DeclarativeElement<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    State extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseStringName<TagName> = any,
    CssVarKeys extends BaseStringName<TagName> = any,
    SlotNames extends ReadonlyArray<string> = any,
    TestIds extends ReadonlyArray<string> = any,
> extends LitElement {
    /**
     * Assign inputs to an element instantiation. Use only on the opening tag.
     *
     * @example
     *
     * ```ts
     * import {html} from 'element-vir';
     *
     * const myTemplate = html`
     *     <${MyElement.assign({input1: 'a', input2: 'b'})}></${MyElement}>
     * `;
     * ```
     */
    public static readonly assign: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['assign'];
    public static readonly assignedInputs: PropertyInitMapBase | undefined;
    public static readonly tagName: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['tagName'];
    public static override readonly styles: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['styles'];
    public static readonly render: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['render'];
    public static readonly InputsType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['InputsType'];
    public static readonly StateType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['StateType'];
    public static readonly UpdateStateType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['UpdateStateType'];
    public static readonly events: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['events'];
    public static readonly init: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['init'];
    public static readonly elementOptions: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['elementOptions'];
    public static readonly hostClasses: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['hostClasses'];
    public static readonly cssVars: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['cssVars'];
    public static readonly slotNames: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['slotNames'];
    public static readonly testIds: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseStringName<CustomElementTagName>,
        BaseStringName<CustomElementTagName>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >['testIds'];

    public abstract _lastRenderError: Error | undefined;
    public abstract _internalRenderCount: number;
    public abstract _lastRenderedProps: Readonly<
        Pick<RenderParams<any, Inputs, State, any, any, any, any, any>, 'inputs' | 'state'>
    >;
    /**
     * Calls all destroy methods on all state properties, if they exist. This is automatically
     * called whenever the element is detached.
     */
    public abstract destroy(): void;
    public abstract override render(): unknown;
    public abstract readonly instanceState: State;
    public abstract readonly observablePropertyListenerMap: ObservableListenerMap<State & Inputs>;
    public abstract readonly instanceInputs: Inputs;
    /**
     * Used to assign inputs to the given element. This can be externally called as an API for
     * setting inputs on an element reference, though this is discouraged. Inputs should typically
     * be called using the `.assign()` method on an element definition inside of an HTML template.
     */
    public abstract assignInputs(
        inputs: EmptyObject extends Required<Inputs> ? never : Partial<Inputs>,
    ): void;
    /** The element definition for this element instance. */
    public abstract readonly definition: DeclarativeElementDefinition<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >;
}

/**
 * The assign inputs method of a declarative element.
 *
 * @category Internal
 */
export type AssignMethod<TagName extends CustomElementTagName, Inputs extends PropertyInitMapBase> =
    IsAny<Inputs> extends true
        ? any
        : IsEmptyObject<Required<Inputs>> extends true
          ? (inputsObject: never) => never
          : (
                inputsObject: IsEmptyObject<Required<Inputs>> extends true ? never : Inputs,
            ) => MinimalDefinitionWithInputs<TagName>;

/**
 * All static properties on a declarative element. These all come from the element's definition.
 *
 * @category Internal
 */
export type StaticDeclarativeElementProperties<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    State extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseStringName<TagName>,
    CssVarKeys extends BaseStringName<TagName>,
    SlotNames extends ReadonlyArray<string>,
    TestIds extends ReadonlyArray<string>,
> = {
    /** Assign inputs to an element directly on its interpolated tag. */
    readonly assign: AssignMethod<TagName, Inputs>;
    assignedInputs: Inputs | undefined;

    /** Pass through the render callback for direct unit testability */
    readonly render: RenderCallback<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >;
    readonly events: EventDescriptorMap<TagName, EventsInit>;
    readonly slotNames: Readonly<StringNameMap<TagName, 'slot', SlotNames>>;
    readonly testIds: Readonly<StringNameMap<TagName, 'test-id', TestIds>>;
    readonly init: DeclarativeElementInit<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >;
    readonly elementOptions: DeclarativeElementDefinitionOptions;
    readonly InputsType: Inputs;
    readonly StateType: Readonly<State>;
    readonly UpdateStateType: UpdateStateCallback<State>;
    readonly hostClasses: HostClassNamesMap<string, HostClassKeys>;
    readonly cssVars: CssVars<TagName, CssVarKeys>;

    readonly tagName: TagName;
    readonly styles: CSSResult;
};
