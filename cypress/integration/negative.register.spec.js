
const locators = require("./../fixtures/locators.json")
const faker = require('faker');

describe('neg. register spec', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href="/register"]').click()
      })
    it('email no @ sign', () => {
        cy.get(locators.registerPage.firstName).type(faker.name.firstName())
        cy.get(locators.registerPage.lastName).type(faker.name.lastName())
        cy.get(locators.registerPage.email).type('simomatavulj123gmail.com') // without @
        cy.get(locators.registerPage.password).type('12345678')
        cy.get(locators.registerPage.rePassword).type('12345678')
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click().wait(2000)
        // cy.reload()
    })
    it('email without body before @', () => {
        cy.get(locators.registerPage.firstName).type(faker.name.firstName())
        cy.get(locators.registerPage.lastName).type(faker.name.lastName())
        cy.get(locators.registerPage.email).type('@gmail.com') // without body before @
        cy.get(locators.registerPage.password).type('12345678')
        cy.get(locators.registerPage.rePassword).type('12345678')
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click().wait(2000)
        // cy.reload()
    })
    it('email without .com', () => {
        cy.get(locators.registerPage.firstName).type(faker.name.firstName())
        cy.get(locators.registerPage.lastName).type(faker.name.lastName())
        cy.get(locators.registerPage.email).type('simomatavulj123@gmail') // without .com
        cy.get(locators.registerPage.password).type('12345678')
        cy.get(locators.registerPage.rePassword).type('12345678')
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click().wait(2000)
        // cy.reload()
    })
    it('email with 2 @ signs', () => {
        cy.get(locators.registerPage.firstName).type(faker.name.firstName())
        cy.get(locators.registerPage.lastName).type(faker.name.lastName())
        cy.get(locators.registerPage.email).type('simo@matavulj123@gmail') // 2 @ signs
        cy.get(locators.registerPage.password).type('12345678')
        cy.get(locators.registerPage.rePassword).type('12345678')
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click().wait(2000)
        // cy.reload()
    })
    it('password confirmation wrong', () => {
        cy.get(locators.registerPage.firstName).type(faker.name.firstName())
        cy.get(locators.registerPage.lastName).type(faker.name.lastName())
        cy.get(locators.registerPage.email).type(faker.internet.email())
        cy.get(locators.registerPage.password).type('1234578')
        cy.get(locators.registerPage.rePassword).type('12345') //password confirmation wrong
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click().wait(2000)
        // cy.reload()
    })
    it('password.length = 7', () => {
        cy.get(locators.registerPage.firstName).type(faker.name.firstName())
        cy.get(locators.registerPage.lastName).type(faker.name.lastName())
        cy.get(locators.registerPage.email).type(faker.internet.email())
        cy.get(locators.registerPage.password).type('123457') // password.length = 7
        cy.get(locators.registerPage.rePassword).type('1234567')
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click().wait(2000)
        // cy.reload()
    })
    it('empty first name', () => {
        // cy.get(locators.registerPage.firstName).type(faker.name.firstName()) no 'first name'
        cy.get(locators.registerPage.lastName).type(faker.name.lastName())
        cy.get(locators.registerPage.email).type(faker.internet.email())
        cy.get(locators.registerPage.password).type('1234578')
        cy.get(locators.registerPage.rePassword).type('12345678')
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click().wait(2000)
        // cy.reload()
    })
    it('empty last name', () => {
        cy.get(locators.registerPage.firstName).type(faker.name.firstName())
        // cy.get(locators.registerPage.lastName).type(faker.name.lastName()) no 'last name'
        cy.get(locators.registerPage.email).type(faker.internet.email())
        cy.get(locators.registerPage.password).type('1234578') 
        cy.get(locators.registerPage.rePassword).type('12345678')
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click().wait(2000)
        // cy.reload()
    })
    it('empty email', () => {
        cy.get(locators.registerPage.firstName).type(faker.name.firstName())
        cy.get(locators.registerPage.lastName).type(faker.name.lastName())
        // cy.get(locators.registerPage.email).type(faker.internet.email()) // no email
        cy.get(locators.registerPage.password).type('1234578')
        cy.get(locators.registerPage.rePassword).type('12345678')
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click().wait(2000)
        // cy.reload()
    })
    it('empty password', () => {
        cy.get(locators.registerPage.firstName).type(faker.name.firstName())
        cy.get(locators.registerPage.lastName).type(faker.name.lastName())
        cy.get(locators.registerPage.email).type(faker.internet.email())
        // cy.get(locators.registerPage.password).type('1234578')
        cy.get(locators.registerPage.rePassword).type('12345678')
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click().wait(2000)
        // cy.reload()
    })
    it('empty confirmation password', () => {
        cy.get(locators.registerPage.firstName).type(faker.name.firstName())
        cy.get(locators.registerPage.lastName).type(faker.name.lastName())
        cy.get(locators.registerPage.email).type(faker.internet.email())
        cy.get(locators.registerPage.password).type('1234578')
        // cy.get(locators.registerPage.rePassword).type('12345678')
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submit).click().wait(2000)
        // cy.reload()
    })
    it('no terms and conditions', () => {
        cy.get(locators.registerPage.firstName).type(faker.name.firstName())
        cy.get(locators.registerPage.lastName).type(faker.name.lastName())
        cy.get(locators.registerPage.email).type(faker.internet.email())
        cy.get(locators.registerPage.password).type('12345678')
        cy.get(locators.registerPage.rePassword).type('12345678')
        // cy.get(locators.registerPage.terms).check().
        cy.get(locators.registerPage.submit).click().wait(2000)
        // cy.reload()
    })
})

