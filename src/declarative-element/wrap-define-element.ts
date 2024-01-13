import {PartialAndNullable} from '@augment-vir/common';
import {CustomElementTagName} from './custom-tag-name';
import {DeclarativeElementInit} from './declarative-element-init';
import {defineElement, VerifiedElementInit} from './define-element';
import {defineElementNoInputs, VerifiedElementNoInputsInit} from './define-element-no-inputs';
import {BaseCssPropertyName} from './properties/css-properties';
import {EventsInitMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';

export type WrapDefineElementOptions<
    TagNameRequirement extends CustomElementTagName = CustomElementTagName,
    InputsRequirement extends PropertyInitMapBase = {},
    StateInitRequirement extends PropertyInitMapBase = {},
    EventsInitRequirement extends EventsInitMap = {},
> = PartialAndNullable<{
    assertInputs: (
        inputInit: DeclarativeElementInit<
            TagNameRequirement,
            InputsRequirement,
            StateInitRequirement,
            EventsInitRequirement,
            BaseCssPropertyName<TagNameRequirement>,
            BaseCssPropertyName<TagNameRequirement>
        >,
    ) => void;
    transformInputs: (
        inputInit: DeclarativeElementInit<
            TagNameRequirement,
            InputsRequirement,
            StateInitRequirement,
            EventsInitRequirement,
            BaseCssPropertyName<TagNameRequirement>,
            BaseCssPropertyName<TagNameRequirement>
        >,
    ) => DeclarativeElementInit<
        TagNameRequirement,
        InputsRequirement,
        StateInitRequirement,
        EventsInitRequirement,
        BaseCssPropertyName<TagNameRequirement>,
        BaseCssPropertyName<TagNameRequirement>
    >;
}>;

export function wrapDefineElement<
    TagNameRequirement extends CustomElementTagName = CustomElementTagName,
    InputsRequirement extends PropertyInitMapBase = {},
    StateInitRequirement extends PropertyInitMapBase = {},
    EventsInitRequirement extends EventsInitMap = {},
>(options?: WrapDefineElementOptions | undefined) {
    const {assertInputs, transformInputs}: WrapDefineElementOptions = {
        assertInputs: options?.assertInputs ?? (() => {}),
        transformInputs: options?.transformInputs ?? ((inputs: any) => inputs),
    };

    return {
        defineElement: <Inputs extends InputsRequirement>() => {
            return <
                TagName extends TagNameRequirement,
                StateInit extends StateInitRequirement,
                EventsInit extends EventsInitRequirement,
                HostClassKeys extends BaseCssPropertyName<TagName>,
                CssVarKeys extends BaseCssPropertyName<TagName>,
            >(
                inputs: VerifiedElementInit<
                    TagName,
                    Inputs,
                    StateInit,
                    EventsInit,
                    HostClassKeys,
                    CssVarKeys
                >,
            ) => {
                assertInputs(inputs as DeclarativeElementInit<any, any, any, any, any, any>);
                return defineElement<Inputs>()(
                    transformInputs(
                        inputs as DeclarativeElementInit<any, any, any, any, any, any>,
                    ) as unknown as VerifiedElementInit<
                        TagName,
                        Inputs,
                        StateInit,
                        EventsInit,
                        HostClassKeys,
                        CssVarKeys
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
        >(
            inputs: VerifiedElementNoInputsInit<
                TagName,
                Inputs,
                StateInit,
                EventsInit,
                HostClassKeys,
                CssVarKeys
            >,
        ) => {
            assertInputs(inputs as DeclarativeElementInit<any, any, any, any, any, any>);
            return defineElementNoInputs(
                transformInputs(
                    inputs as DeclarativeElementInit<any, any, any, any, any, any>,
                ) as unknown as VerifiedElementNoInputsInit<
                    TagName,
                    Inputs,
                    StateInit,
                    EventsInit,
                    HostClassKeys,
                    CssVarKeys
                >,
            );
        },
    };
}
