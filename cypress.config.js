const { defineConfig } = require('cypress')
// const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { lighthouse, prepareAudit } = require('cypress-audit')

module.exports = defineConfig({
  "chromeWebSecurity": false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: './cypress/e2e/*volvo/*.cy.js',
    "chromeWebSecurity": false
  },
})
