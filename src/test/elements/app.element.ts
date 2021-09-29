import {css} from 'lit';
import {createFunctionalElement} from '../../functional-element/create-functional-element';
import {listen} from '../../functional-element/functional-event-listener';
import {html} from '../../vir-html/vir-html';
import {ChildElement} from './child.element';

export const AppElement = createFunctionalElement({
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
    propertyInit: {
        funnyNumber: Math.random(),
        eventsReceived: 0,
        lastReceivedMessage: '',
    },
    renderCallback: ({props}) => {
        return html`
            Welcome to the test app.
            <button @click=${() => (props.funnyNumber = Math.random())}>new number</button>
            
            <hr>
            <${ChildElement} 
                .${ChildElement.inputs.inputNumber}=${props.funnyNumber}
                ${listen(ChildElement.events.speak, (event) => {
                    props.eventsReceived++;
                    props.lastReceivedMessage = event.detail;
                })}
                ></${ChildElement}>
                <hr>
            <span>Events received: ${props.eventsReceived}</span>
            <span>Last message received: ${props.lastReceivedMessage}</span>
        `;
    },
});
