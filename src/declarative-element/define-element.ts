import {DeclarativeElementDefinition} from './declarative-element';
import {CustomElementTagName, DeclarativeElementInit} from './declarative-element-init';
import {defineElementNoInputs} from './define-element-no-inputs';
import {IgnoreInputsNotBeenSetBeforeRenderWarningSymbol} from './definition-options';
import {EventsInitMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';

type ElementDefiner<InputsGeneric extends PropertyInitMapBase, HasInputsDefiner extends boolean> = <
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
        HasInputsDefiner
    >,
) => DeclarativeElementDefinition<
    TagNameGeneric,
    InputsGeneric,
    StateInitGeneric,
    EventsInitGeneric,
    HostClassKeysGeneric,
    CssVarKeysGeneric,
    RenderOutputGeneric,
    HasInputsDefiner
>;
export function defineElement<InputsGeneric extends PropertyInitMapBase = {}>(): ElementDefiner<
    InputsGeneric,
    false
>;
export function defineElement<InputsDefinerFunction extends (input: any) => any>(
    inputsDefinerFunction?: InputsDefinerFunction,
): ElementDefiner<ReturnType<InputsDefinerFunction>, true>;
export function defineElement<InputsDefinerFunction extends (input: any) => any>(
    inputsDefinerFunction?: InputsDefinerFunction,
): ElementDefiner<ReturnType<InputsDefinerFunction>, true> {
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
                boolean
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
        boolean
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
