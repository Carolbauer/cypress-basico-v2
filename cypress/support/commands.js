Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    const longText = 'Teste,teste,teste,teste,teste,teste,teste,teste, teste,teste,teste,teste'
    cy.get('#firstName').type('Caroline')
    cy.get('#lastName').type('Bauer')
    cy.get('#email').type('bauercarol@hotmail.com')
    cy.get('#open-text-area').type('longText',{delay: 0})
    cy.get('button[type="submit"]').click()
})
