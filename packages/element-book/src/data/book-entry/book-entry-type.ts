export enum BookEntryTypeEnum {
    /** A single element example. */
    ElementExample = 'element-example',
    /** An individual book page with element examples and/or sub-pages. */
    Page = 'page',
    /** Tree root. Not for external use. */
    Root = 'root',
}

export type AnyBookEntryType =
    | BookEntryTypeEnum.ElementExample
    | BookEntryTypeEnum.Page
    | BookEntryTypeEnum.Root;
