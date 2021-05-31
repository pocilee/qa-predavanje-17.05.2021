class AuthRegister {
    get firstName() {
        return cy.get('input[name="firstname"]')
    }

    get lastName() {
        return cy.get('input[name="lastname"]')
    }

    get mobileNumber() {
        return cy.get('input[name="phone"]')
    }

    get email() {
        return cy.get('input[name="email"]')
    }

    get password() {
        return cy.get('input[name="password"]')
    }

    get passwordConfirm() {
        return cy.get('input[name="confirmpassword"]')
    }

    get submitBtn() {
        return cy.get('button[class="signupbtn btn_full btn btn-success btn-block btn-lg"]')
    }


    register(firstName, lastName, mobileNumber, email, password, passwordConfirm) {
        firstName = firstName || undefined
        lastName = lastName || undefined
        mobileNumber = mobileNumber || undefined
        email = email || undefined
        password = password || undefined
        passwordConfirm = passwordConfirm || undefined

        if(firstName != undefined) {
            this.firstName.type(firstName, {force: true})
        }

        if(lastName != undefined) {
            this.lastName.type(lastName, {force: true})
        }

        if(mobileNumber != undefined) {
            this.mobileNumber.type(mobileNumber, {force: true})
        }
        
        if(email != undefined) {
            this.email.type(email, {force: true})
        }
        
        if(password != undefined) {
            this.password.type(password, {force: true})
        }
        
        if(passwordConfirm != undefined) {
            this.passwordConfirm.type(passwordConfirm, {force: true})
        }
        
        
    }

    clickSubmit() {
        this.submitBtn.click({force: true})
    }

}

export const authRegister = new AuthRegister()