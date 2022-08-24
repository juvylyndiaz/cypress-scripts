class DashboardMenu{

    menuButton(){
        return cy.get('a[data-widget="pushmenu"]')
    }
    customersDropdown(){
        return cy.get('i[class="nav-icon far fa-user"]')
    }

    customersOption(){
        return cy.get('p:contains("Customers")').eq(1)
    }
}
export default DashboardMenu