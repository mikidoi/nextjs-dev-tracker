describe("View a kid detail page", () => {
  beforeEach(function () {
    cy.fixture("kid.json")
      .as("getKid")
      .then((kid) => {
        this.kid = kid;
      });
    cy.server();
    cy.route("GET", `/api/kid/karina`, "@getKid").as("getAKid");
    cy.visit("/kid/karina");
    cy.wait("@getAKid");
  });
  it("has title with name", function () {
    cy.get("h1").contains(this.kid.name);
  });

  it("has image", function () {
    cy.get(`[alt=${this.kid.name}]`).should("be.visible");
  });

  it("has an edit button and navigates to /edit", function () {
    cy.get("a").contains("Edit").click();
    // cy.location("href").should("eq", `/kids/edit/${this.kid._id}`);
  });
});
