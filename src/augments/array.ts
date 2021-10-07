export function filterOutArrayIndexes<T>(array: Readonly<T[]>, indexes: Readonly<number[]>): T[] {
    return array.filter((_, index) => !indexes.includes(index));
}
