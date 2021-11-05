import {directive, Directive, PartInfo} from 'lit/directive.js';
import {assertsIsElementPartInfo} from './directive-util';

export type OnDomCreatedCallback = (element: Element) => void;

const directiveName = 'onDomCreated';

/** Only fires once, when the element has been created. */
export const onDomCreated = directive(
    class extends Directive {
        public element: Element | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            assertsIsElementPartInfo(partInfo, directiveName);
        }

        update(partInfo: PartInfo, [callback]: [OnDomCreatedCallback]) {
            assertsIsElementPartInfo(partInfo, directiveName);
            const newElement = partInfo.element;
            if (newElement !== this.element) {
                // use setTimeout here so it can fire property changes outside of a render loop
                setTimeout(() => callback(newElement), 0);
                this.element = newElement;
            }
            return this.render(callback);
        }

        render(callback: OnDomCreatedCallback) {
            return undefined;
        }
    },
);
