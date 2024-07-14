/// <reference types="Cypress" />

describe('product in cart', () => {

    beforeEach(() => {
      cy.clearCookies(); //clearing cookies
      cy.clearLocalStorage(); //clearing local storage
      cy.visit('/'); //visiting the url
    });
  
    it('adding products to the cart', () => {
        cy.login(); //login with username and password
        cy.get('.inventory_list').contains('Add to cart'); 
        cy.get('#add-to-cart-sauce-labs-backpack').click(); //adding sauce lab backpack to the cart
        cy.get('#add-to-cart-sauce-labs-bike-light').click(); //adding sauce labs bike light product to the cart
        cy.get('.shopping_cart_link').click(); // going on shopping cart 
        cy.get('.cart_list').should('have.length.greaterThan', 0); //checking shopping with product greater than 0 
        cy.get('.cart_list').contains('Sauce Labs Backpack'); //product presence checking
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