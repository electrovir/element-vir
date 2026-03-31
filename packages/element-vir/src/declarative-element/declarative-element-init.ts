import {type CSSResult} from '../lit-exports/base-lit-exports.js';
import {type CustomElementTagName} from './custom-tag-name.js';
import {type DeclarativeElementDefinitionOptions} from './definition-options.js';
import {type keyedCache} from './directives/keyed-cache.directive.js';
import {type CssVarsInitMap} from './properties/css-vars.js';
import {type EventsInitMap} from './properties/element-events.js';
import {type PropertyInitMapBase} from './properties/element-properties.js';
import {type HostClassesInitMap} from './properties/host-classes.js';
import {type BaseStringName} from './properties/string-names.js';
import {type StylesCallback} from './properties/styles.js';
import {type InitCallback, type RenderCallback, type RenderParams} from './render-callback.js';

/**
 * Initialization for an element-vir declarative element. This defines all the pieces required for
 * rendering the element.
 *
 * @category Internal
 */
export type DeclarativeElementInit<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    State extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseStringName<TagName>,
    CssVarKeys extends BaseStringName<TagName>,
    SlotNames extends ReadonlyArray<string>,
    TestIds extends ReadonlyArray<string>,
> = {
    /**
     * HTML tag name. This should not be used directly, as interpolating it with the html tagged
     * template from this package is preferred.
     */
    tagName: TagName;
    /** Static styles. These should not and cannot change. */
    styles?: CSSResult | StylesCallback<TagName, HostClassKeys, CssVarKeys> | undefined;
    /** Events that the element can dispatch. (These can be thought of as "outputs".) */
    events?: EventsInit | undefined;
    slotNames?: SlotNames | undefined;
    testIds?: TestIds | undefined;
    /**
     * HTML host classes. Values can be callbacks to determine when a host class should be defined,
     * based on current instance state or inputs, or just false to indicate that the host class will
     * only be manually set.
     */
    hostClasses?: HostClassesInitMap<TagName, HostClassKeys, Inputs, State> | undefined;
    /**
     * CSS Vars for the component. Keys of this object should be kebab-case and start with the
     * element's tag name.
     *
     * Values of this object represent the default fallback value for the given CSS var. These are
     * then passed to the styles property, which must be a callback to take advantage of these.
     */
    cssVars?: CssVarsInitMap<TagName, CssVarKeys>;
    /**
     * Make sure to define this at the top of your element init object or TypeScript will fail to
     * infer the element's state type.
     *
     * Setup the element's initial state. This is only called once per element instance, before the
     * first render. The return type of this method becomes the element's state type.
     */
    state?: (
        params: Omit<
            RenderParams<
                TagName,
                Inputs,
                any,
                EventsInit,
                HostClassKeys,
                CssVarKeys,
                SlotNames,
                TestIds
            >,
            'state' | 'updateState'
        >,
    ) => Extract<keyof State, keyof HTMLElement> extends never
        ? Extract<keyof State, keyof Inputs> extends never
            ? State
            : `ERROR: Cannot define an element state property that clashes with input properties: ${Extract<keyof State, keyof Inputs> extends string | number | bigint | boolean | null | undefined ? Extract<keyof State, keyof Inputs> : ''}`
        : `ERROR: Cannot define an element state property that clashes with native HTMLElement properties: ${Extract<keyof State, keyof HTMLElement>}`;
    /** Called as part of the first render call, before the first render call. */
    init?:
        | InitCallback<
              TagName,
              Inputs,
              State,
              EventsInit,
              HostClassKeys,
              CssVarKeys,
              SlotNames,
              TestIds
          >
        | undefined;
    /**
     * Optional callback to create a cache key from the current inputs and state. When provided, and
     * the callback returns a non-undefined and non-null value, the element's render output is
     * automatically wrapped in {@link keyedCache}, preserving DOM state (typed input values,
     * checkbox state, etc.) across key changes. If `undefined` or `null` are returned,
     * {@link keyedCache} will not be used.
     */
    cacheKey?:
        | ((
              params: Readonly<{inputs: Readonly<Inputs>; state: Readonly<State>}>,
          ) => PropertyKey | undefined | null)
        | undefined;
    /** Called whenever an element updates. This creates the element's HTML. */
    render: RenderCallback<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames,
        TestIds
    >;
    /** Called whenever an element is detached from the DOM. */
    cleanup?:
        | InitCallback<
              TagName,
              Inputs,
              State,
              EventsInit,
              HostClassKeys,
              CssVarKeys,
              SlotNames,
              TestIds
          >
        | undefined;
    /** Extra element definition options. */
    options?: Partial<DeclarativeElementDefinitionOptions> | undefined;
};
