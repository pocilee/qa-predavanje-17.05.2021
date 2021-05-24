const locators = require("./../fixtures/locators.json")
const faker = require('faker');

describe('login spec', () => {
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get(locators.navigation.loginButton).click()
    })

    it.only('login with valid credentials', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
        }).as('validLogin')
        
        // cy.get('a[class="nav-link nav-buttons"]').eq(0).click()  -- drugi nacin
        cy.get(locators.loginPage.email).type('simakosmos@daleki.svemir.com')
        cy.get(locators.loginPage.password).type('simakosmos1')
        cy.get(locators.loginPage.submitBtn).click()
        cy.get(locators.navigation.logoutButton).click()
        cy.wait('@validLogin').then((intercept) => {
            cy.log(JSON.stringify(intercept.respone.statusCode))
            expect(intercept.response.statusCode).to.eql(200)
        })

    })
}) 
 

       