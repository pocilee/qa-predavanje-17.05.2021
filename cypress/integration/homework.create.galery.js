const locators = require("./../fixtures/locators.json")
const faker = require('faker')

import { authLogin } from '../pageObjects/loginPage.js'
import { authCreate } from '../pageObjects/createGalleryPage.js'
import { navigation } from '../pageObjects/navigation.js'

function randomLetters(a, b) {
    var fakerLetters = faker.helpers.repeatString(a, b)
    return fakerLetters
}

describe('negative tc - create gallery', () => {
    beforeEach(() => {
        cy.visit('/')
        navigation.clickLogin()
        authLogin.login('simakosmos@daleki.svemir.com', 'simakosmos1')
        navigation.clickCreateGallery()
        
    })

        it('check h1 header', () => {
            cy.get(locators.navigation.galleryAppNavButton).should('exist')
            cy.get(locators.navigation.allGalleriesNavButton).should('exist')
            cy.get(locators.navigation.createGallery).should('exist')
            cy.get(locators.createGalleryPage.h1Header).should('have.css', 'color','rgb(72, 73, 75)')
            cy.get(locators.createGalleryPage.h1Header).should('have.text', 'Create Gallery')
        })

        it('no title', () => {
            authCreate.create('', 'Gallery Description', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
            cy.wait(2000)
        })

        // it('no description', () => {
        //     authCreate.create('Gallery Title', '', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
        //     cy.wait(2000)
        // })
    
        // it('no image URL', () => {
        //     authCreate.create('Gallery Title', 'Gallery Description', '')
        //     cy.wait(2000)
        // })

        it('wrong image format URL', () => {
            authCreate.create('Gallery Title', 'Gallery Description', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe')
            cy.get(locators.createGalleryPage.imageUrlError).should('be.visible')
            cy.get(locators.createGalleryPage.imageUrlError).should('have.text', 'Wrong format of image')
            cy.get(locators.createGalleryPage.imageUrlError).should('have.css', 'background-color', 'rgb(248, 215, 218)')
            cy.wait(2000)
        })

        it('title - 1 blank ', () => {
            authCreate.create(' ', 'Gallery Description', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
            cy.get(locators.createGalleryPage.titleError).should('be.visible')
            cy.get(locators.createGalleryPage.titleError).should('have.text', 'The title field is required.')
            cy.get(locators.createGalleryPage.titleError).should('have.css', 'background-color', 'rgb(248, 215, 218)')
            cy.wait(2000)
        })

        // it('title - 266 characters', () => {
        //     authCreate.create(randomLetters('hahahah', 38), 'Gallery Description', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
        //     cy.wait(2000)
        // })

        // it('descriptnions - 1001 characters', () => {
        //     authCreate.create('Gallery Title', randomLetters('hahahah', 143), 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
        //     cy.wait(2000)
        // })

        // it('blank first input of image url', () => {
        //     navigation.clickAddImage()
        //     authCreate.create2('Gallery Title', 'Gallery Description', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
        //     cy.wait(2000)
        // })

        // it('blank second input of image url', () => {
        //     navigation.clickAddImage()
        //     authCreate.create3('Gallery Title', 'Gallery Description', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
        //     cy.wait(2000)
        // })


})
