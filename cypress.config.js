const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 1000,
  db: {
    userName: 'oomi',
    password: 'TestDB321#',
    server: 'oomicrm1.database.windows.net',
    options: {
      database: 'oomiQADatabase',
      encrypt: true,
      rowCollectionOnRequestCompletion: true,
    },
  },
  chromeWebSecurity: false,
  numTestsKeptInMemory: 200,
  requestTimeout: 30000,
  responseTimeout: 50000,
  pageLoadTimeout: 100000,
  env: {
    WorkFloWUrl: 'https://ui.oomi.co.uk/WorkflowDesigner/WorkflowDesignerTemp',
  },
  projectId: '2fjewt',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'My Test Suite',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://ui.oomi.co.uk/',
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
