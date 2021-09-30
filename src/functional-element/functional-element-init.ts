import {CSSResult} from 'lit';
import {EventsInitMap} from './element-events';
import {PropertyInitMapBase} from './element-properties';
import {LifecycleCallback} from './lifecycle-callback';
import {RenderCallback} from './render-callback';

export type FunctionalElementInit<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
> = {
    /**
     * HTML tag name. This should not be used directly, as interpolating it with the html tagged
     * template from this package is preferred.
     */
    tagName: string;
    /** Static styles. These should not and cannot change. */
    styles?: CSSResult | undefined;
    /** Initializer for element properties. (These can be thought of as "inputs".) */
    props?: PropertyInitGeneric | undefined;
    /** Initializer for events that the element can dispatch. (These can be thought of as "outputs".) */
    events?: EventsInitGeneric | undefined;

    connectedCallback?: LifecycleCallback<PropertyInitGeneric, EventsInitGeneric>;
    disconnectedCallback?: LifecycleCallback<PropertyInitGeneric, EventsInitGeneric>;
    firstUpdated?: LifecycleCallback<PropertyInitGeneric, EventsInitGeneric>;

    renderCallback: RenderCallback<PropertyInitGeneric, EventsInitGeneric>;
};
