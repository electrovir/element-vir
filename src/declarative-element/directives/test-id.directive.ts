import {createAttributeDirective} from './create-attribute-directive';

export const {
    attributeDirective: testId,
    attributeSelector: testIdBy,
    attributeName: testIdAttributeName,
} = createAttributeDirective('data-test-id');
