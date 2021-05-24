const locators = require("./../fixtures/locators.json")

import { authLogin } from '../pageObjects/loginPage.js'
import { authCreate } from '../pageObjects/createGalleryPage.js'
import { navigation } from '../pageObjects/navigation.js'

describe('login spec', () => {
      it('login with valid credentials', () => {
        cy.visit('/')
        cy.get(locators.navigation.loginButton).click()
          authLogin.login('simakosmos@daleki.svemir.com', 'simakosmos1')
      })
})



describe('create gallery', () => {
      it('succesfully create new gallery', () => {
        navigation.clickCreateGallery()
        authCreate.create('Sima Kosmos', 'iz dalekog svemira', 'https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg')
      })
})

