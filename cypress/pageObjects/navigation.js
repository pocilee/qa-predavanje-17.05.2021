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

    get enterAllGalleries () {
        return cy.get (':nth-child(1) > .nav-link')
    }

    get myGalleries () {
        return cy.get ('a[href="/my-galleries"]')
    }

    get addImage () {
        return cy.get ('form div:nth-of-type(3) > [type]')
    }

    get latestGalleryCreated () {
        return cy.get ('div:nth-of-type(1) > h2 > .box-title')
    }

    get deleteGalleryBtn () {
        return cy.get (':nth-child(5) > button.btn')
    }

    get submitComment () {
        return cy.get ('form > .btn.btn-custom')
    }

    submitCommentBtn () {
        this.submitComment.click()
    }

    clickRegister() {
        this.register.click()
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

    clickSelectCreatedGallery() {
        this.latestGalleryCreated.click()
    }

    clickDeleteGallery() {
    this.deleteGalleryBtn.click()
    }

    clickMyGalleries() {
        this.myGalleries.click()
    }

    clickAllGalleries() {
        this.enterAllGalleries.click()
    }
}

export const navigation = new Navigation