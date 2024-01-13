import {isTruthy} from '@augment-vir/common';
import {BookEntry} from './book-entry';
import {BookEntryTypeEnum} from './book-entry-type';
import {checkControls} from './book-page/book-page-controls';

export const bookEntryVerifiers = {
    [BookEntryTypeEnum.ElementExample]: () => {
        // currently all element example checking happens on page definition
        return [];
    },
    [BookEntryTypeEnum.Page]: (bookPage) => {
        return [
            !bookPage.title && new Error(`Cannot define an element-book page with an empty title.`),
            ...checkControls(bookPage.controls, bookPage.title),
        ].filter(isTruthy);
    },
    [BookEntryTypeEnum.Root]: () => {
        return [];
    },
} satisfies {
    [EntryType in BookEntryTypeEnum]: (
        entry: Extract<BookEntry, {entryType: EntryType}>,
    ) => Error[];
} as {
    [EntryType in BookEntryTypeEnum]: (entry: BookEntry) => Error[];
};
