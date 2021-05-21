const locators = require("./../fixtures/locators.json")

// describe('login spec', () => {
//     it('visit gallery app', () => {
//         cy.visit('https://gallery-app.vivifyideas.com/')
//     })

//     it('click login button', () => {
//         cy.get('a[href="/login"]').click()
//         // cy.get('a[class="nav-link nav-buttons"]').eq(0).click()  -- drugi nacin
//     })
// })

describe('login spec', () => {
    before(() => {
        cy.visit('/')
        cy.get(locators.navigation.loginButton).click()
      })
      
    it('enter email', () => {
        cy.get(locators.loginPage.email).type("goran.pobric@gmail.com")
    })

    it('enter password', () => {
        cy.get(locators.loginPage.password).type("pobra111")
    })

    it('submit', () => {
        cy.get(locators.loginPage.submitBtn).click()
    })
})

describe('logout', () => {
    it('click logout', () => {
        cy.get(locators.navigation.logoutButton).click()
    })
})


// instead of click on 'submit', click button <enter> after password input

describe('login spec + {enter}', () => {
    
    it('visit page', () => {
        cy.visit('/')
        cy.get(locators.navigation.loginButton).click()
    })
        
    
    it('enter email', () => {
        cy.get('input[id="email"]').type('goran.pobric@gmail.com')
    })

    it('enter password', () => {
        cy.get('input[id="password"]').type('pobra111{enter}')
    })

})

// it.only - odradice samo ovaj test
// it.wait(4000) - saceka zadato vreme, pa onda radi test
