/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { lighthouse, prepareAudit, pa11y } = require('cypress-audit')
// const { pa11y } = require("@cypress-audit/pa11y");
const fs =require('fs');
//const ReportGenerator = require('lighthouse/lighthouse-core/report/report-generator'); 
const ReportGenerator = require('lighthouse/report/generator/report-generator');

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
 
  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions)
  })

  on('task', {
    lighthouse: lighthouse((lighthouseReport) => {
      console.log('Hej Lighthouse');
      // console.log(lighthouseReport);
      fs.writeFileSync('./report.html',ReportGenerator.generateReport(lighthouseReport.lhr, 'html'));
      // fs.writeFileSync('build/cypress/report.txt', lighthouseReport.lhr);
    
    }),
    pa11y: pa11y(console.log.bind(console)),
  })

}

