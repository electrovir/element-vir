import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {css, defineElement, defineElementEvent, html, listen, wrapDefineElement} from '../index.js';

describe(wrapDefineElement.name, () => {
    type MySpecificTagName = `my-${string}`;
    type MySpecificInputs = {noInputsActually: string};
    const myDefineElement = wrapDefineElement<MySpecificTagName>();

    it('attaches an error handler', async () => {
        const errors: Error[] = [];

        const defineElementWithErrorHandler = wrapDefineElement({
            transformInputs(init) {
                return {
                    ...init,
                    options: {
                        errorHandler(error) {
                            errors.push(error);
                        },
                    },
                };
            },
        });
        const TestElement = defineElementWithErrorHandler<{shouldError: boolean}>()({
            tagName: 'my-test-element-with-an-error-handler',
            render({inputs}) {
                if (inputs.shouldError) {
                    throw new Error('FAILURE');
                }
                return 'hi';
            },
        });

        await testWeb.render(html`
            <${TestElement.assign({
                shouldError: false,
            })}></${TestElement}>
        `);
        assert.isEmpty(errors);

        await testWeb.render(html`
            <${TestElement.assign({
                shouldError: true,
            })}></${TestElement}>
        `);

        assert.isLengthExactly(errors, 1);
    });
    it('should match original define element types', () => {
        assert
            .tsType(
                myDefineElement<MySpecificInputs>()({
                    tagName: 'my-tag-abc0' as 'my-tag-abc',
                    render() {
                        return '';
                    },
                }),
            )
            .equals(
                defineElement<MySpecificInputs>()({
                    tagName: 'my-tag-abc1' as 'my-tag-abc',
                    render() {
                        return '';
                    },
                }),
            );

        myDefineElement<MySpecificInputs>()({
            // @ts-expect-error: this tag does not match the requirements
            tagName: 'bad-tag-1',
            render() {
                return '';
            },
        });

        assert
            .tsType(
                myDefineElement()({
                    tagName: 'my-tag-abc2' as 'my-tag-abc',
                    render() {
                        return '';
                    },
                }),
            )
            .equals(
                defineElement()({
                    tagName: 'my-tag-abc3' as 'my-tag-abc',
                    render() {
                        return '';
                    },
                }),
            );

        assert
            .tsType(
                myDefineElement()({
                    tagName: 'my-tag-abc4',
                    hostClasses: {
                        'my-tag-abc4-do-thing': false,
                    },
                    cssVars: {
                        'my-tag-abc4-var': 'blue',
                    },
                    events: {
                        outputOne: defineElementEvent<string>(),
                    },
                    styles: ({cssVars, hostClasses}) => css`
                        ${hostClasses['my-tag-abc4-do-thing'].selector} {
                            color: ${cssVars['my-tag-abc4-var'].value};
                        }

                        :host(${hostClasses['my-tag-abc4-do-thing'].name}) {
                            ${cssVars['my-tag-abc4-var'].name}: green;
                        }
                    `,
                    render() {
                        return '';
                    },
                }),
            )
            .equals(
                defineElement()({
                    tagName: 'my-tag-abc5' as 'my-tag-abc4',
                    hostClasses: {
                        ['my-tag-abc5-do-thing' as 'my-tag-abc4-do-thing']: false,
                    },
                    cssVars: {
                        ['my-tag-abc5-var' as 'my-tag-abc4-var']: 'blue',
                    },
                    events: {
                        outputOne: defineElementEvent<string>(),
                    },
                    render() {
                        return '';
                    },
                }),
            );

        myDefineElement()({
            // @ts-expect-error: this tag does not match the requirements
            tagName: 'bad-tag-2',
            render() {
                return '';
            },
        });
    });

    it('requires non-void returning render', () => {
        myDefineElement()({
            tagName: 'my-thing-abc6',
            // @ts-expect-error: render missing a return is not allowed
            render() {},
        });
        myDefineElement()({
            tagName: 'my-thing-abc7',
            // returning undefined is chill
            render() {
                return undefined;
            },
        });
    });

    it('allows defining sub states', () => {
        myDefineElement()({
            tagName: 'my-thing-abc8',
            state() {
                return {
                    hello: 'hi',
                };
            },
            render({state}) {
                assert.tsType(state).equals<Readonly<{hello: string}>>();
                return html``;
            },
        });
        myDefineElement<{something: string}>()({
            tagName: 'my-thing-abc9',
            state() {
                return {
                    hello: 'hi',
                };
            },
            render({state}) {
                assert.tsType(state).equals<Readonly<{hello: string}>>();
                return html``;
            },
        });
    });

    it('should still create a valid element', async () => {
        const MySpecificElement = myDefineElement<MySpecificInputs>()({
            tagName: 'my-tag-abc8',
            events: {
                myOutput: defineElementEvent<number>(),
            },
            render() {
                return '';
            },
        });

        const assignedInput = 'hello';

        const elementInstance = await testWeb.render(html`
            <${MySpecificElement.assign({
                noInputsActually: assignedInput,
            })}
                ${listen(MySpecificElement.events.myOutput, (event) => {
                    assert.tsType(event.detail).equals<number>();
                })}
            ></${MySpecificElement}>
        `);

        assert.instanceOf(elementInstance, MySpecificElement);

        assert.strictEquals(elementInstance.instanceInputs.noInputsActually, assignedInput);
    });
});
