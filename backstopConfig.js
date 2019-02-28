const separatedScenarios = require('./tests/separatedScenarios.js');
const similarScenarios = require('./tests/similarScenarios.js');

const scenarios = separatedScenarios.concat(similarScenarios);

module.exports = {
    id: "example_tests",
    viewports: [
        {
            label: "phone",
            width: 320,
            height: 480
        },
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    onBeforeScript: "puppet/onBefore.js",
    onReadyScript: "puppet/onReady.js",
    scenarios: scenarios,
    paths: {
        bitmaps_reference: "backstop_data/bitmaps_reference",
        bitmaps_test: "backstop_data/bitmaps_test",
        engine_scripts: "backstop_data/engine_scripts",
        html_report: "backstop_data/html_report",
        ci_report: "backstop_data/ci_report"
    },
    report: ["browser"],
    engine: "puppeteer",
    engineOptions: {
        args: ["--no-sandbox"]
    },
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false
}
