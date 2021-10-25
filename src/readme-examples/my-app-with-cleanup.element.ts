import {assign, defineFunctionalElement, html} from '..';
import {assignWithCleanup} from '../functional-element/directives/assign-with-clean-up.directive';
import {MySimpleWithPropsElement} from './my-simple-with-props.element';

export const MyAppWithPropsElement = defineFunctionalElement({
    tagName: 'my-app-with-cleanup',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MySimpleWithPropsElement}
            ${assignWithCleanup(
                MySimpleWithPropsElement.props.currentUsername,
                'user',
                (previousValue) => {
                    // here would be the cleanup code.
                    // In this specific example the value is just a string, so no cleanup is needed.
                    previousValue.trim();
                },
            )}
            ${assign(MySimpleWithPropsElement.props.currentEmail, 'user@example.com')}
        >
        </${MySimpleWithPropsElement}>
    `,
});
