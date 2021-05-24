class AuthCreate {

    // get createGal() {
    //     return cy.get('a[href="/create"]')
    // }

    get titleInput() {
        return cy.get('input[id="title"]')
    }

    get descriptionsInput() {
        return cy.get('input[id="description"]')
    }

    get imageUrlInput() {
        return cy.get('.input-group > .form-control')
    }
    
    get imageUrlInputChange1() {
        return cy.get('div:nth-of-type(1) > .input-group.mb-3 > .form-control')
    }
    get imageUrlInputChange2() {
        return cy.get('div:nth-of-type(2) > .input-group.mb-3 > .form-control')
    }
    
    get submitBtn() {
        return cy.get('form > button:nth-of-type(1)')
    }

    create(title, descriptions, imageUrl) {
        title = title || undefined
        descriptions = descriptions || undefined
        imageUrl = imageUrl || undefined

        if(title != undefined || descriptions != undefined || title != undefined) {
            this.titleInput.type(title)
            this.descriptionsInput.type(descriptions)
            this.imageUrlInput.type(imageUrl)
        }

        this.submitBtn.click()
    }

    create2(title, descriptions, imageUrl) {
       
        this.titleInput.type(title)
        this.descriptionsInput.type(descriptions)
        this.imageUrlInputChange1.type(imageUrl)
        this.submitBtn.click()
    }

    create3(title, descriptions, imageUrl) {
       
        this.titleInput.type(title)
        this.descriptionsInput.type(descriptions)
        this.imageUrlInputChange2.type(imageUrl)
        this.submitBtn.click()
    }
}

export const authCreate = new AuthCreate()