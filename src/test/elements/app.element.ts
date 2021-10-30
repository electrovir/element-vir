import {
    assign,
    assignWithCleanup,
    css,
    defineFunctionalElement,
    html,
    listen,
    onResize,
    requireAllCustomElementsToBeFunctionalElement,
} from '../..';
import {ChildElement} from './child.element';

requireAllCustomElementsToBeFunctionalElement();

export const AppElement = defineFunctionalElement({
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

        ${ChildElement} {
            background-color: #eee;
            padding: 8px;
        }

        ${ChildElement}.darker {
            background-color: #ddd;
        }
    `,
    props: {
        funnyNumber: Math.random(),
        eventsReceived: 0,
        lastReceivedMessage: '',
        width: -1,
        showChild: true,
    },
    renderCallback: ({props}) => {
        // log here to make sure it's not rendering too often
        console.info('app rendering');
        return html`
            <div ${onResize((entry) => {
                props.width = entry.contentRect.width;
            })}>
                Welcome to the test app.
                <button @click=${() =>
                    (props.funnyNumber = Math.random())}>assign NEW number to child</button>
                <!-- Verify that the child component does not rerender when we pass it the same value. -->
                <!-- Check the console logs to verify.-->
                <button @click=${() => (props.funnyNumber = 4)}>assign SAME number to child</button>
                <button @click=${() =>
                    (props.showChild = !props.showChild)}>toggle second child</button>
                
                <hr>
                <${ChildElement}
                    ${assign(ChildElement.props.inputNumber, props.funnyNumber)}
                    ${assign(ChildElement.props.width, props.width)}
                    ${listen(ChildElement.events.speak, (event) => {
                        props.eventsReceived++;
                        props.lastReceivedMessage = event.detail;
                    })}
                ></${ChildElement}>
                <hr>
                ${
                    props.showChild
                        ? html`
                              <span>Child just with clean up assign</span>
                              <br />
                              <!-- prettier-ignore -->
                              <element-vir-test-child-element
                                  class="darker"
                                  ${assignWithCleanup(
                                  ChildElement.props.inputNumber,
                                  props.funnyNumber,
                                  (lastValue) => {
                                      console.info(
                                          'assign with cleanup last value in app',
                                          lastValue,
                                      );
                                  },
                              )}
                              >
                              </
                                element-vir-test-child-element
                              >
                              <hr />
                          `
                        : ''
                }
                <span>Events received: ${props.eventsReceived}</span>
                <span>Last message received: ${props.lastReceivedMessage}</span>
                <span>app width: ${props.width}</span>
            </div>
        `;
    },
});
