import {ElementPartInfo, PartInfo, PartType} from 'lit/directive.js';

/** For some reason these aren't defined in lit's types already. */
export type ExtraPartInfoProperties = {
    element: Element;
    options: {
        host: Element;
        renderBefore: Element;
        isConnected: boolean;
    };
};

export function extractElement(partInfo: PartInfo, directiveName: string): Element {
    assertIsElementPartInfo(partInfo, directiveName);
    const element = (partInfo as ElementPartInfo & ExtraPartInfoProperties).element;
    return element;
}

export function assertIsElementPartInfo(
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
