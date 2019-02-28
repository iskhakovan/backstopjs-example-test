# BackstopJS Visual Regression Tests Example

## Setup

1. Git clone this repository to your own system.
2. Install node.js. Also Chrome latest is recommended for BackstopJS.
3. Install [Docker](https://docs.docker.com/install/). Make sure Docker is running on your machine.
4. Run `npm install`
5. Run visual regression tests with `npm run test`.
    - BackstopJS creates a set of _test_ screenshots and compares them with _reference_ screenshots. Any changes show up in a visual report which will be opened in the browser.
    - Tests are running in [BackstopJS Docker container](https://hub.docker.com/r/backstopjs/backstopjs/) to eliminate cross-platform rendering issues.
6. All commands:

| Command  | Environment |
| ------------- | ------------- |
| `npm run test`  | Run all visual regression tests |
| `npm run test -- --filter=<scenarioLabelRegex>`  | Run a single scenario |
| `npm run reference`  | Generate new reference screenshots instead of all old ones. <br>Optional parameter to update a particular scenario `--filter=<scenarioLabelRegex>`</br> |
| `npm run openReport`  | Open the latest test run report in the browser |
| `npm run approve`  | Update reference screenshots with the results from the last test  |


More about BackstopJS: https://github.com/garris/BackstopJS
