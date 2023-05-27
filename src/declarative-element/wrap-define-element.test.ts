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
                tagName: `my-tag-abc0`,
                renderCallback: () => '',
            }),
        ).toEqualTypeOf(
            defineElement<MySpecificInputs>()({
                tagName: `my-tag-abc1`,
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
                tagName: `my-tag-abc2`,
                renderCallback: () => '',
            }),
        ).toEqualTypeOf(
            defineElementNoInputs({
                tagName: `my-tag-abc3`,
                renderCallback: () => '',
            }),
        );

        assertTypeOf(
            myDefineElementNoInputs({
                tagName: `my-tag-abc4`,
                hostClasses: {
                    'my-tag-abc4-do-thing': false,
                },
                cssVars: {
                    'my-tag-abc4-var': 'blue',
                },
                styles: ({cssVars, hostClassNames, hostClassSelectors}) => css`
                    ${hostClassSelectors['my-tag-abc4-do-thing']} {
                        color: ${cssVars['my-tag-abc4-var'].value};
                    }

                    :host(${hostClassNames['my-tag-abc4-do-thing']}) {
                        ${cssVars['my-tag-abc4-var'].name}: green;
                    }
                `,
                events: {
                    outputOne: defineElementEvent<string>(),
                },
                renderCallback: () => '',
            }),
        ).toEqualTypeOf(
            defineElementNoInputs({
                tagName: `my-tag-abc5`,
                hostClasses: {
                    'my-tag-abc5-do-thing': false,
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
            tagName: `my-thing-abc6`,
            // renderCallback missing a return is not allowed
            // @ts-expect-error
            renderCallback() {},
        });
        myDefineElementNoInputs({
            tagName: `my-thing-abc7`,
            // returning undefined is chill
            renderCallback() {
                return undefined;
            },
        });
    });

    it('should still create a valid element', async () => {
        const MySpecificElement = myDefineElement<MySpecificInputs>()({
            tagName: `my-tag-abc8`,
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
