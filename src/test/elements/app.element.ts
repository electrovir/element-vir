import {
    assign,
    assignWithCleanup,
    css,
    defineElementNoInputs,
    html,
    listen,
    onResize,
    requireAllCustomElementsToBeDeclarativeElements,
} from '../..';
import {createObservableProperty} from '../../declarative-element/properties/observable-property/create-observable-property';
import {MyCustomEvent} from '../customEvent';
import {allTestArrayElements} from './array-of-elements-test/elements-array.element';
import {AsyncChild} from './async-child.element';
import {TestChildElement} from './child.element';

requireAllCustomElementsToBeDeclarativeElements();

const myObservable = createObservableProperty(5);

console.log({myObservable});

export const AppElement = defineElementNoInputs({
    tagName: 'element-vir-test-app',
    styles: css`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            padding: 32px;
            position: relative;
            font-family: sans-serif;
            color: black;
        }
        :host > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        hr {
            align-self: stretch;
            margin: 16px 0;
            flex-shrink: 0;
        }

        ${TestChildElement} {
            background-color: #eee;
            padding: 8px;
        }

        ${TestChildElement}.darker {
            background-color: #ddd;
        }

        .normal-colors {
            ${TestChildElement.cssVars['element-vir-test-child-derp'].name}: transparent;
        }

        .weird-colors {
            ${TestChildElement.cssVars['element-vir-test-child-derp'].name}: yellow;
        }
    `,
    stateInitStatic: {
        funnyNumber: Math.random(),
        eventsReceived: 0,
        lastReceivedMessage: '',
        width: -1,
        showChild: true,
        derp: {hi: 'yo'} as Record<string, string>,
    },
    renderCallback({state, updateState}) {
        // log here to make sure it's not rendering too often
        console.info(`app rendering ${state.width}`);
        return html`
            <main
                ${onResize((entry) => {
                    updateState({width: entry.contentRect.width});
                })}
            >
                Welcome to the test app.
                <button ${listen('click', () => updateState({funnyNumber: Math.random()}))}>
                    assign NEW number to child
                </button>
                <!-- Verify that the child component does not rerender when we pass it the same value. -->
                <!-- Check the console logs to verify.-->
                <button ${listen('click', () => updateState({funnyNumber: 4}))}>
                    assign SAME number to child
                </button>
                <button ${listen('click', () => updateState({showChild: !state.showChild}))}>
                    toggle second child
                </button>

                <hr />
                <${TestChildElement}
                    ${assign(TestChildElement, {
                        displayNumber: state.funnyNumber,
                        width: state.width,
                        myProp: myObservable,
                    })}
                    ${listen(TestChildElement.events.speak, (event) => {
                        updateState({
                            eventsReceived: state.eventsReceived + 1,
                            lastReceivedMessage: event.detail,
                        });
                    })}
                    ${listen(MyCustomEvent, (event) => {
                        console.debug(event.detail);
                    })}
                    ${listen('click', (event) => {
                        console.debug(
                            'event should be a mouse event:',
                            // should be true
                            event instanceof MouseEvent,
                            event,
                        );
                    })}
                ></${TestChildElement}>
                <hr />
                ${state.showChild
                    ? html`
                          <span>Child just with clean up assign (no event listeners)</span>
                          <br />
                          <!-- prettier-ignore -->
                          <!-- intentionally not interpolated to make sure we're logging errors for it -->
                          <element-vir-test-child
                              class="darker weird-colors"
                              ${assignWithCleanup(
                                  TestChildElement,
                                  {
                                      displayNumber: state.funnyNumber,
                                      width: -1,
                                  },
                                  (lastValue) => {
                                      console.info(
                                          'assign with cleanup last value in app',
                                          lastValue,
                                      );
                                  },
                              )}
                          ></element-vir-test-child>
                          <hr />
                      `
                    : ''}
                <${AsyncChild}
                    ${assign(AsyncChild, {
                        trigger: state.funnyNumber,
                    })}
                ></${AsyncChild}>
                <${AsyncChild}
                    ${assign(AsyncChild, {
                        trigger: state.funnyNumber,
                    })}
                ></${AsyncChild}>
                <hr />
                <span>Speak events received: ${state.eventsReceived}</span>
                <span>Last speak message received: ${state.lastReceivedMessage}</span>
                <span>app width: ${state.width}</span>

                <${TestChildElement}
                    class=${TestChildElement.hostClasses['element-vir-test-child-test']}
                    ${assign(TestChildElement, {
                        displayNumber: 15,
                        width: -1,
                    })}
                ></${TestChildElement}>
                ${allTestArrayElements.map((element) => {
                    return html`
                        <${element} data-tag-name=${element.tagName}></${element}>
                    `;
                })}
            </main>
        `;
    },
});
