describe("Adding Restaurant", () => {
  it("display the restaurant in the list", () => {
    const restaurantsName = "coffee";
    cy.visit("http://localhost:1234");

    cy.get('[data-test="newRestaurantName"]').should("not.exist");

    cy.get('[data-test="addRestaurantButton"]').click();
    cy.get('[data-test="newRestaurantName"]').type(restaurantsName);
    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').should("not.exist");

    cy.contains(restaurantsName);
  });
});
