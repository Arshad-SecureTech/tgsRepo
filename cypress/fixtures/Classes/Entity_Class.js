///<reference types="cypress" />
import URLs from '../URLs.json'
import TestData from '../DataFiles/TestData.json'
import LoginPage from '../../fixtures/PageObjects/LoginPageObjects'
import HomePagePOs from '../../fixtures/PageObjects/HomePagePOs'
import LeftMenuPOs from '../../fixtures/PageObjects/LeftMenuPOs'
import SetupScreenPOs from '../../fixtures/PageObjects/SetupScreenPOs'
import EntityCreationPOs from '../../fixtures/PageObjects/EntityCreationPOs'
import EntityAttributesPOs from '../../fixtures/PageObjects/EntityAttributesPOs'
import CommonFunctions from '../../fixtures/PageObjects/CommonFunctions'
const EntityData = require('../DataFiles/EntityData.json')
import Ommi_CRM_Login from './Login_Class'
const data = require('../DataFiles/EntityFieldsData.json')
var AttributesData = require('../DataFiles/EntityAttributesData.json')
const validatorData = require('../DataFiles/JsonTestData.json')
const {expect} = require("chai").use(require('chai-json-schema'));



import '@4tw/cypress-drag-drop'
var Ran= Math.random()*5000
const LeftMenuObject= new LeftMenuPOs()
const SetupScreenObject= new SetupScreenPOs()
const EntityCreationObject = new EntityCreationPOs()
const EntityAttributeObject = new EntityAttributesPOs()
const common= new CommonFunctions()


class Entity{

    CreateCustomEntity(CustomEntityName, EntityRecordName){
        cy.log("Start Time: "+new Date().toLocaleString());
        cy.log('Calling the CreateCustomEntity function...')
        cy.oomiDateTime().then(($text) => {
            var  timestamp = $text
            cy.oomiLoginIfNot();
    cy.visit('/')
    LeftMenuObject.clickSetupLink().click({force: true})
    SetupScreenObject.getSetupSearch().type('custom entity')
    SetupScreenObject.getCustomLink('Custom Entity').click()
    EntityCreationObject.getLabelField().type(CustomEntityName+timestamp)
    EntityCreationObject.getRecordName().type(EntityRecordName+timestamp)
    EntityCreationObject.getStartingNumberField().type('1')
    EntityCreationObject.getAllowActivitiesCB().check()
    EntityCreationObject.getTrackingFieldHistoryCB().check()
    EntityCreationObject.getDeployedRB().check()
    EntityCreationObject.getSaveButton().click()
    // Adding Entity to Module 
    cy.wait(7000)
    EntityCreationObject.getShowInMenu().check({force: true})
    EntityCreationObject.getShowInMenu().uncheck({force: true})
    cy.wait(2000)
    EntityCreationObject.getShowInMenu().check({force: true})
    EntityCreationObject.getShowInMenu().uncheck({force: true})
    cy.wait(2000)
    EntityCreationObject.getShowInMenu().check({force: true})
    EntityCreationObject.getAnchor().click({force:true})
    cy.wait(5000)
    EntityCreationObject.getCRM().click({force: true})
    EntityCreationObject.getHi().dblclick({force: true})
   
    
    cy.oomiButtonClick('Save')
    cy.readFile("cypress/fixtures/DataFiles/NewCustomEntity.json", (data) => { }).then((data) => {
      data.NewEntityName = CustomEntityName+timestamp
      cy.writeFile("cypress/fixtures/DataFiles/NewCustomEntity.json", JSON.stringify(data))
    })

        LeftMenuObject.clickSetupLink().click({force: true})
        cy.fixture("DataFiles/NewCustomEntity.json").then((NewEntity) => {
        SetupScreenObject.getSetupSearch().type(NewEntity.NewEntityName)
        EntityCreationObject.getAnchor1().contains(NewEntity.NewEntityName).click()
        cy.oomiEntity(NewEntity.NewEntityName, 'Entity Information')
        })
        cy.wait(3000)
        cy.oomiButtonClick('Edit')
        EntityCreationObject.getShowInQBCheckBox().check({force: true})
        cy.oomiButtonClick('Save')


   })//end of timestamp

    }//end of function


    SetEntityAttributs(EntityInfo){
        cy.log("Start Time: "+new Date().toLocaleString());
        cy.log('Calling the SetEntityAttributes function...')
        cy.oomiLoginIfNot();
        cy.visit('/')
        LeftMenuObject.clickSetupLink().click({force: true})
        cy.fixture("DataFiles/NewCustomEntity.json").then((NewEntity) => {
        SetupScreenObject.getSetupSearch().type(NewEntity.NewEntityName)
        EntityCreationObject.getAnchor1().contains(NewEntity.NewEntityName).click()
        cy.oomiEntity(NewEntity.NewEntityName, 'Attributes')
        })//end of fixture

        EntityCreationObject.getNewBtn().should('be.visible').click()
        data.forEach(data=>{
        cy.wait(2000)
        EntityCreationObject.getEntityAttribute(data.FieldControl).click({force: true})
        cy.wait(2000)
        EntityAttributeObject.getCustomLink('Next').should('be.visible').click()
        cy.wait(2000)
        EntityAttributeObject.getAttributeField().type(data.Field)
        cy.wait(2000)
        EntityAttributeObject.getCustomLink('Save & New').should('be.visible').click()
        cy.wait(2000)

        if(data.LoopCount=='2')
        {
        EntityAttributeObject.getOKButton9().click()
        EntityAttributeObject.getCaption().type('Member', {force: true})
        cy.oomiButtonClick("Add")
        EntityAttributeObject.get2ndCaption().last().type('Non-Member',{force: true})
        EntityAttributeObject.getCustomLink('Save & New').should('be.visible').click({force: true})
        }
        else if (data.LoopCount==='1')
        {
            EntityAttributeObject.getDecimalPlaces().clear().type('3')
            EntityAttributeObject.getLength().clear().type('36')
            EntityAttributeObject.getCustomLink('Save & New').click()
        }
        })// end of foreach block
        }//end of function

    APISetEntityAttributes(){

      cy.log("Start Time: "+new Date().toLocaleString());
      cy.log('Calling the SetEntityAttributes function...')
      cy.oomiLoginIfNot();
      cy.visit('/')
      LeftMenuObject.clickSetupLink().click({force: true})
      cy.fixture("DataFiles/NewCustomEntity.json").then((NewEntity) => {
      SetupScreenObject.getSetupSearch().type(NewEntity.NewEntityName)
      EntityCreationObject.getAnchor1().contains(NewEntity.NewEntityName).click()
      cy.oomiEntity(NewEntity.NewEntityName, 'Attributes')
      })//end of fixture

      
   //Adding entity attributes through API calls
   EntityCreationObject.getNewBtn().should('be.visible').click()
   EntityCreationObject.getTextField1().click({force: true})
   //cy.get(APIAttributes.DataType).click({force: true})
    EntityAttributeObject.getCustomLink('Next').should('be.visible').click()

    

      AttributesData.forEach(APIAttributes=>{
   
      const url = "https://ui.oomi.co.uk/EntityLayout/SaveAttributeDetail"
          cy.request({
            method: 'POST',
            url: url,
            form: true, 
            body: {

            DataTypeId: APIAttributes.DataTypeID,
            EntityId: '86760',
            ClientEntityId: '88389',
            AttributeLabel: APIAttributes.AttributeLabel,

            'Numeric.Length': APIAttributes.Numeric_Length,
            'AlphaNumeric.Length': APIAttributes.AlphaNumeric_Length,
            'Numeric.DecimalPlaces': APIAttributes.Numeric_DecimalPlaces,

            AttributeName: APIAttributes.AttributeName,
            AttributeApiCaption: APIAttributes.AttributeApiCaption,
            DoNotExposeInApi: APIAttributes.DoNotExposeInApi,
            Description: APIAttributes.Description,
            HelpText: APIAttributes.HelpText,

            'Numeric.DefaultValue': APIAttributes.Numeric_DefaultValue,

            AttributeTypeId: APIAttributes.AlignmentTypeId,
            AlignmentTypeId: APIAttributes.AlignmentTypeId,
            ShowInHeaderRank: APIAttributes.ShowInHeaderRank,

            'GroupDefinitions.Index': APIAttributes.GroupDefinitions_Index,
            'GroupDefinitions[None00].RecordId': APIAttributes.GroupDefinitions_RecordId,
            'GroupDefinitions[None00].SystemName': APIAttributes.GroupDefinitions_SystemName,
            'GroupDefinitions.Index': APIAttributes.GroupDefinitions2_Index,
            'GroupDefinitions[NewAnswer562010].RecordId': APIAttributes.GroupDefinitions2_RecordId,
            'GroupDefinitions[NewAnswer562010].IsDelete': APIAttributes.GroupDefinitions_IsDelete,
            'GroupDefinitions[NewAnswer562010].SystemName': APIAttributes.GroupDefinitions2_SystemName







            },
          })

  
         
    }) //end of for each loop
    cy.oomiButtonClick('Cancel')

   }//end of function 


    DeleteCustomEntity(CustomEntityName){
        cy.log('Calling the DeleteCustomEntity function...')
        cy.oomiLoginIfNot();
        cy.visit('/')
        LeftMenuObject.clickSetupLink().click({force: true})
        SetupScreenObject.getSetupSearch().type(CustomEntityName)
        EntityCreationObject.getAnchor().contains(CustomEntityName).click()
        cy.oomiEntity(CustomEntityName, 'Attributes')
        EntityCreationObject.getDeleteEntity().click()
        EntityCreationObject.getEntityDeleteConfirmBtn().click()
    }

    AddEntityData(data){
        cy.log("Start Time: "+new Date().toLocaleString());
        cy.log('Calling the AddEntityData function...')
        var loginObj= new Ommi_CRM_Login
        loginObj.oomiLoginWithoutSession()
        EntityCreationObject.getCRMMenuLink().click({force: true})
        EntityCreationObject.getHIMenuLink().click()
        cy.fixture("DataFiles/NewCustomEntity.json").then((NewEntity) => {
        EntityCreationObject.getEntity().contains(NewEntity.NewEntityName).click()
        })
        EntityData.forEach(Entity=>{
        cy.oomiButtonClick('Add')
        EntityCreationObject.getTextField().clear().then(e=>{if(Entity.FirstName_Text !=='') cy.wrap(e).type(Entity.FirstName_Text)})
        EntityCreationObject.getNumber().clear().then(e=>{if(Entity.Age_Number !=='') cy.wrap(e).type(Entity.Age_Number)})
        EntityCreationObject.getCheckBox().check({force: true})
        EntityCreationObject.getCurrency().clear().then(e=>{if(Entity.Amount_Currency !=='') cy.wrap(e).type(Entity.Amount_Currency)})
        EntityCreationObject.getDate().clear().then(e=>{if(Entity.Joining_Date !=='') cy.wrap(e).type(Entity.Joining_Date)})
        EntityCreationObject.getPickList().then(e=>{if(Entity.Gender_LookupRelationship !=='') cy.wrap(e).select(Entity.Gender_LookupRelationship)})
        EntityCreationObject.getTextArea().then(e=>{if(Entity.Description_TextArea !=='') cy.wrap(e).type(Entity.Description_TextArea)})
        EntityCreationObject.getTime().clear().then(e=>{if(Entity.Time_Time !=='') cy.wrap(e).type(Entity.Time_Time)})
        EntityCreationObject.getStatus(Entity.Status_Radio_Button).click()
        EntityCreationObject.getTextAreaLong1().clear().then(e=>{if(Entity.Description_TextAreaLong !=='') cy.wrap(e).type(Entity.Description_TextAreaLong)})
        //EntityCreationObject.getGenderLookup().type(Entity.Gender_LookupRelationship).type('{enter}')
        cy.oomiButtonClick('Save & Close')
        })
    }

    setEntityInformation(EntityInfo){
        cy.log("Start Time: "+new Date().toLocaleString());
        cy.oomiLoginIfNot();
        cy.visit('/')
        LeftMenuObject.clickSetupLink().click({force: true})
        cy.fixture("DataFiles/NewCustomEntity.json").then((NewEntity) => {
        SetupScreenObject.getSetupSearch().type(NewEntity.NewEntityName)
        EntityCreationObject.getAnchor1().contains(NewEntity.NewEntityName).click()
        cy.oomiEntity(NewEntity.NewEntityName, 'Entity Information')
        })
        cy.wait(3000)
        cy.oomiButtonClick('Edit')
        EntityCreationObject.getShowInQBCheckBox().check({force: true})
        cy.oomiButtonClick('Save')
      }

      

    APIAddData(){
    cy.log("Start Time: "+new Date().toLocaleString());
    var loginObj= new Ommi_CRM_Login
    loginObj.oomiLoginWithoutSession()
    EntityCreationObject.getCRMMenuLink().click({force: true})
    EntityCreationObject.getHIMenuLink().click()
    cy.fixture("DataFiles/NewCustomEntity.json").then((NewEntity) => {
    EntityCreationObject.getEntity().contains(NewEntity.NewEntityName).click()
    })

   // cy.oomiButtonClick('Add')
  // cy.oomiButtonClick('Save & Close')

 

   cy.url().then(url => {
    const getUrl = url
    cy.log('Current URL is : '+getUrl)

    const currentURL = getUrl.split('/')
    const splitedUrl = currentURL[5]
     cy.log('Splited URL is :' +splitedUrl)

    let firstStringPosition=1;
    let secondStringPosition=25;
    var EntityId=splitedUrl.substring(firstStringPosition, secondStringPosition )
    cy.log('Entity ID is: '+EntityId)

    let firstStringPosition1=27;
    let secondStringPosition1=51;
    var ClientEntityId1=splitedUrl.substring(firstStringPosition1, secondStringPosition1 )
    cy.log(' ClientEntityId1 is: '+ClientEntityId1)
    EntityData.forEach(APIEntity=>{
        const url = "https://ui.oomi.co.uk/EntityLayout/SaveEntityEdit?standardAttribute=Attribute001"
         cy.request({
            method: 'POST',
            url: url,
            form: true, 
            body: {
              
              IsUpdate: 'False',
              InsertNewRecord: 'False',
              SaveAndClose: true,
              EntityLink: 'N',
              isRelatedList: 'False',
              ClientEntityId1: ClientEntityId1,
              EntityId: EntityId,
              ServiceId: '1pLDnDK1tmx52iDTlycBfw==',
              hdIsNew: '0',
              RecordId: '0',
              Attribute002: APIEntity.FirstName_Text,
              Attribute003: APIEntity.Age_Number,
              Attribute004: APIEntity.Active_CheckBox,
              Attribute005: APIEntity.Amount_Currency,
              Attribute006: APIEntity.Joining_Date,
              Attribute007: APIEntity.Gender_LookupRelationship,
              Attribute009: APIEntity.Description_TextArea,
              Attribute012: APIEntity.Time_Time,
              Attribute013: APIEntity.Status_Radio_Button,
              Attribute014: APIEntity.Description_TextAreaLong,
            },
          })
        }
    )

 })//end of url split function

} //end of foreach
}//end of class
export default Entity