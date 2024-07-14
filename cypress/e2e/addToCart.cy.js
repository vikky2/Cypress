/// <reference types="Cypress" />

describe('product in cart', () => {

    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('/');
    });
  
    it('adding products to the cart', () => {
        cy.login();
        cy.get('.inventory_list').contains('Add to cart');
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#add-to-cart-sauce-labs-bike-light').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_list').should('have.length.greaterThan', 0);
        cy.get('.cart_list').contains('Sauce Labs Backpack');
    });

    it('removing products from the cart', () => {
        cy.login();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_list').contains('Remove');
        cy.get('#remove-sauce-labs-backpack').click();
        cy.get('#remove-sauce-labs-bike-light').click();
        cy.contains('Continue Shopping').click();
        cy.get('.cart_list').should('have.length', 0);
    });    

});