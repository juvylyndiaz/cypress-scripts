class CustomersHomePage{
    addNewButton(){
        return cy.get("a:contains('Add new')")
    }
}

export default CustomersHomePage;