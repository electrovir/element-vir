import {multipleSlotsPage} from './entries/multiple-slots.book.js';
import {observablePropInputTestPage} from './entries/observable-props.book.js';
import {oldTestAppPage} from './entries/old-test-app/vir-old-test-app.element.js';
import {testCarouselPage} from './entries/test-carousel.element.book.js';
import {undefinedInterpolationBookPage} from './entries/undefined-interpolation.book.js';
import {allTestPages} from './test-pages.js';

export const allBookPages = [
    ...allTestPages,

    multipleSlotsPage,
    testCarouselPage,
    observablePropInputTestPage,
    oldTestAppPage,
    undefinedInterpolationBookPage,
];
