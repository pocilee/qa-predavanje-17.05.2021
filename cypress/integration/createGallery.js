const locators = require("./../fixtures/locators.json")

import { authLogin } from '../pageObjects/loginPage.js'
import { authCreate } from '../pageObjects/createGalleryPage.js'

describe('login spec', () => {
      it('login with valid credentials', () => {
        cy.visit('/')
        cy.get(locators.navigation.loginButton).click()
          authLogin.login('goran.pobric@gmail.com', 'pobra111')
      })
})



describe('create gallery', () => {
      it('succesfully create new gallery', () => {
        authCreate.create('AuthGallery', 'AuthDescription', 'https://greenangletv.com/wp-content/uploads/2020/11/wed-blog-shutterstock_1703194387_low_nwm.jpg')
      })
})

