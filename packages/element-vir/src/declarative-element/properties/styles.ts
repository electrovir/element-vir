import {type ArrayElement, getObjectTypedKeys, mapObjectValues} from '@augment-vir/common';
import {type CSSResult, unsafeCSS} from '../../lit-exports/base-lit-exports.js';
import {type CustomElementTagName} from '../custom-tag-name.js';
import {type CssVars} from './css-vars.js';
import {type PropertyInitMapBase} from './element-properties.js';
import {type HostClassNamesMap, type HostClassesInitMap} from './host-classes.js';
import {type BaseStringName, type SlotNamesMap} from './string-names.js';

/**
 * A host class instance to be referenced inside of an element definition's `styles` callback.
 *
 * @category Internal
 */
export type HostClass = {
    selector: CSSResult;
    name: CSSResult;
};

/**
 * Input type for an element definition's `styles` callback.
 *
 * @category Internal
 */
export type StylesCallbackInput<
    TagName extends CustomElementTagName,
    HostClassKeys extends BaseStringName<NoInfer<TagName>>,
    CssVarKeys extends BaseStringName<NoInfer<TagName>>,
    SlotNames extends ReadonlyArray<string>,
> = {
    hostClasses: Record<HostClassKeys, HostClass>;
    cssVars: Readonly<CssVars<TagName, CssVarKeys>>;
    slotNames: Readonly<Record<ArrayElement<SlotNames>, CSSResult>>;
};

/**
 * The type for an element definition's `styles` callback.
 *
 * @category Internal
 */
export type StylesCallback<
    TagName extends CustomElementTagName,
    HostClassKeys extends BaseStringName<NoInfer<TagName>>,
    CssVarKeys extends BaseStringName<NoInfer<TagName>>,
    SlotNames extends ReadonlyArray<string>,
> = (input: StylesCallbackInput<TagName, HostClassKeys, CssVarKeys, SlotNames>) => CSSResult;

/**
 * Creates the input for an element definition's `styles` callback.
 *
 * @category Internal
 */
export function createStylesCallbackInput<
    TagName extends CustomElementTagName,
    HostClassKeys extends BaseStringName<NoInfer<TagName>>,
    CssVarKeys extends BaseStringName<NoInfer<TagName>>,
    SlotNames extends ReadonlyArray<string>,
>({
    hostClassNames,
    cssVars,
    slotNamesMap,
}: {
    hostClassNames: HostClassNamesMap<TagName, HostClassKeys>;
    cssVars: Readonly<CssVars<TagName, CssVarKeys>>;
    slotNamesMap: SlotNamesMap<TagName, SlotNames>;
}): StylesCallbackInput<TagName, HostClassKeys, CssVarKeys, SlotNames> {
    return {
        hostClasses: mapObjectValues(hostClassNames, (key, name): HostClass => {
            return {
                name: unsafeCSS(name),
                selector: unsafeCSS(`:host(.${name})`),
            };
        }),
        cssVars,
        slotNames: mapObjectValues(slotNamesMap, (key, name) => {
            return unsafeCSS(name);
        }) as Readonly<Record<ArrayElement<SlotNames>, CSSResult>>,
    };
}

/**
 * Used inside of an element instance to apply host classes on each render.
 *
 * @category Internal
 */
export function applyHostClasses<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    State extends PropertyInitMapBase,
    HostClassKeys extends BaseStringName<TagName>,
>({
    host,
    hostClassesInit,
    hostClassNames,
    state,
    inputs,
}: {
    host: HTMLElement;
    hostClassesInit:
        | Readonly<HostClassesInitMap<TagName, HostClassKeys, Inputs, State>>
        | undefined;
    hostClassNames: HostClassNamesMap<string, HostClassKeys>;
    state: Readonly<State>;
    inputs: Readonly<Inputs>;
}): void {
    if (!hostClassesInit) {
        return;
    }
    getObjectTypedKeys(hostClassesInit).forEach((hostClassKey) => {
        const maybeCallback = hostClassesInit[hostClassKey];
        const hostClassName = hostClassNames[hostClassKey];

        if (typeof maybeCallback === 'function') {
            const shouldApplyHostClass = maybeCallback({
                state,
                inputs,
            });
            if (shouldApplyHostClass) {
                host.classList.add(hostClassName);
            } else {
                host.classList.remove(hostClassName);
            }
        }
    });
}
