class DashboardPOs{


    getOptionSetup(){
        return cy.get('#option-setup')
    }
    geTitle(){
        return cy.title()
    }
    getSetupLink(){
        return cy.get('h5')
    }
    getExpandArrow(){
        return cy.get('a')
    }
    getDashboard(){
        return cy.get('#collapse0 > .card-body > .list-group > :nth-child(1) > a')
    }
    getExpandDashboard(){
        return cy.get('.row > :nth-child(1) > .btn')
    }
    getDashboardName(){
        return cy.get('#DashboardName')
    }
    getButton(){
        return cy.get('.btn')
    }
    getSettings(){
        return cy.get('#Settings > a')
    }
    getAnchor(){
        return cy.get('#78aa0322-4873-41e3-acdc-edba8894c055_anchor')
    }

    getOKButton(){
        return cy.get('#btnOk2')
    }
    getUsers(){
        return cy.get('select#AllClientUsers')
    }
    getDashboardUsers(){
        return cy.get('[name ="AllClientUsers2DashboardUsers"]')
    }
    getOkButton2(){
        return cy.get('#btnOk')
    }


}

export default DashboardPOs