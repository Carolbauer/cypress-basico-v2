// ulbra.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe ('Central de Atendimento ao cliente TAT', function(){
    beforeEach(function(){
        cy.visit('https://www.ulbra.br/')
    })
    it ('verifica o acesso ao site', function(){
        cy.get('h1').should('be.visible')
        cy.get(':nth-child(5) > .border-0').select('Autoatendimento').should('have.value','https://www.ulbra.br/autoatendimento')
    })
})