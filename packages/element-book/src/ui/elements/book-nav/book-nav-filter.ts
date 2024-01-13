import {areJsonEqual} from '@augment-vir/common';
import {BookEntryTypeEnum} from '../../../data/book-entry/book-entry-type';
import {BookTreeNode} from '../../../data/book-tree/book-tree-node';

export function shouldShowTreeNodeInNav(
    currentNode: Readonly<BookTreeNode>,
    selectedPath: undefined | ReadonlyArray<string>,
): boolean {
    if (currentNode.entry.entryType === BookEntryTypeEnum.Root) {
        return false;
    }

    if (currentNode.entry.entryType === BookEntryTypeEnum.Page) {
        return true;
    }

    const isParentSelected = areJsonEqual(
        selectedPath,
        currentNode.fullUrlBreadcrumbs.slice(0, -1),
    );

    if (isParentSelected) {
        return true;
    }

    const isSiblingSelected = areJsonEqual(
        selectedPath?.slice(0, -1),
        currentNode.fullUrlBreadcrumbs.slice(0, -1),
    );

    if (isSiblingSelected) {
        return true;
    }

    return false;
}
