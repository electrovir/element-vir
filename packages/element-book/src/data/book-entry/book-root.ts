import {type Overwrite} from '@augment-vir/common';
import {type BaseBookEntry} from './base-book-entry.js';
import {type BookEntryType} from './book-entry-type.js';

/**
 * The root of a book tree.
 *
 * @category Internal
 */
export type BookRoot = Overwrite<
    BaseBookEntry,
    {
        entryType: BookEntryType.Root;
        parent: undefined;
    }
>;
