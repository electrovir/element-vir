import {itCases} from '@augment-vir/browser-testing';
import {ensureType} from '@augment-vir/common';
import {BookEntryTypeEnum} from '../../../data/book-entry/book-entry-type';
import {BookTreeNode} from '../../../data/book-tree/book-tree-node';
import {treeExample} from '../../../test/example-tree.test-helper';
import {shouldShowTreeNodeInNav} from './book-nav-filter';

describe(shouldShowTreeNodeInNav.name, () => {
    itCases(shouldShowTreeNodeInNav, [
        {
            it: 'hides root node',
            inputs: [
                ensureType<BookTreeNode<BookEntryTypeEnum.Root>>(treeExample.tree),
                undefined,
            ],
            expect: false,
        },
        {
            it: 'shows page node',
            inputs: [
                ensureType<BookTreeNode<BookEntryTypeEnum.Page>>(treeExample.flattenedNodes[1]),
                undefined,
            ],
            expect: true,
        },
        {
            it: 'hides example when parent is not selected',
            inputs: [
                ensureType<BookTreeNode<BookEntryTypeEnum.ElementExample>>(
                    treeExample.flattenedNodes[2],
                ),
                undefined,
            ],
            expect: false,
        },
        {
            it: 'shows example when parent is selected',
            inputs: [
                ensureType<BookTreeNode<BookEntryTypeEnum.ElementExample>>(
                    treeExample.flattenedNodes[2],
                ),
                ensureType<BookTreeNode<BookEntryTypeEnum.Page>>(treeExample.flattenedNodes[1])
                    .fullUrlBreadcrumbs,
            ],
            expect: true,
        },
        {
            it: 'shows example when sibling is selected',
            inputs: [
                ensureType<BookTreeNode<BookEntryTypeEnum.ElementExample>>(
                    treeExample.flattenedNodes[2],
                ),
                ensureType<BookTreeNode<BookEntryTypeEnum.Page>>(
                    treeExample.flattenedNodes[1],
                ).fullUrlBreadcrumbs.concat('another thing'),
            ],
            expect: true,
        },
    ]);
});
