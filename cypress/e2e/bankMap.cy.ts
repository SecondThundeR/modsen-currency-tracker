describe("Bank Map Page Spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/bank-map");
  });

  it("Should display random markers on map after currency select", () => {
    cy.get('[data-cy="input"]').type("USD");
    cy.get('[data-cy="dropdown-item"]').click();
    cy.get('[data-cy="alert-success"]').should(
      "have.text",
      "Loading results...",
    );
    cy.get("p").contains("Selected: Commercial Dollar");
    cy.get('[aria-label="Map marker"]', {
      timeout: 15000,
    }).should("have.length.at.least", 1);
  });
});
