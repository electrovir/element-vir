import {randomString} from '@augment-vir/browser';
import {
    JsonCompatibleValue,
    createDeferredPromiseWrapper,
    extractErrorMessage,
} from '@augment-vir/common';
import {CachedPromise, createCachedPromise} from '@electrovir/cached-promise';
import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {getAssertedDeclarativeElement} from '../../augments/testing.test-helper';
import {html} from '../../template-transforms/vir-html/vir-html';
import {defineElement} from '../define-element';
import {assign} from './assign.directive';
import {renderCachedPromise, renderPromise} from './render-promise.directive';

describe(renderPromise.name, () => {
    const PromiseTestElement = defineElement<{promise: Promise<string>}>()({
        tagName: 'promise-test',
        renderCallback({inputs}) {
            return html`
                ${renderPromise(inputs.promise, ({promise, error, resolved}) => {
                    if (promise) {
                        return html`
                            still loading
                        `;
                    } else if (resolved) {
                        return html`
                            done: ${resolved}
                        `;
                    } else {
                        return html`
                            error: ${extractErrorMessage(error)}
                        `;
                    }
                })}
            `;
        },
    });

    it('updates on promise resolution', async () => {
        const deferredPromise = createDeferredPromiseWrapper<string>();
        const fixture = await renderFixture(
            html`
                <${PromiseTestElement}
                    ${assign(PromiseTestElement, {
                        promise: deferredPromise.promise,
                    })}
                ></${PromiseTestElement}>
            `,
        );
        assert.include(fixture.shadowRoot?.textContent, 'loading');

        const resolutionValue = randomString();
        deferredPromise.resolve(resolutionValue);

        await waitUntil(() => {
            return fixture.shadowRoot?.textContent?.includes('done');
        });

        assert.include(fixture.shadowRoot?.textContent, resolutionValue);
    });

    it('updates on promise rejection', async () => {
        const deferredPromise = createDeferredPromiseWrapper<string>();
        const fixture = await renderFixture(
            html`
                <${PromiseTestElement}
                    ${assign(PromiseTestElement, {
                        promise: deferredPromise.promise,
                    })}
                ></${PromiseTestElement}>
            `,
        );
        assert.include(fixture.shadowRoot?.textContent, 'loading');

        const rejectionReason = randomString();
        deferredPromise.reject(rejectionReason);

        await waitUntil(() => {
            return fixture.shadowRoot?.textContent?.includes('error:');
        });

        assert.include(fixture.shadowRoot?.textContent, rejectionReason);
    });

    it('requires the render callback to return something', () => {
        // @ts-expect-error
        renderPromise(Promise.resolve('hi'), () => {});
        // this should be good
        renderPromise(Promise.resolve('hi'), () => {
            return 'something';
        });
        // this should be good
        renderPromise(Promise.resolve('hi'), ({promise, error, resolved}) => {
            if (promise) {
                return html`
                    still loading
                `;
            } else if (resolved) {
                return html`
                    done: ${resolved}
                `;
            } else {
                return html`
                    error: ${extractErrorMessage(error)}
                `;
            }
        });
    });
});

describe(renderCachedPromise.name, () => {
    const CachedPromiseTestElement = defineElement<{
        cachedPromise: CachedPromise<string>;
        triggers: JsonCompatibleValue;
        newValue: string;
    }>()({
        tagName: 'cached-promise-test',
        stateInit: {
            renderCount: 0,
        },
        renderCallback({inputs, state, updateState}) {
            updateState({renderCount: state.renderCount + 1});

            return html`
                <span>Render count: ${state.renderCount}</span>

                ${renderCachedPromise({
                    cachedPromise: inputs.cachedPromise,
                    triggers: inputs.triggers,
                    createPromise: async () => {
                        return inputs.newValue;
                    },
                    render: ({promise, error, resolved}) => {
                        if (promise) {
                            return html`
                                still loading
                            `;
                        } else if (resolved) {
                            return html`
                                done: ${resolved}
                            `;
                        } else {
                            return html`
                                error: ${extractErrorMessage(error)}
                            `;
                        }
                    },
                })}
            `;
        },
    });

    it('updates only when triggers change', async () => {
        const cachedPromise = createCachedPromise<string>();
        const initValue = randomString();
        const fixture = await renderFixture(
            html`
                <${CachedPromiseTestElement}
                    ${assign(CachedPromiseTestElement, {
                        cachedPromise,
                        newValue: initValue,
                        triggers: {
                            hello: 'there',
                        },
                    })}
                ></${CachedPromiseTestElement}>
            `,
        );

        const element = getAssertedDeclarativeElement(CachedPromiseTestElement, fixture);

        await waitUntil(() => {
            return element.shadowRoot?.textContent?.includes(initValue);
        });
        assert.include(element.shadowRoot?.textContent, 'Render count: 1');

        const secondValue = randomString();

        element.instanceInputs.newValue = secondValue;

        await waitUntil(() => {
            return element.shadowRoot?.textContent?.includes('Render count: 2');
        });

        assert.include(
            element.shadowRoot?.textContent,
            initValue,
            'promise should not have updated',
        );

        element.instanceInputs.triggers = {
            should: 'update',
        };

        await waitUntil(() => {
            return element.shadowRoot?.textContent?.includes('Render count: 3');
        });

        assert.include(element.shadowRoot?.textContent, secondValue, 'promise should have updated');

        assert.notInclude(
            element.shadowRoot?.textContent,
            initValue,
            'promise should not have initial value anymore',
        );
    });
});
