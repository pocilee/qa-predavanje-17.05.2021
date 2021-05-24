// const locators = require("./../fixtures/locators.json")

import { authLogin } from '../pageObjects/loginPage.js'
import { authCreate } from '../pageObjects/createGalleryPage.js'
import { navigation } from '../pageObjects/navigation.js'
var rpt = 'G'

describe('negative tc - create gallery', () => {
    beforeEach(() => {
        cy.visit('/')
        navigation.clickLogin()
        authLogin.login('simakosmos@daleki.svemir.com', 'simakosmos1')
        navigation.clickCreateGallery()
        
    })

        it('no title', () => {
            authCreate.create('', 'Gallery Description', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
            cy.wait(2000)
        })

        it('no description', () => {
            authCreate.create('Gallery Title', '', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
            cy.wait(2000)
        })
    
        it('no image URL', () => {
            authCreate.create('Gallery Title', 'Gallery Description', '')
            cy.wait(2000)
        })

        it('title - 1 blank ', () => {
            authCreate.create(' ', 'Gallery Description', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
            cy.wait(2000)
        })

        it('title - 266 characters', () => {
            authCreate.create(rpt.repeat(266), 'Gallery Description', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
            cy.wait(2000)
        })

        it('descriptnions - 1001 characters', () => {
            authCreate.create('Gallery Title', rpt.repeat(1001), 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
            cy.wait(2000)
        })

        it('blank first input of image url', () => {
            navigation.clickAddImage()
            authCreate.create2('Gallery Title', 'Gallery Description', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
            cy.wait(2000)
        })

        it('blank second input of image url', () => {
            navigation.clickAddImage()
            authCreate.create3('Gallery Title', 'Gallery Description', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
            cy.wait(2000)
        })


})
    
