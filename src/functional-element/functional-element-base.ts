import {CSSResult, LitElement} from 'lit';
import {InputsMap} from './functional-element-inputs';

export class FunctionalElementBaseClass extends LitElement {
    public static readonly styles: CSSResult;
    public static readonly tagName: string;
}

export type FunctionalElementBase<InputsGeneric extends InputsMap> = FunctionalElementBaseClass &
    InputsGeneric;
