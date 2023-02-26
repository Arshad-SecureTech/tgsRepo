///<reference types="cypress" />
import URLs from '../URLs.json'
import DashboardPOs from "../PageObjects/DashboardPO";
const DashboardPO = new DashboardPOs()


class oomiDashboard{

Smoke_Dashboard(){
    
    cy.preserveCookies();
    cy.oomiLoginIfNot();
    cy.visit('/')

    DashboardPO.getOptionSetup().click({force: true})
    DashboardPO.getSetupLink().contains('Setup').parent()
    .within(function(){
    DashboardPO.getExpandArrow().eq(0).click({force: true})
    })
    DashboardPO.getDashboard().click({ force: true })
    DashboardPO.getExpandDashboard().click()
    DashboardPO.getDashboardName().click().clear().type('Auto_delete'+ Date.now())
    DashboardPO.getButton().contains('Save and Next').click()
    DashboardPO.getSettings().click()
    DashboardPO.getAnchor().dblclick();
    DashboardPO.getOKButton().click()
    DashboardPO.getUsers().select('Demo1_EYA')
    DashboardPO.getDashboardUsers().click();
    DashboardPO.getOkButton2().click()
}

}

export default oomiDashboard