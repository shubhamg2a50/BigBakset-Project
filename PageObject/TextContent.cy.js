export class TextCkeck{

    text() {
        cy.xpath('(//span[@class="Label-sc-15v1nk5-0 CustomSection___StyledLabel-sc-1cgvpp1-7 gJxZPQ jdexhY"])[4]').contains('Beverages') 
    }

    text1() {
        cy.xpath('(//span[@class="Label-sc-15v1nk5-0 CustomSection___StyledLabel-sc-1cgvpp1-7 gJxZPQ jdexhY"])[1]').contains('Top Offers')
    }

    text2() {
        cy.xpath('(//span[@class="Label-sc-15v1nk5-0 CustomSection___StyledLabel-sc-1cgvpp1-7 gJxZPQ jdexhY"])[2]').contains('Fruits and Vegetables')
    }

    text3() {
        cy.xpath('(//span[@class="Label-sc-15v1nk5-0 CustomSection___StyledLabel-sc-1cgvpp1-7 gJxZPQ jdexhY"])[3]').contains('Your Daily Staples')
    }
    
}