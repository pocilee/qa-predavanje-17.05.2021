const locators = require("./../fixtures/locators.json")
const data = require("./../fixtures/data.json")
const faker = require('faker')

import { authLogin } from '../pageObjects/loginPage.js'
import { authCreate } from '../pageObjects/createGalleryPage.js'
import { navigation } from '../pageObjects/navigation.js'
import { authComment } from '../pageObjects/editGallery.js'

var galleryId

describe('login spec', () => {
    beforeEach('login with valid credentials', () => {
        cy.visit('/')
        cy.get(locators.navigation.loginButton).click()

        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
        }).as('validLogin')

        authLogin.login('simakosmos@daleki.svemir.com', 'simakosmos1')

        cy.wait('@validLogin').then((intercept) => {
            cy.log(JSON.stringify(intercept.response.statusCode))
            expect(intercept.response.statusCode).to.eql(200)
            cy.url().should('include', '/login')
        })

    })

    it('create gallery', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) => {
        }).as('validCreate')

        navigation.clickCreateGallery()
        cy.url().should('include', '/create')
        authCreate.create2PicGallery(data.galleryData.title, data.galleryData.description, data.galleryData.imageUrl, data.galleryData.imageUrl2)
        
        cy.wait(2000)

        cy.wait('@validCreate').then((intercept) => {
            galleryId = intercept.response.body.id
            cy.log(JSON.stringify(intercept.response.statusCode))
            expect(intercept.response.statusCode).to.eql(201)
            window.localStorage.setItem('gallery_id', (JSON.stringify(intercept.response.body.id)))
            cy.log('galleryId je: ' + galleryId)
        })

    })

    it('visit all galleries page', () => {
        cy.wait(1500)
        navigation.clickAllGalleries()
        cy.get(`a[href="/galleries/${galleryId}"]`).click()
    })

    it('check pictures in created gallery', () => {
        cy.get(`a[href="/galleries/${galleryId}"]`).click()
        cy.wait(1500)

        authComment.imageUrl.should('be.visible')
        authComment.imageUrl2.should('not.be.visible')
        
        cy.get('span[class="carousel-control-next-icon"]').click()

        authComment.imageUrl.should('not.be.visible')
        authComment.imageUrl2.should('be.visible')
        
        cy.get('.carousel-control-prev-icon').click()

        authComment.imageUrl.should('be.visible')
        authComment.imageUrl2.should('not.be.visible')

        cy.wait(1500) 
    })
    
    it('edit selected gallery', () => {
        cy.intercept('GET', `https://gallery-api.vivifyideas.com/api/galleries/${galleryId}/edit`, (req) => {
        }).as('validEdit')
        navigation.clickAllGalleries()
        cy.get(`a[href="/galleries/${galleryId}"]`).click()
        cy.get(`a[href="/edit-gallery/${galleryId}"]`).click()          
        cy.wait('@validEdit').then((intercept) => {
            cy.log(JSON.stringify(intercept.response.statusCode))
            expect(intercept.response.statusCode).to.eql(200)
        })

        cy.wait(2000)
    })

    it('post comment', () => {
        cy.get(`a[href="/galleries/${galleryId}"]`).click()
        authComment.postComment('neki komentar')
        cy.wait(2000)
    })

    it('delete posted comment', () => {
        cy.get(`a[href="/galleries/${galleryId}"]`).click()
        authComment.clickDeleteComment()
        cy.wait(2000)
    })

    it('delete created gallery', () => {
        cy.get(`a[href="/galleries/${galleryId}"]`).click()
        navigation.clickDeleteGallery()
        cy.on('window:confirm', () => true);
        cy.wait(2000)
    })

    it('check if gallery is deleted', () => {
        cy.wait(1500)
        navigation.clickAllGalleries()
        cy.url().should('not.include', `/galleries/${galleryId}`)
    })
    





    // it('delete created gallery', () => {
    //     cy.log('galleryId je: ' + galleryId)
    //     cy.wait(2000)
    //     navigation.clickMyGalleries()
    //     navigation.clickSelectCreatedGallery()
    //     navigation.clickDeleteGallery()
    //     cy.on('window:confirm', () => true);

    // })  
})