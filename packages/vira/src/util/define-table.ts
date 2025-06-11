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
export type ViraTableEntry<Headers extends ViraTableHeaders | undefined = undefined> = Record<
    HeaderKey<Headers>,
    HtmlInterpolation
>;

/**
 * An individual cell in {@link ViraTable}.
 *
 * @category Internal
 */
export type ViraTableCell<Headers extends ViraTableHeaders | undefined = undefined> = {
    content: HtmlInterpolation;
    key: HeaderKey<Headers>;
};

/**
 * All keys for the given headers.
 *
 * @category Internal
 */
export type HeaderKey<Headers extends ViraTableHeaders | undefined = undefined> =
    undefined extends Headers ? string | number : ArrayElement<Exclude<Headers, undefined>>['key'];

/**
 * Table information that can easily be mapped into a `<table>` element.
 *
 * @category Internal
 */
export type ViraTable<
    Headers extends ViraTableHeaders | undefined = undefined,
    Orientation extends ViraTableOrientation = ViraTableOrientation.Vertical,
> = (Orientation extends ViraTableOrientation.Horizontal
    ? {
          headerRow: undefined;
          orientation: Orientation;
      }
    : {
          headerRow: ViraTableCell<Headers>[];
          orientation: Orientation;
      }) & {
    rows: ViraTableCell<Headers>[][];
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
): ViraTable<Headers, Orientation> {
    if (options.orientation === ViraTableOrientation.Horizontal) {
        const rows: ViraTableCell<Headers>[][] = headers.map((header): ViraTableCell<Headers>[] => {
            const headerCellArray: ViraTableCell<Headers>[] = options.hideHeaders
                ? []
                : [
                      {
                          content: header.content ?? header.key,
                          key: header.key,
                      },
                  ];

            const cells: ViraTableCell<Headers>[] = entries.map((entry) => {
                return {
                    content: (entry as ViraTableEntry)[header.key],
                    key: header.key,
                };
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
        } satisfies ViraTable<
            Headers,
            ViraTableOrientation.Horizontal
        > as UnknownObject as ViraTable<Headers, Orientation>;
    } else {
        const headerRow: ViraTableCell<Headers>[] = options.hideHeaders
            ? []
            : headers.map((header): ViraTableCell<Headers> => {
                  return {
                      content: header.content ?? header.key,
                      key: header.key,
                  };
              });

        const rows: ViraTableCell<Headers>[][] = entries.map((entry): ViraTableCell<Headers>[] => {
            return headers.map((header): ViraTableCell<Headers> => {
                return {
                    content: (entry as ViraTableEntry)[header.key],
                    key: header.key,
                };
            });
        });

        return {
            headerRow,
            rows,
            orientation: ViraTableOrientation.Vertical,
        } satisfies ViraTable<Headers> as UnknownObject as ViraTable<Headers, Orientation>;
    }
}
