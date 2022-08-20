import {assert, fixture} from '@open-wc/testing';
import {sendMouse} from '@web/test-runner-commands';
import {randomString} from 'augment-vir';
import {defineElementNoInputs, html, listen} from '../..';
import {
    assertRejects,
    getAssertedDeclarativeElement,
    getCenterOfElement,
    queryWithAssert,
    testIdSelector,
} from '../../augments/testing';
import {VirWithProps} from '../../test/elements/vir-with-props.element';
import {assignWithCleanup} from './assign-with-clean-up.directive';

const AssignWithCleanupTestElement = defineElementNoInputs({
    tagName: 'vir-assign-with-cleanup-test',
    stateInit: {
        first: 1,
        second: 'two',
        generatedStrings: new Set<string>(),
        errors: [] as string[],
        nothing: 0,
        firedCount: {
            set: 0,
            cleanup: 0,
        },
        equalityCheck: undefined as undefined | ((a: string, b: string) => boolean),
    },
    renderCallback: ({props, setProps}) => {
        return html`
            <button
                data-test-id="update-button"
                ${listen('click', () => {
                    setProps({nothing: Math.random()});
                })}
            >
                Click me
            </button>
            <${VirWithProps}
                ${assignWithCleanup(
                    VirWithProps,
                    (() => {
                        setProps({
                            firedCount: {
                                ...props.firedCount,
                                set: props.firedCount.set + 1,
                            },
                        });
                        const newString = randomString();
                        props.generatedStrings.add(newString);
                        return {
                            first: 5,
                            second: newString,
                        };
                    })(),
                    (oldValue) => {
                        props.firedCount.cleanup++;
                        if (!props.generatedStrings.has(oldValue.second)) {
                            props.errors.push(
                                `Could not find ${oldValue.second} in generated strings.`,
                            );
                        }
                        props.generatedStrings.delete(oldValue.second);
                    },
                )}
            ></${VirWithProps}>
        `;
    },
});

describe(assignWithCleanup.name, () => {
    it('should clean up values', async () => {
        const rendered = await fixture(html`
            <${AssignWithCleanupTestElement}></${AssignWithCleanupTestElement}>
        `);

        const element = getAssertedDeclarativeElement(AssignWithCleanupTestElement, rendered);
        const testElement = queryWithAssert(
            AssignWithCleanupTestElement.tagName,
            AssignWithCleanupTestElement,
            window.document,
        );
        const originalValue = element.instanceProps.nothing;
        const updateButton = queryWithAssert(
            testIdSelector('update-button'),
            HTMLButtonElement,
            element,
        );

        await sendMouse({
            position: getCenterOfElement(updateButton),
            type: 'click',
        });
        assert.notStrictEqual(originalValue, element.instanceProps.nothing);
        await sendMouse({
            position: getCenterOfElement(updateButton),
            type: 'click',
        });
        assert.notStrictEqual(originalValue, element.instanceProps.nothing);

        assert.strictEqual(element.instanceProps.generatedStrings.size, 1);
        assert.strictEqual(
            element.instanceProps.errors.length,
            0,
            element.instanceProps.errors.join(' '),
        );
        assert.strictEqual(
            element.instanceProps.firedCount.set,
            3,
            'set a different amount of times than expected',
        );
        assert.strictEqual(
            element.instanceProps.firedCount.cleanup,
            2,
            'cleaned up a different amount of times than expected',
        );
    });

    it('should fail if assigned to the wrong element', async () => {
        await assertRejects(
            () =>
                fixture(html`
                    <${VirWithProps}
                        ${assignWithCleanup(
                            AssignWithCleanupTestElement,
                            {
                                errors: [],
                            } as any,
                            () => {},
                        )}
                    ></${VirWithProps}>
                `),
            Error,
            /Property name "errors" does not exist on vir-with-props./,
        );
    });
});
