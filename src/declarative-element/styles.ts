import {getObjectTypedKeys, mapObject} from 'augment-vir';
import {CSSResult, unsafeCSS} from 'lit';
import {CssVarNameOrValueMap} from './css-vars';
import {PropertyInitMapBase} from './element-properties';
import {HostClassesInitMap, HostClassNamesMap} from './host-classes';

export type StylesCallbackInput<HostClassKeys extends string, CssVarKeys extends string> = {
    hostClass: Record<HostClassKeys, CSSResult>;
    cssVarName: Record<CssVarKeys, CSSResult>;
    cssVarValue: Record<CssVarKeys, CSSResult>;
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
        hostClass: mapObject(hostClassNames, (key, name) => {
            return unsafeCSS(`:host(.${name})`);
        }),
        cssVarName: cssVarNames,
        cssVarValue: cssVarValues,
    };
}

export function applyHostClasses<
    PropertyInitGeneric extends PropertyInitMapBase,
    HostClassKeys extends string,
>(
    host: HTMLElement,
    hostClassesInit: Readonly<HostClassesInitMap<HostClassKeys, PropertyInitGeneric>> | undefined,
    hostClassNames: HostClassNamesMap<string, HostClassKeys>,
    props: Readonly<PropertyInitGeneric>,
): void {
    if (!hostClassesInit) {
        return;
    }
    getObjectTypedKeys(hostClassesInit).forEach((hostClassKey) => {
        const maybeCallback = hostClassesInit[hostClassKey];
        const hostClassName = hostClassNames[hostClassKey];

        if (typeof maybeCallback === 'function') {
            const shouldApplyHostClass = maybeCallback({props});
            if (shouldApplyHostClass) {
                host.classList.add(hostClassName);
            } else {
                host.classList.remove(hostClassName);
            }
        }
    });
}
