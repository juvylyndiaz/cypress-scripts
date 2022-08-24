/// <reference types="cypress"/> 

import LoginPage from "../page-objects/LoginPage"
import AddCustomerPage from "../page-objects/AddCustomerPage"
import DashboardMenu from "../page-objects/DashboardMenu";
import CustomersHomePage from "../page-objects/CustomersHomePage";
let rowsLength;
describe('Login Test Validation',()=>{

       const loginpage = new LoginPage();
       const addcustomer = new AddCustomerPage();
       const dashboardmenu = new DashboardMenu();
       const customershomepage = new CustomersHomePage();

       before(() => {
        cy.task('readXlsx', { file: 'cypress/fixtures/CustomerData.xlsx', sheet: "Customer" }).then((rows) => {
           rowsLength = rows.length;
           cy.writeFile("cypress/fixtures/CustomerData.json", {rows})
         })

         })

   it("Add multiple customers",() =>{

    cy.fixture('CustomerData').then((data) => {
        for ( let i = 0; i < rowsLength; i++) {
       
       cy.login("admin@yourstore.com", "admin")
       cy.title().should("be.equal","Dashboard / nopCommerce administration")
       cy.screenshot("1")
       dashboardmenu.menuButton().click()
       cy.wait(5000)
       dashboardmenu.customersDropdown().click();
       dashboardmenu.customersOption().click();
       customershomepage.addNewButton().click();
       addcustomer.newEmailTxtBox().type(data.rows[i].Email);
       addcustomer.newPasswordTextBox().type(data.rows[i].Password);
       addcustomer.firstName().type(data.rows[i].firstname);
       addcustomer.lastName().type(data.rows[i].lastname);
      //check the gender stated in excel
       if(data.rows[i].Gender==="Female"){
        addcustomer.genderFemale().check()
       }else{
        addcustomer.generMale().check()
       }

       addcustomer.birthDate().type("July 11, 1995");
       addcustomer.companyName().type(data.rows[i].companyname);

       //Check if the tax exempt is true, check the checkbox
       if(data.rows[i].isTaxExempt==="Yes"){
        addcustomer.isTaxExempt().check()
       }

       addcustomer.newsLetter().type(data.rows[i].NewsLetter).type('{enter}')
       addcustomer.adminComment().type(data.rows[i].AdminComment);
    }
        })
    
       
   })
})