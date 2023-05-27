import {css, defineElementNoInputs, html} from '..';

export const MyWithHostClassDefinition = defineElementNoInputs({
    tagName: 'my-with-host-class-definition',
    stateInitStatic: {
        myProp: 'hello there',
    },
    hostClasses: {
        /**
         * Setting the value to false means this host class will never be automatically applied. It
         * will simply be a static member on the element for manual application in consumers.
         */
        'my-with-host-class-definition-a': false,
        /**
         * This host class will be automatically applied if the given callback is evaluated to true
         * after a call to renderCallback.
         */
        'my-with-host-class-definition-automatic': ({state}) => {
            return state.myProp === 'foo';
        },
    },
    /**
     * Apply styles to the host classes by using a callback for "styles". The callback's argument
     * contains the host classes defined above in the "hostClasses" property.
     */
    styles: ({hostClasses}) => css`
        ${hostClasses['my-with-host-class-definition-automatic'].selector} {
            color: blue;
        }

        ${hostClasses['my-with-host-class-definition-a'].selector} {
            color: red;
        }
    `,
    renderCallback({state}) {
        return html`
            ${state.myProp}
        `;
    },
});
