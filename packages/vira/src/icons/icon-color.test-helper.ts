export enum ColorTypeEnum {
    Color = 'color',
    Fill = 'fill',
    Stroke = 'stroke',
}

export function extractIconColor(element: Element, colorType: ColorTypeEnum) {
    return window.getComputedStyle(element).getPropertyValue(colorType);
}
