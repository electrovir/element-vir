import {CSSResult} from 'lit';
import {RequireNonVoidReturn} from '../augments/type';
import {DeclarativeElementDefinitionOptions} from './definition-options';
import {BaseCssPropertyName} from './properties/css-properties';
import {CssVarsInitMap} from './properties/css-vars';
import {EventsInitMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';
import {HostClassesInitMap} from './properties/host-classes';
import {FlattenObservablePropertyGetters} from './properties/observable-property/observable-property-handler';
import {StylesCallback} from './properties/styles';
import {InitCallback, RenderCallback} from './render-callback';

export type CustomElementTagName = `${string}-${string}`;

export type DeclarativeElementInit<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
    RenderOutput,
> = {
    /**
     * HTML tag name. This should not be used directly, as interpolating it with the html tagged
     * template from this package is preferred.
     */
    tagName: TagName;
    /** Static styles. These should not and cannot change. */
    styles?: CSSResult | StylesCallback<TagName, HostClassKeys, CssVarKeys>;
    /** Element properties. (These can be thought of as "inputs".) */
    stateInit?: StateInit;
    /** Events that the element can dispatch. (These can be thought of as "outputs".) */
    events?: EventsInit;
    /**
     * CSS host classes. Values can be callbacks to determine when a host class should be defined,
     * based on current instance state or inputs, or just false to indicate that the host class will
     * only be manually set.
     */
    hostClasses?: HostClassesInitMap<
        TagName,
        HostClassKeys,
        FlattenObservablePropertyGetters<Inputs>,
        FlattenObservablePropertyGetters<StateInit>
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
    cssVars?: CssVarsInitMap<TagName, CssVarKeys>;
    /** Called as part of the first renderCallback call, before the first renderCallback call. */
    initCallback?: InitCallback<TagName, Inputs, StateInit, EventsInit, HostClassKeys, CssVarKeys>;
    renderCallback: RequireNonVoidReturn<
        RenderOutput,
        RenderCallback<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            RenderOutput
        >
    >;
    cleanupCallback?: InitCallback<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys
    >;
    options?: Partial<DeclarativeElementDefinitionOptions> | undefined;
};
