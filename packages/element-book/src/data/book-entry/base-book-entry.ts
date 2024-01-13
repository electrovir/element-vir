import {BookEntryTypeEnum} from './book-entry-type';

export type BaseBookEntry = {
    /**
     * Title for the entry. This is used to create breadcrumbs and URL paths. Each title must be
     * unique within a given entry's parent.
     */
    title: string;
    entryType: BookEntryTypeEnum;
    /**
     * The parent page. A value of undefined here indicates that the entry should be at the top
     * level of the element book.
     */
    parent: unknown;
    /**
     * A description that will be displayed below the entry title. Each item in the array will be a
     * separate paragraph.
     */
    descriptionParagraphs: ReadonlyArray<string>;
    errors: Error[];
};
