/// <reference types="Cypress" />

describe('Login to Swag Labs', () => {

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/');
  });

  it('login with valid credentials', () => {
    cy.get('#user-name').clear().type('standard_user');
    cy.get('#password').clear().type('secret_sauce');
    cy.get('#login-button').click(); //Login goes fine here
  })

  it('login with invalid credentials', () => {
    cy.get('#user-name').clear().type('standard_user');
    cy.get('#password').clear().type('sauce');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service'); //Login error handled here
  })

  it('login with valid credentials and confirm the presence of the inventory page', () => {
    cy.get('#user-name').clear().type('standard_user');
    cy.get('#password').clear().type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.app_logo').should('contain.text', 'Swag Labs'); //After login to website dashboard appears
  });

  it('logout to an app', () => {
    cy.get('#user-name').clear().type('standard_user');
    cy.get('#password').clear().type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.get('.login_logo').contains('Swag Labs'); //after logout, login page verified
  })

});
