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
import {MyCustomEvent} from '../customEvent';
import {allTestArrayElements} from './array-of-elements-test/elements-array.element';
import {TestChildElement} from './child.element';

requireAllCustomElementsToBeDeclarativeElements();

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
            ${TestChildElement.cssVarNames.derp}: transparent;
        }

        .weird-colors {
            ${TestChildElement.cssVarNames.derp}: yellow;
        }
    `,
    stateInit: {
        funnyNumber: Math.random(),
        eventsReceived: 0,
        lastReceivedMessage: '',
        width: -1,
        showChild: true,
    },
    renderCallback: ({props, setProps}) => {
        // log here to make sure it's not rendering too often
        console.info('app rendering');
        return html`
            <main ${onResize((entry) => {
                setProps({width: entry.contentRect.width});
            })}>
                Welcome to the test app.
                <button
                    ${listen('click', () => setProps({funnyNumber: Math.random()}))}
                >
                    assign NEW number to child
                </button>
                <!-- Verify that the child component does not rerender when we pass it the same value. -->
                <!-- Check the console logs to verify.-->
                <button
                    ${listen('click', () => setProps({funnyNumber: 4}))}
                >
                    assign SAME number to child
                </button>
                <button
                    ${listen('click', () => setProps({showChild: !props.showChild}))}
                >
                    toggle second child
                </button>
                
                <hr>
                <${TestChildElement}
                    ${assign(TestChildElement, {
                        button: undefined,
                        inputNumber: props.funnyNumber,
                        resizeListener: () => {},
                        width: props.width,
                    })}
                    ${listen(TestChildElement.events.speak, (event) => {
                        setProps({
                            eventsReceived: props.eventsReceived + 1,
                            lastReceivedMessage: event.detail,
                        });
                    })}
                    ${listen(MyCustomEvent, (event) => {
                        console.log(event.detail);
                    })}
                    ${listen('click', (event) => {
                        console.log(
                            'event should be a mouse event:',
                            // should be true
                            event instanceof MouseEvent,
                            event,
                        );
                    })}
                ></${TestChildElement}>
                <hr>
                ${
                    props.showChild
                        ? html`
                              <span>Child just with clean up assign (no event listeners)</span>
                              <br />
                              <!-- prettier-ignore -->
                              <!-- intentionally not interpolated to make sure we're logging errors for it -->
                              <element-vir-test-child-element
                                  class="darker weird-colors"
                                  ${assignWithCleanup(
                                      TestChildElement,
                                      {
                                          inputNumber: props.funnyNumber,
                                      } as any,
                                      (lastValue) => {
                                          console.info(
                                              'assign with cleanup last value in app',
                                              lastValue,
                                          );
                                      },
                                  )}
                              ></element-vir-test-child-element>
                              <hr />
                          `
                        : ''
                }
                <span>Speak events received: ${props.eventsReceived}</span>
                <span>Last speak message received: ${props.lastReceivedMessage}</span>
                <span>app width: ${props.width}</span>
                
                <${TestChildElement}
                    class=${TestChildElement.hostClasses.testHostClass}
                    ${assign(TestChildElement, {
                        button: undefined,
                        inputNumber: 15,
                        resizeListener: () => {},
                        width: 0,
                    })}
                ></${TestChildElement}>
                ${allTestArrayElements.map((element) => {
                    return html`<${element} data-tag-name=${element.tagName}></${element}>`;
                })}
            </main>
        `;
    },
});
