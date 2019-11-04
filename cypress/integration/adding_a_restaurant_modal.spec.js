/* eslint-disable linebreak-style */
describe("Adding Restaurant", () => {
  it("display the restaurant in the list", () => {
    const restaurantsName = "coffee";
    cy.visit("http://localhost:1234");

    //  on the dom but not display
    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    cy.get('[data-test="addRestaurantButton"]').click();
    cy.get('[data-test="newRestaurantName"]').type(restaurantsName);
    cy.get('[data-test="saveNewRestaurantButton"]').click();

    cy.get('[data-test="newRestaurantName"]').should("not.be.visible");

    cy.contains(restaurantsName);
  });
});
