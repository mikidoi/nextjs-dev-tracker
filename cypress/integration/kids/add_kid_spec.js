describe("Add a kid page", () => {
  // Add kid spec in isolation
  beforeEach(() => {
    cy.visit("/add");
  });

  it("has title with Add more kid", () => {
    cy.contains("h1", "Add more kid");
  });

  it("requires name", () => {});

  it("requires image", () => {});

  it("navigates to /kids on successful adding", () => {});
});
