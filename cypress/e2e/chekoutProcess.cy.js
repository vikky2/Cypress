/// <reference types="Cypress" />

describe('checkout process', () => {

    beforeEach(() => {
      cy.visit('/');
    });
  
    it('flow of chckout', () => {
        cy.login();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click();
        cy.get('.shopping_cart_link').should('be.visible').click();
        cy.contains('Your Cart');
        cy.get('#checkout').should('be.visible').click();
        cy.contains('Checkout: Your Information');
        cy.fillCheckoutForm('Vikky', 'Ranjan', '800007');
        cy.get('#continue').should('be.visible').click();
        cy.contains('Checkout: Overview').should('be.visible');
        cy.get('#finish').click();
        cy.get('.complete-header').contains('Thank you for your order!')
        cy.contains('Back Home').should('be.visible');
    });
});