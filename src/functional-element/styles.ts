import {getObjectTypedKeys, mapObject} from 'augment-vir';
import {CSSResult, unsafeCSS} from 'lit';
import {PropertyInitMapBase} from './element-properties';
import {HostClassesInitMap, HostClassNames} from './host-classes';

export type StylesCallbackInput<HostClassKeys extends string> = {
    hostClass: Record<keyof HostClassNames<HostClassKeys>, CSSResult>;
};

export type StylesCallback<HostClassKeys extends string> = (
    input: StylesCallbackInput<HostClassKeys>,
) => CSSResult;

export function hostClassNamesToStylesInput<HostClassKeys extends string>(
    hostClassNames: HostClassNames<HostClassKeys>,
): StylesCallbackInput<HostClassKeys> {
    return {
        hostClass: mapObject(hostClassNames, (key, name) => {
            return unsafeCSS(`:host(.${name})`);
        }),
    };
}

export function applyHostClasses<
    PropertyInitGeneric extends PropertyInitMapBase,
    HostClassKeys extends string,
>(
    host: HTMLElement,
    hostClassesInit: Readonly<HostClassesInitMap<HostClassKeys, PropertyInitGeneric>> | undefined,
    hostClassNames: HostClassNames<HostClassKeys>,
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
