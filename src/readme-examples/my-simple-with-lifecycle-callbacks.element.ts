import {defineFunctionalElement, html} from '..';

export const MySimpleWithLifecycleCallbacksElement = defineFunctionalElement({
    tagName: 'my-simple-element-with-lifecycle-callbacks',
    props: {
        windowWidth: window.innerWidth,
        resizeListener: undefined as undefined | (() => void),
    },
    connectedCallback: ({props}) => {
        props.resizeListener = () => {
            props.windowWidth = window.innerWidth;
        };
        window.addEventListener('resize', props.resizeListener);
    },
    disconnectedCallback({props}) {
        if (props.resizeListener) {
            window.removeEventListener('resize', props.resizeListener);
        }
        props.resizeListener = undefined;
    },
    renderCallback: ({props}) => html`
        <span>This window is ${props.windowWidth} wide!</span>
    `,
});
