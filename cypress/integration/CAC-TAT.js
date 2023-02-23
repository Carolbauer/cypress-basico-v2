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
        cy.clock()

        cy.get('#firstName').type('Caroline')
        cy.get('#lastName').type('Bauer')
        cy.get('#email').type('bauercarol@hotmail.com')
        cy.get('#open-text-area').type('longText',{delay: 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success > strong').should('be.visible')
        
        cy.tick(3000)
        cy.get('.success > strong').should('not.be.visible')

    })

    it ('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Caroline')
        cy.get('#lastName').type('Bauer')
        cy.get('#email').type('bauercarol@hotmail,com')
        cy.get('#open-text-area').type('Teste')
        cy.contains('button', 'Enviar').click()

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
    it ('Preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName')
        .type('Caroline')
        .should('have.value', 'Caroline')
        .clear()
        .should('have.value', '')
        cy.get('#lastName')
        .type('Bauer')
        .should('have.value', 'Bauer')
        .clear()
        .should('have.value', '')
        cy.get('#email')
        .type('bauercarol@hotmail.com')
        .should('have.value', 'bauercarol@hotmail.com')
        .clear()
        .should('have.value', '')
        cy.get('#phone')
        .type('90878986')
        .should('have.value', '90878986')
        .clear()
        .should('have.value', '')
    })

    it ('exibe mensagem de erro ao submeter o formulario sem preencher os campos obrigatórios', function(){
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    it ('envia o formulario com sucesso usando o comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('.success > strong').should('be.visible')
        
    })

    it('Seleciona um produto (Youtube) por seu texto', function(){
        cy.get('#product').select('youtube').should('have.value','youtube')
    })

    it('Seleciona um produto (Mentoria) por seu valor (value)', function(){
        cy.get('#product').select('mentoria').should('have.value','mentoria')
    })
    //it.only('Seleciona um produto (Blog) por seu Índice', function(){
        //cy.get('#product')
          //.select(1)
          //.should('have.value', 'blog')
    //})
    it('Seleciona tipo de atendimento (Feedback)',function(){
        cy.get('input[type="radio"][value="feedback"]').check().should('have.value','feedback')
    })
    it('Marca cada tipo de atendimento', function(){
        cy.get('input[type="radio"]').should('have.length',3).each(function($radio){
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    })
    it('Marca ambos checkboxes, depois desmarca o último',function(){
        cy.get('input[type="checkbox"]').check()
          .check()
          .last()
          .uncheck()
          .should('not.be.checked')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        cy.get('#firstName').type('Caroline')
        cy.get('#lastName').type('Bauer')
        cy.get('#email').type('bauercarol@hotmail.com')
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')

})
    it('Seleciona um arquivo da pasta fixtures',function(){
        cy.get('input[type="file"]')
          .should('not.have.value')
          .selectFile('./cypress/fixtures/example.json')
          .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json')

            })
          })
    it('Seleciona um arquivo simulando um drag-and-drop',function(){
        cy.get('input[type="file"]')
              .should('not.have.value')
              .selectFile('./cypress/fixtures/example.json',{action:'drag-drop'})
              .should(function($input){
                expect($input[0].files[0].name).to.equal('example.json')
    
                })
              })
    it('Seleciona um arquivo utilizando uma fixture para qual foi dado um alias',function(){
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type = "file"]')
            .selectFile('@sampleFile')
    })
    it('Verifica que a política de privacidade abre em outra aba sem a necessidade', function(){
        cy.get('#privacy a')
        .should('have.attr', 'target', '_blank')
    })

    it('Acessa a página de política de privacidade removendo o target e então  ', function(){
        cy.get('#privacy a')
        .invoke('removeAttr', 'target' )
        .click()

        cy.contains('Talking About Testing').should('be.visible')
        
    })

    it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
        cy.get('.success')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Mensagem enviada com sucesso.')
          .invoke('hide')
          .should('not.be.visible')
        cy.get('.error')
          .should('not.be.visible')
          .invoke('show')
          .should('be.visible')
          .and('contain', 'Valide os campos obrigatórios!')
          .invoke('hide')
          .should('not.be.visible')
      })

    it('preeenche a area de texto usando o comando invoke', function(){
        const longText = Cypress._.repeat('0123456789', 20)

        cy.get('#open-text-area')
        .invoke('val', longText)
        .should('have.value',longText)
    })

    it('faz uma requisição HTTP', function (){
        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        .should(function(response){
            const {status, statusText, body} = response
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')
            expect(body).to.include('CAC TAT')
        })
    })

    it.only('Encontra o gato escondido', function(){
        cy.get('#cat')
        .invoke('show')
        .should('be.visible')
        cy.get('#title')
        .invoke('text', 'CAT TAT')
        cy.get('#subtitle')
        .invoke('text', 'Eu 💙 GATOS')
    })

    
          
         
        
    })
