import {assert, check} from '@augment-vir/assert';
import {
    getObjectTypedEntries,
    mapObjectValues,
    type RequiredAndNotNull,
    type UnknownObject,
} from '@augment-vir/common';
import {type CSSResult} from 'element-vir';
import {
    type CssVarDefinitions,
    type CssVarName,
    type CssVarsSetup,
    defineCssVars,
    type SingleCssVarDefinition,
} from 'lit-css-vars';
import {type RequireAtLeastOne, type Writable} from 'type-fest';

/**
 * Reference another color from this same definition inside {@link ColorInitValue}
 *
 * @category Internal
 */
export type ColorInitReference = RequireAtLeastOne<{
    refForeground: CssVarName;
    refBackground: CssVarName;
}>;

/**
 * All possible types for {@link ColorInit}.
 *
 * @category Internal
 */
export type ColorInitValue = string | number | CSSResult | ColorInitReference;

/**
 * An individual theme color init.
 *
 * @category Internal
 */
export type ColorInit = RequireAtLeastOne<{
    foreground: ColorInitValue;
    background: ColorInitValue;
}>;

/**
 * A defined individual color from a color theme.
 *
 * @category Internal
 */
export type ColorThemeColor<
    Init extends ColorInit = ColorInit,
    Name extends CssVarName = CssVarName,
> = {
    foreground: SingleCssVarDefinition;
    background: SingleCssVarDefinition;
    name: Name;
    init: Init;
};

/**
 * Base input type for the type parameter in {@link defineColorTheme}.
 *
 * @category Internal
 */
export type ColorThemeInit = Record<CssVarName, ColorInit>;

/**
 * A finalized color theme, output from {@link defineColorTheme}.
 *
 * @category Internal
 */
export type ColorTheme<Init extends ColorThemeInit = ColorThemeInit> = {
    [ColorName in keyof Init as ColorName extends CssVarName
        ? ColorName
        : never]: ColorName extends CssVarName
        ? Init[ColorName] extends ColorInit
            ? ColorThemeColor<Init[ColorName], ColorName>
            : never
        : never;
} & {
    [themeDefaultKey]: Omit<ColorThemeColor, 'name'>;
};

/**
 * Handles a color init value.
 *
 * @category Internal
 */
export function createColorCssVarDefault(
    fromName: string,
    init: ColorInitValue,
    fullInit: Record<string, unknown>,
): Exclude<ColorInitValue, ColorInitReference> {
    if (check.hasKey(init, 'refBackground' satisfies keyof ColorInitReference)) {
        if (!(init.refBackground in fullInit)) {
            throw new Error(
                `Color theme background reference '${init.refBackground}' does not exist. (Referenced from '${fromName}'.)`,
            );
        }
        return `var(--${init.refBackground}-bg)`;
    } else if (check.hasKey(init, 'refForeground' satisfies keyof ColorInitReference)) {
        if (!(init.refForeground in fullInit)) {
            throw new Error(
                `Color theme foreground reference '${init.refForeground}' does not exist. (Referenced from '${fromName}'.)`,
            );
        }

        return `var(--${init.refForeground}-fg)`;
    } else {
        return init;
    }
}

/**
 * Default foreground/background color theme used in {@link ColorTheme}. Do not define a theme color
 * with this name!
 *
 * @category Internal
 */
export const themeDefaultKey = 'default';

/**
 * Define a color theme.
 *
 * @category Color Theme
 */
export function defineColorTheme<const Init extends ColorThemeInit>(
    defaultInit: RequiredAndNotNull<ColorInit>,
    allColorsInit: Init,
): ColorTheme<Init> {
    if (themeDefaultKey in allColorsInit) {
        throw new Error(
            `Cannot define theme color by name '${themeDefaultKey}', it is used internally.`,
        );
    }

    const defaultColors = defineCssVars({
        'default-bg': createColorCssVarDefault('default-bg', defaultInit.background, allColorsInit),
        'default-fg': createColorCssVarDefault('default-fg', defaultInit.foreground, allColorsInit),
    });

    const cssVarsSetup: CssVarsSetup = getObjectTypedEntries(
        allColorsInit as ColorThemeInit,
    ).reduce(
        (
            accum,
            [
                colorName,
                colorInit,
            ],
        ) => {
            accum[(colorName + '-fg') as CssVarName] = colorInit.foreground
                ? createColorCssVarDefault(
                      [
                          colorName,
                          'foreground',
                      ].join(' '),
                      colorInit.foreground,
                      allColorsInit,
                  )
                : `var(${defaultColors['default-fg'].name}, ${defaultColors['default-fg'].default})`;
            accum[(colorName + '-bg') as CssVarName] = colorInit.background
                ? createColorCssVarDefault(
                      [
                          colorName,
                          'background',
                      ].join(' '),
                      colorInit.background,
                      allColorsInit,
                  )
                : `var(${defaultColors['default-bg'].name}, ${defaultColors['default-bg'].default})`;

            return accum;
        },
        {} as Writable<CssVarsSetup>,
    );

    /**
     * This has multiple `as` casts because `defineCssVars` complains that `cssVarsSetup` is too
     * generic. That is indeed true, but in this use case we do not care because the resulting
     * `cssVars` object is not directly exposed.
     */
    const cssVars = defineCssVars(
        cssVarsSetup as any,
    ) as unknown as CssVarDefinitions<CssVarsSetup>;

    const colors = mapObjectValues(
        allColorsInit,
        (colorName, colorInit): ColorThemeColor<any, any> => {
            assert.isString(colorName);

            const names = {
                foreground: (colorName + '-fg') as CssVarName,
                background: (colorName + '-bg') as CssVarName,
            };

            const background = cssVars[names.background];
            const foreground = cssVars[names.foreground];

            assert.isDefined(background);
            assert.isDefined(foreground);

            return {
                background,
                foreground,
                init: colorInit,
                name: colorName,
            };
        },
    ) as UnknownObject as Omit<ColorTheme<Init>, 'default'>;

    const defaults: ColorTheme['default'] = {
        foreground: defaultColors['default-fg'],
        background: defaultColors['default-bg'],
        init: defaultInit,
    };

    return {
        ...colors,
        default: defaults,
    } as ColorTheme<Init>;
}
