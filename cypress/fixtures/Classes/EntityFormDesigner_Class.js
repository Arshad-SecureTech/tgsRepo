///<reference types="cypress" />
import URLs from '../URLs.json'
import EntitySetupSecPO from '../PageObjects/EntitySetupSecPO'
import TestData from '../DataFiles/TestData.json'
const EntityPO = new EntitySetupSecPO()
import Ommi_CRM_Login from './Login_Class'

class EntityFormDesigner{

    Smoke_EntityFormDesigner(data){
        /*
        cy.clearCookies()
        cy.log('Running the Entity Form Designer smoke test function')
        cy.oomiLoginIfNot();
        cy.visit('/')
        cy.fixture("URLs").then((visitURL) => {
            cy.visit(visitURL.visitSetupSection)
        })
        EntityPO.getSearch().clear()

        */

        cy.getCookies().should('have.length.gte', 0).then(($oomiCooki)=>{
            if(!$oomiCooki.length){
                cy.log('No cookies are saved...')
                cy.log('oomiLogin function is called...')
                var loginObj= new Ommi_CRM_Login
                loginObj.oomiLogin()
                cy.preserveCookies()

                cy.fixture("URLs").then((visitURL) => {
                    cy.visit(visitURL.visitSetupSection)
                })
               
    
            }
            cy.log('Applicaton is already logged in...')
            
            cy.fixture("URLs").then((visitURL) => {
                cy.visit(visitURL.visitSetupSection)
            })

        })//end of method


        EntityPO.getSearch().clear()
        cy.fixture("DataFiles/NewCustomEntity.json").then((NewEntity) => {

        EntityPO.getSearch().type(NewEntity.NewEntityName)
        EntityPO.getSearchLbl().contains(NewEntity.NewEntityName).click({force: true})
        cy.oomiEntity(NewEntity.NewEntityName, 'Form Designer')
        })


        //EntityPO.getFormDesignerLink1().contains('Form Designer').click({force: true})
        //Drag and drop custom command
        cy.dragDropEntityFormDesigner(data.TextField, '#col-1>.empty')
        cy.dragDropEntityFormDesigner(data.Number, '#col-1>.empty')

        cy.dragDropEntityFormDesigner(data.Checkbox, '#col-1>.empty')
        cy.dragDropEntityFormDesigner(data.Currency, '#col-1>.empty')
        cy.dragDropEntityFormDesigner(data.Date, '#col-1>.empty')
        cy.dragDropEntityFormDesigner(data.PickList, '#col-1>.empty')
        cy.dragDropEntityFormDesigner(data.Description, '#col-1>.empty')

        cy.dragDropEntityFormDesigner(data.LookUpRelationship, '#col-2>.empty')
        cy.dragDropEntityFormDesigner(data.Time, '#col-2>.empty')
        cy.dragDropEntityFormDesigner(data.RadioButton, '#col-2>.empty')
        cy.dragDropEntityFormDesigner(data.Description2, '#col-2>.empty')
        cy.dragDropEntityFormDesigner(data.Description3, '#col-2>.empty')


        //cy.dragDropEntityFormDesigner(data.File, '#col-2>.empty')
        //cy.dragDropEntityFormDesigner(data.Password, '#col-2>.empty')
        //cy.dragDropEntityFormDesigner(data.PasswordHash, '#col-2>.empty')

        EntityPO.getEntityFormDesigSaveBtn().click({force: true})
        EntityPO.getSaveConfirmationOkBtn().click()
    }





}//end of class

export default EntityFormDesigner