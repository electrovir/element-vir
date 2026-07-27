import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineElement} from './define-element.js';
import {defaultDeclarativeElementDefinitionOptions} from './definition-options.js';

describe('defaultDeclarativeElementDefinitionOptions', () => {
    it('supplies the fallback for each option omitted by an element definition', () => {
        const PolymorphicOnlyElement = defineElement()({
            tagName: 'definition-options-polymorphic-only-el',
            options: {
                allowPolymorphicState: true,
            },
            render() {
                return '';
            },
        });

        assert.isUndefined(PolymorphicOnlyElement.elementOptions.errorHandler);

        const ErrorHandlerOnlyElement = defineElement()({
            tagName: 'definition-options-error-handler-only-el',
            options: {
                errorHandler() {
                    return Promise.resolve();
                },
            },
            render() {
                return '';
            },
        });

        assert.isFalse(ErrorHandlerOnlyElement.elementOptions.allowPolymorphicState);
        assert.isDefined(ErrorHandlerOnlyElement.elementOptions.errorHandler);
    });

    it('is not consumed by identity so definitions cannot corrupt it', () => {
        const MyElement = defineElement()({
            tagName: 'definition-options-identity-el',
            render() {
                return '';
            },
        });

        assert.notStrictEquals(
            MyElement.elementOptions,
            defaultDeclarativeElementDefinitionOptions,
        );
        assert.deepEquals(MyElement.elementOptions, defaultDeclarativeElementDefinitionOptions);
    });
});
