/* eslint-disable @typescript-eslint/no-empty-object-type */

import {check} from '@augment-vir/assert';
import {
    ensureErrorAndPrependMessage,
    extractErrorMessage,
    getObjectTypedKeys,
    kebabCaseToCamelCase,
} from '@augment-vir/common';
import {defineCssVars} from 'lit-css-vars';
import {type MinimalDefinitionWithInputs} from '../template-transforms/minimal-element-definition.js';
import {css} from '../template-transforms/vir-css/vir-css.js';
import {type CustomElementTagName} from './custom-tag-name.js';
import {type DeclarativeElementInit} from './declarative-element-init.js';
import {
    DeclarativeElement,
    type DeclarativeElementDefinition,
    type StaticDeclarativeElementProperties,
} from './declarative-element.js';
import {
    type DeclarativeElementDefinitionOptions,
    defaultDeclarativeElementDefinitionOptions,
} from './definition-options.js';
import {assignInputs} from './properties/assign-inputs.js';
import {type BaseCssPropertyName, assertValidCssProperties} from './properties/css-properties.js';
import {type CssVars} from './properties/css-vars.js';
import {
    type EventDescriptorMap,
    type EventsInitMap,
    createEventDescriptorMap,
} from './properties/element-events.js';
import {type PropertyInitMapBase} from './properties/element-properties.js';
import {type HostClassNamesMap, createHostClassNamesMap} from './properties/host-classes.js';
import {bindReactiveProperty, createElementPropertyProxy} from './properties/property-proxy.js';
import {applyHostClasses, createStylesCallbackInput} from './properties/styles.js';
import {type RenderParams, createRenderParams} from './render-callback.js';
import {createSlotNamesMap} from './slot-names.js';

/**
 * Defines an element without any inputs.
 *
 * @deprecated Use plain `defineElement` instead.
 * @category Internal
 */
export function defineElementNoInputs<
    const TagName extends CustomElementTagName = '-',
    Inputs extends PropertyInitMapBase = {},
    State extends PropertyInitMapBase = {},
    EventsInit extends EventsInitMap = {},
    const HostClassKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
    const CssVarKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
    const SlotNames extends ReadonlyArray<string> = Readonly<[]>,
>(
    init: DeclarativeElementInit<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >,
): DeclarativeElementDefinition<
    TagName,
    Inputs,
    State,
    EventsInit,
    HostClassKeys,
    CssVarKeys,
    SlotNames
> {
    if (!check.isObject(init)) {
        throw new TypeError('Cannot define element with non-object init: ${init}');
    }
    if (!check.isString(init.tagName)) {
        throw new TypeError('Missing valid tagName (expected a string).');
    }

    type ThisElementDefinition = DeclarativeElementDefinition<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    type ThisElementStaticClass = typeof DeclarativeElement<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    type ThisElementInstance = InstanceType<ThisElementStaticClass>;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!init.render || typeof init.render === 'string') {
        throw new Error(`Failed to define element '${init.tagName}': render is not a function`);
    }

    const elementOptions: DeclarativeElementDefinitionOptions = {
        ...defaultDeclarativeElementDefinitionOptions,
        ...init.options,
    };

    const eventsMap: EventDescriptorMap<TagName, EventsInit> = createEventDescriptorMap(
        init.tagName,
        init.events,
    );
    const hostClassNames: HostClassNamesMap<TagName, HostClassKeys> = createHostClassNamesMap(
        init.hostClasses,
    );
    if (init.hostClasses) {
        assertValidCssProperties(init.tagName, init.hostClasses);
    }
    if (init.cssVars) {
        assertValidCssProperties(init.tagName, init.cssVars);
    }
    /**
     * As casts here are to prevent defineCssVars from complaining that our CSS var names are too
     * generic or the names not being in kebab-case. (Which, in this line of code, are indeed true
     * errors. However, this is for internal types only and the user will actually see much more
     * specific types externally.)
     */
    const cssVars = (init.cssVars ? defineCssVars(init.cssVars as any) : {}) as CssVars<
        TagName,
        CssVarKeys
    >;

    const slotNamesMap = createSlotNamesMap(init.slotNames);

    const calculatedStyles =
        typeof init.styles === 'function'
            ? init.styles(createStylesCallbackInput({hostClassNames, cssVars}))
            : init.styles || css``;

    const typedRenderCallback: StaticDeclarativeElementProperties<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >['render'] = init.render;

    function typedAssignCallback(...[inputs]: Parameters<ThisElementStaticClass['assign']>) {
        const wrappedDefinition: MinimalDefinitionWithInputs = {
            _elementVirIsMinimalDefinitionWithInputs: true,
            definition: anonymousClass,
            inputs,
        };

        return wrappedDefinition;
    }

    const anonymousClass = class extends DeclarativeElement<
        TagName,
        Inputs,
        State,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    > {
        public static override readonly elementOptions = elementOptions;
        public static override readonly tagName = init.tagName;
        public static override readonly styles = calculatedStyles;

        public _lastRenderError: Error | undefined = undefined;
        public _internalRenderCount = 0;

        public createRenderParams(): RenderParams<
            TagName,
            Inputs,
            State,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        > {
            return createRenderParams({element: this, eventsMap, cssVars, slotNamesMap});
        }

        public static override readonly assign = typedAssignCallback as any;

        public static override readonly events: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            State,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >['events'] = eventsMap;
        public static override readonly render: ThisElementStaticClass['render'] =
            typedRenderCallback as any as ThisElementStaticClass['render'];
        public static override readonly hostClasses: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            State,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >['hostClasses'] = hostClassNames;
        public static override readonly cssVars: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            State,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >['cssVars'] = cssVars;
        public static override readonly init = init as any;
        public static override readonly slotNames: StaticDeclarativeElementProperties<
            TagName,
            Inputs,
            State,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >['slotNames'] = slotNamesMap;
        public get InstanceType() {
            throw new Error(
                `'InstanceType' was called on ${init.tagName} as a value but it is only a type.`,
            );
        }
        public static override get InputsType(): Inputs {
            throw new Error(
                `'InputsType' was called on ${init.tagName} as a value but it is only a type.`,
            );
        }
        public static override get StateType(): State {
            throw new Error(
                `'StateType' was called on ${init.tagName} as a value but it is only a type.`,
            );
        }
        public static override get UpdateStateType(): any {
            throw new Error(
                `'UpdateStateType' was called on ${init.tagName} as a value but it is only a type.`,
            );
        }

        public _initCalled = false;
        public _stateCalled = false;
        public _hasRendered = false;
        public _lastRenderedProps: ThisElementInstance['_lastRenderedProps'] = undefined as any;

        public render() {
            this._internalRenderCount++;
            try {
                this._hasRendered = true;

                const renderParams = this.createRenderParams();

                if (!this._stateCalled && init.state) {
                    this._stateCalled = true;
                    const stateInit = init.state(renderParams);

                    if (stateInit instanceof Promise) {
                        throw new TypeError('init cannot be asynchronous');
                    }

                    getObjectTypedKeys(stateInit).forEach((stateKey) => {
                        bindReactiveProperty(this, stateKey);

                        (this.instanceState as PropertyInitMapBase)[stateKey] = stateInit[stateKey];
                    });
                }

                if (!this._initCalled && init.init) {
                    this._initCalled = true;
                    if ((init.init(renderParams) as any) instanceof Promise) {
                        throw new TypeError('init cannot be asynchronous');
                    }
                }

                const renderResult = typedRenderCallback(renderParams);
                if (renderResult instanceof Promise) {
                    throw new TypeError('render cannot be asynchronous');
                }
                applyHostClasses({
                    host: renderParams.host,
                    hostClassesInit: init.hostClasses,
                    hostClassNames,
                    state: renderParams.state,
                    inputs: renderParams.inputs,
                });
                this._lastRenderedProps = {
                    inputs: {...renderParams.inputs},
                    state: {...renderParams.state},
                };
                return renderResult;
            } catch (caught) {
                const error: Error = ensureErrorAndPrependMessage(
                    caught,
                    `Failed to render ${init.tagName}`,
                );
                console.error(error);
                this._lastRenderError = error;
                return extractErrorMessage(error);
            }
        }

        public override connectedCallback(): void {
            super.connectedCallback();
            if (this._hasRendered && !this._initCalled && init.init) {
                this._initCalled = true;
                const renderParams = this.createRenderParams();
                if ((init.init(renderParams) as any) instanceof Promise) {
                    throw new TypeError(`init in '${init.tagName}' cannot be asynchronous`);
                }
            }
        }

        public destroy() {
            Object.values(this.instanceState).forEach((stateValue) => {
                if (check.hasKey(stateValue, 'destroy') && check.isFunction(stateValue.destroy)) {
                    stateValue.destroy();
                }
            });
        }

        public override disconnectedCallback(): void {
            super.disconnectedCallback();
            if (init.cleanup) {
                const renderParams = this.createRenderParams();
                if ((init.cleanup(renderParams) as any) instanceof Promise) {
                    throw new TypeError(`cleanup in '${init.tagName}' cannot be asynchronous`);
                }
            }
            this.destroy();
            this._initCalled = false;
            this._stateCalled = false;
        }

        // this is set below in Object.defineProperties
        public readonly definition: ThisElementInstance['definition'] =
            {} as unknown as ThisElementDefinition;

        public assignInputs(inputs: Partial<Inputs>): void {
            assignInputs(this, inputs);
        }

        public readonly observablePropertyListenerMap: ThisElementInstance['observablePropertyListenerMap'] =
            {};

        public readonly instanceInputs: ThisElementInstance['instanceInputs'] =
            createElementPropertyProxy<Readonly<Inputs>>(this as any, false);

        public readonly instanceState: ThisElementInstance['instanceState'] =
            createElementPropertyProxy<State>(this as any, !elementOptions.allowPolymorphicState);

        constructor() {
            super();
            this.definition = anonymousClass as unknown as ThisElementDefinition;
        }
    };

    Object.defineProperties(anonymousClass, {
        name: {
            value: kebabCaseToCamelCase(init.tagName, {
                capitalizeFirstLetter: true,
            }),
            writable: true,
        },
    });

    if (window.customElements.get(init.tagName)) {
        console.warn(`Tried to define custom element '${init.tagName}' but it is already defined.`);
    } else {
        window.customElements.define(init.tagName, anonymousClass);
    }

    return anonymousClass as unknown as ThisElementDefinition;
}
