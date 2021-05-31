class navigationBar {
    get myAccount () {
        return cy.get ('a[id="dropdownCurrency"]').eq(1)
    }

    get signUp () {
        return cy.get ('a[href="https://www.phptravels.net/register"]')
    }

    get login () {
        return cy.get ('a[href="https://www.phptravels.net/login"]')
    }

    get chatModal () {
        return cy.get ('path[d="M11,22c-0.6,0-1-0.4-1-1s0.4-1,1-1h15c0.6,0,1,0.4,1,1s-0.4,1-1,1H11z"]')
    }

    get bookHotel () {
        return cy.get ('img[src="https://www.phptravels.net/uploads/global/logo.png"]')
    }

    get chooseHotelBtn () {
        return cy.get('input[class="select2-input"]').eq(0)
    }

    get fistHotelFromList () {
        return cy.get(':nth-child(1) > .select2-result-sub > :nth-child(2) > .select2-result-label')
    }

    get checkInDate () {
        return cy.get('input#checkin')
    }

    get checkOutDate () {
        return cy.get('input#checkout')
    }

    get numberOfChildrenBtnPlus () {
    return cy.get('[class="col 01"] .input-group-btn-vertical [type="button"]:nth-of-type(1)')
    }

    get searchBtn () {
        return cy.get('#hotels > .tab-inner > .form-search-main-01 > form > .form-inner > .gap-10 > .col-lg-2 > .btn')
    }

    clickSearchBtn () {
        this.searchBtn.click()
    }

    clickNumberOfChildrenPlus () {
        this.numberOfChildrenBtnPlus.click()
    }

    clickCheckOutDate () {
        this.checkOutDate.click()
    }

    clickCheckInDate () {
        this.checkInDate.click()

    }
    clickFistHotelFromList () {
        this.fistHotelFromList.click()
    }
    
    clickChooseHotelInput () {
        this.chooseHotelBtn.click({force: true})

    }
    clickMyAccount () {
        this.myAccount.click()
    }

    clickSignUp() {
        this.signUp.click()
    }
    
    clickLogin() {
        this.login.click()
    }

    clickChatModal() {
        this.chatModal.click()
    }

    clickBookHotel() {
        this.bookHotel.click()
    }

}

export const navigation = new navigationBar