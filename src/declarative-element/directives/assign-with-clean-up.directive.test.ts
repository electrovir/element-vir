import {randomString} from '@augment-vir/browser';
import {assert, fixture} from '@open-wc/testing';
import {assignWithCleanup, defineElementNoInputs, html, listen} from '../..';
import {
    clickElement,
    getAssertedDeclarativeElement,
    queryWithAssert,
    testIdSelector,
} from '../../augments/testing.test-helper';
import {VirWithInputs} from '../../test/elements/vir-with-inputs.element';

const AssignWithCleanupTestElement = defineElementNoInputs({
    tagName: 'vir-assign-with-cleanup-test',
    stateInitStatic: {
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
    renderCallback({state, updateState}) {
        return html`
            <button
                data-test-id="update-button"
                ${listen('click', () => {
                    updateState({nothing: Math.random()});
                })}
            >
                Click me
            </button>
            <${VirWithInputs}
                ${assignWithCleanup(
                    VirWithInputs,
                    (() => {
                        updateState({
                            firedCount: {
                                ...state.firedCount,
                                set: state.firedCount.set + 1,
                            },
                        });
                        const newString = randomString();
                        state.generatedStrings.add(newString);
                        return {
                            first: 5,
                            second: newString,
                        };
                    })(),
                    (oldValue) => {
                        state.firedCount.cleanup++;
                        if (!state.generatedStrings.has(oldValue.second)) {
                            state.errors.push(
                                `Could not find ${oldValue.second} in generated strings.`,
                            );
                        }
                        state.generatedStrings.delete(oldValue.second);
                    },
                )}
            ></${VirWithInputs}>
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
        const originalValue = element.instanceState.nothing;
        const updateButton = queryWithAssert(
            testIdSelector('update-button'),
            HTMLButtonElement,
            element,
        );

        await clickElement(updateButton);
        assert.notStrictEqual(originalValue, element.instanceState.nothing);

        await clickElement(updateButton);
        assert.notStrictEqual(originalValue, element.instanceState.nothing);

        assert.strictEqual(element.instanceState.generatedStrings.size, 1);
        assert.strictEqual(
            element.instanceState.errors.length,
            0,
            element.instanceState.errors.join(' '),
        );
        assert.strictEqual(
            element.instanceState.firedCount.set,
            3,
            'set a different amount of times than expected',
        );
        assert.strictEqual(
            element.instanceState.firedCount.cleanup,
            2,
            'cleaned up a different amount of times than expected',
        );
    });
});
