import {check} from '@augment-vir/assert';
import {type DeclarativeElementDefinitionOptions} from '../declarative-element/definition-options.js';
import {type PropertyInitMapBase} from '../declarative-element/properties/element-properties.js';

/**
 * A minimal element definition used for interpolating element definitions into HTML templates with
 * a more generic type (to prevent insane circular dependencies).
 *
 * @category Internal
 */
export type MinimalElementDefinition<TagName extends string = string> = {
    tagName: TagName;
    elementOptions?: DeclarativeElementDefinitionOptions | undefined;
    /** This is used when wrapping interpolated raw tag name strings. */
    tagInterpolationKey?: {tagName: string} | undefined;
};

/**
 * A parent definition of {@link MinimalElementDefinition} with inputs also specified with allows the
 * `.assign()` method to be used inside of HTML templates.
 *
 * @category Internal
 */
export type MinimalDefinitionWithInputs<TagName extends string = string> = {
    /**
     * This is what marks instance of this type as such. This does not use a symbol so it's
     * compatible with multiple `element-vir` versions being installed at once (like if a dependency
     * uses a different version).
     */
    _elementVirIsMinimalDefinitionWithInputs: true;
    definition: MinimalElementDefinition<TagName>;
    inputs: PropertyInitMapBase;
};

/**
 * Checks if properties can be read off of the input at all.
 *
 * This exists instead of `check.hasKey` because `check.hasKey` costs roughly a microsecond per call
 * (it runs its attempts through a `try`/`catch`), and the predicates below run on every
 * interpolated value of every template on every render.
 *
 * @category Internal
 */
export function canHoldProperties(value: unknown): value is Record<PropertyKey, unknown> {
    return !!value && (typeof value === 'object' || typeof value === 'function');
}

/**
 * Checks if the input is an instance of {@link MinimalDefinitionWithInputs}.
 *
 * @category Internal
 */
export function isMinimalDefinitionWithInputs(
    value: unknown,
): value is MinimalDefinitionWithInputs {
    return canHoldProperties(value) && !!value._elementVirIsMinimalDefinitionWithInputs;
}

/**
 * Checks if the input is an object that has a `tagName` property. Used inside of the HTML tagged
 * template functions for checking if interpolated values should be treated as element tags.
 *
 * @category Internal
 */
export function hasTagName(value: unknown): value is MinimalElementDefinition {
    return canHoldProperties(value) && check.isString(value.tagName) && !!value.tagName;
}
