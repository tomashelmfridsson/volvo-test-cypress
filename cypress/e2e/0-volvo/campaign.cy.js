/// <reference types="@cypress-audit/lighthouse" />

describe("campaign", () => {
  it.only("Accept trust", () => {
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

  it.skip('lighthouse audits', () => {
    cy.visit("https://www.volvocars.com/intl/v/car-safety/a-million-more/", {
      // volvocars is blocked for robots, this is a workaround
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent": "axios/0.27.2",
      },
    });
    cy.get("#onetrust-accept-btn-handler").click();

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
