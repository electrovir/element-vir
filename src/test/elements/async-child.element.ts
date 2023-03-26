import {randomInteger} from '@augment-vir/browser';
import {createDeferredPromiseWrapper, wait} from '@augment-vir/common';
import {createCachedPromise} from '@electrovir/cached-promise';
import {defineElementNoInputs, html, listen} from '../..';
import {renderPromise} from '../../declarative-element/directives/render-promise.directive';

export const TestAsyncChildElement = defineElementNoInputs({
    tagName: 'element-vir-test-async-child',
    stateInit: {
        asyncValue: createDeferredPromiseWrapper<number>(),
        trigger: '',
        loadStuff: createCachedPromise<string>(),
    },
    renderCallback({state, updateState}) {
        return html`
            ${renderPromise(state.asyncValue.promise, ({error, promise, resolved}) => {
                return html`
                    ${resolved ? `Loaded ${resolved}` : 'Loading...'}

                    <input
                        ${listen('input', (event) => {
                            const inputElement = event.currentTarget as HTMLInputElement;

                            updateState({
                                trigger: inputElement.value,
                            });
                        })}
                    />
                    <button
                        ${listen('click', async () => {
                            const newDeferred = createDeferredPromiseWrapper<number>();
                            updateState({
                                asyncValue: newDeferred,
                            });

                            await wait(1000);
                            newDeferred.resolve(randomInteger({max: 100, min: 0}));
                        })}
                    >
                        Click to resolve
                    </button>
                `;
            })}
        `;
    },
});
