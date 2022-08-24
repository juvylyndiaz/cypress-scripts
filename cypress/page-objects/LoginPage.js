/// <reference types="cypress"/> 
    
class LoginPage{

    emailTxtBox(){
     return cy.get('input[name="Email"]')
    }

    passwordTxtBox(){
     return cy.get('input[name="Password"]')
    }

    submitBtn(){
     return cy.get('button[type="submit"]')
    }

    invalidMessage(){
     return cy.get('div[class="message-error validation-summary-errors"]')
    }

    
 }
 export default LoginPage