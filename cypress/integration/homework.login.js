const locators = require("./../fixtures/locators.json")
const faker = require('faker')

describe('login assertions', () => {
    it('successfully login', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get(locators.navigation.loginButton).click()
        cy.get(locators.loginPage.h1Header).should('exist')
        cy.get(locators.loginPage.h1Header).should('have.text', 'Please login')
        cy.get(locators.loginPage.email).type("simakosmos@daleki.svemir.com")
        cy.get(locators.loginPage.password).type("simakosmos1")
        cy.get(locators.loginPage.submitBtn).click()
        cy.get(locators.navigation.loginButton).should("not.exist")
    })
})


describe('login assertions - negative', () => {
    it('wrong email format', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get(locators.navigation.loginButton).click()
        var emailInputLength = cy.get(locators.loginPage.email)
        cy.get(locators.loginPage.email).type("simakosmos@dalekisvemircom")
        cy.get(locators.loginPage.password).type("simakosmos1")
        cy.get(locators.loginPage.submitBtn).click()
        cy.get(locators.loginPage.emailError).should('be.visible')
        cy.get(locators.loginPage.emailError).should('have.text', 'Bad Credentials')
        cy.get(locators.loginPage.emailError).should('have.css', 'color', 'rgb(114, 28, 36)')
        cy.get(locators.loginPage.emailError).should('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.get(locators.loginPage.submitBtn).should('have.css', 'background-color', 'rgb(72, 73, 75)')
        cy.get(locators.navigation.galleryAppNavButton).should('exist')
        cy.get(locators.navigation.allGalleriesNavButton).should('exist')
        
    })
})




// it.only - odradice samo ovaj test
// it.wait(4000) - saceka zadato vreme, pa onda radi test
