describe('login - negative', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href="/login"]').click()
      })

    it('email no @ sign', () => {
        cy.get('input[id="email"]').type('goran.pobricgmail.com')
        cy.get('input[id="password"]').type('pobra111')
        cy.get('button[class="btn btn-custom"]').click().wait(2000)
        // cy.reload()
    })

    it('email no .com', () => {
        cy.get('input[id="email"]').type('goran.pobric@gmail')
        cy.get('input[id="password"]').type('pobra111')
        cy.get('button[class="btn btn-custom"]').click().wait(2000)
        // cy.reload()
    })

    it('wrong email', () => {
        cy.get('input[id="email"]').type('goranpobric@gmail.com')
        cy.get('input[id="password"]').type('pobra111')
        cy.get('button[class="btn btn-custom"]').click().wait(2000)
        // cy.reload()
    })

    it('wrong password', () => {
        cy.get('input[id="email"]').type('goran.pobric@gmail.com')
        cy.get('input[id="password"]').type('pobra11')
        cy.get('button[class="btn btn-custom"]').click().wait(2000)
        // cy.reload()
    })

    it('no password', () => {
        cy.get('input[id="email"]').type('goran.pobric@gmail.com')
        // cy.get('input[id="password"]').type('pobra11')
        cy.get('button[class="btn btn-custom"]').click().wait(2000)
        // cy.reload()
    })

    it('no email', () => {
        // cy.get('input[id="email"]').type('goran.pobric@gmail.com')
        cy.get('input[id="password"]').type('pobra11')
        cy.get('button[class="btn btn-custom"]').click().wait(2000)
        // cy.reload()
    })


})


// it.only - odradice samo ovaj test
// it.wait(4000) - saceka zadato vreme, pa onda radi test
