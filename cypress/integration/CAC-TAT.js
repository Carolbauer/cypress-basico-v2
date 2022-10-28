// CAT-TAT.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

///referencer types="cypress"/>

describe ('Central de Atendimento ao cliente TAT', function(){
    it ('verifica o título de aplicação', function(){
        cy.visit('./src/index.html')

        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
})