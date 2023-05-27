import {mapObjectValues} from '@augment-vir/common';
import {CustomElementTagName} from '../declarative-element-init';
import {BaseCssPropertyName} from './css-properties';
import {PropertyInitMapBase} from './element-properties';
import {WithTagName} from './tag-name';

export type HostClassToggleCallbackInput<
    InputsGeneric extends PropertyInitMapBase,
    StateGeneric extends PropertyInitMapBase,
> = {
    state: Readonly<StateGeneric>;
    inputs: Readonly<InputsGeneric>;
};

export type HostClassToggleCallback<
    InputsGeneric extends PropertyInitMapBase,
    StateGeneric extends PropertyInitMapBase,
> = (inputs: HostClassToggleCallbackInput<InputsGeneric, StateGeneric>) => boolean;

export type HostClassesInitMap<
    TagName extends CustomElementTagName,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    InputsGeneric extends PropertyInitMapBase,
    StateGeneric extends PropertyInitMapBase,
> = Record<
    HostClassKeys,
    /**
     * Callback to determine when host class should be enabled (based on current inputs and state),
     * or just undefined to mark that this host class name will only be manually applied.
     */
    HostClassToggleCallback<InputsGeneric, StateGeneric> | false
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
    TagName extends CustomElementTagName,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    HostClassesInit extends HostClassesInitMap<
        TagName,
        HostClassKeys,
        /**
         * We can use any here because we don't care what the state or input names are, we just care
         * what the host class names are
         */
        any,
        any
    >,
>(hostClassesInit?: HostClassesInit): HostClassNamesMap<TagName, HostClassKeys> {
    if (hostClassesInit) {
        return mapObjectValues(hostClassesInit, (key) => {
            return key;
        }) as HostClassNamesMap<TagName, HostClassKeys>;
    } else {
        return {} as HostClassNamesMap<TagName, HostClassKeys>;
    }
}
