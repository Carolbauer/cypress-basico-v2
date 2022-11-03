// CAT-TAT.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

///referencer types="cypress"/>

describe ('Central de Atendimento ao cliente TAT', function(){
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it ('verifica o título de aplicação', function(){
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })

    it.only ('preenche os campos obrigatórios e envia o formulário', function(){
        cy.get('#firstName').type('Caroline')
        cy.get('#lastName').type('Bauer')
        cy.get('#email').type('bauercarol@hotmail.com')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()

        cy.get('.success > strong').should('be.visible')

    })
})