import { addFunc } from "../../PageObject/AddFunction";
import { CartProductNav } from "../../PageObject/CartNavigation.cy";
import { footer } from "../../PageObject/FooterLink";
import { Icons } from "../../PageObject/IconTest.cy";
import { Login } from "../../PageObject/LoginButton";
import { offer } from "../../PageObject/OfferFunction";
import { ProductCategory } from "../../PageObject/ProductCategory";
import { productFunction } from "../../PageObject/ProductFunction";
import { searchTest } from "../../PageObject/Search Function";
import { TextCkeck } from "../../PageObject/TextContent.cy";

const Search_Element = new searchTest
const Login_Element = new Login
const Product_Element = new ProductCategory
const PFunction_Element = new productFunction
const Offer_Element = new offer
const AddProduct_ELement = new addFunc
const Footer_Element = new footer
const CartNAvigation_Element = new CartProductNav
const Test_Element = new TextCkeck
const Icon_Element = new Icons


describe('BigBasket Project', () => {

  it('Search functionality testing', () => {
    cy.visit('https://www.bigbasket.com/')
    Search_Element.searchbar()
    Search_Element.searchIcon()

  });

  it('Login Button feature', () => {
    cy.visit('https://www.bigbasket.com/')
    Login_Element.loginbtn()
    Login_Element.loginClick()
  });

  it('Product Category Function', () => {
    cy.visit('https://www.bigbasket.com/')
    Product_Element.vegetables()
  });

  it('Verify Product Click function', () => {
    cy.visit('https://www.bigbasket.com/')
    PFunction_Element.productClick()
    PFunction_Element.productImage()
  });

  it('Offer Function', () => {
    cy.visit('https://www.bigbasket.com/')
    Offer_Element.offerbtn()
    Offer_Element.offerclick()
  });

  it('Add FUnction Test', () => {
    cy.visit('https://www.bigbasket.com/')
    AddProduct_ELement.addlength()
    AddProduct_ELement.addName()
    AddProduct_ELement.addClick()
  });

  it('Footer Section Test', () => {
    cy.visit('https://www.bigbasket.com/')
    Footer_Element.footerLink()
    Footer_Element.ContactUs()
    Footer_Element.AboutUs()
  });

  it('Product Cart Navigation', () => {
    cy.visit('https://www.bigbasket.com/')
    CartNAvigation_Element.navigation()
   
  });

  it('Verify Text', () => {
    cy.visit('https://www.bigbasket.com/')
    Test_Element.text()
    Test_Element.text1()
    Test_Element.text2()
    Test_Element.text3()
  });

  it.only('Icons Test', () => {
    cy.visit('https://www.bigbasket.com/')
    Icon_Element.astrikIcon()
  });

 
 
})

