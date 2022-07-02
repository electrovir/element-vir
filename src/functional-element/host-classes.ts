import {camelCaseToKebabCase, mapObject} from 'augment-vir';
import {PropertyInitMapBase} from './element-properties';

export type HostClassToggleCallbackInput<PropertyInitGeneric extends PropertyInitMapBase> = {
    props: Readonly<PropertyInitGeneric>;
};

export type HostClassToggleCallback<PropertyInitGeneric extends PropertyInitMapBase> = (
    inputs: HostClassToggleCallbackInput<PropertyInitGeneric>,
) => boolean;

export type HostClassesInitMap<
    HostClassKeys extends string,
    PropertyInitGeneric extends PropertyInitMapBase,
> = Record<
    HostClassKeys,
    /**
     * Callback to determine when host class should be enabled (based on current props), or just
     * undefined to mark that this host class name will only be manually applied.
     */
    HostClassToggleCallback<PropertyInitGeneric> | false
>;

export type HostClassName<
    TagName extends string,
    HostClassPropName extends string,
> = `${TagName}-${HostClassPropName}`;

export type HostClassNames<HostClassKeys extends string> = Record<HostClassKeys, string>;

export function createHostClassNames<
    HostClassKeys extends string,
    HostClassesInitGeneric extends HostClassesInitMap<
        HostClassKeys,
        /**
         * We can use any here because we don't care what the prop names are, we just care what the
         * host class names are
         */ any
    >,
>(tagName: string, hostClassesInit?: HostClassesInitGeneric): HostClassNames<HostClassKeys> {
    if (hostClassesInit) {
        return mapObject(hostClassesInit, (key) => {
            return `${tagName}-${camelCaseToKebabCase(String(key))}`;
        }) as HostClassNames<HostClassKeys>;
    } else {
        return {} as HostClassNames<HostClassKeys>;
    }
}
