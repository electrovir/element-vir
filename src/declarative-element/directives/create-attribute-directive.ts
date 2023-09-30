import {noChange} from 'lit';
import {directive, Directive, PartInfo} from 'lit/directive.js';
import {extractElement} from './directive-helpers';

export function createAttributeDirective(attributeName: string) {
    const newDirective = directive(
        /** @internal */
        class extends Directive {
            public readonly element: Element;

            constructor(partInfo: PartInfo) {
                super(partInfo);

                this.element = extractElement(partInfo, 'testId');
            }

            render(testId: string) {
                this.element.setAttribute(attributeName, testId);
                return noChange;
            }
        },
    );

    return {
        attributeSelector(attributeValue: string) {
            return `[${attributeName}="${attributeValue}"]`;
        },
        attributeDirective(attributeValue: string) {
            return newDirective(attributeValue);
        },
        attributeName,
    };
}
