import {type Values} from '@augment-vir/common';
import {type CssVarDefinitions, type CssVarsSetup} from 'lit-css-vars';
import {type CustomElementTagName} from '../custom-tag-name.js';
import {type BaseStringName} from './string-names.js';

/**
 * Base type for a declarative element definition's CSS vars.
 *
 * @category Internal
 */
export type CssVarsInitMap<
    ElementTagName extends CustomElementTagName,
    CssVarKeys extends BaseStringName<ElementTagName>,
> = Readonly<Record<CssVarKeys, Values<CssVarsSetup>>>;

/**
 * CSS vars ready for use within a declarative element's `render` or `styles` method.
 *
 * @category Internal
 */
export type CssVars<
    ElementTagName extends CustomElementTagName,
    CssVarKeys extends BaseStringName<ElementTagName>,
> = CssVarDefinitions<CssVarsInitMap<ElementTagName, CssVarKeys>>;
