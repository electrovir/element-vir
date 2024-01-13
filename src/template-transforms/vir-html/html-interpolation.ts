import {AnyFunction} from '@augment-vir/common';
import {CSSResult, TemplateResult} from 'lit';
import {EmptyObject} from 'type-fest';
import {DeclarativeElementDefinition} from '../../declarative-element/declarative-element';
import {MinimalDefinitionWithInputs} from '../minimal-element-definition';

/**
 * Unfortunately the type for `DirectiveResult` means it's just an empty object. So in order to
 * block actual objects, we have to narrow `DirectiveResult` further to this empty object type.
 */
export type DirectiveOutput = EmptyObject;

/**
 * This is used in order to block accidental object interpolations into HTML, which get stringified
 * into `'[object Object]'`, which nobody ever wants that.
 */
export type HtmlInterpolation =
    | null
    | undefined
    | string
    | number
    | boolean
    | bigint
    | CSSResult
    | TemplateResult
    | MinimalDefinitionWithInputs
    | DeclarativeElementDefinition
    | DirectiveOutput
    | AnyFunction
    | HtmlInterpolation[];
