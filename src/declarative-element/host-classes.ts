import {mapObject} from 'augment-vir';
import {PropertyInitMapBase} from './element-properties';
import {toHtmlSafeWithTagName, WithTagName} from './tag-name';

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

export type HostClassNamesMap<TagName extends string, HostClassKeys extends string> = Record<
    HostClassKeys,
    WithTagName<TagName, string>
>;

export function createHostClassNamesMap<
    TagName extends string,
    HostClassKeys extends string,
    HostClassesInitGeneric extends HostClassesInitMap<
        HostClassKeys,
        /**
         * We can use any here because we don't care what the prop names are, we just care what the
         * host class names are
         */ any
    >,
>(
    tagName: TagName,
    hostClassesInit?: HostClassesInitGeneric,
): HostClassNamesMap<TagName, HostClassKeys> {
    if (hostClassesInit) {
        return mapObject(hostClassesInit, (key) => {
            return toHtmlSafeWithTagName(tagName, String(key));
        }) as HostClassNamesMap<TagName, HostClassKeys>;
    } else {
        return {} as HostClassNamesMap<TagName, HostClassKeys>;
    }
}
