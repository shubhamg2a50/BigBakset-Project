export class CartProductNav{


    navigation() {
        cy.get(':nth-child(1) > :nth-child(1) > .SKUDeck___StyledDiv-sc-1e5d9gk-0').click()
    }

    cartvisit() {
        cy.visit('https://www.bigbasket.com/pd/10000025/fresho-banana-robusta-1-kg/?nc=smart_basket&nc=My+Smart+Basket&t_pg=%252Foct-homepage-t1%252F&t_p=Oct-T1_2023&t_pos_sec=3&t_ch=desktop&t_pos_item=1&t_s=Banana+-+Robusta')
    }

    addtobasket() {
        cy.get('[class="Button-sc-1dr2sn8-0 CTA___StyledButton-sc-yj3ixq-5 kYQsWi bYACar"]').click()
    }

    message(){
        cy.get('[class="Toast___StyledDiv2-sc-1uergwq-2 fzMvcz"]').should('be.visible')
    }
}