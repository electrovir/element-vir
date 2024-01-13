import {typedHasProperty} from '@augment-vir/common';
import {BookEntryTypeEnum} from './book-entry-type';
import {BookElementExample, BookPage} from './book-page/book-page';
import {BookRoot} from './book-root';

export type BookEntry = BookPage | BookRoot | BookElementExample;

export function isBookEntry<const SpecificType extends BookEntryTypeEnum>(
    entry: unknown,
    entryType: SpecificType,
): entry is Extract<BookEntry, {entryType: SpecificType}> {
    return typedHasProperty(entry, 'entryType') && entry.entryType === entryType;
}
