describe("Index page", () => {
  beforeEach(() => {
    cy.log("Visiting http://localhost:3000");
    cy.visit("/");
  });

  it("greets with Welcome", () => {
    cy.contains("h1", "Welcome to Kids dev tracker!");
  });
});
