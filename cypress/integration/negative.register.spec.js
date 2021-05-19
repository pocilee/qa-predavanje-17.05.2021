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
        cy.get('input[id="email"]').type('simomatavulj11gmail.com') // without @
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(3000)
        cy.reload()
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('@gmail.com') // without body before @
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(3000)
        cy.reload()
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj11@gmail') // without .com
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(3000)
        cy.reload()
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simo@matavulj11@gmail') // 2 @ signs
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(3000)
        cy.reload()
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj11@gmail.com')
        cy.get('input[id="password"]').type('1234578')
        cy.get('input[id="password-confirmation"]').type('12345') //password confirmation wrong
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(3000)
        cy.reload()
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj11@gmail.com')
        cy.get('input[id="password"]').type('123457') // password.length = 7
        cy.get('input[id="password-confirmation"]').type('1234567')
        cy.get('input[id="email"]').type('simomatavulj1@gmail.com')
        cy.get('input[id="password"]').type('1')
        cy.get('input[id="password-confirmation"]').type('1')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(3000)
        cy.reload()

    })

})
