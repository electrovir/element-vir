import {defineElementNoInputs, html} from '../index';
import {MyWithHostClassDefinition} from './my-with-host-class-definition.element';

export const MyWithHostClassUsage = defineElementNoInputs({
    tagName: 'my-with-host-class-usage',
    renderCallback() {
        return html`
            <${MyWithHostClassDefinition}
                class=${MyWithHostClassDefinition.hostClasses['my-with-host-class-definition-a']}
            ></${MyWithHostClassDefinition}>
        `;
    },
});
