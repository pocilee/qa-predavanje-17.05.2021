const locators = require("./../fixtures/locators.json")
const faker = require('faker')

import { authLogin } from '../pageObjects/loginPage.js'
import { authCreate } from '../pageObjects/createGalleryPage.js'
import { navigation } from '../pageObjects/navigation.js'




describe('delete gallery', () => {
    before(() => {
        cy.visit('/')
        navigation.clickLogin()
        authLogin.login('simakosmos@daleki.svemir.com', 'simakosmos1')
        navigation.clickCreateGallery()
        cy.url().should('include', '/create')
    })

    it('create gallery', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) => {
        }).as('validCreate')

        authCreate.create('Sima Kosmos', 'junak 23,5 veka', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
            
        cy.wait('@validCreate').then((intercept) => {
            cy.log(JSON.stringify(intercept.response.statusCode))
            expect(intercept.response.statusCode).to.eql(201)
            window.localStorage.setItem('galleryId', (JSON.stringify(intercept.response.body.id)))
            var galleryId = window.localStorage.getItem('galleryId')
            cy.log(galleryId).wait(2000)
            
        

        // cy.intercept('DELETE', `https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`, (req) => {
        // }).as('validDelete')

            navigation.clickSelectCreatedGallery()
            navigation.clickDeleteGallery()

        // cy.wait('@validDelete').then((intercept) => {
        //     cy.log(JSON.stringify(intercept.response.statusCode))
        //     expect(JSON.stringify(intercept.response.statusCode).eql('200'))
        //     cy.log(JSON.stringify(intercept.response.method))
                // expect(intercept.response.method).to.eql('DELETE')
            
            cy.on('window:confirm', () => true);

        
        })
    
        })
        
    })

    it('delete created gallery', () => {
        cy.intercept('DELETE', `https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`, (req) => {
        }).as('validDelete')

        navigation.clickSelectCreatedGallery()
        navigation.clickDeleteGallery()
        // cy.wait('@validDelete').then((intercept) => {
        //     cy.log(JSON.stringify(intercept.response.statusCode))
        //     cy.log(JSON.stringify(intercept.response.method))
        //     expect(intercept.response.statusCode).to.eql('DELETE')
            
        // })

        cy.on('window:confirm', () => true);

    })    
    
// })



    

