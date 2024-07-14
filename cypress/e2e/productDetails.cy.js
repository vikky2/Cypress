/// <reference types="Cypress" />

describe('product details', () => {

    beforeEach(() => {
      cy.visit('/');
    });
  
    it('navigation to the product details page', () => {
        cy.login();
        cy.contains('Sauce Labs Backpack').click();
        cy.get('[data-test="inventory-item-desc"]').contains('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get('.inventory_details_price').contains('29.99');
        cy.get('[data-test="add-to-cart"]').should('be.visible').and('contain', 'Add to cart');
        cy.get('[data-test="back-to-products"]')
          .should('contain', 'Back to products')
          .click();
    });
});