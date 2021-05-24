const locators = require("./../fixtures/locators.json")


import { authLogin } from '../pageObjects/loginPage.js'

describe('login spec', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(locators.navigation.loginButton).click()
      })

      it('login with valid credentials', () => {
          authLogin.login('goran.pobric@gmail.com', 'pobra111')
      })

      it('assertions', () => {
          cy.url().should('include', '/login') //asertacija
      })
})