/// <reference types="Cypress" />

describe('error handling', () => {

    beforeEach(() => {
      cy.visit('/');
    });
  
    it('checkout without adding products to the cart', () => {
        cy.login();
        cy.get('[data-test="secondary-header"]')
          .should('be.visible')
          .click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]')
          .contains('Checkout')
          .click();
        cy.fillCheckoutForm('Vikky', 'Ranjan', '800007');
        cy.get('#continue').should('be.visible').click();
        cy.contains('Checkout: Overview').should('be.visible');
        cy.get('#finish').click();
        cy.contains('Back Home').should('be.visible').click();
    });

    it('checkout without adding products to the cart', () => {
        cy.login();
        cy.get('[data-test="secondary-header"]')
          .should('be.visible')
          .click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]')
          .contains('Checkout')
          .click();
        cy.get('#continue').should('be.visible').click();
        cy.get('[data-test="error"]')
          .should('be.visible')
          .and('contain', 'Error: First Name is required');
    });

});