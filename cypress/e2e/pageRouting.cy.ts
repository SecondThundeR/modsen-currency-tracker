describe("Page Routing Spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("Navigates to all available pages", () => {
    cy.contains("a", /Timeline/).click();
    cy.url().should("eq", "http://localhost:8080/timeline");
    cy.contains("a", /Bank map/).click();
    cy.url().should("eq", "http://localhost:8080/bank-map");
    cy.contains("a", /Contact/).click();
    cy.url().should("eq", "http://localhost:8080/contact");
  });

  it("Handles non-exist page", () => {
    cy.visit("http://localhost:8080/nothing");
    cy.contains("h1", "It looks like this page doesn't exist");
    cy.contains("a", "Go to home page").click();
    cy.url().should("eq", "http://localhost:8080/");
  });
});
