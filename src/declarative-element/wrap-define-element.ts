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
> = PartialAndNullable<{
    assertInputs: (
        inputInit: DeclarativeElementInit<
            TagNameRequirementGeneric,
            InputsRequirementGeneric,
            StateInitRequirementGeneric,
            EventsInitRequirementGeneric,
            HostClassKeysRequirementGeneric,
            CssVarKeysRequirementGeneric
        >,
    ) => void;
    transformInputs: (
        inputInit: DeclarativeElementInit<
            TagNameRequirementGeneric,
            InputsRequirementGeneric,
            StateInitRequirementGeneric,
            EventsInitRequirementGeneric,
            HostClassKeysRequirementGeneric,
            CssVarKeysRequirementGeneric
        >,
    ) => DeclarativeElementInit<
        TagNameRequirementGeneric,
        InputsRequirementGeneric,
        StateInitRequirementGeneric,
        EventsInitRequirementGeneric,
        HostClassKeysRequirementGeneric,
        CssVarKeysRequirementGeneric
    >;
}>;

export function wrapDefineElement<
    TagNameRequirementGeneric extends CustomElementTagName = CustomElementTagName,
    InputsRequirementGeneric extends PropertyInitMapBase = {},
    StateInitRequirementGeneric extends PropertyInitMapBase = {},
    EventsInitRequirementGeneric extends EventsInitMap = {},
    HostClassKeysRequirementGeneric extends string = string,
    CssVarKeysRequirementGeneric extends string = string,
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
            >(
                inputs: DeclarativeElementInit<
                    TagNameGeneric,
                    InputsGeneric,
                    StateInitGeneric,
                    EventsInitGeneric,
                    HostClassKeysGeneric,
                    CssVarKeysGeneric
                >,
            ) => {
                assertInputs(inputs as DeclarativeElementInit<any, any, any, any, any, any>);
                return defineElement<InputsGeneric>()(
                    transformInputs(
                        inputs as DeclarativeElementInit<any, any, any, any, any, any>,
                    ) as unknown as DeclarativeElementInit<
                        TagNameGeneric,
                        InputsGeneric,
                        StateInitGeneric,
                        EventsInitGeneric,
                        HostClassKeysGeneric,
                        CssVarKeysGeneric
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
        >(
            inputs: DeclarativeElementInit<
                TagNameGeneric,
                InputsGeneric,
                StateInitGeneric,
                EventsInitGeneric,
                HostClassKeysGeneric,
                CssVarKeysGeneric
            >,
        ) => {
            assertInputs(inputs as DeclarativeElementInit<any, any, any, any, any, any>);
            return defineElementNoInputs(
                transformInputs(
                    inputs as DeclarativeElementInit<any, any, any, any, any, any>,
                ) as unknown as DeclarativeElementInit<
                    TagNameGeneric,
                    InputsGeneric,
                    StateInitGeneric,
                    EventsInitGeneric,
                    HostClassKeysGeneric,
                    CssVarKeysGeneric
                >,
            );
        },
    };
}