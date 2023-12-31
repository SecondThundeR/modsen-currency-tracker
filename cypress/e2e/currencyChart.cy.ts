describe("Currency Chart Spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/timeline");
    cy.get('[data-cy="currency-select"]').select("Bitcoin");
    cy.get('[data-cy="loader"]');
  });

  it("Displays chart", () => {
    cy.get('div[type="candlestick"]')
      .children()
      .should("have.length.at.least", 1);
  });

  it("Displays 14 chart candles by default", () => {
    cy.get("g.apexcharts-series").children().should("have.length", 14);
  });

  it("Displays 1 chart candle", () => {
    cy.get('[data-cy="input"]').type("{backspace}");
    cy.get("g.apexcharts-series").children().should("have.length", 1);
  });

  it("Displays 30 chart candles and toast", () => {
    cy.get('[data-cy="input"]')
      .type("{backspace}{backspace}{leftarrow}")
      .type("3");
    cy.get("g.apexcharts-series").children().should("have.length", 30);
    cy.get('[data-cy="toast"]').should(
      "have.text",
      "Successfully built a chart for the current exchange rate",
    );
  });
});
