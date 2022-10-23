/// <reference types="@cypress-audit/lighthouse" />

describe.only("campaign", () => {
  it.skip("Accept trust", () => {
    // cy.visit('https://www.dn.se/');
    cy.clearCookies();
    cy.visit("https://www.volvocars.com/intl/v/car-safety/a-million-more/", {
      // volvocars is blocked for robots, this is a workaround
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent": "axios/0.27.2",
      },
    });
    cy.get("#onetrust-accept-btn-handler").click();
  });

  it.skip("loads fast enough", () => {
    cy.visit("https://www.volvocars.com/intl/v/car-safety/a-million-more/", {
      headers: {
        accept: "application/json, text/plain, */*",
        'user-agent': 'axios/0.27.2'
      },
    });
    cy.get("#onetrust-accept-btn-handler").click();
    cy.lighthouse();
  });

  it.only('lighthouse audits', () => {

cy.visit('www.addq.se');


    //cy.get("#onetrust-accept-btn-handler").click();
   //  cy.screenshot();
    const customThresholds = {  
      performance: 70,
      accessibility: 90,
      seo: 90,
      'best-practices': 90,
      pwa: 0,
    };

    const desktopConfig = { 
      extends: 'lighthouse:default',
      formFactor: 'desktop',
      screenEmulation: {disabled: true}
    };
    cy.lighthouse(customThresholds, desktopConfig); 
    cy.pa11y();
  });

});
