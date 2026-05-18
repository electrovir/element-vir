# e2e

This package is for running e2e tests. Run `npm test` to run the e2e tests (no need to separately run the frontend).

Pass arguments to Playwright like this: `npm test -- --ui`. See https://playwright.dev/docs/running-tests for additional flags.

## Running Tests

-   `npm test`: run all tests.
-   `npm run test:ui`: run tests with an interactive UI.
-   `npm start`: generate a new test.
-   To run a specific e2e test, run `npm test packages/e2e/<path-to-test-file>` from within `packages/e2e`.

## Authoring Tests

-   Never hardcode custom element tag names as raw strings in test selectors. Always interpolate from the element definition.
