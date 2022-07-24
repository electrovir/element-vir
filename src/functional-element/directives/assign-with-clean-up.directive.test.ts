import {assert, fixture} from '@open-wc/testing';
import {sendMouse} from '@web/test-runner-commands';
import {randomString} from 'augment-vir';
import {assign, defineFunctionalElement, html, listen} from '../..';
import {
    assertRejects,
    getAssertedFunctionalElement,
    getCenterOfElement,
    queryWithAssert,
    testIdSelector,
} from '../../augments/testing';
import {VirWithProps} from '../../test/elements/vir-with-props.element';
import {assignWithCleanup} from './assign-with-clean-up.directive';

const AssignWithCleanupTestElement = defineFunctionalElement({
    tagName: 'vir-assign-with-cleanup-test',
    props: {
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
                    VirWithProps.props.second,
                    (() => {
                        setProps({
                            firedCount: {
                                ...props.firedCount,
                                set: props.firedCount.set + 1,
                            },
                        });
                        const newString = randomString();
                        props.generatedStrings.add(newString);
                        return newString;
                    })(),
                    (oldValue) => {
                        props.firedCount.cleanup++;
                        if (!props.generatedStrings.has(oldValue)) {
                            props.errors.push(`Could not find ${oldValue} in generated strings.`);
                        }
                        props.generatedStrings.delete(oldValue);
                    },
                    props.equalityCheck,
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

        const element = getAssertedFunctionalElement(AssignWithCleanupTestElement, rendered);
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
                            AssignWithCleanupTestElement.props.errors,
                            [],
                            () => {},
                        )}
                    ></${VirWithProps}>
                `),
            Error,
            /element has no property of name "errors"/,
        );
    });

    it('should use custom equality check', async () => {
        const rendered = await fixture(html`
            <${AssignWithCleanupTestElement}
                ${assign(AssignWithCleanupTestElement.props.equalityCheck, () => true)}
            ></${AssignWithCleanupTestElement}>
        `);

        const element = getAssertedFunctionalElement(AssignWithCleanupTestElement, rendered);
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
        assert.strictEqual(
            element.instanceProps.firedCount.set,
            3,
            'set a different amount of times than expected',
        );
        assert.strictEqual(
            element.instanceProps.firedCount.cleanup,
            0,
            'cleaned up a different amount of times than expected',
        );
    });
});
