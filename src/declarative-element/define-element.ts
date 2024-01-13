import {isRunTimeType} from 'run-time-assertions';
import {CustomElementTagName} from './custom-tag-name';
import {DeclarativeElementDefinition} from './declarative-element';
import {DeclarativeElementInit} from './declarative-element-init';
import {defineElementNoInputs, VerifiedElementNoInputsInit} from './define-element-no-inputs';
import {IgnoreInputsNotBeenSetBeforeWarningSymbol} from './definition-options';
import {BaseCssPropertyName} from './properties/css-properties';
import {EventsInitMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';

export type VerifiedElementInit<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
> = Extract<keyof StateInit, keyof Inputs> extends never
    ? Extract<keyof Inputs, keyof HTMLElement> extends never
        ? VerifiedElementNoInputsInit<
              TagName,
              Inputs,
              StateInit,
              EventsInit,
              HostClassKeys,
              CssVarKeys
          >
        : 'ERROR: Cannot define an element input property that clashes with native HTMLElement properties.'
    : "ERROR: Cannot define an element state property that clashes with the element's input properties.";

export function defineElement<Inputs extends PropertyInitMapBase = {}>() {
    return <
        TagName extends CustomElementTagName,
        StateInit extends PropertyInitMapBase = {},
        EventsInit extends EventsInitMap = {},
        HostClassKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
        CssVarKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
    >(
        initInput: VerifiedElementInit<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys
        >,
    ): DeclarativeElementDefinition<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys
    > => {
        const init:
            | string
            | DeclarativeElementInit<
                  TagName,
                  Inputs,
                  StateInit,
                  EventsInit,
                  HostClassKeys,
                  CssVarKeys
              > = initInput;

        if (!isRunTimeType(init, 'object')) {
            throw new Error('Cannot define element with non-object init: ${init}');
        }

        return defineElementNoInputs({
            ...init,
            options: {
                [IgnoreInputsNotBeenSetBeforeWarningSymbol]: false,
                ...init.options,
            },
        } as VerifiedElementNoInputsInit<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys
        >);
    };
}
