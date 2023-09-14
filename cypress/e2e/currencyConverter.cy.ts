describe("Currency Converter Spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("Opens and closes currency converter modal", () => {
    cy.get('[data-cy="button"]').contains("Bitcoin").click();
    cy.get("div#portal").children().should("not.have.length", 0);
    cy.get('[data-cy="backdrop"]').click("bottom");
    cy.get("div#portal").children().should("have.length", 0);
  });

  it("Fetches currencies and selects the same one", () => {
    cy.get('[data-cy="button"]').contains("Bitcoin").click();
    cy.get('[data-cy="select"]').select("USD");
    cy.get('[data-cy="input"]').type("00");
    cy.get("h1").contains(/^100 Bitcoin is \d+(\.\d+)? USD/gm);
  });
});
