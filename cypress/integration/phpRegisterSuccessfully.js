/// <reference types="Cypress" />

const phpTravelData = require("./../fixtures2/data2.json")
const faker = require('faker');
var fakerData = {
    firstName : faker.name.firstName(),
    lastName : faker.name.lastName(),
    phone : faker.phone.phoneNumber(),
    email : faker.internet.email(),
    password : faker.internet.password()
}

import { authRegister } from '../pageObjects2/registerPage.js'
import { navigation } from '../pageObjects2/navigation.js'


describe('register spec', () => {
    it('visit home page/enter sign up page', () => {
        cy.visit('/')
        navigation.clickMyAccount()
        navigation.clickSignUp()
    })
    
    it('register with valid credentials', () => {
        // cy.intercept('POST', 'https://', (req) => {
        // }).as('validRegister')
        
        authRegister.register(fakerData.firstName, fakerData.lastName, fakerData.phone, fakerData.email, fakerData.password, fakerData.password)
        authRegister.clickSubmit()
        cy.wait(3000)


        // cy.wait('@validRegister').then((intercept) => {
        //     cy.log(JSON.stringify(intercept.response.statusCode))
        //     expect(intercept.response.statusCode).to.eql(200)
        // })

    })

    it('visit hotel booking page', () => {

        navigation.clickBookHotel()
        
    })

    it('choose hotel', () => {
        navigation.clickChooseHotelInput()
        navigation.chooseHotelBtn.type('tria', {force: true})
        // navigation.clickFistHotelFromList()
    })

    it('choose date', () => {
        navigation.clickCheckInDate()
        navigation.checkInDate.clear()
        navigation.checkInDate.type('19/06/2021')
        navigation.clickCheckOutDate()
        navigation.checkOutDate.clear()
        navigation.checkOutDate.type('11/07/2021')

    })

    it('choose number of children', () => {
        
        navigation.clickNumberOfChildren()
        navigation.clickNumberOfChildren()
        navigation.clickSearchBtn()
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