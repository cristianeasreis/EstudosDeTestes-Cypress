{/* <reference types="Cypress" /> */ }

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('http://127.0.0.1:5500/EstudosCypress/src/')
    })
    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
    it.only('preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName').type('Cristiane')
        cy.get('#lastName').type('Reis')
        cy.get('#email').type('cristianeasreis@exemplo.com')
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
})
