import {css} from 'lit';
import {defineFunctionalElement} from '../../functional-element/define-functional-element';
import {listen} from '../../functional-element/directives/event-listen.directive';
import {assign} from '../../functional-element/directives/property-assign.directive';
import {html} from '../../vir-html/vir-html';
import {ChildElement} from './child.element';

export const AppElement = defineFunctionalElement({
    tagName: 'element-vir-test-app',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        hr {
            align-self: stretch;
            margin: 16px 0;
            flex-shrink: 0;
        }
    `,
    props: {
        funnyNumber: Math.random(),
        eventsReceived: 0,
        lastReceivedMessage: '',
        windowSize: -1,
    },
    firstUpdated: ({element}) => {
        console.log(ChildElement.tagName);
        /**
         * Calls to querySelector will not work in the connection callbacks because the element's
         * internal DOM won't be populated yet.
         */
        const child = element.renderRoot.querySelector(ChildElement.tagName);
        if (!child) {
            throw new Error(`child not found`);
        }
        console.log(child);
    },
    renderCallback: ({props}) => {
        // log here to make sure it's not rendering too often
        console.info('app rendering');
        return html`
            Welcome to the test app.
            <button @click=${() =>
                (props.funnyNumber = Math.random())}>assign NEW number to child</button>
            <!-- Verify that the child component does not rerender when we pass it the same value. -->
            <!-- Check the console logs to verify.-->
            <button @click=${() => (props.funnyNumber = 4)}>assign SAME number to child</button>
            
            <hr>
            <${ChildElement}
                ${assign(ChildElement.props.inputNumber, props.funnyNumber)}
                ${listen(ChildElement.events.speak, (event) => {
                    props.eventsReceived++;
                    props.lastReceivedMessage = event.detail;
                })}
                ${listen(ChildElement.events.eat, (event) => {
                    props.windowSize = event.detail;
                })}
            ></${ChildElement}>
            <hr>
            <span>Don't listen or interact with this one</span><br>
            <${ChildElement}
                ${assign(ChildElement.props.inputNumber, 555)}
            ></${ChildElement}>
                <hr>
            <span>Events received: ${props.eventsReceived}</span>
            <span>Last message received: ${props.lastReceivedMessage}</span>
            <span>Last window size received: ${props.windowSize}</span>
        `;
    },
});
