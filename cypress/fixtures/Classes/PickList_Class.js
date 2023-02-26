///<reference types="cypress" />
import URLs from '../URLs.json'
import PickListPOs from '../PageObjects/PickListPOs';
import PickListData from '../DataFiles/PickListData.json'
const PickListPO = new PickListPOs()
const Ran= Math.random()*5000
class PickList{

    Smoke_PickList(){
    cy.log('Running the Pick List smoke test function')
    cy.preserveCookies();
    cy.oomiLoginIfNot();
    cy.fixture("URLs").then((visitURL) => {
        cy.visit(visitURL.PickListURL)
    })
    PickListPO.getPickListLink().click()
    PickListPO.getDescription().type(PickListData.Description+Ran)
    PickListPO.getActiveCheckBox().click()
    PickListPO.getAvailableOnPortal().click()
    PickListPO.getSubmit().click()
    cy.oomiButtonClick('Save')
    PickListPO.getTitle().should('contain', PickListData.Description+Ran)
    cy.log('Successful added pick list')

    }
    ProfilePickList(){
        cy.oomiLoginIfNot();
    cy.fixture("URLs").then((visitURL) => {
        cy.visit(visitURL.PickListURL)
    })
    PickListPO.getPickListLink().click()
    cy.wait(2000)
    PickListPO.getExpandList().click()
    PickListPO.getList().contains(PickListData.ProfileName).click()
    cy.oomiButtonClick('Add Profile')
    PickListPO.getProfilesCheckBox().contains(PickListData.ProfileName).last().rightclick()
    PickListPO.getRename().wait(2000).type(PickListData.ProfileName)
    cy.oomiButtonClick('Refresh')
      

    }

    AddContactProfiles(){


       cy.oomiLoginIfNot()
        /*
        cy.fixture("URLs").then((visitURL) => {
            cy.visit(visitURL.ContactListURL2)
        })
        */

        PickListPO.getMainCRMMenuLink().click()
        PickListPO.getContactsLink().click()
    

        PickListPO.getSearch().type(PickListData.Contact_FirstName).type('{enter}')
        cy.wait(3000)
        PickListPO.getView().first().click()
        PickListPO.getProfiles().click()
        cy.wait(3000)
        PickListPO.getProfilesCheckBox().contains(PickListData.ProfileName).click()
        cy.oomiButtonClick('Save')
    }

    AddBulkProfiles(){
        cy.log("Start Time: "+new Date().toLocaleString());
        cy.oomiLoginIfNot();
        cy.fixture("URLs").then((visitURL) => {
          cy.visit(visitURL.QueryBuilderURL)
        })
        PickListPO.getLookFor().first().click()

        //below code is commited because demo1 and dem3 are not working for picklist
        /*
        cy.fixture("DataFiles/NewCustomEntity.json").then((NewEntity) => {
        PickListPO.getLookingForText().type(NewEntity.NewEntityName)
        PickListPO.getDropDownItems().contains(NewEntity.NewEntityName).click()
        })//end of fixture
        */
        PickListPO.getLookingForText().type(PickListData.QBLookForEntityName)
        PickListPO.getDropDownItems().contains(PickListData.QBLookForEntityName).click()
        PickListPO.click_QB_AddDropDown() //Expand
        PickListPO.getAddDropDownSearchArea().type(PickListData.QBAttributeName) //type and search
        PickListPO.getDropDown().contains(PickListData.QBAttributeName).click({force: true}) // click the result
        PickListPO.getOperatorDropDownQB().select(PickListData.SecondColumnOperatorValue)
        PickListPO.getTextValue().first().type(PickListData.ThirdColumnValue)
        cy.oomiButtonClick('Run Query')
        PickListPO.getAlertYesBtn().click({force: true})
        //PickListPO.getAlertOkBtn().click()
        //cy.oomiButtonClick('Action')
        cy.wait(2000)
        PickListPO.getActionBtn().click()
        PickListPO.getActionDropDown().select(PickListData.ActionDropDownValue)
        cy.oomiButtonClick('Go!')
        PickListPO.getProfilesCheckBox().contains(PickListData.ProfileName).click()
        PickListPO.getSaveBtn().click()
        PickListPO.getMessage().should('have.text', 'Profiles have been assigned successfully.')
        PickListPO.getOkButtonAlertProfile().click()
    }

    SearchProfilePicklistRecord(){
        cy.log("Start Time: "+new Date().toLocaleString());
        cy.oomiLoginIfNot();
        cy.fixture("URLs").then((visitURL) => {
          cy.visit(visitURL.QueryBuilderURL)
        })
        PickListPO.getLookFor().first().click()

        //below code is commited because demo1 and dem3 are not working for picklist
        /*
        cy.fixture("DataFiles/NewCustomEntity.json").then((NewEntity) => {
        PickListPO.getLookingForText().type(NewEntity.NewEntityName)
        PickListPO.getDropDownItems().contains(NewEntity.NewEntityName).click()
        })//end of fixture
        */
        PickListPO.getLookingForText().type(PickListData.QBLookForEntityName)
        PickListPO.getDropDownItems().contains(PickListData.QBLookForEntityName).click()
        PickListPO.click_QB_AddDropDown() //Expand
        PickListPO.getAddDropDownSearchArea().type('Profile') //type and search
        PickListPO.getProfileListItem().contains('Profile').click()
        PickListPO.QB_AddDropDown().last().click() //Expand
        PickListPO.getAddDropDownSearchArea().last().type('Profile Picklist ID', {force: true}) //type and search
        PickListPO.getOperatorDropDown().contains('Profile Picklist ID').click()
        PickListPO.getOperatorDropDownQB().select('In a List') //type and search
        PickListPO.getCriteriaInput().click()
        PickListPO.getProfilesCheckBox().contains(PickListData.ProfileName).click()
        PickListPO.getSaveBtn().click()
        cy.oomiButtonClick('Run Query')
        PickListPO.getAlertYesBtn().click()
        PickListPO.getGridRows().should('have.length', PickListData.GridRows)

    }
    deleteProfilePicklist(){
        cy.log("Start Time: "+new Date().toLocaleString());
        cy.oomiLoginIfNot();
        cy.fixture("URLs").then((visitURL) => {
            cy.visit(visitURL.PickListURL)
        })
        PickListPO.getPickListLink().click()
        cy.wait(2000)
        PickListPO.getExpandList().click()
        PickListPO.getList().contains(PickListData.ProfileName).click()
        //PickListPO.getProfilesCheckBox().contains(PickListData.ProfileName).last().rightclick()
       // PickListPO.getRemove().wait(2000).type(PickListData.ProfileName)
       PickListPO.getProfilesCheckBox().contains('QA Dept').dblclick()
       cy.oomiButtonClick('Remove')
       cy.oomiButtonClick('Refresh')

    }





} //end of class

export default PickList