import {CSSResult} from 'lit';
import {CssVarsInitMap} from './css-vars';
import {DeclarativeElementDefinitionOptions} from './definition-options';
import {EventsInitMap} from './element-events';
import {PropertyInitMapBase} from './element-properties';
import {HostClassesInitMap} from './host-classes';
import {InitCallback, RenderCallback} from './render-callback';
import {StylesCallback} from './styles';

export type CustomElementTagName = `${string}-${string}`;

export type DeclarativeElementInit<
    InputsGeneric extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
> = {
    /**
     * HTML tag name. This should not be used directly, as interpolating it with the html tagged
     * template from this package is preferred.
     */
    tagName: CustomElementTagName;
    /** Static styles. These should not and cannot change. */
    styles?: CSSResult | StylesCallback<HostClassKeys, CssVarKeys>;
    /** Element properties. (These can be thought of as "inputs".) */
    stateInit?: StateInit;
    /** Events that the element can dispatch. (These can be thought of as "outputs".) */
    events?: EventsInitGeneric;
    /**
     * CSS host classes. Values can be callbacks to determine when a host class should be defined,
     * based on current instance state or inputs, or just undefined to indicate that the host class
     * will only be manually set.
     */
    hostClasses?: HostClassesInitMap<HostClassKeys, InputsGeneric, StateInit>;
    cssVars?: CssVarsInitMap<CssVarKeys>;
    /** Called as part of the first renderCallback call, before the first renderCallback call. */
    initCallback?: InitCallback<
        InputsGeneric,
        StateInit,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
    renderCallback: RenderCallback<
        InputsGeneric,
        StateInit,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;
    options?: Partial<DeclarativeElementDefinitionOptions> | undefined;
};
