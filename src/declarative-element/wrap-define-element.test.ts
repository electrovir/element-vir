import {assert, fixture as renderFixture} from '@open-wc/testing';
import {assertTypeOf} from 'run-time-assertions';
import {
    css,
    defineElement,
    defineElementEvent,
    defineElementNoInputs,
    html,
    listen,
    wrapDefineElement,
} from '..';
import {getAssertedDeclarativeElement} from '../util/testing.test-helper';

describe(wrapDefineElement.name, () => {
    type MySpecificTagName = `my-${string}`;
    type MySpecificInputs = {noInputsActually: string};
    const {defineElement: myDefineElement, defineElementNoInputs: myDefineElementNoInputs} =
        wrapDefineElement<MySpecificTagName>();

    it('should match original define element types', () => {
        assertTypeOf(
            myDefineElement<MySpecificInputs>()({
                tagName: `my-tag-abc0`,
                renderCallback() {
                    return '';
                },
            }),
        ).toEqualTypeOf(
            defineElement<MySpecificInputs>()({
                tagName: `my-tag-abc1`,
                renderCallback() {
                    return '';
                },
            }),
        );

        myDefineElement<MySpecificInputs>()({
            // @ts-expect-error
            tagName: 'bad-tag',
            renderCallback() {
                return '';
            },
        });

        assertTypeOf(
            myDefineElementNoInputs({
                tagName: `my-tag-abc2`,
                renderCallback() {
                    return '';
                },
            }),
        ).toEqualTypeOf(
            defineElementNoInputs({
                tagName: `my-tag-abc3`,
                renderCallback() {
                    return '';
                },
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
                styles: ({cssVars, hostClasses}) => css`
                    ${hostClasses['my-tag-abc4-do-thing'].selector} {
                        color: ${cssVars['my-tag-abc4-var'].value};
                    }

                    :host(${hostClasses['my-tag-abc4-do-thing'].name}) {
                        ${cssVars['my-tag-abc4-var'].name}: green;
                    }
                `,
                events: {
                    outputOne: defineElementEvent<string>(),
                },
                renderCallback() {
                    return '';
                },
            }),
        ).toEqualTypeOf(
            defineElementNoInputs({
                tagName: `my-tag-abc5`,
                hostClasses: {
                    'my-tag-abc5-do-thing': false,
                },
                renderCallback() {
                    return '';
                },
            }),
        );

        myDefineElementNoInputs({
            // @ts-expect-error
            tagName: 'bad-tag',
            renderCallback() {
                return '';
            },
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
            renderCallback() {
                return '';
            },
        });

        const assignedInput = 'hello';

        const fixture = await renderFixture(html`
            <${MySpecificElement.assign({noInputsActually: assignedInput})}
                ${listen(MySpecificElement.events.myOutput, (event) => {
                    assertTypeOf(event.detail).toEqualTypeOf<number>();
                })}
            ></${MySpecificElement}>
        `);

        const elementInstance = getAssertedDeclarativeElement(MySpecificElement, fixture);

        assert.strictEqual(elementInstance.instanceInputs.noInputsActually, assignedInput);
    });
});
