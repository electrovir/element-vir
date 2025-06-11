import {
    type ArrayElement,
    type PartialWithUndefined,
    type UnknownObject,
} from '@augment-vir/common';
import {type HtmlInterpolation} from 'element-vir';

/**
 * An individual key definition in {@link ViraTableHeaders}.
 *
 * @category Internal
 */
export type ViraTableKey = Readonly<
    {
        /** The key that cells must set a value to. */
        key: string | number;
    } & PartialWithUndefined<{
        /** If this is not provided, `key` will be used directly. */
        content: HtmlInterpolation;
    }>
>;

/**
 * All header definitions for a {@link ViraTable} instance.
 *
 * @category Internal
 */
export type ViraTableHeaders = ReadonlyArray<ViraTableKey>;

/**
 * An individual entry in {@link ViraTable}. In default table orientation, this will be a row. In
 * horizontal orientation, this will be a column.
 *
 * @category Internal
 */
export type ViraTableEntry<Keys extends ViraTableHeaders | undefined = undefined> =
    undefined extends Keys
        ? Record<string | number, HtmlInterpolation>
        : Record<ArrayElement<Exclude<Keys, undefined>>['key'], HtmlInterpolation>;

/**
 * Table information that can easily be mapped into a `<table>` element.
 *
 * @category Internal
 */
export type ViraTable<Orientation extends ViraTableOrientation = ViraTableOrientation.Vertical> =
    (Orientation extends ViraTableOrientation.Horizontal
        ? {
              headerRow: undefined;
              orientation: Orientation;
          }
        : {
              headerRow: HtmlInterpolation[];
              orientation: Orientation;
          }) & {
        rows: HtmlInterpolation[][];
    };

/**
 * Orientation options for {@link ViraTable}.
 *
 * @category Internal
 */
export enum ViraTableOrientation {
    /**
     * This is the default table layout. Each entry becomes a new row. Headers are a row at the top
     * of the table.
     */
    Vertical = 'vertical',
    /**
     * This is a pivoted table layout. Each entry becomes a column. Headers are the left most
     * column.
     */
    Horizontal = 'horizontal',
}

/**
 * Options for {@link defineTable}.
 *
 * @category Internal
 */
export type ViraTableOptions<Orientation extends ViraTableOrientation = ViraTableOrientation> =
    PartialWithUndefined<{
        orientation: Orientation;
        hideHeaders: boolean;
    }>;

/**
 * Accepts headers and entries and lays them out into rows according to the given
 * `options.orientation` (defaulting to vertical). This does not itself create a `<table>` element,
 * but makes it easy to loop over rows to (with `.map()`) to generate rows in a table.
 *
 * @category Table
 */
export function defineTable<
    const Headers extends ViraTableHeaders,
    const Orientation extends ViraTableOrientation = ViraTableOrientation.Vertical,
>(
    /** The order of these keys determines the order that they render in. */
    headers: Readonly<Headers>,
    entries: ReadonlyArray<Readonly<ViraTableEntry<Headers>>>,
    options: ViraTableOptions<Orientation> = {},
): ViraTable<Orientation> {
    if (options.orientation === ViraTableOrientation.Horizontal) {
        const rows: HtmlInterpolation[][] = headers.map((header): HtmlInterpolation[] => {
            const headerCellArray: HtmlInterpolation[] = options.hideHeaders
                ? []
                : [header.content ?? header.key];

            const cells: HtmlInterpolation[] = entries.map((entry) => {
                return (entry as ViraTableEntry)[header.key];
            });

            return [
                ...headerCellArray,
                ...cells,
            ];
        });

        return {
            headerRow: undefined,
            rows,
            orientation: ViraTableOrientation.Horizontal,
        } satisfies ViraTable<ViraTableOrientation.Horizontal> as UnknownObject as ViraTable<Orientation>;
    } else {
        const headerRow: HtmlInterpolation[] = options.hideHeaders
            ? []
            : headers.map((header) => header.content ?? header.key);

        const rows = entries.map((entry) => {
            return headers.map((header) => {
                return (entry as ViraTableEntry)[header.key];
            });
        });

        return {
            headerRow,
            rows,
            orientation: ViraTableOrientation.Vertical,
        } satisfies ViraTable as UnknownObject as ViraTable<Orientation>;
    }
}
