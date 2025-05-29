import {wrapDefineElement} from 'element-vir';

export type BookTagName = `book-${string}`;

export const {defineElement: defineBookElement} = wrapDefineElement<BookTagName>();
