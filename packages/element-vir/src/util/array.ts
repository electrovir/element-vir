export type ArrayInsertion<T> = {index: number; values: ReadonlyArray<T>};

export function insertAndRemoveValues<Entry>(
    originalArray: ReadonlyArray<Entry>,
    valuesToInsert: ReadonlyArray<ArrayInsertion<Entry>>,
    indexesToRemove: ReadonlyArray<number>,
): Entry[] {
    const noOperations: boolean = !valuesToInsert.length && !indexesToRemove.length;
    const nothingToDoBecauseEmptyArray: boolean = originalArray.length
        ? false
        : !valuesToInsert.filter((value) => !!value.index).length;

    if (noOperations || nothingToDoBecauseEmptyArray) {
        // there's nothing to do
        return [...originalArray];
    }

    const arrayValues: Entry[][] = originalArray.map((entry) => {
        return [entry];
    });

    if (!arrayValues.length) {
        arrayValues[0] = [];
    }

    indexesToRemove.forEach((index) => {
        if (index >= 0 && index < originalArray.length) {
            arrayValues[index] = [];
        }
    });

    valuesToInsert.forEach((valueWrapper) => {
        const indexEntry = arrayValues[valueWrapper.index];
        if (indexEntry) {
            // insert new values before the already existing values
            indexEntry.splice(0, 0, ...valueWrapper.values);
        }
    });

    const finalArray: Entry[] = arrayValues.flat();

    return finalArray;
}
