/// <reference types="@cypress-audit/lighthouse" />

describe("Campaign webpage", () => {
  it("Accept trust", () => {
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
});
