import {CSSResult} from 'lit';
import {DeclarativeElementDefinitionOptions} from './definition-options';
import {MaybeAsyncStateToSync} from './properties/async-state';
import {CssVarsInitMap} from './properties/css-vars';
import {EventsInitMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';
import {HostClassesInitMap} from './properties/host-classes';
import {StylesCallback} from './properties/styles';
import {InitCallback, RenderCallback} from './render-callback';

export type CustomElementTagName = `${string}-${string}`;

export type DeclarativeElementInit<
    TagNameGeneric extends CustomElementTagName,
    InputsGeneric extends PropertyInitMapBase,
    StateInitMaybeAsyncGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeysGeneric extends string,
    CssVarKeysGeneric extends string,
> = {
    /**
     * HTML tag name. This should not be used directly, as interpolating it with the html tagged
     * template from this package is preferred.
     */
    tagName: TagNameGeneric;
    /** Static styles. These should not and cannot change. */
    styles?: CSSResult | StylesCallback<HostClassKeysGeneric, CssVarKeysGeneric>;
    /** Element properties. (These can be thought of as "inputs".) */
    stateInit?: StateInitMaybeAsyncGeneric;
    /** Events that the element can dispatch. (These can be thought of as "outputs".) */
    events?: EventsInitGeneric;
    /**
     * CSS host classes. Values can be callbacks to determine when a host class should be defined,
     * based on current instance state or inputs, or just undefined to indicate that the host class
     * will only be manually set.
     */
    hostClasses?: HostClassesInitMap<
        HostClassKeysGeneric,
        InputsGeneric,
        MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric>
    >;
    /**
     * CSS Vars for the component. Keys of this object should be camelCased (or whatever your casing
     * convention is). They will be transformed, at runtime, to CSS vars with kebab-casing, to match
     * CSS standards.
     *
     * Values of this object represent the default fallback value for the given CSS var. These are
     * then passed to the styles property, which must be a callback to take advantage of these.
     * cssVarValues or cssVarNames can then be destructured from the styles property's callback
     * input.
     */
    cssVars?: CssVarsInitMap<CssVarKeysGeneric>;
    /** Called as part of the first renderCallback call, before the first renderCallback call. */
    initCallback?: InitCallback<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeysGeneric,
        CssVarKeysGeneric
    >;
    renderCallback: RenderCallback<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeysGeneric,
        CssVarKeysGeneric
    >;
    cleanupCallback?: InitCallback<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeysGeneric,
        CssVarKeysGeneric
    >;
    options?: Partial<DeclarativeElementDefinitionOptions> | undefined;
};
