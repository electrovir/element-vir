/* eslint-disable @typescript-eslint/no-empty-object-type */

import {type PartialWithNullable} from '@augment-vir/common';
import {type CustomElementTagName} from './custom-tag-name.js';
import {type DeclarativeElementInit} from './declarative-element-init.js';
import {defineElementNoInputs} from './define-element-no-inputs.js';
import {type DeclarativeElementInputErrorParams, defineElement} from './define-element.js';
import {type BaseCssPropertyName} from './properties/css-properties.js';
import {type EventsInitMap} from './properties/element-events.js';
import {type PropertyInitMapBase} from './properties/element-properties.js';

/**
 * Options for {@link wrapDefineElement}.
 *
 * @category Internal
 */
export type WrapDefineElementOptions<
    TagNameRequirement extends CustomElementTagName = CustomElementTagName,
    InputsRequirement extends PropertyInitMapBase = {},
    StateRequirement extends PropertyInitMapBase = {},
    EventsInitRequirement extends EventsInitMap = {},
> = PartialWithNullable<{
    /**
     * An optional callback which asserts that an element definition init object given to the
     * wrapped element definition functions is valid.
     */
    assertInputs: (
        inputInit: DeclarativeElementInit<
            TagNameRequirement,
            InputsRequirement,
            StateRequirement,
            EventsInitRequirement,
            BaseCssPropertyName<TagNameRequirement>,
            BaseCssPropertyName<TagNameRequirement>,
            ReadonlyArray<string>
        >,
    ) => void;
    /**
     * An optional callback which transforms a element definition init object given to the wrapped
     * element definition.
     */
    transformInputs: (
        inputInit: DeclarativeElementInit<
            TagNameRequirement,
            InputsRequirement,
            StateRequirement,
            EventsInitRequirement,
            BaseCssPropertyName<TagNameRequirement>,
            BaseCssPropertyName<TagNameRequirement>,
            ReadonlyArray<string>
        >,
    ) => DeclarativeElementInit<
        TagNameRequirement,
        InputsRequirement,
        StateRequirement,
        EventsInitRequirement,
        BaseCssPropertyName<TagNameRequirement>,
        BaseCssPropertyName<TagNameRequirement>,
        ReadonlyArray<string>
    >;
}>;

/**
 * Wraps {@link defineElement} and {@link defineElementNoInputs} in a superset of requirements. For
 * example:
 *
 * - You could create element definition functions that require all elements to start with a common
 *   prefix, like `vir-`.
 * - You could create element definition functions that require all elements to have _at least_ a
 *   specified set of input properties.
 * - Etc.
 *
 * @category Element Definition
 */
export function wrapDefineElement<
    TagNameRequirement extends CustomElementTagName = CustomElementTagName,
    InputsRequirement extends PropertyInitMapBase = {},
    StateRequirement extends PropertyInitMapBase = {},
    EventsInitRequirement extends EventsInitMap = {},
>(options?: WrapDefineElementOptions | undefined) {
    const {assertInputs, transformInputs}: WrapDefineElementOptions = {
        assertInputs: options?.assertInputs ?? (() => {}),
        transformInputs: options?.transformInputs ?? ((inputs: any) => inputs),
    };

    return {
        /** A wrapped function for defining an element with inputs. */
        defineElement: <Inputs extends InputsRequirement>(
            ...errorParams: DeclarativeElementInputErrorParams<Inputs>
        ) => {
            return <
                const TagName extends TagNameRequirement,
                State extends StateRequirement,
                EventsInit extends EventsInitRequirement,
                const HostClassKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
                const CssVarKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
                const SlotNames extends ReadonlyArray<string> = Readonly<[]>,
            >(
                inputs: DeclarativeElementInit<
                    TagName,
                    Inputs,
                    State,
                    EventsInit,
                    HostClassKeys,
                    CssVarKeys,
                    SlotNames
                >,
            ) => {
                assertInputs(inputs as DeclarativeElementInit<any, any, any, any, any, any, any>);
                return defineElement<Inputs>(...errorParams)(
                    transformInputs(
                        inputs as DeclarativeElementInit<any, any, any, any, any, any, any>,
                    ) as unknown as DeclarativeElementInit<
                        TagName,
                        Inputs,
                        State,
                        EventsInit,
                        HostClassKeys,
                        CssVarKeys,
                        SlotNames
                    >,
                );
            };
        },
        /** A wrapped function for defining an element without inputs. */
        defineElementNoInputs: <
            const TagName extends TagNameRequirement,
            Inputs extends InputsRequirement,
            State extends StateRequirement,
            EventsInit extends EventsInitRequirement,
            const HostClassKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
            const CssVarKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
            const SlotNames extends ReadonlyArray<string> = Readonly<[]>,
        >(
            inputs: DeclarativeElementInit<
                TagName,
                Inputs,
                State,
                EventsInit,
                HostClassKeys,
                CssVarKeys,
                SlotNames
            >,
        ) => {
            assertInputs(inputs as DeclarativeElementInit<any, any, any, any, any, any, any>);
            return defineElementNoInputs(
                transformInputs(
                    inputs as DeclarativeElementInit<any, any, any, any, any, any, any>,
                ) as unknown as DeclarativeElementInit<
                    TagName,
                    Inputs,
                    State,
                    EventsInit,
                    HostClassKeys,
                    CssVarKeys,
                    SlotNames
                >,
            );
        },
    };
}
