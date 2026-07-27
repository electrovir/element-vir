/* eslint-disable @typescript-eslint/no-empty-object-type */

import {type PartialWithNullable} from '@augment-vir/common';
import {type CustomElementTagName} from './custom-tag-name.js';
import {type DeclarativeElementInit} from './declarative-element-init.js';
import {type DeclarativeElementInputErrorParams, defineElement} from './define-element.js';
import {type EventsInitMap} from './properties/element-events.js';
import {type PropertyInitMapBase} from './properties/element-properties.js';
import {type BaseStringName} from './properties/string-names.js';

/**
 * A {@link DeclarativeElementInit} with all type parameters erased, used internally by
 * {@link wrapDefineElement} to call its own options callbacks.
 *
 * @category Internal
 */
export type AnyDeclarativeElementInit = DeclarativeElementInit<
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
>;

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
     *
     * The transformed `tagName` must equal the original: TypeScript cannot compute the result of a
     * run-time string transform, so a changed `tagName` would register a custom element that no
     * longer matches the returned definition's type, and would also invalidate the event types,
     * host class names, CSS var names, slot names, and test ids that are all derived from the
     * original tag name. {@link wrapDefineElement} throws when a transform changes it.
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
 * @throws If `options.transformInputs` returns a different `tagName` than it was given.
 */
export function wrapDefineElement<
    TagNameRequirement extends CustomElementTagName = CustomElementTagName,
    InputsRequirement extends PropertyInitMapBase = {},
    StateRequirement extends PropertyInitMapBase = {},
    EventsInitRequirement extends EventsInitMap = {},
>(options?: WrapDefineElementOptions | undefined) {
    const {assertInputs, transformInputs}: WrapDefineElementOptions = {
        assertInputs: options?.assertInputs ?? (() => {}),
        transformInputs: options?.transformInputs ?? ((inputInit) => inputInit),
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
            const transformedInputs = transformInputs(
                inputs as DeclarativeElementInit<any, any, any, any, any, any, any, any>,
            );

            if (transformedInputs.tagName !== inputs.tagName) {
                throw new Error(
                    `transformInputs cannot change tagName: '${inputs.tagName}' was transformed into '${transformedInputs.tagName}'.`,
                );
            }

            return defineElement<Inputs>(...errorParams)(
                transformedInputs as unknown as DeclarativeElementInit<
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
