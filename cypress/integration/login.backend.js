// const locators = require("./../fixtures/locators.json")

// describe('login spec', () => {
//     before(() => {
//         cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {
//             email: "simakosmos@daleki.svemir.com",
//             password: "simakosmos1"
//         }).its('body').then((response) => {
//             window.localStorage.setItem('token', response.access_token)
//             cy.log(response.access_token)
//         })
       
//         it('visit gallery', () => {
//             cy.visit('')
//             cy.get(locators.navigation.loginButton).should('not.be.visible')
//     })
      
// })
// })

describe('create gallery tests', () => {  //requestovali smo preko post, link i body ako ga ima. dobijamo odgovor u obliku tokena koji je body i selektujemo ga preko its i u localstorage ga setujemo kao token
    before (() => {
        cy.logInThroughBackend('simakosmos@daleki.svemir.com', 'simakosmos1')

        // cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {  //stavili smo u support commandsjs
        //     email: "simakosmos@daleki.svemir.com",
        //     password: "simakosmos1"
        // }).its('body').then((response) => {
        //     window.localStorage.setItem('token', response.access_token)
        //     cy.log(response.access_token)
        // })
    })
    
    it('visit gallery', () => {
        cy.visit('')
    })
})
