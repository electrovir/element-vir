import {randomString} from '@augment-vir/browser';
import {assertTypeOf} from '@augment-vir/browser-testing';
import {assert, fixture as renderFixture} from '@open-wc/testing';
import {assign, defineElement, defineElementNoInputs, html, wrapDefineElement} from '..';
import {getAssertedDeclarativeElement} from '../augments/testing.test-helper';

describe(wrapDefineElement.name, () => {
    type MySpecificTagName = `my-${string}`;
    type MySpecificInputs = {noInputsActually: string};
    const {defineElement: myDefineElement, defineElementNoInputs: myDefineElementNoInputs} =
        wrapDefineElement<MySpecificTagName>();

    it('should match original define element types', () => {
        assertTypeOf(
            myDefineElement<MySpecificInputs>()({
                tagName: `my-tag-${randomString()}`,
                renderCallback: () => '',
            }),
        ).toEqualTypeOf(
            defineElement<MySpecificInputs>()({
                tagName: `my-tag-${randomString()}`,
                renderCallback: () => '',
            }),
        );

        myDefineElement<MySpecificInputs>()({
            // @ts-expect-error
            tagName: 'bad-tag',
            renderCallback: () => '',
        });

        assertTypeOf(
            myDefineElementNoInputs({
                tagName: `my-tag-${randomString()}`,
                renderCallback: () => '',
            }),
        ).toEqualTypeOf(
            defineElementNoInputs({
                tagName: `my-tag-${randomString()}`,
                renderCallback: () => '',
            }),
        );

        myDefineElementNoInputs({
            // @ts-expect-error
            tagName: 'bad-tag',
            renderCallback: () => '',
        });
    });

    it('should still create a valid element', async () => {
        const MySpecificElement = myDefineElement<MySpecificInputs>()({
            tagName: `my-tag-${randomString()}`,
            renderCallback: () => '',
        });

        const assignedInput = 'hello';

        const fixture = await renderFixture(html`
            <${MySpecificElement}
                ${assign(MySpecificElement, {
                    noInputsActually: assignedInput,
                })}
            ></${MySpecificElement}>
        `);

        const elementInstance = getAssertedDeclarativeElement(MySpecificElement, fixture);

        assert.strictEqual(elementInstance.instanceInputs.noInputsActually, assignedInput);
    });
});
