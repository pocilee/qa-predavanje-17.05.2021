/// <reference types="Cypress" />

import { authRegister } from '../pageObjects/registerPage.js'
import { navigation } from '../pageObjects/navigation.js'

const locators = require("./../fixtures/locators.json")
const faker = require('faker');

let userData = {
    randomName : faker.name.firstName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()
}

describe('register gallery backend', () => { 
    before (() => {
        // cy.logInThroughBackend('simakosmos@daleki.svemir.com', 'simakosmos1') // duza verzija
        cy.registerThroughBackend('SIMA', 'KOSMOS', 'simastrahota@junak.svemira', 'simakosmos1', 'simakosmos1') // kraca, stavljeno je sve u cypress.json i commands.js
        // cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {  //stavili smo u support commandsjs
        //     email: "simakosmos@daleki.svemir.com",
        //     password: "simakosmos1"
        cy.get(locators.registerPage.terms).check()         
        cy.get(locators.registerPage.submit).click()
    })

    it('visit gallery', () => {
        cy.visit('')
    })
})

/*describe('negative register spec', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(locators.navigation.registerButton).click()
    })

    it('no first name', () => {
        authRegister.register('', 'Kosmos', 'simakosmos@daleki.svemir.com', 'simakosmos1', 'simakosmos1')
        authRegister.clickTerms()
        authRegister.clickSubmit()
        cy.wait(2000)
    })

    it('no last name', () => {
        authRegister.register('Sima', '', 'simakosmos@daleki.svemir.com', 'simakosmos1', 'simakosmos1')
        authRegister.clickTerms()
        authRegister.clickSubmit()
        cy.wait(2000)
    })

    it('no email', () => {
        authRegister.register('Sima', 'Kosmos', '', 'simakosmos1', 'simakosmos1')
        authRegister.clickTerms()
        authRegister.clickSubmit()
        cy.wait(2000)
    })

    it('no password', () => {
        authRegister.register('Sima', 'Kosmos', 'simakosmos@daleki.svemir.com', '', 'simakosmos1')
        authRegister.clickTerms()
        authRegister.clickSubmit()
        cy.wait(2000)
    })

    it('no password confirmation', () => {
        authRegister.register('Sima', 'Kosmos', 'simakosmos@daleki.svemir.com', 'simakosmos1', '')
        authRegister.clickTerms()
        authRegister.clickSubmit()
        cy.wait(2000)
    })

    it('wrong email format - no @', () => {
        authRegister.register('Sima', 'Kosmos', 'simakosmosdaleki.svemir.com', 'simakosmos1', 'simakosmos1')
        authRegister.clickTerms()
        authRegister.clickSubmit()
        cy.wait(2000)
    })

    it('wrong email format - no .com', () => {
        authRegister.register('Sima', 'Kosmos', 'simakosmos@dalekisvemircom', 'simakosmos1', 'simakosmos1')
        authRegister.clickTerms()
        authRegister.clickSubmit()
        cy.get(locators.registerPage.emailValidationError).should('be.visible')
        cy.get(locators.registerPage.emailValidationError).should('have.css', 'background-color', 'rgb(248, 215, 218)')
        cy.get(locators.registerPage.emailValidationError).should('have.text', 'The email must be a valid email address.')
        cy.wait(2000)
    })




})*/






//     it('email wrong input error', () => {
//         cy.get(locators.registerPage.emailValidationError).should('be.visible')
//         cy.get(locators.registerPage.emailValidationError).should('have.text', 'The email must be a valid email address.')
//         cy.get(locators.registerPage.emailValidationError).should('have.css', 'background-color', 'rgb(248, 215, 218)')
//     })

//     it('password input error', () => {
//         cy.get(locators.registerPage.passwordValidationError).should('be.visible')
//         cy.get(locators.registerPage.passwordValidationError).should('have.text', 'The password must be at least 8 characters.')
//         cy.get(locators.registerPage.passwordValidationError).should('have.css', 'background-color', 'rgb(248, 215, 218)')
//     })

//     it('terms error', () => {
//         cy.get(locators.registerPage.termsValidationError).should('be.visible')
//         cy.get(locators.registerPage.termsValidationError).should('have.text', 'The terms and conditions must be accepted.')
//         cy.get(locators.registerPage.termsValidationError).should('have.css', 'background-color', 'rgb(248, 215, 218)')
//     })

//     it('check h1 header', () => {
//         cy.get(locators.registerPage.h1Header).should('be.visible')
//         cy.get(locators.registerPage.h1Header).should('have.text', 'Register')
//         cy.get(locators.registerPage.h1Header).should('have.css', 'color', 'rgb(72, 73, 75)')
//     })

//     it('check First Name label', () => {
//         cy.get(locators.registerPage.firstNameLabel).should('be.visible')
//         cy.get(locators.registerPage.firstNameLabel).should('have.text', 'First Name')
//         cy.get(locators.registerPage.firstNameLabel).should('have.css', 'color', 'rgb(72, 73, 75)')
        
//     })

// })

// describe('register with already taken email', () => {
//     before(() => {
//         cy.visit('/')
//         cy.get(locators.navigation.registerButton).click()
//       })
//     it('fill registration forms', () => {
//         cy.get(locators.registerPage.firstName).type(userData.randomName)
//         // cy.get(locators.registerPage.firstName).type(userData.randomName)
//         cy.get(locators.registerPage.lastName).type(userData.randomLastName)
//         cy.get(locators.registerPage.email).type('simakosmos@daleki.svemir.com')               
//         cy.get(locators.registerPage.password).type('123')              
//         cy.get(locators.registerPage.rePassword).type('123')          
//         // cy.get(locators.registerPage.terms).check()
//         cy.get(locators.registerPage.submit).click()
//     })
//     it('already registered mail input error', () => {
//         cy.get(locators.registerPage.emailValidationError).should('be.visible')
//         cy.get(locators.registerPage.emailValidationError).should('have.text', 'The email has already been taken.')
//         cy.get(locators.registerPage.emailValidationError).should('have.css', 'background-color', 'rgb(248, 215, 218)')
//     })
// })