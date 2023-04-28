import {PartialAndNullable} from '@augment-vir/common';
import {
    CustomElementTagName,
    DeclarativeElementInit,
    defineElement,
    defineElementNoInputs,
    EventsInitMap,
    PropertyInitMapBase,
} from '..';

export type WrapDefineElementOptions<
    TagNameRequirementGeneric extends CustomElementTagName = CustomElementTagName,
    InputsRequirementGeneric extends PropertyInitMapBase = {},
    StateInitRequirementGeneric extends PropertyInitMapBase = {},
    EventsInitRequirementGeneric extends EventsInitMap = {},
    HostClassKeysRequirementGeneric extends string = '',
    CssVarKeysRequirementGeneric extends string = '',
    RenderOutputRequirementGeneric = any,
    InputsDefinerFunctionRequirementGeneric extends ((input: any) => any) | undefined = undefined,
> = PartialAndNullable<{
    assertInputs: (
        inputInit: DeclarativeElementInit<
            TagNameRequirementGeneric,
            InputsRequirementGeneric,
            StateInitRequirementGeneric,
            EventsInitRequirementGeneric,
            HostClassKeysRequirementGeneric,
            CssVarKeysRequirementGeneric,
            RenderOutputRequirementGeneric,
            InputsDefinerFunctionRequirementGeneric
        >,
    ) => void;
    transformInputs: (
        inputInit: DeclarativeElementInit<
            TagNameRequirementGeneric,
            InputsRequirementGeneric,
            StateInitRequirementGeneric,
            EventsInitRequirementGeneric,
            HostClassKeysRequirementGeneric,
            CssVarKeysRequirementGeneric,
            RenderOutputRequirementGeneric,
            InputsDefinerFunctionRequirementGeneric
        >,
    ) => DeclarativeElementInit<
        TagNameRequirementGeneric,
        InputsRequirementGeneric,
        StateInitRequirementGeneric,
        EventsInitRequirementGeneric,
        HostClassKeysRequirementGeneric,
        CssVarKeysRequirementGeneric,
        RenderOutputRequirementGeneric,
        InputsDefinerFunctionRequirementGeneric
    >;
}>;

export function wrapDefineElement<
    TagNameRequirementGeneric extends CustomElementTagName = CustomElementTagName,
    InputsRequirementGeneric extends PropertyInitMapBase = {},
    StateInitRequirementGeneric extends PropertyInitMapBase = {},
    EventsInitRequirementGeneric extends EventsInitMap = {},
    HostClassKeysRequirementGeneric extends string = string,
    CssVarKeysRequirementGeneric extends string = string,
    RenderOutputRequirementGeneric = any,
    InputsDefinerFunctionRequirementGeneric extends ((input: any) => any) | undefined = undefined,
>(options?: WrapDefineElementOptions | undefined) {
    const {assertInputs, transformInputs}: WrapDefineElementOptions = {
        assertInputs: options?.assertInputs ?? (() => {}),
        transformInputs: options?.transformInputs ?? ((inputs: any) => inputs),
    };

    return {
        defineElement: <InputsGeneric extends InputsRequirementGeneric>() => {
            return <
                TagNameGeneric extends TagNameRequirementGeneric,
                StateInitGeneric extends StateInitRequirementGeneric,
                EventsInitGeneric extends EventsInitRequirementGeneric,
                HostClassKeysGeneric extends HostClassKeysRequirementGeneric,
                CssVarKeysGeneric extends CssVarKeysRequirementGeneric,
                RenderOutputGeneric extends RenderOutputRequirementGeneric,
                InputsDefinerFunctionGeneric extends InputsDefinerFunctionRequirementGeneric,
            >(
                inputs: DeclarativeElementInit<
                    TagNameGeneric,
                    InputsGeneric,
                    StateInitGeneric,
                    EventsInitGeneric,
                    HostClassKeysGeneric,
                    CssVarKeysGeneric,
                    RenderOutputGeneric,
                    InputsDefinerFunctionGeneric
                >,
            ) => {
                assertInputs(
                    inputs as DeclarativeElementInit<any, any, any, any, any, any, any, any>,
                );
                return defineElement<InputsGeneric>()(
                    transformInputs(
                        inputs as DeclarativeElementInit<any, any, any, any, any, any, any, any>,
                    ) as unknown as DeclarativeElementInit<
                        TagNameGeneric,
                        InputsGeneric,
                        StateInitGeneric,
                        EventsInitGeneric,
                        HostClassKeysGeneric,
                        CssVarKeysGeneric,
                        RenderOutputGeneric,
                        any
                    >,
                );
            };
        },
        defineElementNoInputs: <
            TagNameGeneric extends TagNameRequirementGeneric,
            InputsGeneric extends InputsRequirementGeneric,
            StateInitGeneric extends StateInitRequirementGeneric,
            EventsInitGeneric extends EventsInitRequirementGeneric,
            HostClassKeysGeneric extends HostClassKeysRequirementGeneric,
            CssVarKeysGeneric extends CssVarKeysRequirementGeneric,
            RenderOutputGeneric extends RenderOutputRequirementGeneric,
            InputsDefinerFunctionGeneric extends InputsDefinerFunctionRequirementGeneric,
        >(
            inputs: DeclarativeElementInit<
                TagNameGeneric,
                InputsGeneric,
                StateInitGeneric,
                EventsInitGeneric,
                HostClassKeysGeneric,
                CssVarKeysGeneric,
                RenderOutputGeneric,
                InputsDefinerFunctionGeneric
            >,
        ) => {
            assertInputs(inputs as DeclarativeElementInit<any, any, any, any, any, any, any, any>);
            return defineElementNoInputs(
                transformInputs(
                    inputs as DeclarativeElementInit<any, any, any, any, any, any, any, any>,
                ) as unknown as DeclarativeElementInit<
                    TagNameGeneric,
                    InputsGeneric,
                    StateInitGeneric,
                    EventsInitGeneric,
                    HostClassKeysGeneric,
                    CssVarKeysGeneric,
                    RenderOutputGeneric,
                    InputsDefinerFunctionGeneric
                >,
            );
        },
    };
}
