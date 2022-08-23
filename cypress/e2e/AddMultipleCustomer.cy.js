 /// <reference types="cypress"/> 

 import LoginPage from "../page-objects/LoginPage"

 describe('Login Test Validation',()=>{

        const loginpage = new LoginPage();

    it("Add multiple customers",() =>{
        
        cy.login("admin@yourstore.com", "admin")
        cy.title().should("be.equal","Dashboard / nopCommerce administration")
        cy.screenshot("1")

        
        
    })
})
