import {ElementPartInfo, PartInfo, PartType} from 'lit/directive.js';
import {ExtraPartInfoProperties} from '../../vir-html/directive';
import {PropertyInitMapBase} from '../element-properties';
import {FunctionalElementBaseClass, FunctionalElementInstance} from '../functional-element';

export function extractFunctionalElement<PropertyInitGeneric extends PropertyInitMapBase>(
    partInfo: PartInfo,
): FunctionalElementInstance<PropertyInitGeneric> {
    if (partInfo.type !== PartType.ELEMENT) {
        throw new Error(`assign directive can only be attached directly to an element.`);
    }
    const element = (partInfo as ElementPartInfo & ExtraPartInfoProperties).element;
    if (!(element instanceof FunctionalElementBaseClass)) {
        throw new Error(`assign directive only works when attached to functional elements`);
    }
    return element as FunctionalElementInstance<PropertyInitGeneric>;
}
