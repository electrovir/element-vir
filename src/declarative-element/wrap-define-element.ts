import {PartialAndNullable} from '@augment-vir/common';
import {
    CustomElementTagName,
    DeclarativeElementInit,
    defineElement,
    defineElementNoInputs,
    EventsInitMap,
    PropertyInitMapBase,
} from '..';
import {BaseCssPropertyName} from './properties/css-properties';

export type WrapDefineElementOptions<
    TagNameRequirement extends CustomElementTagName = CustomElementTagName,
    InputsRequirement extends PropertyInitMapBase = {},
    StateInitRequirement extends PropertyInitMapBase = {},
    EventsInitRequirement extends EventsInitMap = {},
    RenderOutput = any,
> = PartialAndNullable<{
    assertInputs: (
        inputInit: DeclarativeElementInit<
            TagNameRequirement,
            InputsRequirement,
            StateInitRequirement,
            EventsInitRequirement,
            BaseCssPropertyName<TagNameRequirement>,
            BaseCssPropertyName<TagNameRequirement>,
            RenderOutput
        >,
    ) => void;
    transformInputs: (
        inputInit: DeclarativeElementInit<
            TagNameRequirement,
            InputsRequirement,
            StateInitRequirement,
            EventsInitRequirement,
            BaseCssPropertyName<TagNameRequirement>,
            BaseCssPropertyName<TagNameRequirement>,
            RenderOutput
        >,
    ) => DeclarativeElementInit<
        TagNameRequirement,
        InputsRequirement,
        StateInitRequirement,
        EventsInitRequirement,
        BaseCssPropertyName<TagNameRequirement>,
        BaseCssPropertyName<TagNameRequirement>,
        RenderOutput
    >;
}>;

export function wrapDefineElement<
    TagNameRequirement extends CustomElementTagName = CustomElementTagName,
    InputsRequirement extends PropertyInitMapBase = {},
    StateInitRequirement extends PropertyInitMapBase = {},
    EventsInitRequirement extends EventsInitMap = {},
    RenderOutputRequirement = any,
>(options?: WrapDefineElementOptions | undefined) {
    const {assertInputs, transformInputs}: WrapDefineElementOptions = {
        assertInputs: options?.assertInputs ?? (() => {}),
        transformInputs: options?.transformInputs ?? ((inputs: any) => inputs),
    };

    return {
        defineElement: <InputsGeneric extends InputsRequirement>() => {
            return <
                TagName extends TagNameRequirement,
                StateInit extends StateInitRequirement,
                EventsInit extends EventsInitRequirement,
                HostClassKeys extends BaseCssPropertyName<TagName>,
                CssVarKeys extends BaseCssPropertyName<TagName>,
                RenderOutput extends RenderOutputRequirement,
            >(
                inputs: DeclarativeElementInit<
                    TagName,
                    InputsGeneric,
                    StateInit,
                    EventsInit,
                    HostClassKeys,
                    CssVarKeys,
                    RenderOutput
                >,
            ) => {
                assertInputs(inputs as DeclarativeElementInit<any, any, any, any, any, any, any>);
                return defineElement<InputsGeneric>()(
                    transformInputs(
                        inputs as DeclarativeElementInit<any, any, any, any, any, any, any>,
                    ) as unknown as DeclarativeElementInit<
                        TagName,
                        InputsGeneric,
                        StateInit,
                        EventsInit,
                        HostClassKeys,
                        CssVarKeys,
                        RenderOutput
                    >,
                );
            };
        },
        defineElementNoInputs: <
            TagName extends TagNameRequirement,
            Inputs extends InputsRequirement,
            StateInit extends StateInitRequirement,
            EventsInit extends EventsInitRequirement,
            HostClassKeys extends BaseCssPropertyName<TagName>,
            CssVarKeys extends BaseCssPropertyName<TagName>,
            RenderOutput extends RenderOutputRequirement,
        >(
            inputs: DeclarativeElementInit<
                TagName,
                Inputs,
                StateInit,
                EventsInit,
                HostClassKeys,
                CssVarKeys,
                RenderOutput
            >,
        ) => {
            assertInputs(inputs as DeclarativeElementInit<any, any, any, any, any, any, any>);
            return defineElementNoInputs(
                transformInputs(
                    inputs as DeclarativeElementInit<any, any, any, any, any, any, any>,
                ) as unknown as DeclarativeElementInit<
                    TagName,
                    Inputs,
                    StateInit,
                    EventsInit,
                    HostClassKeys,
                    CssVarKeys,
                    RenderOutput
                >,
            );
        },
    };
}
