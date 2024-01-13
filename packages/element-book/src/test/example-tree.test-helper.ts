import {BookEntryTypeEnum} from '../data/book-entry/book-entry-type';
import {defineBookPage} from '../data/book-entry/book-page/define-book-page';
import {createBookTreeFromEntries} from '../data/book-tree/book-tree';
import {BookTreeNode} from '../data/book-tree/book-tree-node';

const page1 = defineBookPage({
    parent: undefined,
    title: 'page 1',
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'example 1',
            renderCallback() {
                return 'hi';
            },
        });
    },
});

const exampleEntries = [
    page1,
    defineBookPage({
        parent: undefined,
        title: 'page 2',
    }),
    defineBookPage({
        parent: page1,
        title: 'page 1 child',
    }),
    defineBookPage({
        parent: page1,
        title: 'aaaaaaaa',
        descriptionParagraphs: ['this page should be sorted above page 1 child'],
    }),
] as const;

const exampleTreeInputs = {
    entries: exampleEntries,
    debug: false,
} as const;

const tree = createBookTreeFromEntries(exampleTreeInputs);

export const treeExample = {
    tree: tree.tree,
    flattenedNodes: tree.flattenedNodes as [
        BookTreeNode<BookEntryTypeEnum.Root>,
        BookTreeNode<BookEntryTypeEnum.Page>,
        BookTreeNode<BookEntryTypeEnum.ElementExample>,
        BookTreeNode<BookEntryTypeEnum.Page>,
        BookTreeNode<BookEntryTypeEnum.Page>,
        BookTreeNode<BookEntryTypeEnum.Page>,
    ],
    treeInputs: exampleTreeInputs,
    entries: exampleEntries,
} as const;
