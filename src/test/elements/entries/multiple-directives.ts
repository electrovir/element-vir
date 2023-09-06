import {defineBookPage} from 'element-book';
import {listen} from '../../../declarative-element/directives/listen.directive';
import {testId} from '../../../declarative-element/directives/test-id.directive';
import {html} from '../../../template-transforms/vir-html/vir-html';

export const multipleDirectivesBookPage = defineBookPage({
    title: 'multiple directives',
    parent: undefined,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'with array (does not work)',
            stateInitStatic: {value: 0},
            renderCallback({state, updateState}) {
                return html`
                    <div
                        ${[
                            listen('click', () => {
                                updateState({value: state.value + 1});
                            }),
                            testId('derp'),
                        ]}
                    >
                        <button>click me</button>
                        <br />
                        value: ${state.value}
                    </div>
                `;
            },
        });
        defineExample({
            title: 'with extra template',
            stateInitStatic: {value: 0},
            renderCallback({state, updateState}) {
                const directives = html`
                    ${listen('click', () => {
                        updateState({value: state.value + 1});
                    })}
                    ${testId('derp')}
                `;
                return html`
                    <div ${directives}>
                        <button>click me</button>
                        <br />
                        value: ${state.value}
                    </div>
                `;
            },
        });
    },
});
