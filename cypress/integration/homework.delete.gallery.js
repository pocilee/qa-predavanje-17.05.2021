const locators = require("./../fixtures/locators.json")
const faker = require('faker')

import { authLogin } from '../pageObjects/loginPage.js'
import { authCreate } from '../pageObjects/createGalleryPage.js'
import { navigation } from '../pageObjects/navigation.js'





describe('delete gallery', () => {
    beforeEach(() => {
        cy.visit('/')
        navigation.clickLogin()
        authLogin.login('simakosmos@daleki.svemir.com', 'simakosmos1')
        
    })

    it('create gallery', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) => {
        }).as('validCreate')

        navigation.clickCreateGallery()
        cy.url().should('include', '/create')
        authCreate.create('Sima Kosmos', 'junak 23,5 veka', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
            
        cy.wait('@validCreate').then((intercept) => {
            cy.log(JSON.stringify(intercept.response.statusCode))
            expect(intercept.response.statusCode).to.eql(201)
            window.localStorage.setItem('galleryId', (JSON.stringify(intercept.response.body.id)))
        })
        let galleryId = window.localStorage.getItem('galleryId')
        cy.log(galleryId)
    
    })

    it('delete created gallery', () => {

        navigation.clickMyGalleries()
        //cy.get('div:nth-of-type(1) > h2 > .box-title').click()
        navigation.clickSelectCreatedGallery()
        
        navigation.clickDeleteGallery()

        cy.on('window:confirm', () => true);

    })    
    
})


// Ovo je probna, koja treba doradu - problem galleryId varijabla

/* it('delete created gallery', () => {
    let galleryId = window.localStorage.getItem('galleryId')
    cy.visit(`https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`)

    cy.intercept('DELETE', `https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`, (req) => {
    }).as('validDelete')

    navigation.clickSelectCreatedGallery()
    navigation.clickDeleteGallery()
    cy.wait('@validDelete').then((intercept) => {
    cy.log(JSON.stringify(intercept.response.statusCode))
    cy.log(JSON.stringify(intercept.response.method))
    xpect(intercept.response.statusCode).to.eql('DELETE')
        
    })

    cy.on('window:confirm', () => true);

})   */


// cy.intercept('DELETE', `https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`, (req) => {
        // }).as('validDelete')

            // navigation.clickSelectCreatedGallery()
            // navigation.clickDeleteGallery()

        // cy.wait('@validDelete').then((intercept) => {
        //     cy.log(JSON.stringify(intercept.response.statusCode))
        //     expect(JSON.stringify(intercept.response.statusCode).eql('200'))
        //     cy.log(JSON.stringify(intercept.response.method))
                // expect(intercept.response.method).to.eql('DELETE')
            
            // cy.on('window:confirm', () => true);
    

