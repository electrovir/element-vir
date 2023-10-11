import {CustomElementTagName} from './custom-tag-name';
import {DeclarativeElementDefinition} from './declarative-element';
import {DeclarativeElementInit} from './declarative-element-init';
import {defineElementNoInputs} from './define-element-no-inputs';
import {IgnoreInputsNotBeenSetBeforeWarningSymbol} from './definition-options';
import {BaseCssPropertyName} from './properties/css-properties';
import {EventsInitMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';

export function defineElement<InputsGeneric extends PropertyInitMapBase = {}>() {
    return <
        TagName extends CustomElementTagName,
        StateInit extends PropertyInitMapBase = {},
        EventsInit extends EventsInitMap = {},
        HostClassKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
        CssVarKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
        RenderOutput = any,
    >(
        initInput: DeclarativeElementInit<
            TagName,
            InputsGeneric,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            RenderOutput
        >,
    ): DeclarativeElementDefinition<
        TagName,
        InputsGeneric,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        RenderOutput
    > => {
        return defineElementNoInputs({
            ...initInput,
            options: {
                [IgnoreInputsNotBeenSetBeforeWarningSymbol]: false,
                ...initInput.options,
            },
        });
    };
}
