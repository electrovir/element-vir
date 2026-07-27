import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {type CustomElementTagName} from './custom-tag-name.js';

describe('CustomElementTagName', () => {
    it('requires at least one hyphen', () => {
        assert.tsType<'my-element'>().matches<CustomElementTagName>();
        assert.tsType<'my-nested-element'>().matches<CustomElementTagName>();
        assert.tsType<'-'>().matches<CustomElementTagName>();
        assert.tsType<'noHyphen'>().notMatches<CustomElementTagName>();
        assert.tsType<string>().notMatches<CustomElementTagName>();
    });
});
