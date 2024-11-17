export class Login{

    loginbtn() {
        cy.xpath('//button[contains(text(), "Login")]').should('be.visible');
    }

    loginClick() {
        cy.xpath('//button[contains(text(), "Login")]').click()
    }
}