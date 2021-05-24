const locators = require("./../fixtures/locators.json")
const faker = require('faker');

let userData = {
    randomName : faker.name.firstName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()
}


describe('register spec', () => {
    before(() => {
        cy.visit('/')
        cy.get(locators.navigation.registerButton).click()
      })
    it('fill registration forms', () => {
        cy.get(locators.registerPage.firstName).type(userData.randomName)
        // cy.get(locators.registerPage.firstName).type(userData.randomName)
        cy.get(locators.registerPage.lastName).type(userData.randomLastName)
        cy.get(locators.registerPage.email).type('sim@kosmos')               
        cy.get(locators.registerPage.password).type('123')              
        cy.get(locators.registerPage.rePassword).type('123')          
        // cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click()
    })

    it('email wrong input error', () => {
        cy.get(locators.registerPage.emailValidationError).should('be.visible')
        cy.get(locators.registerPage.emailValidationError).should('have.text', 'The email must be a valid email address.')
        cy.get(locators.registerPage.emailValidationError).should('have.css', 'background-color', 'rgb(248, 215, 218)')
    })

    it('password input error', () => {
        cy.get(locators.registerPage.passwordValidationError).should('be.visible')
        cy.get(locators.registerPage.passwordValidationError).should('have.text', 'The password must be at least 8 characters.')
        cy.get(locators.registerPage.passwordValidationError).should('have.css', 'background-color', 'rgb(248, 215, 218)')
    })

    it('terms error assertions', () => {
        cy.get(locators.registerPage.termsValidationError).should('be.visible')
        cy.get(locators.registerPage.termsValidationError).should('have.text', 'The terms and conditions must be accepted.')
        cy.get(locators.registerPage.termsValidationError).should('have.css', 'background-color', 'rgb(248, 215, 218)')
    })

    it('check h1 header', () => {
        cy.get(locators.registerPage.h1Header).should('be.visible')
        cy.get(locators.registerPage.h1Header).should('have.text', 'Register')
        cy.get(locators.registerPage.h1Header).should('have.css', 'color', 'rgb(72, 73, 75)')
    })

    it('check First Name label', () => {
        cy.get(locators.registerPage.firstNameLabel).should('be.visible')
        cy.get(locators.registerPage.firstNameLabel).should('have.text', 'First Name')
        cy.get(locators.registerPage.firstNameLabel).should('have.css', 'color', 'rgb(72, 73, 75)')
        
    })

})

describe('register with already taken email', () => {
    before(() => {
        cy.visit('/')
        cy.get(locators.navigation.registerButton).click()
      })
    it('fill registration forms', () => {
        cy.get(locators.registerPage.firstName).type(userData.randomName)
        // cy.get(locators.registerPage.firstName).type(userData.randomName)
        cy.get(locators.registerPage.lastName).type(userData.randomLastName)
        cy.get(locators.registerPage.email).type('simakosmos@daleki.svemir.com')               
        cy.get(locators.registerPage.password).type('123')              
        cy.get(locators.registerPage.rePassword).type('123')          
        // cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click()
    })
    it('already registered mail input error', () => {
        cy.get(locators.registerPage.emailValidationError).should('be.visible')
        cy.get(locators.registerPage.emailValidationError).should('have.text', 'The email has already been taken.')
        cy.get(locators.registerPage.emailValidationError).should('have.css', 'background-color', 'rgb(248, 215, 218)')
    })
})