/// <reference types="Cypress" />


describe('register gallery backend', () => { 
    before (() => {
        cy.registerThroughBackend()
    })

    it('visit gallery', () => {
        cy.visit('')
    })
})