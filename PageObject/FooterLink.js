export class footer{

    footerLink() {
        cy.get('[class="sm:hidden w-full pt-13 mt-6 text-md text-silverSurfer-300 bg-darkOnyx-900 footer"]').should('be.visible')
    }

    ContactUs() {
        cy.get('[href="http://www.bigbasket.com/contact/"]').contains('Contact Us')
    }

    AboutUs() {
        cy.get('[href="https://www.bigbasket.com/about-us/?nc=bt"]').should('be.visible').click()
    }
}