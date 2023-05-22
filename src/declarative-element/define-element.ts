import {DeclarativeElementDefinition} from './declarative-element';
import {CustomElementTagName, DeclarativeElementInit} from './declarative-element-init';
import {defineElementNoInputs} from './define-element-no-inputs';
import {IgnoreInputsNotBeenSetBeforeRenderWarningSymbol} from './definition-options';
import {EventsInitMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';

export function defineElement<InputsGeneric extends PropertyInitMapBase = {}>() {
    return <
        TagNameGeneric extends CustomElementTagName,
        StateInitGeneric extends PropertyInitMapBase = {},
        EventsInitGeneric extends EventsInitMap = {},
        HostClassKeysGeneric extends string = '',
        CssVarKeysGeneric extends string = '',
        RenderOutputGeneric = any,
    >(
        initInput: DeclarativeElementInit<
            TagNameGeneric,
            InputsGeneric,
            StateInitGeneric,
            EventsInitGeneric,
            HostClassKeysGeneric,
            CssVarKeysGeneric,
            RenderOutputGeneric
        >,
    ): DeclarativeElementDefinition<
        TagNameGeneric,
        InputsGeneric,
        StateInitGeneric,
        EventsInitGeneric,
        HostClassKeysGeneric,
        CssVarKeysGeneric,
        RenderOutputGeneric
    > => {
        return defineElementNoInputs({
            ...initInput,
            options: {
                [IgnoreInputsNotBeenSetBeforeRenderWarningSymbol]: false,
                ...initInput.options,
            },
        });
    };
}
