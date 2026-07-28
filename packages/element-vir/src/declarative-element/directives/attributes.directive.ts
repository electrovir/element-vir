import {getObjectTypedKeys, getOrSet, type Primitive} from '@augment-vir/common';
import {nothing} from '../../lit-exports/all-lit-exports.js';
import {createMutateDirective} from './mutate.directive.js';

/**
 * Possible attribute values for {@link AttributeValues}.
 *
 * @category Internal
 */
export type AttributeValue = Exclude<Primitive, symbol> | string | typeof nothing;

/**
 * Parameters object for applying attributes to an HTML element via the {@link attributes} directive.
 * Make sure that all keys (attribute names) are lowercase.
 *
 * @category Internal
 */
export type AttributeValues = {[LowercaseKey in Lowercase<string>]: AttributeValue};

/**
 * A directive applies multiple HTML attributes to the parent element all at once.
 *
 * @category Directives
 */
export const attributes = createMutateDirective<[AttributeValues | undefined]>(
    'attributes',
    ({element, params: [attributesToApply], directive: rawDirective}) => {
        if (!attributesToApply) {
            return;
        }

        type DirectiveWithAttributesList = typeof rawDirective & {
            allAttributesApplied?: Set<Lowercase<string>>;
        };
        const directive = rawDirective as DirectiveWithAttributesList;
        const allAttributeNames = getOrSet(directive, 'allAttributesApplied', () => new Set());
        getObjectTypedKeys(attributesToApply).forEach((attributeName) => {
            if (attributeName.toLowerCase() !== attributeName) {
                throw new Error(
                    `Cannot assign attribute name with uppercase letters: ${attributeName}`,
                );
            }
            allAttributeNames.add(attributeName);
        });

        allAttributeNames.forEach((attributeName) => {
            const attributeValue = attributesToApply[attributeName];

            if (
                attributeValue == undefined ||
                attributeValue === false ||
                attributeValue === nothing
            ) {
                element.removeAttribute(attributeName);
            } else if (attributeValue === '' || attributeValue === true) {
                element.setAttribute(attributeName, '');
            } else {
                element.setAttribute(attributeName, String(attributeValue));
            }
        });
    },
);
