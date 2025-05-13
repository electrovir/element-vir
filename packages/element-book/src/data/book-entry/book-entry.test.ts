import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {type BookEntryType} from './book-entry-type.js';
import {type BookEntry} from './book-entry.js';

describe('BookEntry', () => {
    it('has correct property types', () => {
        assert.tsType<BookEntry>().matches<{
            title: string;
            parent?: BookEntry | undefined;
            entryType: BookEntryType;
        }>();
    });
});
