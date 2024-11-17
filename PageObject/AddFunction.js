export class addFunc{


    addlength() {
        cy.get('[color="rossoCorsa"]').should('have.length', 24)
    }

    addName() {
        cy.get('[id="7897212"]').should('be.visible')
    }

    addClick() {
       cy.xpath('(//a[@class="LinearCollage___StyledLink-sc-179e50u-1 bLQAfV"])[1]').click() 
    }

}