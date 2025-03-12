/* eslint-disable @typescript-eslint/no-empty-object-type */

import {assert, check} from '@augment-vir/assert';
import {CustomElementTagName} from './custom-tag-name.js';
import {DeclarativeElementInit} from './declarative-element-init.js';
import {DeclarativeElementDefinition} from './declarative-element.js';
import {defineElementNoInputs} from './define-element-no-inputs.js';
import {BaseCssPropertyName} from './properties/css-properties.js';
import {EventsInitMap} from './properties/element-events.js';
import {PropertyInitMapBase} from './properties/element-properties.js';

/**
 * Verifies that the given `Inputs` type does not clash with built-in HTMLElement properties. This
 * is used within {@link defineElement}.
 *
 * @category Internal
 */
export type DeclarativeElementInputErrorParams<Inputs extends PropertyInitMapBase> =
    Extract<keyof Inputs, keyof HTMLElement> extends never
        ? []
        : [
              'ERROR: Cannot define an element input property that clashes with native HTMLElement properties.',
          ];

/**
 * Defines an element with inputs. If the element actually has no inputs, use
 * {@link defineElementNoInputs} instead. Note that this function must be called twice, due to
 * TypeScript type inference limitations.
 *
 * @category Element Definition
 * @example
 *
 * ```ts
 * import {defineElement, html} from 'element-vir';
 *
 * const MyElement = defineElement<{username: string}>()({
 *     tagName: 'my-element',
 *     render({inputs}) {
 *         return html`
 *             <p>hi: ${inputs.username}</p>
 *         `;
 *     },
 * });
 * ```
 */
export function defineElement<Inputs extends PropertyInitMapBase = {}>(
    /**
     * These `errorParams` is present when there are problems with the `Inputs` type. If it is
     * present, the error should be fixed. This should always be empty.
     */
    ...errorParams: DeclarativeElementInputErrorParams<Inputs>
) {
    assert.isEmpty(errorParams);

    return <
        const TagName extends CustomElementTagName,
        State extends PropertyInitMapBase = {},
        EventsInit extends EventsInitMap = {},
        const HostClassKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
        const CssVarKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
        const SlotNames extends ReadonlyArray<string> = Readonly<[]>,
    >(
        initInput: DeclarativeElementInit<
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
    > => {
        const init:
            | string
            | DeclarativeElementInit<
                  TagName,
                  Inputs,
                  State,
                  EventsInit,
                  HostClassKeys,
                  CssVarKeys,
                  SlotNames
              > = initInput;

        if (!check.isObject(init)) {
            throw new TypeError('Cannot define element with non-object init: ${init}');
        }

        return defineElementNoInputs({
            ...init,
            options: {
                ...init.options,
            },
        });
    };
}
