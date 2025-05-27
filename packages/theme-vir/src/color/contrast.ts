import {assertWrap} from '@augment-vir/assert';
import {type ArrayElement, arrayToObject, round} from '@augment-vir/common';

// @ts-expect-error: `fontLookupAPCA` is not in the types
import {calcAPCA, fontLookupAPCA} from 'apca-w3';

/**
 * All font weights that font sizes are calculated for. Used in {@link FontSizes} and
 * {@link calculateFontSizes}.
 *
 * @category Internal
 */
export type FontSizeWeights = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/**
 * A mapping of font weights to font sizes. Used in {@link calculateFontSizes}.
 *
 * @category Internal
 */
export type FontSizes = Record<FontSizeWeights, number>;

/**
 * Contrast calculations produced by {@link calculateContrast}.
 *
 * @category Internal
 */
export type CalculatedContrast = {
    /** The raw APCA LC contrast value. */
    contrast: number;
    /** The minimum font size for each font weight for the current `contrast` value. */
    fontSizes: FontSizes;
    /** The contrast level for the current `contrast` value. */
    contrastLevel: ContrastLevel;
};

/**
 * A color pair of foreground and background colors. The value of each (a string) may be any valid
 * CSS color string.
 *
 * @category Internal
 */
export type ColorPair = {
    foreground: string;
    background: string;
};

/**
 * Calculate contrast for the given color combination.
 *
 * @category Internal
 */
export function calculateContrast({
    background,
    foreground,
}: Readonly<ColorPair>): CalculatedContrast {
    const contrast: number = round(Number(calcAPCA(foreground, background)), {digits: 1});

    return {
        contrast,
        fontSizes: calculateFontSizes(contrast),
        contrastLevel: determineContrastLevel(contrast),
    };
}

/**
 * Calculated needed font sizes for each font weight for the given color contrast.
 *
 * @category Internal
 */
export function calculateFontSizes(contrast: number): FontSizes {
    const fontLookup = fontLookupAPCA(contrast).slice(1) as number[];

    const sizes = arrayToObject(fontLookup, (value, index) => {
        return {
            key: (index + 1) * 100,
            value,
        };
    });

    return sizes as FontSizes;
}

/**
 * Finds the color contrast level for the given contrast.
 *
 * @category Internal
 */
export function determineContrastLevel(contrast: number): ContrastLevel {
    return assertWrap.isDefined(
        contrastLevels.find((threshold) => threshold.min <= Math.abs(contrast)),
    );
}

/**
 * Names for each {@link ContrastLevel}.
 *
 * @category Internal
 */
export enum ContrastLevelName {
    SmallBodyText = 'small-body-text',
    BodyText = 'body-text',
    NonBodyText = 'non-body-text',
    LargeText = 'large-text',
    SpotText = 'spot-text',
    Decoration = 'decoration',
    Invisible = 'invisible',
}

/**
 * User-facing labels for {@link ContrastLevelName}.
 *
 * @category Internal
 */
export const contrastLevelLabel: Record<ContrastLevelName, string> = {
    [ContrastLevelName.SmallBodyText]: 'Small Text',
    [ContrastLevelName.BodyText]: 'Body Text',
    [ContrastLevelName.NonBodyText]: 'Non-body Text',
    [ContrastLevelName.LargeText]: 'Headers',
    [ContrastLevelName.SpotText]: 'Placeholders',
    [ContrastLevelName.Decoration]: 'Decorations',
    [ContrastLevelName.Invisible]: 'Invisible ',
};

/**
 * All {@link ContrastLevelName} values in order from highest contrast to lowest.
 *
 * @category Internal
 */
export const orderedContrastLevelNames = [
    ContrastLevelName.SmallBodyText,
    ContrastLevelName.BodyText,
    ContrastLevelName.NonBodyText,
    ContrastLevelName.LargeText,
    ContrastLevelName.SpotText,
    ContrastLevelName.Decoration,
    ContrastLevelName.Invisible,
] as const;

/**
 * Color contrast level details.
 *
 * @category Internal
 */
export type ContrastLevel = {
    /** The minimum contrast level threshold for this contrast level. */
    min: number;
    /** The name corresponding to the smallest text or non-text item that this can be used for. */
    name: ContrastLevelName;
    /** Short description for this contrast level. */
    description: string;

    /** Name from the APCA guidelines (confusing). */
    apcaName: string;
    /** Description from the APCA guidelines (verbose). */
    apcaDescription: string;
};

/**
 * All color contrast levels corresponding to APCA bronze guidelines.
 *
 * @category Internal
 */
export const contrastLevels = [
    {
        min: 90,
        name: ContrastLevelName.SmallBodyText,
        description: 'Perfect for all sizes of text, even small body text.',
        apcaName: 'small body text only',
        apcaDescription:
            'Preferred level for fluent text and columns of body text with a font no smaller than 18px/weight 300 or 14px/weight 400 (normal), or non-body text with a font no smaller than 12px. Also a recommended minimum for extremely thin fonts with a minimum of 24px at weight 200. Lc 90 is a suggested maximum for very large and bold fonts (greater than 36px bold), and large areas of color.',
    },
    {
        min: 75,
        name: ContrastLevelName.BodyText,
        description: 'Good for regular body text and anything larger.',
        apcaName: 'body text okay',
        apcaDescription:
            'The minimum level for columns of body text with a font no smaller than 24px/300 weight, 18px/400, 16px/500 and 14px/700. This level may be used with non-body text with a font no smaller than 15px/400. Also, Lc 75 should be considered a minimum for larger for any larger text where readability is important.',
    },
    {
        min: 60,
        name: ContrastLevelName.NonBodyText,
        description: 'Good for legible non-body text and anything larger.',
        apcaName: 'fluent text only',
        apcaDescription:
            'The minimum level recommended for content text that is not body, column, or block text. In other words, text you want people to read. The minimums: no smaller than 48px/200, 36px/300, 24px normal weight (400), 21px/500, 18px/600, 16px/700 (bold). These values based on the reference font Helvetica. To use these sizes as body text, add Lc 15 to the minimum contrast.',
    },
    {
        min: 45,
        name: ContrastLevelName.LargeText,
        description: 'Okay for large or headline text.',
        apcaName: 'large & sub-fluent text',
        apcaDescription:
            'The minimum for larger, heavier text (36px normal weight or 24px bold) such as headlines, and large text that should be fluently readable but is not body text. This is also the minimum for pictograms with fine details, or smaller outline icons, , no less than 4px in its smallest dimension.',
    },
    {
        min: 30,
        name: ContrastLevelName.SpotText,
        description:
            'Okay for disabled or placeholder text, copyright lines, icons, or non-text elements.',
        apcaName: 'spot & non text only',
        apcaDescription:
            'The absolute minimum for any text not listed above, which means non-content text considered as "spot readable". This includes placeholder text and disabled element text, and some non-content like a copyright bug. This is also the minimum for large/solid semantic & understandable non-text elements such as "mostly solid" icons or pictograms, no less than 10px in its smallest dimension.',
    },
    {
        min: 15,
        name: ContrastLevelName.Decoration,
        description:
            'Only okay for decorations like graphics, borders, dividers, etc. Do not use for any text.',
        apcaName: 'no text usage',
        apcaDescription:
            'The absolute minimum for any non-text that needs to be discernible and differentiable, but does not apply to semantic non-text such as icons, and is no less than 15px in its smallest dimension. This may include dividers, and in some cases large buttons or thick focus visible outlines, but does not include fine details which have a higher minimum. Designers should treat anything below this level as invisible, as it will not be visible for many users. This minimum level should be avoided for any items important to the use, understanding, or interaction of the site.',
    },
    {
        min: 0,
        name: ContrastLevelName.Invisible,
        description: 'Effectively invisible for users.',
        apcaName: 'invisible',
        apcaDescription: 'This should be treated as invisible.',
    },
] as const satisfies ReadonlyArray<Readonly<ContrastLevel>>;

/**
 * Type for {@link contrastLevelMinMap}.
 *
 * @category Internal
 */
export type ContrastLevelMinMap = {
    [Min in ArrayElement<typeof contrastLevels>['min']]: Extract<
        ArrayElement<typeof contrastLevels>,
        {min: Min}
    >;
};

/**
 * A mapping of all color contrast levels mins to their contrast levels. Generated from
 * {@link contrastLevels}.
 *
 * @category Internal
 */
export const contrastLevelMinMap = arrayToObject(contrastLevels, (contrastLevel) => {
    return {
        key: contrastLevel.min,
        value: contrastLevel,
    };
}) as ContrastLevelMinMap;

/**
 * Type for {@link contrastLevelMinMap}.
 *
 * @category Internal
 */
export type ContrastLevelNameMap = {
    [Name in ArrayElement<typeof contrastLevels>['name']]: Extract<
        ArrayElement<typeof contrastLevels>,
        {name: Name}
    >;
};

/**
 * A mapping of all color contrast levels mins to their contrast levels. Generated from
 * {@link contrastLevels}.
 *
 * @category Internal
 */
export const contrastLevelNameMap = arrayToObject(contrastLevels, (contrastLevel) => {
    return {
        key: contrastLevel.name,
        value: contrastLevel,
    };
}) as ContrastLevelNameMap;
