import {ElementPartInfo, PartInfo, PartType} from 'lit/directive.js';
import {DeclarativeElement} from '../declarative-element';

/** For some reason these aren't defined in lit's types already. */
export type ExtraPartInfoProperties = {
    element: Element;
    options: {
        host: Element;
        renderBefore: Element;
        isConnected: boolean;
    };
};

export function extractDeclarativeElement(
    partInfo: PartInfo,
    directiveName: string,
): DeclarativeElement {
    return extractElement(partInfo, directiveName, DeclarativeElement) as DeclarativeElement;
}

export function extractElement<ElementType = HTMLElement>(
    partInfo: PartInfo,
    directiveName: string,
    constructorClass: (new () => ElementType) | (abstract new () => ElementType),
): ElementType {
    assertsIsElementPartInfo(partInfo, directiveName);
    const element = (partInfo as ElementPartInfo & ExtraPartInfoProperties).element;
    if (!(element instanceof constructorClass)) {
        throw new Error(`${directiveName} attached to non ${constructorClass.name} element.`);
    }
    return element as ElementType;
}

export function assertsIsElementPartInfo(
    partInfo: PartInfo,
    directiveName: string,
): asserts partInfo is ElementPartInfo & ExtraPartInfoProperties {
    if (partInfo.type !== PartType.ELEMENT) {
        throw new Error(`${directiveName} directive can only be attached directly to an element.`);
    }
    if (!(partInfo as ElementPartInfo & ExtraPartInfoProperties).element) {
        throw new Error(`${directiveName} directive found no element.`);
    }
}
