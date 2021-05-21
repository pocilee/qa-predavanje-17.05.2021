class AuthCreate {

    get createGal() {
        return cy.get('a[href="/create"]')
    }

    get title() {
        return cy.get('input[id="title"]')
    }

    get descriptions() {
        return cy.get('input[id="description"]')
    }

    get imageUrl() {
        return cy.get('.input-group.mb-3 > .form-control')
    }

    get submitBtn() {
        return cy.get('form > button:nth-of-type(1)')
    }

    create(title, descriptions, imageUrl) {
        this.createGal.click()
        this.title.type(title)
        this.descriptions.type(descriptions)
        this.imageUrl.type(imageUrl)
        this.submitBtn.click()
    }
}

export const authCreate = new AuthCreate()