import {randomString} from '@augment-vir/browser';
import {assertTypeOf} from '@augment-vir/browser-testing';
import {assert, fixture as renderFixture} from '@open-wc/testing';
import {
    assign,
    css,
    defineElement,
    defineElementEvent,
    defineElementNoInputs,
    html,
    listen,
    wrapDefineElement,
} from '..';
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

        assertTypeOf(
            myDefineElementNoInputs({
                tagName: `my-tag-${randomString()}`,
                hostClasses: {
                    doThing: false,
                },
                cssVars: {
                    myCssVar: 'blue',
                },
                styles: ({cssVarNames, cssVarValues, hostClassNames, hostClassSelectors}) => css`
                    ${hostClassSelectors.doThing} {
                        color: ${cssVarValues.myCssVar};
                    }

                    :host(${hostClassNames.doThing}) {
                        ${cssVarNames.myCssVar}: green;
                    }
                `,
                events: {
                    outputOne: defineElementEvent<string>(),
                },
                renderCallback: () => '',
            }),
        ).toEqualTypeOf(
            defineElementNoInputs({
                tagName: `my-tag-${randomString()}`,
                hostClasses: {
                    doThing: false,
                },
                renderCallback: () => '',
            }),
        );

        myDefineElementNoInputs({
            // @ts-expect-error
            tagName: 'bad-tag',
            renderCallback: () => '',
        });
    });

    it('requires non-void returning renderCallback', () => {
        myDefineElementNoInputs({
            tagName: `my-thing-${randomString()}`,
            // renderCallback missing a return is not allowed
            // @ts-expect-error
            renderCallback() {},
        });
        myDefineElementNoInputs({
            tagName: `my-thing-${randomString()}`,
            // returning undefined is chill
            renderCallback() {
                return undefined;
            },
        });
    });

    it('should still create a valid element', async () => {
        const MySpecificElement = myDefineElement<MySpecificInputs>()({
            tagName: `my-tag-${randomString()}`,
            events: {
                myOutput: defineElementEvent<number>(),
            },
            renderCallback: () => '',
        });

        const assignedInput = 'hello';

        const fixture = await renderFixture(html`
            <${MySpecificElement}
                ${assign(MySpecificElement, {
                    noInputsActually: assignedInput,
                })}
                ${listen(MySpecificElement.events.myOutput, (event) => {
                    assertTypeOf(event.detail).toEqualTypeOf<number>();
                })}
            ></${MySpecificElement}>
        `);

        const elementInstance = getAssertedDeclarativeElement(MySpecificElement, fixture);

        assert.strictEqual(elementInstance.instanceInputs.noInputsActually, assignedInput);
    });
});
