import {defineCssVars} from 'lit-css-vars';

export const viraAnimationDurations = defineCssVars({
    /** A longer duration show a full animation. */
    'vira-extended-animation-duration': '1.2s',
    /** A longer duration to emphasize the animation. */
    'vira-pretty-animation-duration': '300ms',
    /**
     * This duration is very short to ensure snappy responses to user interactions.
     *
     * A duration of 84ms gives us 5 frames on a 60Hz screen.
     */
    'vira-interaction-animation-duration': '84ms',
});
