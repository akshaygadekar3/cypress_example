const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      // implement node event listeners here
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    saveJson: true,
    charts: true,
    reportPageTitle: "api-automation",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reporterDir: "cypress/reports",
    reportTitle: "test results",
  },
  reports: [
    {
      targets: [
        {
          name: "chat",
          condition: "always",
          inputs: {
            url: "<GChat URL>",
            publish: "test-summary",
          },
        },
      ],
      results: [
        {
          type: "mocha",
          files: ["cypress/reports/html/index.json"],
        },
      ],
    },
  ],
});
