import {css, defineElement, html, listen, onDomCreated, onIntersect, testId} from 'element-vir';
import {defineBookTest} from '../test-util.js';

const OnIntersectElement = defineElement()({
    tagName: 'on-intersect-element',
    styles: css`
        .scroll-container {
            height: 100px;
            overflow-y: auto;
            border: 1px solid #ccc;
        }
        .spacer {
            height: 600px;
        }
        .target {
            background: green;
            padding: 8px;
        }
    `,
    state() {
        return {
            intersected: false,
            scrollContainer: undefined as undefined | HTMLElement,
        };
    },
    testIds: [
        'report',
        'target',
        'scroll',
    ],
    render({state, updateState, testIds}) {
        return html`
            <span ${testId(testIds.report)}>${state.intersected ? 'visible' : 'hidden'}</span>
            <button
                ${testId(testIds.scroll)}
                ${listen('click', () => {
                    if (state.scrollContainer) {
                        state.scrollContainer.scrollTo({
                            top: state.scrollContainer.scrollHeight,
                        });
                    }
                })}
            >
                scroll
            </button>
            <div
                class="scroll-container"
                ${onDomCreated((element) => {
                    if (element instanceof HTMLElement) {
                        updateState({
                            scrollContainer: element,
                        });
                    }
                })}
            >
                <div class="spacer"></div>
                <div
                    ${testId(testIds.target)}
                    class="target"
                    ${onIntersect(
                        {
                            threshold: 0.5,
                        },
                        ({entry}) => {
                            updateState({
                                intersected: entry.isIntersecting,
                            });
                        },
                    )}
                >
                    target
                </div>
            </div>
        `;
    },
});

export const onIntersectTest = await defineBookTest(
    'on intersect',
    {
        render() {
            return html`
                <${OnIntersectElement}></${OnIntersectElement}>
            `;
        },
    },
    {
        async 'onIntersect transitions to visible on scroll'({e2eUtil, page}) {
            const report = page.getByTestId(OnIntersectElement.testIds.report);
            await e2eUtil.expect(report).toHaveText('hidden');

            await page.getByTestId(OnIntersectElement.testIds.scroll).click();
            await e2eUtil.expect(report).toHaveText('visible');
        },
    },
);
