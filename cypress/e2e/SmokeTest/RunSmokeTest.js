///<reference types="cypress" />
import URLs from '../../fixtures/URLs.json'
import TestData from '../../fixtures/DataFiles/TestData.json'
import addContactsRecords from '../../fixtures/Classes/Contact_Class'
import Report from "../../fixtures/Classes/Reports_Class"
import oomiDashboard from '../../fixtures/Classes/Dashboard_Class'
import WorkFlow from '../../fixtures/Classes/WorkFlow_Class'
import Entity from '../../fixtures/Classes/Entity_Class'
import PickList from '../../fixtures/Classes/PickList_Class'
import QueryBuilderCls from '../../fixtures/Classes/QueryBuilder_Class'
import Events from '../../fixtures/Classes/Events_Class'
import EntityFormDesigner from '../../fixtures/Classes/EntityFormDesigner_Class'
//creating the classes objects
const contactObj = new addContactsRecords() //https://portal.azure.com/?quickstart=True#home
const ReportsObj = new Report()
const dashboardobj = new oomiDashboard()
const WorkFlowObj = new WorkFlow()
const EntityObj = new Entity()
const PickListObj = new PickList()
const QueryBuilderObj = new QueryBuilderCls()
const EventObj = new Events()
const EntityFormDesigObj = new EntityFormDesigner()

describe ('Running the Smoke Test....', function(){

it('Add Contact Test', ()=>{
    cy.log("Calling the functions for add Contacts ...")
    cy.fixture("DataFiles/TestData").then((ContactInfo) => {
    contactObj.Smoke_addContacts()
    })//end of fixture
})


it('Reports Smoke Test', ()=>{
    ReportsObj.Smoke_Reports()
})

it('Dashboard Smoke Test', ()=>{
    dashboardobj.Smoke_Dashboard()
})

it('WorkFlow Smoke Test', ()=>{
    WorkFlowObj.Smoke_WorkFlow()

})


it('Pick List Test', ()=>{
    //PickListObj.Smoke_PickList()
   PickListObj.ProfilePickList()
                PickListObj.AddContactProfiles()
   PickListObj.AddBulkProfiles()
   PickListObj.SearchProfilePicklistRecord()

})

it('Delete Contact Test', ()=>{
    cy.log("Calling the functions for Delete Contacts...")
    cy.fixture("DataFiles/TestData").then((ContactInfo) => {
    contactObj.Smoke_DeleteContacts(ContactInfo)
    })//end of fixture
})

it('Delete the Created Profile Picklist', ()=>{
    PickListObj.deleteProfilePicklist()

})


   it('Create Custom Entity - Smoke Test', ()=>{
    cy.fixture("DataFiles/TestData").then((data) => {
    EntityObj.CreateCustomEntity(data.CustomEntityName, data.EntityRecordName)
    })//end of fixture
   })// end of it block



   it('Set Entity Attributes - Smoke Test', ()=>{
    //cy.sqlServer("select *from EntityInfo").then(function(result1) {})
            cy.fixture("DataFiles/TestData").then((EntityInfo) => {
            EntityObj.SetEntityAttributs(EntityInfo)
            })
        })
  
    it('API-SetEnity Attributes', ()=>{
        EntityObj.APISetEntityAttributes()

    })


   it('Entity Form Designer - Smoke Test', ()=>{
    cy.fixture("DataFiles/TestData").then((data) => {
    EntityFormDesigObj.Smoke_EntityFormDesigner(data)
    })  //end of fixture
   })// end of it block


    it('Add Entity Data - Smoke Test', ()=>{
        cy.fixture("DataFiles/TestData").then((data) => {
        EntityObj.AddEntityData(data)
       })
    })//end of it block

    it('API Call - Adding Data to newly created entity', ()=>{
        EntityObj.APIAddData()
        })


    it('Entity Information - Show in Query Builder', ()=>{
        cy.fixture("DataFiles/TestData").then((EntityInfo) => {
            EntityObj.setEntityInformation(EntityInfo)
            })
    })

    it('Delete Entity Attributes Smoke Test', ()=>{
    cy.fixture("DataFiles/NewCustomEntity.json").then((NewEntity) => {
    EntityObj.DeleteCustomEntity(NewEntity.NewEntityName)
    })//end of fixture
    })// end of it block



    it('Query Builder Smoke Test', ()=>{
        QueryBuilderObj.visitQBSection()
        QueryBuilderObj.saveQuery('QA_QB_Primary', 'First_name', 'John', 'First Name_Cypress')
        //QueryBuilderObj.saveAsQuery('QA_QB_Primary', 'First Name_Cypress', 'First Name_Cypress_SaveAs1')
        //QueryBuilderObj.deleteSaveAsQuery('QA_QB_Primary', 'First Name_Cypress_SaveAs1')
        QueryBuilderObj.favouriteQuery('QA_QB_Primary', 'First Name_Cypress')
        QueryBuilderObj.privateQuery('QA_QB_Primary', 'First Name_Cypress')
        //QueryBuilderObj.groupAnd('QA_QB_Primary', 'First_name', 'John', 'Age', '36')
       // QueryBuilderObj.groupOr('QA_QB_Primary', 'First_name', 'John', 'Age', '36')
        //QueryBuilderObj.groupQueries('QA_QB_Primary', 'First Name_Cypress', 'age34', 'Save Query1')
        //QueryBuilderObj.queryBuilderTemplate('QA_QB_Primary')
        //QueryBuilderObj.randomRecords('QA_QB_Primary', '3')
        //QueryBuilderObj.qbGeneralTest('QA_QB_Primary', 'First Name_Cypress')
        //QueryBuilderObj.runQueryFirstName('QA_QB_Primary', 'First_name', 'John')
        QueryBuilderObj.deleteSaveQuery('QA_QB_Primary', 'First Name_Cypress')
        })
    
    it('Verifying Query Builder Data', function (){
       // QueryBuilderObj.verifyQueryData1()
       //QueryBuilderObj.verifyQueryData2()
       //QueryBuilderObj.verifyQueryData3()
       // QueryBuilderObj.verifyQueryData4()
        //QueryBuilderObj.verifyQueryData5()
       // QueryBuilderObj.verifyQueryData6()
        //QueryBuilderObj.verifyQueryData7() //TestCase_02
       //QueryBuilderObj.verifyQueryData8() //TestCase_07
       //QueryBuilderObj.verifyQueryData9() //TestCase_09
       QueryBuilderObj.VerifyQueryBuilderTestCasesfromSourceJson()
       



    })
    

     







})//end of describe block