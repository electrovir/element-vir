import {
    type AnyFunction,
    type EmptyObject,
    type HasRequiredKeys,
    type IsNever,
    type Overwrite,
} from '@augment-vir/common';
import {type CSSResult, type TemplateResult, type nothing} from 'lit';
import {type DeclarativeElementDefinition} from '../../declarative-element/declarative-element.js';
import {type Decrement, type Increment} from '../../util/increment.js';
import {
    type MinimalDefinitionWithInputs,
    type MinimalElementDefinition,
} from '../minimal-element-definition.js';

/**
 * Unfortunately the type for `DirectiveResult` means it's just an empty object. So in order to
 * block actual objects, we have to narrow `DirectiveResult` further to this empty object type.
 *
 * @category Internal
 */
export type DirectiveOutput = EmptyObject;

/**
 * This is used in order to block accidental object interpolations into HTML, which get stringified
 * into `'[object Object]'`, which nobody ever wants that.
 *
 * @category Internal
 */
export type HtmlInterpolation =
    | null
    | undefined
    | string
    | number
    | boolean
    | bigint
    | CSSResult
    | Readonly<CSSResult>
    | Element
    | Readonly<Element>
    | TemplateResult
    | Readonly<TemplateResult>
    | MinimalElementDefinition
    | Readonly<MinimalElementDefinition>
    | MinimalDefinitionWithInputs
    | Readonly<MinimalDefinitionWithInputs>
    | DeclarativeElementDefinition
    | Readonly<DeclarativeElementDefinition>
    | DirectiveOutput
    | Readonly<DirectiveOutput>
    | AnyFunction
    | typeof nothing
    | HtmlInterpolation[]
    | ReadonlyArray<HtmlInterpolation>
    | Iterable<HtmlInterpolation>
    | Readonly<Iterable<HtmlInterpolation>>;

/**
 * This type ensures that interpolated element definitions are not missing their inputs, when inputs
 * are required.
 *
 * @category Internal
 */
export type VerifyHtmlValues<
    Values extends HtmlInterpolation[],
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    WaitingForEndTags extends Record<string, number> = {},
> = Values extends [
    infer CurrentDefinition extends DeclarativeElementDefinition,
    ...infer Rest extends HtmlInterpolation[],
]
    ? CurrentDefinition extends DeclarativeElementDefinition<infer TagName, infer Inputs>
        ? HasRequiredKeys<Inputs> extends true
            ? IsNever<Decrement<WaitingForEndTags[TagName]>> extends true
                ? [
                      'ERROR: This element is missing its inputs.',
                      ...VerifyHtmlValues<Rest, WaitingForEndTags>,
                  ]
                : [
                      CurrentDefinition,
                      ...VerifyHtmlValues<
                          Rest,
                          Overwrite<
                              WaitingForEndTags,
                              Record<TagName, Decrement<WaitingForEndTags[TagName]>>
                          >
                      >,
                  ]
            : [
                  CurrentDefinition,
                  ...VerifyHtmlValues<Rest, WaitingForEndTags>,
              ]
        : [
              CurrentDefinition,
              ...VerifyHtmlValues<Rest, WaitingForEndTags>,
          ]
    : Values extends [
            infer CurrentDefinition extends MinimalDefinitionWithInputs,
            ...infer Rest extends HtmlInterpolation[],
        ]
      ? [
            CurrentDefinition,
            ...VerifyHtmlValues<
                Rest,
                Overwrite<
                    WaitingForEndTags,
                    Record<
                        CurrentDefinition['definition']['tagName'],
                        Increment<WaitingForEndTags[CurrentDefinition['definition']['tagName']]>
                    >
                >
            >,
        ]
      : Values;
