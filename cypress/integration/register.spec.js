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
        // cy.get(locators.registerPage.firstName).type(faker.name.firstName())
        cy.get(locators.registerPage.firstName).type(userData.randomName)
        cy.get(locators.registerPage.lastName).type(userData.randomLastName)
        cy.get(locators.registerPage.email).type(userData.randomEmail)
        cy.get(locators.registerPage.password).type(userData.randomPassword)
        cy.get(locators.registerPage.rePassword).type(userData.randomPassword)
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click()  
    })
})

