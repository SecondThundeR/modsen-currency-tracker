describe("Currency Converter Spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("Opens and closes currency converter modal", () => {
    cy.contains("button", "Bitcoin").click();
    cy.get("div#portal").children().should("not.have.length", 0);
    cy.get("div#backdrop").click("bottom");
    cy.get("div#portal").children().should("have.length", 0);
  });

  it("Fetches currencies and selects the same one", () => {
    cy.contains("button", "Commercial Dollar").click();
    cy.get("select").select("BYN");
    cy.get("input").type("00");
    cy.get("h1").contains(/^100 Commercial Dollar is \d+(\.\d+)? BYN/gm);
  });
});
