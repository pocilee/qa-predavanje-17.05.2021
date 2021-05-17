describe('register page', () => {
    it('visit gallery app', () => {
        cy.visit('')
    })

    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    })
})

describe('neg. register spec', () => {
    it('fill registration forms', () => {
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj1gmail.com') // bez @
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(3000)
        cy.reload()
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj1@gmail') // bez .com
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(3000)
        cy.reload()
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj1@gmail.com')
        cy.get('input[id="password"]').type('1')
        cy.get('input[id="password-confirmation"]').type('1')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(3000)
        cy.reload()

    })
})