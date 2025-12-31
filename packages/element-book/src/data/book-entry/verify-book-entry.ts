import {check} from '@augment-vir/assert';
import {BookEntryType} from './book-entry-type.js';
import {type BookEntry} from './book-entry.js';
import {checkControls} from './book-page/book-page-controls.js';
import {titleToUrlBreadcrumb} from './url-breadcrumbs.js';

/** Characters that are not allowed in book entry titles because they would break URL routing. */
const invalidTitleCharacters = /[/?#&=]/;

export function getPageTitleError(title: string): Error | undefined {
    const invalidMatch = title.match(invalidTitleCharacters);

    return title.trim()
        ? titleToUrlBreadcrumb(title)
            ? invalidMatch
                ? new Error(`Book page title has invalid character '${invalidMatch[0]}'.`)
                : undefined
            : new Error(`Book page title resolved to empty breadcrumb.`)
        : new Error(`Cannot define an element-book page with an empty title.`);
}

export const bookEntryVerifiers = {
    [BookEntryType.ElementExample]: () => {
        /** Currently all element example checking happens on page definition. */
        return [];
    },
    [BookEntryType.Page]: (bookPage) => {
        return [
            getPageTitleError(bookPage.title),
            ...checkControls(bookPage.controls, bookPage.title),
        ].filter(check.isTruthy);
    },
    [BookEntryType.Root]: () => {
        return [];
    },
} satisfies {
    [EntryType in BookEntryType]: (entry: Extract<BookEntry, {entryType: EntryType}>) => Error[];
} as {
    [EntryType in BookEntryType]: (entry: BookEntry) => Error[];
};
