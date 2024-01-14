import ColorImport from 'colorjs.io';
export type {ColorTypes} from 'colorjs.io/types/src/color';
export type {Format} from 'colorjs.io/types/src/space';

export type Color = typeof ColorImport;
export const Color: Color = ColorImport;
