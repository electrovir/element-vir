/* eslint-disable @typescript-eslint/no-empty-object-type */

import {type PartialWithNullable} from '@augment-vir/common';
import {type CustomElementTagName} from './custom-tag-name.js';
import {type DeclarativeElementInit} from './declarative-element-init.js';
import {type DeclarativeElementInputErrorParams, defineElement} from './define-element.js';
import {type EventsInitMap} from './properties/element-events.js';
import {type PropertyInitMapBase} from './properties/element-properties.js';
import {type BaseStringName} from './properties/string-names.js';

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
            BaseStringName<TagNameRequirement>,
            BaseStringName<TagNameRequirement>,
            ReadonlyArray<string>,
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
            BaseStringName<TagNameRequirement>,
            BaseStringName<TagNameRequirement>,
            ReadonlyArray<string>,
            ReadonlyArray<string>
        >,
    ) => DeclarativeElementInit<
        TagNameRequirement,
        InputsRequirement,
        StateRequirement,
        EventsInitRequirement,
        BaseStringName<TagNameRequirement>,
        BaseStringName<TagNameRequirement>,
        ReadonlyArray<string>,
        ReadonlyArray<string>
    >;
}>;

/**
 * Wraps {@link defineElement} in a superset of requirements. For example:
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

    return <Inputs extends InputsRequirement>(
        ...errorParams: DeclarativeElementInputErrorParams<Inputs>
    ) => {
        return <
            const TagName extends TagNameRequirement,
            State extends StateRequirement,
            EventsInit extends EventsInitRequirement,
            const HostClassKeys extends BaseStringName<TagName> = `${TagName}-`,
            const CssVarKeys extends BaseStringName<TagName> = `${TagName}-`,
            const SlotNames extends ReadonlyArray<string> = Readonly<[]>,
            const TestIds extends ReadonlyArray<string> = Readonly<[]>,
        >(
            inputs: DeclarativeElementInit<
                TagName,
                Inputs,
                State,
                EventsInit,
                HostClassKeys,
                CssVarKeys,
                SlotNames,
                TestIds
            >,
        ) => {
            assertInputs(inputs as DeclarativeElementInit<any, any, any, any, any, any, any, any>);
            return defineElement<Inputs>(...errorParams)(
                transformInputs(
                    inputs as DeclarativeElementInit<any, any, any, any, any, any, any, any>,
                ) as unknown as DeclarativeElementInit<
                    TagName,
                    Inputs,
                    State,
                    EventsInit,
                    HostClassKeys,
                    CssVarKeys,
                    SlotNames,
                    TestIds
                >,
            );
        };
    };
}
