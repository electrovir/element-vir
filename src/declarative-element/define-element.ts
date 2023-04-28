import {DeclarativeElementDefinition} from './declarative-element';
import {CustomElementTagName, DeclarativeElementInit} from './declarative-element-init';
import {defineElementNoInputs} from './define-element-no-inputs';
import {IgnoreInputsNotBeenSetBeforeRenderWarningSymbol} from './definition-options';
import {EventsInitMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';

type ElementDefiner<
    InputsGeneric extends PropertyInitMapBase,
    InputsDefinerFunction extends ((input: any) => any) | undefined,
> = <
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
        RenderOutputGeneric,
        InputsDefinerFunction
    >,
) => DeclarativeElementDefinition<
    TagNameGeneric,
    InputsGeneric,
    StateInitGeneric,
    EventsInitGeneric,
    HostClassKeysGeneric,
    CssVarKeysGeneric,
    RenderOutputGeneric,
    InputsDefinerFunction
>;
export function defineElement<InputsGeneric extends PropertyInitMapBase = {}>(): ElementDefiner<
    InputsGeneric,
    undefined
>;
export function defineElement<InputsDefinerFunction extends (input: any) => any>(
    inputsDefinerFunction: InputsDefinerFunction,
): ElementDefiner<ReturnType<InputsDefinerFunction>, InputsDefinerFunction>;
export function defineElement<InputsDefinerFunction extends (input: any) => any>(
    inputsDefinerFunction?: undefined,
): ElementDefiner<ReturnType<InputsDefinerFunction>, InputsDefinerFunction> {
    type InputsGeneric = ReturnType<InputsDefinerFunction>;

    return <
        TagNameGeneric extends CustomElementTagName,
        StateInitGeneric extends PropertyInitMapBase = {},
        EventsInitGeneric extends EventsInitMap = {},
        HostClassKeysGeneric extends string = '',
        CssVarKeysGeneric extends string = '',
        RenderOutputGeneric = any,
    >(
        initInput: Omit<
            DeclarativeElementInit<
                TagNameGeneric,
                InputsGeneric,
                StateInitGeneric,
                EventsInitGeneric,
                HostClassKeysGeneric,
                CssVarKeysGeneric,
                RenderOutputGeneric,
                any
            >,
            'inputsDefiner'
        >,
    ): DeclarativeElementDefinition<
        TagNameGeneric,
        InputsGeneric,
        StateInitGeneric,
        EventsInitGeneric,
        HostClassKeysGeneric,
        CssVarKeysGeneric,
        RenderOutputGeneric,
        InputsDefinerFunction
    > => {
        return defineElementNoInputs({
            ...initInput,
            options: {
                ...initInput.options,
                [IgnoreInputsNotBeenSetBeforeRenderWarningSymbol]: false,
            },
            inputsDefiner: inputsDefinerFunction,
        });
    };
}
