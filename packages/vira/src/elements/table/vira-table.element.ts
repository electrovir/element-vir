import {type PartialWithUndefined} from '@augment-vir/common';
import {
    attributes,
    classMap,
    css,
    defineElementEvent,
    html,
    ifDefined,
    listen,
    nothing,
    type AttributeValues,
    type CSSResult,
} from 'element-vir';
import {viraFormCssVars} from '../../styles/form-themes.js';
import {defineViraElement} from '../define-vira-element.js';
import {type ViraTableEntry, type ViraTableSetup, type createTable} from './create-table.js';

/**
 * Element tagnames that have passthroughs setup for them in {@link ViraTable}.
 *
 * @category Internal
 */
export type ViraTableElementsForPassthrough = 'table' | 'tr' | 'th' | 'td' | 'tbody' | 'thead';

/**
 * A flexible table element with automatic header pinning. Use {@link createTable} to create a
 * type-safe table input.
 *
 * @category Elements
 */
export const ViraTable = defineViraElement<
    Readonly<
        {
            /**
             * The table information.
             *
             * Use {@link createTable} to form a type-safe value for this.
             */
            table: ViraTableSetup;
        } & PartialWithUndefined<{
            /**
             * Key headers are rendered on the left, rows become columns.
             *
             * @default false
             */
            horizontalOrientation: boolean;
            /**
             * Allow all rows to be clickable. Each row can override this for itself.
             *
             * @default false
             */
            allowRowClicks: boolean;
            /**
             * Block the sticky table header.
             *
             * @default false
             */
            preventStickyHeader: boolean;
            /**
             * Hide header row (in default orientation) or column (in horizontal orientation)
             * entirely.
             *
             * @default false
             */
            hideKeyHeaders: boolean;
            /**
             * Pixel value of the header's sticky offset.
             *
             * @default 0
             */
            stickyOffset: number;
            /** Attributes that will be applied directly to the inner elements. */
            attributePassthrough: Readonly<
                PartialWithUndefined<Record<ViraTableElementsForPassthrough, AttributeValues>>
            >;
            /** Styles that will be applied directly to the inner elements. */
            stylePassthrough: Readonly<
                PartialWithUndefined<Record<ViraTableElementsForPassthrough, CSSResult>>
            >;
        }>
    >
>()({
    tagName: 'vira-table',
    styles: css`
        :host {
            background: ${viraFormCssVars['vira-form-background-color'].value};
            display: block;
            position: relative;
        }

        table,
        thead {
            background: inherit;
        }

        th,
        td {
            padding: 0;
        }

        table {
            border-collapse: collapse;
        }

        thead {
            z-index: 10;
            /* Other important thead styles are directly attached to the HTML element. */
        }

        .clickable {
            cursor: pointer;

            &:hover {
                color: ${viraFormCssVars['vira-form-selection-hover-foreground-color'].value};
                background-color: ${viraFormCssVars['vira-form-selection-hover-background-color']
                    .value};
            }
            &:active {
                color: ${viraFormCssVars['vira-form-selection-active-foreground-color'].value};
                background-color: ${viraFormCssVars['vira-form-selection-active-background-color']
                    .value};
            }
        }
    `,
    events: {
        rowClick: defineElementEvent<{entry: ViraTableEntry; originalEvent: MouseEvent}>(),
    },
    render({inputs, events, dispatch}) {
        const rowTemplates = inputs.horizontalOrientation
            ? inputs.table.keys.map((key) => {
                  if (key.hide) {
                      return nothing;
                  }

                  const cells = inputs.table.entries.map((entry) => {
                      const cellElement = key.isHeader ? 'th' : 'td';

                      return html`
                          <${cellElement}
                              ${listen('click', (event) => {
                                  if (isClickable) {
                                      dispatch(
                                          new events.rowClick({originalEvent: event, entry: entry}),
                                      );
                                  }
                              })}
                              ${key.isHeader
                                  ? inputs.attributePassthrough?.th
                                      ? attributes(inputs.attributePassthrough.th)
                                      : nothing
                                  : inputs.attributePassthrough?.td
                                    ? attributes(inputs.attributePassthrough.td)
                                    : nothing}
                              style=${key.isHeader
                                  ? ifDefined(inputs.stylePassthrough?.th)
                                  : ifDefined(inputs.stylePassthrough?.td)}
                          >
                              ${entry.cells[key.key]}
                          </${cellElement}>
                      `;
                  });

                  const isClickable = !!inputs.allowRowClicks && !key.disabled;

                  return html`
                      <tr
                          class=${classMap({
                              clickable: isClickable,
                          })}
                          ${inputs.attributePassthrough?.tr
                              ? attributes(inputs.attributePassthrough.tr)
                              : nothing}
                          style=${ifDefined(inputs.stylePassthrough?.tr)}
                      >
                          <th
                              ${inputs.attributePassthrough?.th
                                  ? attributes(inputs.attributePassthrough.th)
                                  : nothing}
                              style=${ifDefined(inputs.stylePassthrough?.th)}
                          >
                              ${key.label}
                          </th>
                          ${cells}
                      </tr>
                  `;
              })
            : inputs.table.entries.map((entry) => {
                  const cells = inputs.table.keys.map((key) => {
                      if (key.hide) {
                          return nothing;
                      }

                      const cellElement = key.isHeader ? 'th' : 'td';

                      return html`
                          <${cellElement}
                              ${key.isHeader
                                  ? inputs.attributePassthrough?.th
                                      ? attributes(inputs.attributePassthrough.th)
                                      : nothing
                                  : inputs.attributePassthrough?.td
                                    ? attributes(inputs.attributePassthrough.td)
                                    : nothing}
                              style=${key.isHeader
                                  ? ifDefined(inputs.stylePassthrough?.th)
                                  : ifDefined(inputs.stylePassthrough?.td)}
                          >
                              ${entry.cells[key.key]}
                          </${cellElement}>
                      `;
                  });

                  const isClickable = !!inputs.allowRowClicks && !entry.disabled;

                  return html`
                      <tr
                          class=${classMap({
                              clickable: isClickable,
                          })}
                          ${inputs.attributePassthrough?.tr
                              ? attributes(inputs.attributePassthrough.tr)
                              : nothing}
                          style=${ifDefined(inputs.stylePassthrough?.tr)}
                          ${listen('click', (event) => {
                              if (isClickable) {
                                  dispatch(
                                      new events.rowClick({originalEvent: event, entry: entry}),
                                  );
                              }
                          })}
                      >
                          ${cells}
                      </tr>
                  `;
              });

        const headerCells =
            inputs.hideKeyHeaders || inputs.horizontalOrientation
                ? undefined
                : inputs.table.keys.map((key) => {
                      if (key.hide) {
                          return nothing;
                      }

                      return html`
                          <th
                              ${inputs.attributePassthrough?.th
                                  ? attributes(inputs.attributePassthrough.th)
                                  : nothing}
                              style=${ifDefined(inputs.stylePassthrough?.th)}
                          >
                              ${key.label}
                          </th>
                      `;
                  });

        const headerRow = headerCells
            ? html`
                  <tr
                      ${inputs.attributePassthrough?.tr
                          ? attributes(inputs.attributePassthrough.tr)
                          : nothing}
                      style=${ifDefined(inputs.stylePassthrough?.tr)}
                  >
                      ${headerCells}
                  </tr>
              `
            : undefined;

        const theadStyles = css`
            ${inputs.stylePassthrough?.thead || css``}
            top: ${inputs.stickyOffset || 0}px;
            ${inputs.preventStickyHeader || inputs.hideKeyHeaders
                ? css``
                : css`
                      position: sticky;
                  `}
        `;

        return html`
            <table
                ${inputs.attributePassthrough?.table
                    ? attributes(inputs.attributePassthrough.table)
                    : nothing}
                style=${ifDefined(inputs.stylePassthrough?.table)}
            >
                ${headerRow
                    ? html`
                          <thead
                              ${inputs.attributePassthrough?.thead
                                  ? attributes(inputs.attributePassthrough.thead)
                                  : nothing}
                              style=${theadStyles}
                          >
                              ${headerRow}
                          </thead>
                      `
                    : nothing}
                <tbody
                    ${inputs.attributePassthrough?.tbody
                        ? attributes(inputs.attributePassthrough.tbody)
                        : nothing}
                    style=${ifDefined(inputs.stylePassthrough?.tbody)}
                >
                    ${rowTemplates}
                </tbody>
            </table>
        `;
    },
});
