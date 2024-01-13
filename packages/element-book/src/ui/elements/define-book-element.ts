import {wrapDefineElement} from 'element-vir';

export type BookTagName = `book-${string}`;

export const {defineElement: defineBookElement, defineElementNoInputs: defineBookElementNoInputs} =
    wrapDefineElement<BookTagName>();
