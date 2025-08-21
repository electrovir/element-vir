import {check} from '@augment-vir/assert';
import {filterMap, type ArrayElement, type PartialWithUndefined} from '@augment-vir/common';
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
        /** If set to `true`, this header (and it's column) won't be rendered. */
        disabled: boolean;
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
 * An individual cell in {@link ViraTableRow}.
 *
 * @category Internal
 */
export type ViraTableCell<
    Headers extends ViraTableHeaders | undefined = undefined,
    CellData = any,
> = {
    content: HtmlInterpolation;
    key: HeaderKey<Headers>;
    /**
     * The original entry that created this row (in default or vertical table orientation) or column
     * (in horizontal table orientation). This is `undefined` in header cells.
     */
    data: CellData;
};

/**
 * An individual row in {@link ViraTable}.
 *
 * @category Internal
 */
export type ViraTableRow<
    Headers extends ViraTableHeaders | undefined = undefined,
    CellData = any,
    RowData = CellData,
> = {
    cells: ViraTableCell<Headers, CellData>[];
    data: RowData;
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
    OriginalData extends ReadonlyArray<any> = any[],
> = Orientation extends ViraTableOrientation.Horizontal
    ? {
          headerRow: undefined;
          orientation: Orientation;
          rows: ViraTableRow<Headers, ArrayElement<OriginalData> | undefined, undefined>[];
      }
    : {
          headerRow: ViraTableCell<Headers, undefined>[];
          orientation: Orientation;
          rows: ViraTableRow<Headers, ArrayElement<OriginalData>>[];
      };

/**
 * Orientation options for {@link ViraTable}.
 *
 * @category Internal
 */
export enum ViraTableOrientation {
    /**
     * This corresponds to a _vertical_ entry sequence (as you move from entry to entry, you move
     * across the table vertically). This is the default table layout. Each entry becomes a new row.
     * Headers are in a separate row.
     */
    Vertical = 'vertical',
    /**
     * This corresponds to a _horizontal_ entry sequence (as you move from entry to entry, you move
     * across the table horizontally). Each entry becomes a column. Headers are the left most
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
    OriginalData extends ReadonlyArray<any>,
    const Orientation extends ViraTableOrientation = ViraTableOrientation.Vertical,
>(
    /** The order of these keys determines the order that they render in. */
    headers: Readonly<Headers>,
    originalData: OriginalData,
    dataMap: (
        entry: ArrayElement<OriginalData>,
        entryIndex: number,
    ) => ViraTableEntry<Headers> | undefined,
    options: ViraTableOptions<Orientation> = {},
): ViraTable<Headers, Orientation, OriginalData> {
    const mappedData = originalData.map((dataRow, rowIndex) => {
        return {
            cells: dataMap(dataRow, rowIndex) as ViraTableEntry | undefined,
            data: dataRow,
        };
    });

    if (options.orientation === ViraTableOrientation.Horizontal) {
        const rows: ViraTableRow<Headers, ArrayElement<OriginalData> | undefined, undefined>[] =
            filterMap(
                headers,
                (
                    header,
                ):
                    | ViraTableRow<Headers, ArrayElement<OriginalData> | undefined, undefined>
                    | undefined => {
                    if (header.disabled) {
                        return undefined;
                    }

                    const headerCellArray: ViraTableCell<Headers>[] = options.hideHeaders
                        ? []
                        : [
                              {
                                  content: header.content ?? header.key,
                                  key: header.key,
                                  data: undefined,
                              },
                          ];

                    const cells: ViraTableCell<Headers, ArrayElement<OriginalData>>[] = filterMap(
                        mappedData,
                        ({
                            data,
                            cells,
                        }): ViraTableCell<Headers, ArrayElement<OriginalData>> | undefined => {
                            if (!cells) {
                                return undefined;
                            }

                            return {
                                content: cells[header.key],
                                key: header.key,
                                data,
                            };
                        },
                        check.isTruthy,
                    );

                    const allCells = [
                        ...headerCellArray,
                        ...cells,
                    ];

                    return {
                        cells: allCells,
                        data: undefined,
                    };
                },
                check.isTruthy,
            );

        return {
            headerRow: undefined,
            rows,
            orientation: ViraTableOrientation.Horizontal,
        } satisfies ViraTable<Headers, ViraTableOrientation.Horizontal> as ViraTable<
            Headers,
            Orientation
        >;
    } else {
        const headerRow: ViraTableCell<Headers>[] = options.hideHeaders
            ? []
            : filterMap(
                  headers,
                  (header): ViraTableCell<Headers> | undefined => {
                      if (header.disabled) {
                          return undefined;
                      }

                      return {
                          content: header.content ?? header.key,
                          key: header.key,
                          data: undefined,
                      };
                  },
                  check.isTruthy,
              );

        const rows: ViraTableRow<Headers, ArrayElement<OriginalData>>[] = filterMap(
            mappedData,
            ({cells, data}): ViraTableRow<Headers, ArrayElement<OriginalData>> | undefined => {
                if (!cells) {
                    return undefined;
                }

                return {
                    cells: filterMap(
                        headers,
                        (
                            header,
                        ): ViraTableCell<Headers, ArrayElement<OriginalData>> | undefined => {
                            if (header.disabled) {
                                return undefined;
                            }

                            return {
                                content: cells[header.key],
                                key: header.key,
                                data,
                            };
                        },
                        check.isTruthy,
                    ),
                    data,
                };
            },
            check.isTruthy,
        );

        return {
            headerRow,
            rows,
            orientation: ViraTableOrientation.Vertical,
        } satisfies ViraTable<Headers> as ViraTable<Headers, Orientation>;
    }
}
