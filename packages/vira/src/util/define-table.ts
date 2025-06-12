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
 * An individual cell in {@link ViraTableRow}.
 *
 * @category Internal
 */
export type ViraTableCell<
    Headers extends ViraTableHeaders | undefined = undefined,
    Entry extends ViraTableEntry<Headers> | undefined = ViraTableEntry<Headers>,
> = {
    content: HtmlInterpolation;
    key: HeaderKey<Headers>;
    /**
     * The original entry that created this row (in default or vertical table orientation) or column
     * (in horizontal table orientation). This is `undefined` in header cells.
     */
    entry: Entry;
};

/**
 * An individual row in {@link ViraTable}.
 *
 * @category Internal
 */
export type ViraTableRow<
    Headers extends ViraTableHeaders | undefined = undefined,
    CellEntry extends ViraTableEntry<Headers> | undefined = ViraTableEntry<Headers> | undefined,
    RowEntry extends ViraTableEntry<Headers> | undefined = CellEntry,
> = {
    cells: ViraTableCell<Headers, CellEntry>[];
    entry: RowEntry;
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
    Entry extends ViraTableEntry<Headers> = ViraTableEntry<Headers>,
> = Orientation extends ViraTableOrientation.Horizontal
    ? {
          headerRow: undefined;
          orientation: Orientation;
          rows: ViraTableRow<Headers, Entry | undefined, undefined>[];
      }
    : {
          headerRow: ViraTableCell<Headers, undefined>[];
          orientation: Orientation;
          rows: ViraTableRow<Headers, Entry>[];
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
    Entry extends ViraTableEntry<Headers>,
    const Orientation extends ViraTableOrientation = ViraTableOrientation.Vertical,
>(
    /** The order of these keys determines the order that they render in. */
    headers: Readonly<Headers>,
    entries: Entry[],
    options: ViraTableOptions<Orientation> = {},
): ViraTable<Headers, Orientation> {
    if (options.orientation === ViraTableOrientation.Horizontal) {
        const rows: ViraTableRow<Headers, Entry | undefined, undefined>[] = headers.map(
            (header): ViraTableRow<Headers, Entry | undefined, undefined> => {
                const headerCellArray: ViraTableCell<Headers, undefined>[] = options.hideHeaders
                    ? []
                    : [
                          {
                              content: header.content ?? header.key,
                              key: header.key,
                              entry: undefined,
                          },
                      ];

                const cells: ViraTableCell<Headers, Entry>[] = entries.map((entry) => {
                    return {
                        content: (entry as ViraTableEntry)[header.key],
                        key: header.key,
                        entry,
                    };
                });

                const allCells = [
                    ...headerCellArray,
                    ...cells,
                ];

                return {
                    cells: allCells,
                    entry: undefined,
                };
            },
        );

        return {
            headerRow: undefined,
            rows,
            orientation: ViraTableOrientation.Horizontal,
        } satisfies ViraTable<
            Headers,
            ViraTableOrientation.Horizontal
        > as UnknownObject as ViraTable<Headers, Orientation>;
    } else {
        const headerRow: ViraTableCell<Headers, undefined>[] = options.hideHeaders
            ? []
            : headers.map((header): ViraTableCell<Headers, undefined> => {
                  return {
                      content: header.content ?? header.key,
                      key: header.key,
                      entry: undefined,
                  };
              });

        const rows: ViraTableRow<Headers, Entry>[] = entries.map(
            (entry): ViraTableRow<Headers, Entry> => {
                return {
                    cells: headers.map((header): ViraTableCell<Headers, Entry> => {
                        return {
                            content: (entry as ViraTableEntry)[header.key],
                            key: header.key,
                            entry,
                        };
                    }),
                    entry,
                };
            },
        );

        return {
            headerRow,
            rows,
            orientation: ViraTableOrientation.Vertical,
        } satisfies ViraTable<Headers> as UnknownObject as ViraTable<Headers, Orientation>;
    }
}
