import {defineElementNoInputs, html} from '..';
import {MyWithHostClassDefinitionElement} from './my-with-host-class-definition.element';

export const MyWithHostClassUsageElement = defineElementNoInputs({
    tagName: 'my-with-host-class-usage',
    renderCallback: () => html`
        <${MyWithHostClassDefinitionElement}
            class=${MyWithHostClassDefinitionElement.hostClasses['my-with-host-class-definition-a']}
        ></${MyWithHostClassDefinitionElement}>
    `,
});
