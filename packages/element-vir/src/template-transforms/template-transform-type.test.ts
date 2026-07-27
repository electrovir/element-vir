import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {type AllValueTransforms, type TemplateTransform} from './template-transform-type.js';
import {type transformTemplate} from './transform-template.js';
import {type transformCssTemplate} from './vir-css/css-transform.js';
import {type transformHtmlTemplate} from './vir-html/html-transform.js';

describe('TemplateTransform', () => {
    it('is exactly what every template transformer returns', () => {
        assert.tsType<ReturnType<typeof transformTemplate>>().equals<TemplateTransform>();
        assert.tsType<ReturnType<typeof transformCssTemplate>>().equals<TemplateTransform>();
        assert.tsType<ReturnType<typeof transformHtmlTemplate>>().equals<TemplateTransform>();
    });

    it('transforms values into AllValueTransforms', () => {
        assert
            .tsType<ReturnType<TemplateTransform['valuesTransform']>>()
            .equals<AllValueTransforms>();
    });
});
