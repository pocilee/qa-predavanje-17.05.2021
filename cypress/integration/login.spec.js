describe('login spec', () => {
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })

    it('click login button', () => {
        cy.get('a[href="/login"]').click()
        // cy.get('a[class="nav-link nav-buttons"]').eq(0).click()  -- drugi nacin
    })
})

