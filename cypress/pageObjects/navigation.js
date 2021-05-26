class Navigation {
    get register () {
        return cy.get ('a[href="/register"]')
    }

    get registerTerms () {
        return cy.get ('input["class=form-check-input"]')
    }

    get login () {
        return cy.get ('a[href="/login"]')
    }

    get enterCreateGallery () {
        return cy.get ("a[href='/create']")
    }

    get addImage () {
        return cy.get ('form div:nth-of-type(3) > [type]')
    }

    clickTerms() {
        this.registerTerms.click()
    }
    
    clickLogin() {
        this.login.click()
    }

    clickCreateGallery() {
        this.enterCreateGallery.click()
    }

    clickAddImage() {
        this.addImage.click()
    }
}

export const navigation = new Navigation