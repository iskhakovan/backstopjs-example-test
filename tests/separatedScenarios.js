const supportPageTest = {
    label: "Google Support page - only desktop test",
    url: "https://support.google.com/websearch",
    viewports: [
        {
            label: "desktop",
            width: 1300,
            height: 1080
        }
    ],
    referenceUrl: "",
    readyEvent: "",
    readySelector: "",
    delay: 0,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: "",
    clickSelector: "",
    postInteractionWait: 0,
    selectors: [],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
    requireSameDimensions: true
};

const helpPageTest = {
    label: "Google Help page - only mobile test",
    url: "https://support.google.com/?hl=en",
    viewports: [
        {
            label: "mobile",
            width: 320,
            height: 480
        }
    ],
    referenceUrl: "",
    readyEvent: "",
    readySelector: "",
    delay: 0,
    hideSelectors: [],
    removeSelectors: [],
    hoverSelector: "",
    clickSelector: "",
    scrollToSelector: "",
    postInteractionWait: 0,
    selectors: [],
    selectorExpansion: true,
    expect: 0,
    misMatchThreshold: 0.1,
    requireSameDimensions: true
};

const scenarios = [
    supportPageTest,
    helpPageTest
];

module.exports = scenarios;
