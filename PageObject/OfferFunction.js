export class offer{

    offerbtn() {
        cy.get('[src="/media/uploads/banner_images/hp_cmc_m_offer_28_220921_all.png"]').should('be.visible')
    }

    offerclick() {
        cy.get('[src="/media/uploads/banner_images/hp_cmc_m_offer_28_220921_all.png"]').click()
    }

}