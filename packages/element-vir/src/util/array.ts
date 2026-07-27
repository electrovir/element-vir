export type ArrayInsertion<T> = {index: number; values: ReadonlyArray<T>};

export function insertAndRemoveValues<Entry>(
    originalArray: ReadonlyArray<Entry>,
    valuesToInsert: ReadonlyArray<ArrayInsertion<Entry>>,
    indexesToRemove: ReadonlyArray<number>,
): Entry[] {
    if (!valuesToInsert.length && !indexesToRemove.length) {
        // there's nothing to do
        return [...originalArray];
    }

    /** Later insertions land before earlier ones at the same index. */
    const orderedInsertions = valuesToInsert.toReversed();

    if (!originalArray.length) {
        /** An empty array has no index to insert at other than `0`. */
        return orderedInsertions
            .filter((insertion) => insertion.index === 0)
            .flatMap((insertion) => insertion.values);
    }

    /**
     * Insertions are grouped by index up front so that the output is built in a single pass instead
     * of an intermediate array per entry: this runs on every render of every template.
     */
    const insertionsByIndex = new Map<number, Entry[]>();
    orderedInsertions.forEach((insertion) => {
        if (insertion.index >= 0 && insertion.index < originalArray.length) {
            const alreadyInserted = insertionsByIndex.get(insertion.index);
            if (alreadyInserted) {
                alreadyInserted.push(...insertion.values);
            } else {
                insertionsByIndex.set(insertion.index, [...insertion.values]);
            }
        }
    });

    /** The removal indexes are checked once per entry, so O(1) lookup is worth the `Set`. */
    const removalIndexes = new Set(indexesToRemove);

    const finalArray: Entry[] = [];
    originalArray.forEach((entry, index) => {
        const insertions = insertionsByIndex.get(index);
        if (insertions) {
            finalArray.push(...insertions);
        }
        if (!removalIndexes.has(index)) {
            finalArray.push(entry);
        }
    });

    return finalArray;
}
