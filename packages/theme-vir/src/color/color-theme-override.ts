import {getObjectTypedEntries, getObjectTypedKeys, getObjectTypedValues} from '@augment-vir/common';
import {setCssVarValue, type CssVarName} from 'lit-css-vars';
import {type RequireAtLeastOne} from 'type-fest';
import {
    createColorCssVarDefault,
    type ColorInit,
    type ColorTheme,
    type ColorThemeColor,
} from './color-theme.js';

/**
 * Input for {@link defineColorThemeOverride} color overrides.
 *
 * @category Internal
 */
export type ColorThemeOverrideInit<Theme extends ColorTheme = ColorTheme> = Omit<
    Partial<{
        [ColorName in keyof Theme]: ColorInit;
    }>,
    'default'
>;

/**
 * Output of {@link defineColorThemeOverride}.
 *
 * @category Internal
 */
export type ColorThemeOverrides = Record<CssVarName, string>;

function applyCssVarOverride({
    originalTheme,
    layerKey,
    themeColor,
    override,
    overrideValues,
}: {
    originalTheme: ColorTheme;
    layerKey: keyof ColorInit;
    themeColor: Readonly<Pick<ColorThemeColor, keyof ColorInit>>;
    override: ColorInit | undefined;
    overrideValues: ColorThemeOverrides;
}) {
    const layerOverride = override?.[layerKey];

    if (!layerOverride) {
        return;
    }

    overrideValues[String(themeColor[layerKey].name) as CssVarName] = String(
        createColorCssVarDefault(layerKey, layerOverride, originalTheme),
    );
}

/**
 * Define a color theme override. Use this to define multiple theme variations, like light mode vs
 * dark mode.
 *
 * @category Color Theme
 */
export function defineColorThemeOverride<const Theme extends ColorTheme>(
    originalTheme: Theme,
    {
        defaultOverride,
        colorOverrides,
    }: RequireAtLeastOne<{
        /** Override the default foreground and/or background colors. */
        defaultOverride: ColorInit;
        colorOverrides: ColorThemeOverrideInit<Theme>;
    }>,
): ColorThemeOverrides {
    const defaultValues: ColorThemeOverrides = {};

    if (defaultOverride) {
        getObjectTypedKeys(defaultOverride).forEach((layerKey) => {
            applyCssVarOverride({
                originalTheme,
                layerKey,
                override: defaultOverride,
                themeColor: originalTheme.default,
                overrideValues: defaultValues,
            });
        });
    }

    const colorValues: ColorThemeOverrides = {};

    if (colorOverrides) {
        getObjectTypedEntries(colorOverrides as ColorThemeOverrideInit).forEach(
            ([
                colorName,
                override,
            ]) => {
                const themeColor = originalTheme[colorName];

                if (!themeColor) {
                    throw new Error(
                        `Override color name '${String(colorName)}' does not exist in the theme being overridden.`,
                    );
                }

                applyCssVarOverride({
                    originalTheme,
                    layerKey: 'foreground',
                    override,
                    themeColor,
                    overrideValues: colorValues,
                });
                applyCssVarOverride({
                    originalTheme,
                    layerKey: 'background',
                    override,
                    themeColor,
                    overrideValues: colorValues,
                });
            },
        );
    }

    return {
        ...defaultValues,
        ...colorValues,
    };
}

/**
 * Set all color theme CSS vars on the given element. If no override is given, the theme color
 * default values are assigned.
 *
 * @category Color Theme
 */
export function applyColorTheme<const Theme extends ColorTheme>(
    /** This should usually be the top-level `html` element. */
    element: HTMLElement,
    fullTheme: Theme,
    themeOverride?: ColorThemeOverrides | undefined,
) {
    getObjectTypedValues(fullTheme as Record<CssVarName, ColorThemeColor>).forEach((themeColor) => {
        applyIndividualThemeColorValue({
            element,
            layerKey: 'background',
            themeColor,
            themeOverride,
        });
        applyIndividualThemeColorValue({
            element,
            layerKey: 'foreground',
            themeColor,
            themeOverride,
        });
    });
}

function applyIndividualThemeColorValue({
    element,
    layerKey,
    themeOverride,
    themeColor,
}: {
    element: HTMLElement;
    layerKey: keyof ColorInit;
    themeOverride: ColorThemeOverrides | undefined;
    themeColor: ColorThemeColor;
}) {
    const override = themeOverride?.[String(themeColor[layerKey].name) as CssVarName];
    const value: string | number = override || themeColor[layerKey].default;

    setCssVarValue({
        forCssVar: themeColor[layerKey],
        onElement: element,
        toValue: value,
    });
}
