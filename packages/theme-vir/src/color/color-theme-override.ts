import {
    getObjectTypedEntries,
    getObjectTypedKeys,
    getObjectTypedValues,
    mapObjectValues,
} from '@augment-vir/common';
import {setCssVarValue, type CssVarName} from 'lit-css-vars';
import {type RequireAtLeastOne} from 'type-fest';
import {
    createColorCssVarDefault,
    defineColorTheme,
    themeDefaultKey,
    type ColorInit,
    type ColorTheme,
    type ColorThemeColor,
    type ColorThemeInit,
    type NoRefColorInit,
} from './color-theme.js';

/**
 * Input for {@link defineColorThemeOverride} color overrides.
 *
 * @category Internal
 */
export type ColorThemeOverrideInit<Theme extends ColorTheme = ColorTheme> = Omit<
    Partial<{
        [ColorName in keyof Theme['colors']]: ColorInit;
    }>,
    typeof themeDefaultKey
>;

/**
 * Output of {@link defineColorThemeOverride}.
 *
 * @category Internal
 */
export type ColorThemeOverride<Init extends ColorThemeInit = ColorThemeInit> = {
    name: string;
    overrides: Record<CssVarName, string>;
    originalTheme: ColorTheme<Init>;
    asTheme: ColorTheme<Init>;
};

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
    overrideValues: ColorThemeOverride['overrides'];
}) {
    const layerOverride = override?.[layerKey];

    if (!layerOverride) {
        return;
    }

    overrideValues[String(themeColor[layerKey].name) as CssVarName] = String(
        createColorCssVarDefault(
            layerKey,
            layerOverride,
            originalTheme.init.default,
            originalTheme.init.colors,
        ),
    );
}

/**
 * Define a color theme override. Use this to define multiple theme variations, like light mode vs
 * dark mode.
 *
 * @category Color Theme
 */
export function defineColorThemeOverride<const Init extends ColorThemeInit>(
    originalTheme: ColorTheme<Init>,
    overrideName: string,
    {
        defaultOverride,
        colorOverrides,
    }: Readonly<
        RequireAtLeastOne<{
            /** Override the default foreground and/or background colors. */
            defaultOverride: Readonly<NoRefColorInit>;
            colorOverrides: Readonly<ColorThemeOverrideInit<ColorTheme<Init>>>;
        }>
    >,
): ColorThemeOverride<Init> {
    const defaultValues: ColorThemeOverride['overrides'] = {};

    if (defaultOverride) {
        getObjectTypedKeys(defaultOverride).forEach((layerKey) => {
            applyCssVarOverride({
                originalTheme,
                layerKey,
                override: defaultOverride,
                themeColor: originalTheme.colors[themeDefaultKey],
                overrideValues: defaultValues,
            });
        });
    }

    const colorValues: ColorThemeOverride['overrides'] = {};

    if (colorOverrides) {
        getObjectTypedEntries(colorOverrides as ColorThemeOverrideInit).forEach(
            ([
                colorName,
                override,
            ]) => {
                const themeColor = originalTheme.colors[colorName];

                if (!themeColor) {
                    throw new Error(
                        `Override color name '${colorName}' does not exist in the theme being overridden.`,
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

    const asThemeColorInit: ColorThemeInit = mapObjectValues(
        originalTheme.init.colors as ColorThemeInit,
        (colorName, colorInit): ColorInit => {
            const override: ColorInit | undefined = (
                colorOverrides as ColorThemeOverrideInit | undefined
            )?.[colorName];

            const newInit: ColorInit = {
                ...colorInit,
                ...override,
            };

            return newInit;
        },
    );

    const asTheme: ColorTheme<Init> = defineColorTheme(
        {
            ...originalTheme.init.default,
            ...defaultOverride,
        },
        asThemeColorInit as Init,
    );

    return {
        name: overrideName,
        overrides: {
            ...defaultValues,
            ...colorValues,
        },
        originalTheme,
        asTheme,
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
    themeOverride?: ColorThemeOverride | undefined,
) {
    getObjectTypedValues(fullTheme.colors as Record<CssVarName, ColorThemeColor>).forEach(
        (themeColor) => {
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
        },
    );
}

function applyIndividualThemeColorValue({
    element,
    layerKey,
    themeOverride,
    themeColor,
}: {
    element: HTMLElement;
    layerKey: keyof ColorInit;
    themeOverride: ColorThemeOverride | undefined;
    themeColor: ColorThemeColor;
}) {
    const override = themeOverride?.overrides[String(themeColor[layerKey].name) as CssVarName];
    const value: string | number = override || themeColor[layerKey].default;

    setCssVarValue({
        forCssVar: themeColor[layerKey],
        onElement: element,
        toValue: value,
    });
}
