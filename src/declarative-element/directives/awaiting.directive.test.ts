import {assert, fixture as renderFixture} from '@open-wc/testing';
import {defineElementNoInputs, html, listen} from '../..';
import {clickElement, queryWithAssert} from '../../augments/testing.test-helper';
import {awaiting, createStateUpdatingPromiseIfUndefined, MaybePromise} from './awaiting.directive';

const WithAwaitingPromiseElement = defineElementNoInputs({
    tagName: 'vir-with-awaiting-promise-element',
    stateInit: {
        myValue: undefined as undefined | MaybePromise<string>,
        resolveFunction: undefined as undefined | ((value: string) => void),
    },
    renderCallback: ({state, updateState}) => {
        createStateUpdatingPromiseIfUndefined({
            state,
            stateKey: 'myValue',
            updateState,
            createPromiseCallback: () => {
                return new Promise<string>((resolve) => {
                    updateState({
                        resolveFunction: (value: string) => {
                            resolve(value);
                        },
                    });
                });
            },
        });

        return html`
            <button
                ${listen('click', () => {
                    state.resolveFunction?.('my name');
                })}
            >
                click me
            </button>
            <div class="read-this-text">
                ${awaiting(state.myValue, 'Loading...', (value) => {
                    console.log('resolved!');
                    return html`
                        Hello there ${value}!
                    `;
                })}
            </div>
        `;
    },
});

describe(createStateUpdatingPromiseIfUndefined.name, () => {
    it('should render placeholder', async () => {
        const fixture = await renderFixture(
            html`<${WithAwaitingPromiseElement}></${WithAwaitingPromiseElement}>`,
        );

        assert.strictEqual(
            queryWithAssert(['.read-this-text'], HTMLElement, fixture).textContent?.trim(),
            'Loading...',
        );
    });

    it('should update with promise result', async () => {
        const fixture = await renderFixture(
            html`<${WithAwaitingPromiseElement}></${WithAwaitingPromiseElement}>`,
        );

        const button = queryWithAssert(['button'], HTMLButtonElement, fixture);

        await clickElement(button);

        console.log('query before');
        assert.strictEqual(
            queryWithAssert(['.read-this-text'], HTMLElement, fixture).textContent?.trim(),
            'Hello there my name!',
        );
        console.log('query after');
    });
});
