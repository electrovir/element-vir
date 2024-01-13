import {defineBookPage} from 'element-book';
import {html} from 'element-vir';
import {TestCarousel, TestCarouselWrapper} from './test-carousel.element';

export const testCarouselPage = defineBookPage({
    title: TestCarousel.tagName,
    parent: undefined,
    descriptionParagraphs: [
        'At one point this had major scroll lag issues. Try scrolling horizontally to test.',
    ],
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'test',
            renderCallback() {
                return html`
                    <${TestCarouselWrapper}></${TestCarouselWrapper}>
                `;
            },
        });
    },
});
