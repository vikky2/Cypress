/// <reference types="Cypress" />

describe('menu navigation', () => {

    beforeEach(() => {
      cy.visit('/');
    });
  
    it('navigation to menus options', () => {
        cy.login();
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="inventory-sidebar-link"]')
          .contains('All Items')
          .click();
        cy.get('[data-test="about-sidebar-link"]').click();
        cy.go('back');
    });

    it('navigation to logout and reset app menu', () => {
        cy.login();
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]')
          .contains('Logout')
          .click()
        cy.login();
        cy.contains('Swag Labs');
        cy.get('#react-burger-menu-btn').click();
        cy.get('#reset_sidebar_link')
          .should('be.visible')
          .click();
    });
    
});