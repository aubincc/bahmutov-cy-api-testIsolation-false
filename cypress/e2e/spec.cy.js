describe("Test Hashrouter", () => {
  beforeEach(() => {
    // https://github.com/bahmutov/cy-api/issues/210#issuecomment-1597288221
    // see cypress\support\e2e.ts:20 first
    // cy.api({ method: "GET", url: "/", failOnStatusCode: false });
  });
  it("OK on #/about", () => {
    cy.visit("#/about");
    cy.get("main h1").should("contain.text", "About");
  });
  it("Page is blank on #/about", () => {
    cy.visit("#/about");
    cy.get(".about > h1").should("contain.text", "About");
  });
  it("OK on /", () => {
    cy.visit("");
    cy.get("main h1").should("contain.text", "You're home!");
  });
  it("Page is blank on #/about", () => {
    cy.visit("#/about");
    cy.get(".about > h1").should("contain.text", "About");
  });
  it("Working on /", () => {
    cy.visit("");
    cy.get("main h1").should("contain.text", "You're home!");
  });
});
