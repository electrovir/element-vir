export type NonEmptyString<T> = T extends '' ? never : T;
