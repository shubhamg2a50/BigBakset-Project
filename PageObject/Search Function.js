export class searchTest{

    searchbar() {
        cy.xpath('//input[contains(@placeholder, "Search")]').should('be.visible');

    }

    searchIcon() {
        cy.get('[class="mx-2.5 w-4 h-4 text-appleGreen-500 fill-appleGreen-500"]').should('be.visible')
    }

}




