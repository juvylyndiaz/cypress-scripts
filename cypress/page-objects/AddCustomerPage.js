class AddCustomerPage{

    newEmailTxtBox(){
       return cy.get('input[name="Email"]');
    }

    newPasswordTextBox(){
        return cy.get('input[name="Password"]');
     }

     firstName(){
        return cy.get('input[name="FirstName"]');
     }

     lastName(){
        return cy.get('input[name="LastName"]');
     }

     generMale(){
        return cy.get('input[id="Gender_Male"]');
     }

     genderFemale(){
        return cy.get('input[id="Gender_Female"]');
     }

     birthDate(){
        return cy.get('input[id="DateOfBirth"]');
     }

     companyName(){
        return cy.get('input[name="Company"]');
     }

     isTaxExempt(){
        return cy.get('input[id="IsTaxExempt"]');
     }

     newsLetter(){
        return cy.get('select[id="SelectedNewsletterSubscriptionStoreIds"]').prev()
     }

     customerRoles(){
        return cy.get('select[id="SelectedCustomerRoleIds"]').prev()
     }

     managerVendor(){
        return cy.get('select[id="VendorId"]');
     }

     adminComment(){
        return cy.get('textarea[id="AdminComment"]');
     }

}
export default AddCustomerPage