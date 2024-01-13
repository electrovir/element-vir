import {isEnumValue} from '@augment-vir/common';
import {createSpaRouter, SpaRouter} from 'spa-router-vir';
import {BookMainRoute, BookRouter, defaultBookFullRoute, ValidBookPaths} from './book-routing';

export function createBookRouter(baseRoute: string | undefined): BookRouter {
    type SubTypes = BookRouter extends SpaRouter<infer Paths, infer Search, infer Hash>
        ? {paths: Paths; search: Search; hash: Hash}
        : never;

    return createSpaRouter<SubTypes['paths'], SubTypes['search'], SubTypes['hash']>({
        routeBase: baseRoute,
        routeSanitizer(rawRoute) {
            const sanitizedPaths = sanitizePaths(rawRoute.paths);

            return {
                paths: sanitizedPaths,
                hash: undefined,
                search: undefined,
            };
        },
    });
}

function sanitizePaths(paths: ReadonlyArray<string>): Readonly<ValidBookPaths> {
    const firstPath = paths[0];

    if (!isEnumValue(firstPath, BookMainRoute)) {
        return defaultBookFullRoute.paths;
    } else if (firstPath === BookMainRoute.Book) {
        return [
            BookMainRoute.Book,
            ...paths.slice(1),
        ];
    } else if (firstPath === BookMainRoute.Search) {
        if (!paths[1]) {
            return [
                BookMainRoute.Book,
                ...paths.slice(1),
            ];
        }

        return [
            firstPath,
            paths[1],
        ];
    } else {
        throw new Error(`Route path not handled for sanitization: ${paths.join('/')}`);
    }
}
