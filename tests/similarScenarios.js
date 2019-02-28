const homepageTest = {
  label: "Homepage",
  url: "https://www.google.com/"
};

const ImagesHomepage = {
  label: "Images Homepage page",
  url: "https://www.google.com/imghp?hl=en&tab=wi"
};

const basicTestSettings = {
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

const scenarios = [
  homepageTest,
  ImagesHomepage
];

function addBasicTestSettings(scenarios) {
  return scenarios.map(scenario => {
    return { ...scenario, ...basicTestSettings };
  });
}

module.exports = addBasicTestSettings(scenarios);
