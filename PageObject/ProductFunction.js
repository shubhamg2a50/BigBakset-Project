export class productFunction{



    productClick() {
        cy.get(':nth-child(1) > :nth-child(1) > .SKUDeck___StyledDiv-sc-1e5d9gk-0').click()
    }

    productImage() {
        cy.get(':nth-child(1) > :nth-child(1) > .SKUDeck___StyledDiv-sc-1e5d9gk-0').should('be.visible')
    }

}