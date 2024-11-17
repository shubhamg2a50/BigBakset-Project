export class ProductCategory{

    vegetables() {
        cy.xpath('//a[contains(text(), "Vegetables")]').should('be.visible');
    }
    
}