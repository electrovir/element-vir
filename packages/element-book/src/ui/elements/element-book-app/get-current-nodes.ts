import {doBreadcrumbsStartWith} from '../../../data/book-entry/url-breadcrumbs';
import {BookTreeNode} from '../../../data/book-tree/book-tree-node';
import {BookFullRoute, ValidBookPaths, defaultBookFullRoute} from '../../../routing/book-routing';

export function getCurrentNodes(
    flattenedNodes: ReadonlyArray<Readonly<BookTreeNode>>,
    currentPaths: Readonly<ValidBookPaths>,
    updateRoutes: (newRoute: Partial<BookFullRoute>) => void,
): BookTreeNode[] {
    const filteredNodes = filterNodes(flattenedNodes, currentPaths);

    if (filteredNodes.length) {
        return filteredNodes;
    } else {
        updateRoutes(defaultBookFullRoute);
    }

    const filteredNodesFromDefaultPath = filterNodes(flattenedNodes, defaultBookFullRoute.paths);

    if (!filteredNodesFromDefaultPath) {
        throw new Error(`Tried to self-correct for invalid path ${currentPaths.join('/')}
                        but failed to do so.`);
    }

    return filteredNodesFromDefaultPath;
}

function filterNodes(
    flattenedNodes: ReadonlyArray<Readonly<BookTreeNode>>,
    paths: ReadonlyArray<string>,
): BookTreeNode[] {
    return flattenedNodes.filter((node) =>
        doBreadcrumbsStartWith({
            searchFor: paths.slice(1),
            searchIn: node.fullUrlBreadcrumbs,
        }),
    );
}
