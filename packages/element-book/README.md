# element-book

An [`element-vir`](https://npmjs.com/package/element-vir) drop-in element for building, testing, and demonstrating a collection of elements (or, in other words, a design system).

# Installation

```bash
npm i element-book
```

# Terminology

-   **Page**: a group of pages and / or element examples. Pages can be infinitely nested.
-   **Element Example**: an individual element example with independent state, styles, title, etc.

# Usage

_todo_

# Why not Storybook?

Because Storybook is un-composable, impossible to debug, and full of behind-the-scenes \*magic\* that you can't backtrack without already understanding the inner workings of Storybook itself. With `element-book`, it's all just imports that you can directly follow with the TypeScript compiler.
