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

    it ('preenche os campos obrigatórios e envia o formulário', function(){
        const longText = 'Teste,teste,teste,teste,teste,teste,teste,teste, teste,teste,teste,teste'
        cy.get('#firstName').type('Caroline')
        cy.get('#lastName').type('Bauer')
        cy.get('#email').type('bauercarol@hotmail.com')
        cy.get('#open-text-area').type('longText',{delay: 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success > strong').should('be.visible')

    })

    it ('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Caroline')
        cy.get('#lastName').type('Bauer')
        cy.get('#email').type('bauercarol@hotmail,com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    it ('Campo telefone continua vazio quando preenchido com valor não numéeico', function(){
        cy.get('#phone')
            .type('qdkgornng')
            .should('have.value','')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Caroline')
        cy.get('#lastName').type('Bauer')
        cy.get('#email').type('bauercarol@hotmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')

})

    it.only('Seleciona um produto (Youtube) por seu texto', function(){
        cy.get('#product').select('youtube').should('have.value','youtube')
    })
})