import {TemplateResult} from 'lit';
import {PropertyInitMap} from './functional-element-properties';

export type RenderCallback<PropertyInitGeneric extends PropertyInitMap> = (
    params: RenderParams<PropertyInitGeneric>,
) => TemplateResult | Promise<TemplateResult>;

export type RenderParams<PropertyInitGeneric extends PropertyInitMap> = {
    props: PropertyInitGeneric;
};
