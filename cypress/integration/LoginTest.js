/// <reference types="cypress"/> 

import LoginPage from "../page-objects/LoginPage"

 describe('Login Test Validation',()=>{

        const loginpage = new LoginPage();

    it("Verify valid credentials",() =>{
        
        cy.login("admin@yourstore.com", "admin")
        cy.title().should("be.equal","Dashboard / nopCommerce administration")
        cy.screenshot("1")
        
    })

    it("Test invalid credentials for login",() =>{
        
        cy.login("admin@yourstore.com", "admin123")
        loginpage.invalidMessage().should("have.text","Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect\n")      
        cy.title("Your store. Login")
        cy.screenshot("2")
    })

    it("Validate error message for invalid username",() =>{
        
        cy.login("admin123@yourstore.com", "admin")
        loginpage.invalidMessage().should("have.text","Login was unsuccessful. Please correct the errors and try again.No customer account found\n")
        cy.title("Your store. Login")
        cy.screenshot("3")
    })

    it("Validate error message for the invalid password",() =>{
        
        cy.login("admin123@yourstore.com", "admin123")
        loginpage.invalidMessage().should("have.text","Login was unsuccessful. Please correct the errors and try again.No customer account found\n")
        cy.title("Your store. Login")
        cy.screenshot("4")
    })

    

 })