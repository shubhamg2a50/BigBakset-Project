export class Icons{

    astrikIcon() {
        cy.get('[src="/media/uploads/banner_images/hp_cmc_m_offer_28_220921_all.png"]').click()
        cy.get('[class="asterisk-icon"]').should('have.length', 10)
    }
}