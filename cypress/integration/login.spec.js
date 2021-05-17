describe('login spec', () => {
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })

    it('click login button', () => {
        cy.get('a[href="/login"]').click()
        // cy.get('a[class="nav-link nav-buttons"]').eq(0).click()  -- drugi nacin
    })

    it('enter email', () => {
        cy.get('input[id="email"]').type('goran.pobric@gmail.com')
    })

    it('enter password', () => {
        cy.get('input[id="password"]').type('pobra111')
    })

    it('submit', () => {
        cy.get('button[class="btn btn-custom"]').click()
    })
})

describe('logout', () => {
    it('click logout', () => {
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
        // cy.get('ul[class="navbar-nav ml-auto mt-2 mt-lg-0"] > li[class="nav-item"] > a[class="nav-link nav-buttons"]').click()
    })
})




