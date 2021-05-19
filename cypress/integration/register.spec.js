describe('register page', () => {
    it('visit gallery app', () => {
        cy.visit('')
    })

    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    })
})

describe('register spec', () => {
    it('fill registration forms', () => {
        cy.get('input[id="first-name"]').type('Simo')
        cy.get('input[id="last-name"]').type('Matavulj')
        cy.get('input[id="email"]').type('simomatavulj11@gmail.com')
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[type="submit"]').click()
        
    })
<<<<<<< HEAD
})
=======
})

>>>>>>> d0956306479bdd4bf04214e7fa6cecec005e8643
