import {assert} from '@open-wc/testing';
import {BookEntryTypeEnum} from '../data/book-entry/book-entry-type';
import {isBookTreeNode} from '../data/book-tree/book-tree';
import {treeExample} from './example-tree.test-helper';

describe('treeExample', () => {
    it('matches correct flattened nodes', () => {
        const expectedTypes = [
            BookEntryTypeEnum.Root,
            BookEntryTypeEnum.Page,
            BookEntryTypeEnum.ElementExample,
            BookEntryTypeEnum.Page,
            BookEntryTypeEnum.Page,
            BookEntryTypeEnum.Page,
        ] as const;

        assert.lengthOf(treeExample.flattenedNodes, expectedTypes.length);

        expectedTypes.forEach((expectedType, index) => {
            assert.isTrue(isBookTreeNode(treeExample.flattenedNodes[index], expectedType));
        });
    });
});
