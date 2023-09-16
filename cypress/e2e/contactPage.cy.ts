describe("Contact Page Spec", () => {
  let correctInputData: string[];
  let invalidInputData: string[];

  beforeEach(() => {
    cy.visit("http://localhost:8080/contact");
  });

  before(() => {
    cy.fixture("correctEmailData").then(
      (correctEmailData: { data: string[] }) => {
        correctInputData = [...correctEmailData.data];
      },
    );
    cy.fixture("invalidEmailData").then(
      (invalidEmailData: { data: string[] }) => {
        invalidInputData = [...invalidEmailData.data];
      },
    );
  });

  it("Sends mail to correct email", () => {
    cy.get('[data-cy="input"]').each(
      (item: JQuery<HTMLInputElement>, index) => {
        cy.wrap(item).type(correctInputData[index]);
      },
    );
    cy.get('[data-cy="textarea"]').type(correctInputData[2]);
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="alert-success"]', {
      timeout: 10000,
    }).contains(
      "Yay! We have received your message. We will reply back to you as soon as possible!",
    );
  });

  it("Fails to send mail to incorrect email", () => {
    cy.get('[data-cy="input"]').each(
      (item: JQuery<HTMLInputElement>, index) => {
        cy.wrap(item).type(invalidInputData[index]);
      },
    );
    cy.get('[data-cy="textarea"]').type(invalidInputData[2]);
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="alert-error"]', {
      timeout: 10000,
    }).contains(
      "Seems like there is an error! Try to send again or contact support via support@example.com",
    );
  });
});
