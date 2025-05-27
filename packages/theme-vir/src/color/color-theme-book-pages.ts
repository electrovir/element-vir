import {type PartialWithUndefined} from '@augment-vir/common';
import {
    BookPageControlType,
    defineBookPage,
    definePageControl,
    type BookPage,
    type DefineExampleCallback,
} from 'element-book';
import {css, html, listen, nothing} from 'element-vir';
import {type EmptyObject} from 'type-fest';
import {type ColorThemeOverride} from './color-theme-override.js';
import {type ColorTheme} from './color-theme.js';
import {ThemeVirColorExample} from './elements/theme-vir-color-example.element.js';

/**
 * Create multiple element-book pages to showcase a theme its overrides (if any).
 *
 * @category Color Theme
 */
export function createColorThemeBookPages({
    parent,
    title,
    theme,
    hideInverseColors,
    overrides,
}: {
    title: string;
    theme: Readonly<ColorTheme>;
} & PartialWithUndefined<{
    parent: Readonly<BookPage>;
    hideInverseColors: boolean;
    overrides: ReadonlyArray<Readonly<ColorThemeOverride>>;
}>) {
    const themeParentPage = defineBookPage({
        parent,
        title,
        controls: {
            'Show Var Names': definePageControl({
                controlType: BookPageControlType.Checkbox,
                initValue: false,
            }),
            'Show Contrast Tips': definePageControl({
                controlType: BookPageControlType.Checkbox,
                initValue: true,
            }),
        },
    });

    function createThemePage(
        defineExample: DefineExampleCallback<EmptyObject, typeof themeParentPage.controls>,
        theme: Readonly<ColorTheme>,
    ) {
        Object.values(theme.colors).forEach((themeColor) => {
            defineExample({
                title: themeColor.name,
                styles: css`
                    :host {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                    }
                `,
                state() {
                    return {
                        forceShowEverything: false,
                    };
                },
                render({controls, state, updateState}) {
                    const normalTemplate = html`
                        <${ThemeVirColorExample.assign({
                            color: themeColor,
                            showVarValues: true,
                            showVarNames: controls['Show Var Names'] || state.forceShowEverything,
                            showContrast:
                                controls['Show Contrast Tips'] || state.forceShowEverything,
                        })}
                            ${listen(ThemeVirColorExample.events.toggleShowVars, () => {
                                updateState({
                                    forceShowEverything: !state.forceShowEverything,
                                });
                            })}
                        ></${ThemeVirColorExample}>
                    `;

                    const inverseColor = hideInverseColors
                        ? undefined
                        : theme.inverse[themeColor.name];

                    const inverseTemplate = inverseColor
                        ? html`
                              <${ThemeVirColorExample.assign({
                                  color: inverseColor,
                                  showVarValues: false,
                                  showVarNames:
                                      controls['Show Var Names'] || state.forceShowEverything,
                                  showContrast:
                                      controls['Show Contrast Tips'] || state.forceShowEverything,
                              })}
                                  ${listen(ThemeVirColorExample.events.toggleShowVars, () => {
                                      updateState({
                                          forceShowEverything: !state.forceShowEverything,
                                      });
                                  })}
                              ></${ThemeVirColorExample}>
                          `
                        : nothing;

                    return html`
                        ${normalTemplate}${inverseTemplate}
                    `;
                },
            });
        });
    }

    const descriptionParagraphs = [
        'Click a color preview to show CSS var names and values.',
    ];

    const defaultThemePage = defineBookPage({
        parent: themeParentPage,
        title: 'Default Theme',
        descriptionParagraphs,
        defineExamples({defineExample}) {
            createThemePage(defineExample, theme);
        },
    });

    const overridePages = (overrides || []).map((override) => {
        return defineBookPage({
            parent: themeParentPage,
            title: override.name,
            descriptionParagraphs,
            defineExamples({defineExample}) {
                createThemePage(defineExample, override.asTheme);
            },
        });
    });

    return [
        themeParentPage,
        defaultThemePage,
        ...overridePages,
    ];
}
