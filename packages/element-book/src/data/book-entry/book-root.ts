import {Overwrite} from '@augment-vir/common';
import {BaseBookEntry} from './base-book-entry';
import {BookEntryTypeEnum} from './book-entry-type';

export type BookRoot = Overwrite<
    BaseBookEntry,
    {
        entryType: BookEntryTypeEnum.Root;
        parent: undefined;
    }
>;
