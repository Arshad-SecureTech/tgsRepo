///<reference types="cypress" />

import URLs from '../URLs.json'
import LoginUsers from '../../fixtures/LoginUsers.json'
import TestData from '../DataFiles/TestData.json'
const QBData = require('../DataFiles/QBData.json')
const QBData1 = require('../DataFiles/QBData1.json')
//import QBData1 from '../DataFiles/QBData1.json'
import QueryBuilderTestCaseConnection from '../DataFiles/QBTestCases.json'
//import QueryBuilderTestCaseConnection from '../DataFiles/QueryBuilderTestCases.json'
//import { indexOf } from 'cypress/types/lodash';
//const { _, $ } = Cypress
import QBTestCaseConnection from '../DataFiles/QueryBuilderTestCases.json'
import EntityData from '../DataFiles/EntityData.json'
import QueryBuilderPO from '../PageObjects/QueryBuilderPO'
import { type } from 'mocha/lib/utils'
const QBPO = new QueryBuilderPO
import Ommi_CRM_Login from './Login_Class'

class QueryBuilderClass{

   
    IntialList = [];
    visitQBSection(){
      cy.preserveCookies();
      cy.oomiLoginIfNot();
      cy.fixture("URLs").then((visitURL) => {
      cy.visit(visitURL.QueryBuilderURL)
    })
        
      }

      saveQuery(entityName, attributeName, fieldValue, queryName ){
        cy.log('Save Query function is called....')
      QBPO.getLookForButton().click()
        QBPO.getLookForSearchBox().type(entityName)
        QBPO.getDropDownItems().contains(entityName).click()
        cy.wait(2000)
        QBPO.getQBAdd().click()
        QBPO.getAddTextArea().type(attributeName)
        QBPO.getDropDownItems().contains(attributeName).click({force: true})
        QBPO.getOperatorTArea().type(fieldValue)
        QBPO.getOptionsDropDown().click()
        QBPO.getOptionSave().click()
        QBPO.getSaveQueryName().click()
        QBPO.getSaveQueryName().type(queryName)
        QBPO.getSaveChangesBtn().click()
        QBPO.getSaveAlertMsg().should('have.text', 'Query saved successfully!')
        //QBPO.getOkSaveBtn().click()
        QBPO.getOkBtn().click()
      }

      deleteSaveQuery(entityName, savedQueryName){
        //QBPO.getLookingFor().click()
        //QBPO.getLookingForText().type(entityName)
        //QBPO.getDropDownItems().contains(entityName).click()
        QBPO.getSaveQuery().click()
        QBPO.getSaveQueryTxt().type(savedQueryName)
        QBPO.getDropDownItems().contains(savedQueryName).click()
        QBPO.getDeleteQueryBtn().click()
        QBPO.getDeleteYesBtn().first().click({force: true})
        QBPO.getDeleteYesMsg().should('have.text', "Query deleted successfully.")
        QBPO.getDeleteOKBtn().click()
      }

      saveAsQuery(entityName, savedQueryName, saveAsName){
        //QBPO.getLookingFor().click()
        //QBPO.getLookingForText().type(entityName)
        //QBPO.getDropDownItems().contains(entityName).click()
        QBPO.getSaveQueryDropDown().click()
        QBPO.getDropDownItems().contains(savedQueryName).click()
        QBPO.getOptionsDropDown().click()
        QBPO.getOptionSaveAs().click()
        QBPO.getSaveAsTxtName().click()
        QBPO.getSaveAsTxtName().type(saveAsName)
        QBPO.getSaveAsBtn().click()
      }

      deleteSaveAsQuery(entityName, savedAsQueryName ){
        //QBPO.getLookingFor().click()
        //QBPO.getLookingForText().type(entityName)
        //QBPO.getDropDownItems().contains(entityName).click()
        QBPO.getSaveQueryDropDown().click()
        QBPO.getDropDownItems().contains(savedAsQueryName).click()
        QBPO.getDeleteQueryBtn().click()
        QBPO.getDeleteYesBtn().click({force: true})
        QBPO.getDeleteYesMsg().should('have.text', "Query deleted successfully.")
        QBPO.getDeleteOKBtn().click()
      }

      favouriteQuery(entityName, saveQueryName){
        //QBPO.getLookingFor().click()
        //QBPO.getLookingForText().type(entityName)
        //QBPO.getDropDownItems().contains(entityName).click()
        QBPO.getSaveQueryDropDown().click()
        QBPO.getDropDownItems().contains(saveQueryName).click()
        QBPO.getOptionsDropDown().click()
        QBPO.getFavouriteRadioBtn().click()

      }

      privateQuery(entityName, saveQueryName){
        //QBPO.getLookingFor().click()
       //QBPO.getLookingForText().type(entityName)
        //QBPO.getDropDownItems().contains(entityName).click()
        QBPO.getSaveQueryDropDown().click()
        QBPO.getDropDownItems().contains(saveQueryName).click()
        QBPO.getOptionsDropDown().click()
        QBPO.getPrivateQuery().click()
        /* 
        // Not working the Private Query, putted in observation list
        QBPO.getUserProfile().click()
        QBPO.getLogOff().click()
        cy.visit('/')
        cy.fixture("LoginUsers").then((user) => {
        cy.get("#LoginEmail").type(user.LoginEmail2);
        cy.get('.input-group > .form-control').type(user.LoginPassword2);
        cy.get('.btn').click()
      })
      cy.fixture("URLs").then((visitURL) => {
        cy.visit(visitURL.QueryBuilderURL)
      })
      QBPO.getLookingFor().click()
      QBPO.getLookingForText().type(entityName)
      QBPO.getDropDownItems().contains(entityName).click()
       QBPO.getSaveQueryDropDown().click()
       QBPO.getDropDownItems().should('not.contain', saveQueryName)
       */
    }
      
    groupAnd(entityName, attribute1, attributeValue1, attribute2, attributeValue2){
        //cy.log('Group And Query function is called....')
        //QBPO.getLookingFor().click()
        //QBPO.getLookingForText().type(entityName)
        //QBPO.getDropDownItems().contains(entityName).click()
        //cy.wait(6000)
        QBPO.getQBAdd().click()
        QBPO.getOkGroupBtn().click()
        QBPO.getAddTextArea().type(attribute1)
        QBPO.getDropDownItems().contains(attribute1).click({force: true})
        QBPO.getOperatorTArea().type(attributeValue1)
        QBPO.getQBAdd().click()
        QBPO.getAddTextArea().type(attribute2)
        QBPO.getDropDownItems().contains(attribute2).click({force: true})
        QBPO.getOperatorTArea2().type(attributeValue2)
        QBPO.getCheckBox1().click({force: true} )
        QBPO.getCheckBox2().first().click({force: true})
        QBPO.getGroupBtn().click({force: true} )
        QBPO.getGroupAndLink().click()
        QBPO.getRunQueryBtn().click({force: true})
        QBPO.getAlertYesBtn().first().click({force: true})
        QBPO.getTableContent().contains(attributeValue1)
        QBPO.getTableContent().contains(attributeValue2)
    }
    groupOr(entityName, attribute1, attributeValue1, attribute2, attributeValue2){
      //cy.log('Group And Query function is called....')
      //QBPO.getLookingFor().click()
      //QBPO.getLookingForText().type(entityName)
      QBPO.getDropDownItems().contains(entityName).click()
      cy.wait(6000)
      QBPO.getQBAdd().click()
      QBPO.getAddTextArea().type(attribute1)
      QBPO.getDropDownItems().contains(attribute1).click({force: true})
      QBPO.getOperatorTArea().type(attributeValue1)
      QBPO.getQBAdd().click()
      QBPO.getAddTextArea().type(attribute2)
      QBPO.getDropDownItems().contains(attribute2).click({force: true})
      QBPO.getOperatorTArea2().type(attributeValue2)
      QBPO.getCheckBox1().click()
      QBPO.getCheckBox2().click()
      QBPO.getGroupBtn().click()
      QBPO.getGroupOrLink().click()
      QBPO.getRunQueryBtn().click()
      QBPO.getAlertYesBtn().click()
      QBPO.getTableContent().contains(attributeValue1)
      QBPO.getTableContent().contains(attributeValue2)
    }

groupQueries(entityName, savedQueryName, groupQuery1, groupQuery2){
      //cy.log('Group And Query function is called....')
      //QBPO.getLookingFor().click()
      //QBPO.getLookingForText().type(entityName)
      QBPO.getDropDownItems().contains(entityName).click()
      cy.wait(6000)
      QBPO.getSaveQueryDropDown().click()
      QBPO.getDropDownItems().contains(savedQueryName).click()
      QBPO.getGroupBtn().click()
      QBPO.getGroupQueriesLink().click()
      cy.wait(3000)
      QBPO.getGroupQueriesList().select(groupQuery1)
      QBPO.getAddQueryBtn().click()
      QBPO.getGroupQueriesList().select(groupQuery2)
      QBPO.getAddQueryBtn().click()
      QBPO.getGroupSaveBtn().click()
}

queryBuilderTemplate(entityName){
// Arsalan is working on opening new window case
  //cy.log('Query Builder Template function is called....')
  //QBPO.getLookingFor().click()
  //QBPO.getLookingForText().type(entityName)
  //QBPO.getDropDownItems().contains(entityName).click()
  QBPO.getDefineOutput().click()
  QBPO.getFirstNameAttribute().click()
  QBPO.getAgeAttribute().click()
  /*
 const url = 'https://ui.oomi.co.uk/Home/QueryBuilderView'
//QBPO.getSaveBtn().click()
//cy.window().its('open').should('be.called')
cy.window().then((win) => {
  // Replace window.open(url, target)-function with our own arrow function
  cy.stub(win, 'open', url => 
  {
    // change window location to be same as the popup url
    win.location.href = Cypress.config().baseUrl + url;
  }).as("popup") // alias it with popup, so we can wait refer it with @popup
})

// Click button which triggers javascript's window.open() call
//cy.get("#buttonWhichOpensPopupWithDynamicUrl").click()
  QBPO.getSaveBtn().click()

// Make sure that it triggered window.open function call
  cy.get("@popup").should("be.called")
  QBPO.getSaveBtn().click()
  cy.window().its('open').should('be.called');
//cy.visit('https://ui.oomi.co.uk/EntityLayout/OpenSaveQueryOutPutWindow')
  QBPO.getTemplateTextNameField().type('Test Template_Cypress')
  QBPO.getRemarksField().type('This is test template, please ignore')
  //QBPO.getTemplateSaveBtn().click()
  */
}

randomRecords(entityName, number){
  //cy.log('Query Builder randomRecords() function is called....')
  //QBPO.getLookingFor().click()
  //QBPO.getLookingForText().type(entityName)
  //QBPO.getDropDownItems().contains(entityName).click()
  QBPO.getRandomCheckBox().click({force: true})
  QBPO.getRandomTxtField().type(number)
  QBPO.getRunQueryBtn().click()
  QBPO.getRunQueryPopupYesBtn().click({force: true})
  QBPO.getRunQueryOKBtn().click()

}

qbGeneralTest(entityName, savedQueryName){

  //cy.log('Query Builder qbGeneralTest() function is called....')
  //QBPO.getLookingFor().click()
  //QBPO.getLookingForText().type(entityName)
  //QBPO.getDropDownItems().contains(entityName).click()
  QBPO.getSaveQueryDropDown().click()
  QBPO.getDropDownItems().contains(savedQueryName).click()
  QBPO.getCloseQuery().click({force: true})
  QBPO.getRunQueryBtn().click({force: true} )
  QBPO.getAlertYesBtn().first().click({force: true} )
  QBPO.getResultLbl().contains('Result(s)')
  //Verifying the table header
  QBPO.getQueryBuilderDataHolder().first().contains('View')
  QBPO.getQueryBuilderDataHolder().first().contains('Description From Secondary')
  QBPO.getQueryBuilderDataHolder().first().contains('Date Modified')
  QBPO.getQueryBuilderDataHolder().first().contains('Modified By')
  QBPO.getQueryBuilderDataHolder().first().contains('Date Created On')
  QBPO.getQueryBuilderDataHolder().first().contains('Created By')
  QBPO.getQueryBuilderDataHolder().first().contains('Color')
  //Verifying Buttons
  QBPO.getTableBotton().contains('First')
  QBPO.getTableBotton().contains('Run Query')
  QBPO.getTableBotton().contains('Action')
  QBPO.getTableBotton().contains('Delete Query')
  QBPO.getTableBotton().contains('Add')
  QBPO.getTableBotton().contains('Define Output')
  QBPO.getTableBotton().contains('Group')
  QBPO.getTableBotton().contains('Options')

}

runQueryFirstName(entityName, attributeName, fieldValue){
  //cy.log('Query Builder runQueryFirstName() function is called....')
  //QBPO.getLookingFor().click()
  //QBPO.getLookingForText().type(entityName)
  //QBPO.getDropDownItems().contains(entityName).click()
  QBPO.getQBAdd().click()
  QBPO.getAddTextArea().type(attributeName)
  QBPO.getDropDownItems().contains(attributeName).click({force: true})
  QBPO.getOperatorTArea().type(fieldValue)
  QBPO.getRunQueryBtn().click()
  QBPO.getAlertYesBtn().click()
  QBPO.getQueryBuilderDataHolder().contains('John')
}



VerifyQueryBuilderTestCasesfromSourceJson(){

  QBTestCaseConnection.forEach(TestCase => {
    
    
    let NumberOfRows = TestCase.MetaData.Number_Of_RowProperties;
    //TestCase = TestCase.trim
  

  cy.log(TestCase)

    cy.log("Start Time: "+new Date().toLocaleString());
    cy.oomiLoginIfNot();
    cy.fixture("URLs").then((visitURL) => {
      cy.visit(visitURL.QueryBuilderURL)
    })
    var AndListasArray = [];
    const QB1 = new QueryBuilderClass
    QB1.visitQBSection()
    
   // This is wrong!!!! Why we are getting the entity name from json file, it shoud be from a global variable
   // which in turn should get it from previous processes in the e2e workflow test
    cy.fixture("DataFiles/NewCustomEntity.json").then((NewEntity) => {
       var EntityName = JSON.stringify(NewEntity.NewEntityName,null,4);
       EntityName = EntityName.replace(/\"/g, "");
      cy.log("Entity Name without quotes looks like this: "+ EntityName)
      cy.log("Starting log inside new custom entitys")
     //cy.log(":log newentity name:" + EntityName1WithoutQuotes)
      QBPO.getLookForButton().click();
    QBPO.getLookForSearchBox().type( EntityName)
    QBPO.getLookForResultsDropDown(EntityName).click()
    })//end of fixture

   
    
    cy.log("And row value" + AndRowsfromJsonAsString)
    cy.log("we are about to enter for loop");
    
    for(var i=1; i<=NumberOfRows; i++){
      cy.log(" This is cycle number :"+i)
      let FirstColumnVar = "TestCase.RowProperties_"+i+".Attribute_DD"+i
      let FirstColumnValue = eval(FirstColumnVar)
      cy.log("This is 1st column's value:"+FirstColumnValue)

          QBPO.click_QB_AddDropDown() //Expand
          QBPO.getAddDropDownSearchArea().type(FirstColumnValue) //type and search
          QBPO.getDropDown().contains(FirstColumnValue).click({force: true}) // click the result
          //First row is now created, we will 


          //i have to define one generic function, which can write text in 3rd column
          //I have to define another generic function, which can type and select a value from lookup field
          // I have to define another function which can select a value from drop down in a third column
            let SecondColumnOperatorVar = "TestCase.RowProperties_"+i+".Operator"+i
            let SecondColumnOperatorValue = eval(SecondColumnOperatorVar)
            cy.log("This is 2nd column's value:"+SecondColumnOperatorValue)

            //QB1.SetSecondColumnAsValueOnQB(SecondColumnOperatorValue)
            let ThirdcolumnTypeVar1 = "TestCase.RowProperties_"+i+".ThirdColumnType"
            cy.log(ThirdcolumnTypeVar1)
            let ThirdcolumnTypeValue1 = eval(ThirdcolumnTypeVar1)

            cy.log('Third Column Type Value:'+ThirdcolumnTypeValue1)
            cy.log('Second Column Type Value:'+SecondColumnOperatorValue)

            if (ThirdcolumnTypeValue1=='DropDown') {
             
              QBPO.getOperatorDropDownQB().eq(-2).select(SecondColumnOperatorValue)
              
               }
              else if (ThirdcolumnTypeValue1=='Text'||ThirdcolumnTypeValue1=='Lookup') {
              
                QBPO.getOperatorDropDownQB().last().select(SecondColumnOperatorValue)
                
                 }
               
        //  cy.pause()
            

            //Now operand is selected from drop down list from 2nd column 

            let ThirdcolumnTypeVar = "TestCase.RowProperties_"+i+".ThirdColumnType"
            cy.log(ThirdcolumnTypeVar)
            let ThirdcolumnTypeValue = eval(ThirdcolumnTypeVar)
              cy.log("This is 3rd column's value:"+ThirdcolumnTypeValue)
              let x = "TestCase.RowProperties_"+i+".Value"+i
              let t= eval(x)
              // Lets dynamically find the value of "value" field coming from test case
              let ValueTypeVar = "TestCase.RowProperties_"+i+".Value"+i
              cy.log(ValueTypeVar)
              let ValueTypeValue = eval(ValueTypeVar)
                cy.log("This is 3rd column's value:"+ValueTypeValue)
                let y = "TestCase.RowProperties_"+i+".Value"+i
                let z= eval(y)


              if (ThirdcolumnTypeValue=='Text') {
                QB1.SetThirdColumnAsTextOnQB(t,i);
                
                cy.log("Exiting if text: "+i)
                
                 }
                else if(ThirdcolumnTypeValue=='DropDown')
                 {
                  QB1.setThirdColumnAsDropDownQB(t)
                    
                 }
                 else if(ThirdcolumnTypeValue=='Lookup')
                 {
                
                QB1.setThirdColumnAsLookupQB(t)
                    
                 }
                 else if (ThirdcolumnTypeValue == 'Radio') {

                  QBPO.GetThirdColumnsAsRadioDropDownQB().last().select(z)

                 }

                 cy.log("End of Loop :"+i)

                

         }//end of for loop

         cy.log("out of for loop");


         // AND OR Grouping should be done here 
         //So lets create an intial Array containing indices of all rows

         for (var i=1; i<=NumberOfRows; i++) { 

          this.IntialList.push("" + i + "")
          cy.log(this.IntialList)
         }
         
          // Now we will have to check whether the AND / OR proeprties are empty and if not add them to separate lists
         if (TestCase.MetaData.ANDRows!=="") {
            cy.log("entering ANDrowsjsonString IF")
            var AndRowsfromJsonAsString = JSON.stringify(TestCase.MetaData.ANDRows,null,4);
            AndRowsfromJsonAsString = AndRowsfromJsonAsString.replace(/\"/g, "");
             AndListasArray = AndRowsfromJsonAsString.split(",");
             
         AndListasArray.forEach(item => { 

          QBPO.QBTickRowCheckbox(item);
          QBPO.getGroupBtn2().click()
          

        })

        QBPO.getGroupAndLink().click()
         // var AndRowsList =   AndRowsJsonString ;
        
         }
         cy.pause();

        //Now starting OR scenarios. First lets check if OR is required or not.
         if (TestCase.MetaData.ORRows!=="") { 
          cy.log("entering ORrowsjsonString IF")
          var ORRowsfromJsonAsString = JSON.stringify(TestCase.MetaData.ORRows,null,4);
          ORRowsfromJsonAsString = ORRowsfromJsonAsString.replace(/\"/g, "");
            var test = TestCase.MetaData.ORRows;
          // We need to convert things to an array/list because we need to compare it wiht Initial List
          var ORListasArray = ORRowsfromJsonAsString.split(",");
          
          debugger;
          if (AndListasArray?.length) {
            cy.log("Entering checking ANdrowslist undefiness")
        this.IntialList = this.IntialList.filter((el) => !AndListasArray.includes(el));
        
          }
          debugger;
         console.log("This is the final Initial List:" + this.IntialList)


        
          


          // Now trying to get the index of ORList in the final InitialList which has now been 
          //finalizd after removing the AND items from it.

          var ary = new Array();
for(var g=0; g<this.IntialList.length; g++)
{
  
  for(var z = 0; z<ORListasArray.length; z++)
  {
    if(this.IntialList[g] == ORListasArray[z])
    {
      
      ary.push(g);
      
    }
  }

}
console.log("this is ary:" + ary)


          ary.forEach(item => { 
            debugger;
        QBPO.QBTickRowCheckboxBasedOnIndex(item);
        QBPO.getGroupBtn2().click()
        

      })

      QBPO.getGroupOrLink().click()
       // var AndRowsList =   AndRowsJsonString ;
        debugger;
        console.log("This is androwlist" + AndRowsfromJsonAsString)
       }

        
        // var ORROwsfromJsonAsString = JSON.stringify(TestCase.MetaData.ORRows);
  
        // ORROwsfromJsonAsString = ORROwsfromJsonAsString.replace(/\"/g, "");

        
        //  var OrListasArray = ORROwsfromJsonAsString.split(",");

         // Now the AND List is created. we just need to treat this smaller list ( versus the Initial List) as indices list 
         //where we want to tick the checkbox and then press the Group AND button. So we will start by reading each number from AndListasArray
      



    
         cy.oomiButtonClick('Run Query')
         QBPO.getAlertYesBtn().click({force: true})
        // QBPO.getAlertYesBtn().click({force: true})
        // QBPO.getAlertYesButton().click({force: true})
        // QBPO.getQueryBuilderDataHolder().contains(x)
        // QBPO.getQueryBuilderDataHolder().contains(x)
        // QB1.VerifyResults(oomiQBData1.MetaData.Result_Rows)

 })//end of foreach



}//end of function

















AddField(FieldName){

  QBPO.getAddTextArea().type(FieldName)
  return QBPO.getDropDownItems().contains(FieldName).click({force: true})
}
SelectGroup(GroupOperator){
  QBPO.getGroupBtn().click({force: true} )
  QBPO.getGroupAndOrLink().contains(GroupOperator).click()
  //QBPO.getOkBtn().click()

}
VerifyResults(count){
  return QBPO.getGridRows().should('have.length', count)
}

SetThirdColumnAsTextOnQB(Text, i){
  QBTestCaseConnection.every(TestCase=>{
  QBPO.getThirdColumnAsText().eq(i-1).type(Text)
})}

SetSecondColumnAsValueOnQB(Operator, i){
  QBTestCaseConnection.every(TestCase=>{
    QBPO.getDropOperator().eq(i).select('Not Equal')
  })}

setThirdColumnAsDropDownQB(DropDownvalue){
  QBTestCaseConnection.every(TestCase=>{
    QBPO.getDropOperator().last().select(DropDownvalue)

  })}
setThirdColumnAsLookupQB(s){
  QBData1.every(oomiQBData1=>{
    QBPO.getTextValue().last().type(s)
    cy.wait(3000)
    QBPO.getLookUp().first().click()

  })}

}// end of class
export default QueryBuilderClass
  