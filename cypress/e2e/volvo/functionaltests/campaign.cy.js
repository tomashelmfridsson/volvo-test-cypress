/// <reference types="@cypress-audit/lighthouse" />

describe("Campaign webpage trust", () => {
  it("Accept trust", () => {

    cy.log('Given the webpage is loaded');
    cy.clearCookies();
    cy.visit("/", {
      // volvocars is blocked for robots, this is a workaround
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent": "axios/0.27.2",
      },
    });

    cy.log('When the trust pop up is displayed');
    cy.contains('Accept').should('be.visible');

    cy.log('Then it should be possible to click on the Accept button');
    cy.get("#onetrust-accept-btn-handler").click();
  });


  it("View Privacy Preference Centre in Cokies Settings", () => {
    cy.log('Given the webpage is loaded');
    cy.clearCookies();
    cy.visit("/", {
      // volvocars is blocked for robots, this is a workaround
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent": "axios/0.27.2",
      },
    });

    cy.log('When the trust pop up is displayed and click Cookies Settings');
    cy.contains('Cookie Settings').should('be.visible');
    cy.get('#onetrust-pc-btn-handler').click();

    cy.log('Then a pop up with title Privacy Preference Centre');
    cy.contains('Privacy Preference Centre').should('be.visible');
  });
});
