import {assert, fixture} from '@open-wc/testing';
import {sendMouse} from '@web/test-runner-commands';
import {randomString} from 'augment-vir';
import {html, listen} from '../..';
import {defineFunctionalElement} from '../../../src';
import {
    getAssertedFunctionalElement,
    getCenterOfElement,
    queryWithAssert,
    testIdSelector,
} from '../../augments/testing';
import {VirWithProps} from '../../test/elements/vir-with-props.element';
import {assignWithCleanup} from './assign-with-clean-up.directive';

export const AssignWithCleanupTestElement = defineFunctionalElement({
    tagName: 'vir-assign-with-cleanup-test',
    props: {
        first: 1,
        second: 'two',
        generatedStrings: new Set<string>(),
        errors: [] as string[],
        nothing: 0,
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
                        const newString = randomString();
                        props.generatedStrings.add(newString);
                        return newString;
                    })(),
                    (oldValue) => {
                        if (!props.generatedStrings.has(oldValue)) {
                            props.errors.push(`Could not find ${oldValue} in generated strings.`);
                        }
                        props.generatedStrings.delete(oldValue);
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
    });

    it('should fail if assigned to the wrong element', () => {
        assert.isTrue(false, 'test not written yet.');
    });

    it('should use custom equality check', () => {
        assert.isTrue(false, 'test not written yet.');
    });
});
