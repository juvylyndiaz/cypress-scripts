const { defineConfig } = require("cypress");

module.exports = defineConfig({

  includeShadowDom: true,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 50000,
  requestTimeout: 50000,
  chromeWebSecurity: false,
  experimentalFetchPolyfill: true,
  screenshotsFolder: "cypress/reports/screenshots",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: 'Automation report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    timestamp:"mmddyyyy_HHMMss",
    overwrite: true,
    html: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
