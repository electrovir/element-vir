import {defineElement} from 'element-vir';
import {html} from '../index.js';
import {MyWithHostClassDefinition} from './my-with-host-class-definition.example.js';

export const MyWithHostClassUsage = defineElement()({
    tagName: 'my-with-host-class-usage',
    render() {
        return html`
            <${MyWithHostClassDefinition}
                class=${MyWithHostClassDefinition.hostClasses['my-with-host-class-definition-a']}
            ></${MyWithHostClassDefinition}>
        `;
    },
});
