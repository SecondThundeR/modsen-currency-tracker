describe("Hamburger Menu Spec", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("http://localhost:8080/");
  });

  it("Shows hamburger menu and opens header items", () => {
    cy.get('[data-cy="header-content"]').should("be.hidden");
    cy.get('[data-cy="hamburger"]').click();
    cy.get('[data-cy="header-content"]').should("be.visible");
    cy.get('[data-cy="hamburger"]').click();
    cy.get('[data-cy="header-content"]').should("be.hidden");
  });
});
