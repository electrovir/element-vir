import {createAttributeDirective} from './create-attribute-directive';

export const {
    attributeDirective: testId,
    attributeSelector: testIdBy,
    attributeName: testIdAttribute,
} = createAttributeDirective('data-test-id');
