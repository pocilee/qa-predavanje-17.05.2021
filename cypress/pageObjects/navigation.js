class Navigation {
    get login () {
        return cy.get ('a[href="/login"]')
    }

    get enterCreateGallery () {
        return cy.get ("a[href='/create']")
    }

    get addImage () {
        return cy.get ('form div:nth-of-type(3) > [type]')
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