describe("Theme Switch Spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("Loads with dark theme by default", () => {
    cy.get("html").invoke("attr", "data-theme").should("eq", undefined);
  });

  it("Switch to light theme", () => {
    const button = cy.contains("Change theme");
    button.click();
    cy.get("html").invoke("attr", "data-theme").should("eq", "light");
  });

  it("Switch to light theme and back to dark", () => {
    const button = cy.contains("Change theme");
    button.click();
    cy.get("html").invoke("attr", "data-theme").should("eq", "light");
    button.click();
    cy.get("html").invoke("attr", "data-theme").should("eq", undefined);
  });
});
