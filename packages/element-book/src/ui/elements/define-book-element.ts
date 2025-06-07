import {wrapDefineElement} from 'element-vir';

export type BookTagName = `book-${string}`;

export const defineBookElement = wrapDefineElement<BookTagName>();
