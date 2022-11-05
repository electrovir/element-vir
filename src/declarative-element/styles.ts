import {getObjectTypedKeys, mapObjectValues} from 'augment-vir';
import {CSSResult, unsafeCSS} from 'lit';
import {CssVarNameOrValueMap} from './css-vars';
import {PropertyInitMapBase} from './element-properties';
import {HostClassesInitMap, HostClassNamesMap} from './host-classes';

export type StylesCallbackInput<HostClassKeys extends string, CssVarKeys extends string> = {
    hostClassSelectors: Record<HostClassKeys, CSSResult>;
    hostClassNames: Record<HostClassKeys, CSSResult>;
    cssVarNames: Record<CssVarKeys, CSSResult>;
    cssVarValues: Record<CssVarKeys, CSSResult>;
};

export type StylesCallback<HostClassKeys extends string, CssVarKeys extends string> = (
    input: StylesCallbackInput<HostClassKeys, CssVarKeys>,
) => CSSResult;

export function hostClassNamesToStylesInput<
    HostClassKeys extends string,
    CssVarKeys extends string,
>({
    hostClassNames,
    cssVarNames,
    cssVarValues,
}: {
    hostClassNames: HostClassNamesMap<string, HostClassKeys>;
    cssVarNames: CssVarNameOrValueMap<CssVarKeys>;
    cssVarValues: CssVarNameOrValueMap<CssVarKeys>;
}): StylesCallbackInput<HostClassKeys, CssVarKeys> {
    return {
        hostClassSelectors: mapObjectValues(hostClassNames, (key, name) => {
            return unsafeCSS(`:host(.${name})`);
        }),
        hostClassNames: mapObjectValues(hostClassNames, (key, name) => {
            return unsafeCSS(name);
        }),
        cssVarNames: cssVarNames,
        cssVarValues: cssVarValues,
    };
}

export function applyHostClasses<
    InputsGeneric extends PropertyInitMapBase,
    StateGeneric extends PropertyInitMapBase,
    HostClassKeys extends string,
>({
    host,
    hostClassesInit,
    hostClassNames,
    state,
    inputs,
}: {
    host: HTMLElement;
    hostClassesInit:
        | Readonly<HostClassesInitMap<HostClassKeys, InputsGeneric, StateGeneric>>
        | undefined;
    hostClassNames: HostClassNamesMap<string, HostClassKeys>;
    state: Readonly<StateGeneric>;
    inputs: Readonly<InputsGeneric>;
}): void {
    if (!hostClassesInit) {
        return;
    }
    getObjectTypedKeys(hostClassesInit).forEach((hostClassKey) => {
        const maybeCallback = hostClassesInit[hostClassKey];
        const hostClassName = hostClassNames[hostClassKey];

        if (typeof maybeCallback === 'function') {
            const shouldApplyHostClass = maybeCallback({state, inputs});
            if (shouldApplyHostClass) {
                host.classList.add(hostClassName);
            } else {
                host.classList.remove(hostClassName);
            }
        }
    });
}
