/// <reference types="Cypress" />

describe('sorting of products by different criteria', () => {

    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('/');
    });
  
    it('product sorting by name', () => {
        cy.login();
        cy.get('.product_sort_container').select('Name (A to Z)');
        cy.get('.inventory_list').then(($ele) => {
            const productNames =[...$ele].map(el => el.innerText);
            const sortedProductNames = [...productNames].sort((A, Z) => A.localeCompare(Z));
            expect(productNames).deep.equal(sortedProductNames);
        })
    }); 

});
  