class AuthComment {
    get textArea() {
        return cy.get('.form-group > textarea[placeholder="Comment..."]')
    }

    get submitButton() {
        return cy.get('form > .btn')
    }

    get deleteCommentBtn() {
        return cy.get('.list-group button')
    }

    get imageUrl() {
        return cy.get('img[src="https://pbs.twimg.com/profile_images/1073348422722293761/gtkwy3Fe.jpg"]')
    }

    get imageUrl2() {
        return cy.get('img[src="https://i.ytimg.com/vi/trmqY8zINRE/maxresdefault.jpg"]')
    }
    postComment(comment) {
        this.textArea.type(comment)
        this.submitButton.click()
    }

    clickDeleteComment() {
        this.deleteCommentBtn.click()
    }
}

export const authComment = new AuthComment()