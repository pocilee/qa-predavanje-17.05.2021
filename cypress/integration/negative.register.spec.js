describe('register page', () => {
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })

    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    })
})

describe('neg. register spec', () => {
    it('email no @ sign', () => {
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj123gmail.com') // without @
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.reload()
    })
    it('email without body before @', () => {
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('@gmail.com') // without body before @
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.reload()
    })
    it('email without .com', () => {
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj123@gmail') // without .com
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.reload()
    })
    it('email with 2 @ signs', () => {
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simo@matavulj123@gmail') // 2 @ signs
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.reload()
    })
    it('password confirmation wrong', () => {
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj123@gmail.com')
        cy.get('input[id="password"]').type('1234578')
        cy.get('input[id="password-confirmation"]').type('12345') //password confirmation wrong
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.reload()
    })
    it('password.length = 7', () => {
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj123@gmail.com')
        cy.get('input[id="password"]').type('123457') // password.length = 7
        cy.get('input[id="password-confirmation"]').type('1234567')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.reload()
    })
    it('empty first name', () => {
        // cy.get('input[id="first-name"]').type('Simo') no 'first name'
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj123@gmail.com')
        cy.get('input[id="password"]').type('1234578')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.reload()
    })
    it('empty last name', () => {
        cy.get('input[id="first-name"]').type('Simo')
        // cy.get('input[id="last-name"]').type('Matavulj') no 'last name'
        cy.get('input[id="email"]').type('simomatavulj123@gmail.com')
        cy.get('input[id="password"]').type('1234578') 
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.reload()
    })
    it('empty email', () => {
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        // cy.get('input[id="email"]').type('simomatavulj123@gmail.com') // no email
        cy.get('input[id="password"]').type('1234578')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.reload()
    })
    it('empty password', () => {
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj123@gmail.com')
        // cy.get('input[id="password"]').type('1234578')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.reload()
    })
    it('empty confirmation password', () => {
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj123@gmail.com')
        cy.get('input[id="password"]').type('1234578')
        // cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.reload()
    })
    it('no terms and conditions', () => {
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj123@gmail.com')
        cy.get('input[id="password"]').type('1234578')
        cy.get('input[id="password-confirmation"]').type('12345678')
        // cy.get('input[class="form-check-input"]').check().
        cy.get('button[type="submit"]').click().wait(2000)
        cy.reload()
    })
})

