///<reference types="cypress" />

import URLs from '../fixtures/URLs.json'
import LoginUsers from '../fixtures/LoginUsers.json'
import TestData from '../fixtures/DataFiles/TestData.json'
import EntitySetupSecPO from './PageObjects/EntitySetupSecPO'
const EntityPO = new EntitySetupSecPO()


class EntityCls{
  

  
    EntityData(){

      var Ran= Math.random()*5000

              cy.fixture("LoginUsers").then((user) => {
                cy.get('input[id="Label"]').type(user.EntityName+Ran);
                cy.get(':nth-child(2) > #StandardAttributeName').type(user.EntityName+Ran);


                
              });

    
}

visitSetupSection(){
 
  cy.log('visitSetupSection function is called...')

  cy.fixture("URLs").then((visitURL) => {

    cy.visit(visitURL.visitSetupSection)

  })
}





searchExEntity(){
  cy.log('searchExEntity function is called...')

  cy.fixture("TestData").then((name1)=> {
    EntityPO.getSetupSearch().clear()
    EntityPO.getSetupSearch().type(name1.entityName)
    EntityPO.getSearchResult().contains(name1.entityName).click({force: true})
  })
 
  EntityPO.getEntity().contains('Entity Information').click({force: true})

}


searchExEntityOnly(){
  cy.log('searchExEntityOnly function is called...')


  cy.fixture("TestData").then((data2)=>{
  EntityPO.getSetupSearch().clear()
  EntityPO.getSetupSearch().type(data2.entityName)
  EntityPO.getSearchResult().contains(data2.entityName).click({force: true})

 })


}

searchExEntityOnly1(){

  cy.log('searchExEntityOnly1 function is called...')
  cy.fixture("TestData").then((data2)=>{
  EntityPO.getSetupSearch().clear()
  EntityPO.getSetupSearch().type(data2.entityName)


 })



}

searchCustomEnity(data1){
cy.log('searchExCustomEnity() function is called....')
EntityPO.getSetupSearch().clear()
EntityPO.getSetupSearch().type('Custom Entity')
EntityPO.getSearchResult().contains(data1).click({force: true})
}

searchCustomEntityOnly(){
  cy.log('searchExCustomEntityOnly() function is called....')
  EntityPO.getSetupSearch().clear()
  EntityPO.getSetupSearch().type('Custom Entity')
  EntityPO.getSearchResult().contains('Custom Entity').click({force: true})
}



attributeCreator(){
  cy.get('a',{timeout: 6000}).contains('Attributes').click({force: true})

}

createCheckBox(){

  EntityPO.getCheckBox().click({force: true})
  EntityPO.getEntityNextBtn().click()
  EntityPO.getAttributeLbl().type("defaultCheckBox")
  //EntityPO.getDefaultValue().click({force:true})
  //EntityPO.getClearValueRTF().click({force: true})
  EntityPO.gerClearPD().click({force:true})
  EntityPO.getSaveNewBtn().click()
}

createCurrency(){
EntityPO.getCurrencyCheckBox().click({force:true})
EntityPO.getEntityNextBtn().click()
EntityPO.getAttributeLbl().type("leftCurrLengThree")
EntityPO.getLength().clear().type("4")
EntityPO.getDoNotExposeInApi().click({force:true})
EntityPO.getDefaultValue().type('40',{force: true})
EntityPO.getAllignmentType().select("Left")
EntityPO.getDeleteWRecordRTF().click({force: true})
EntityPO.getDoNothingPD().click({force:true})
EntityPO.getSaveNewBtn().click()
}
createDate(){
EntityPO.getDate().click({force: true})
EntityPO.getEntityNextBtn().click()
EntityPO.getAttributeLbl().type("dateCenterAttribute")
EntityPO.getAllignmentType().select("3")
EntityPO.getDefaultDateTime().type("2/2/1986")
EntityPO.getDoNothingPD1().click({force:true})
EntityPO.getShowInHeaderRank().type("1")
EntityPO.getSaveNewBtn().click()
}
createNumber(){
EntityPO.getNumber().click({force:true})
EntityPO.getEntityNextBtn().click()
EntityPO.getAttributeLbl().type("numberLenghtThree")
EntityPO.getNumericDefaultValue().type("3")
EntityPO.getSaveNewBtn().click()
}
createPickList(){
  EntityPO.getPickList().click({force:true})
  EntityPO.getEntityNextBtn().click()
  EntityPO.getAttributeLbl().type("FemalePickList")
  EntityPO.getShowInHeaderRank().type("1")
  EntityPO.getAllignmentType().select("2")
  EntityPO.getClearValueRTF().click({force:true})
  EntityPO.getSaveNewBtn().click()
}
createText(){
  EntityPO.getText().click({force: true})
  EntityPO.getEntityNextBtn().click()
  EntityPO.getAttributeLbl().type("textLengthFifty")
  EntityPO.getAllignmentType().select("2")
  EntityPO.getShowInHeaderRank().type("1")
  EntityPO.getDeleteWRecordRTF().click({force:true})
  EntityPO.getSaveNewBtn().click()
}
createTexArea(){
EntityPO.getTextArea().click({force:true})
EntityPO.getEntityNextBtn().click()
EntityPO.getAttributeLbl().type("textAreaLength255")
EntityPO.getTextAreaDValue().type("Default Text-Cypress")
EntityPO.getShowInHeaderRank().type("2")
EntityPO.getClearValuePD().click({force:true})
EntityPO.getSaveNewBtn().click()
}
createTextAreaLong(){
  cy.wait(5000)
  EntityPO.getTextAreaLong().click({force:true})
  EntityPO.getEntityNextBtn().click()
  EntityPO.getAttributeLbl().type("textAreaLong250")
  EntityPO.getAllignmentType().select("2")
  EntityPO.getShowInHeaderRank().type("2")
  EntityPO.getDeleteWRecordPDTA().click({force:true})
  EntityPO.getSaveNewBtn().click()
}
createTextAreaRich(){
  cy.wait(5000)
  EntityPO.getTextAreaRich().click({force:true})
  EntityPO.getEntityNextBtn().click()
  EntityPO.getAttributeLbl().type("textAreaRich250")
  EntityPO.getAllignmentType().select("2")
  EntityPO.getShowInHeaderRank().type("1")
  EntityPO.getDoNothingPDRT().click({force:true})
  EntityPO.getSaveNewBtn().click()
}
createLookupRelationship(){
  EntityPO.getLookUpRelationship().click({force:true})
  EntityPO.getEntityNextBtn().click()
  EntityPO.getAttributeLbl().type("lookUpRelaRight")
  EntityPO.getShowInHeaderRank().type("2")
  EntityPO.getAllignmentType().select("2")
  EntityPO.getSaveNewBtn().click()
}
createTime(){
EntityPO.getTime().click({force: true})
EntityPO.getEntityNextBtn().click()
EntityPO.getAttributeLbl().type("timeLeft")
EntityPO.getAllignmentType().select("1")
EntityPO.getShowInHeaderRank().type("2")
EntityPO.getSaveNewBtn().click()
}
createIcon(){
EntityPO.getIcon().click({force: true})
EntityPO.getEntityNextBtn().click()
EntityPO.getAttributeLbl().type("IconHeaderRank1")
EntityPO.getShowInHeaderRank().type("1")
EntityPO.getSaveNewBtn().click()
}
createRadionButton(){
EntityPO.getRadioButton().click({force:true})
EntityPO.getEntityNextBtn().click()
EntityPO.getAttributeLbl().type("RadioBtnCenter")
EntityPO.getShowInHeaderRank().type("2")
EntityPO.getAllignmentType().select("3")
EntityPO.getDefaultRB().uncheck({force:true})
EntityPO.getCaption().type("test", {force: true})
EntityPO.getSaveNewBtn().click()
}
createFile(){
EntityPO.getFile().click({force:true})
EntityPO.getEntityNextBtn().click()
EntityPO.getAttributeLbl().type("fileLeft")
EntityPO.getAttributeType().select("1")
EntityPO.getAllignmentType().select("1")
EntityPO.getSaveNewBtn().click()
}
createPassword(){
EntityPO.getPassword().click({force:true})
EntityPO.getEntityNextBtn().click()
EntityPO.getAttributeLbl().type("passwordLength50")
EntityPO.getAttributeType().select('Mobile')
EntityPO.getShowInHeaderRank().type("2")
EntityPO.getSaveNewBtn().click()
}
createColorPicker(){
EntityPO.getColorPicker().click({force:true})
EntityPO.getEntityNextBtn().click()
EntityPO.getAttributeLbl().type("colorPicker")
EntityPO.getSaveNewBtn().click()
}
createPasswordHash(){
EntityPO.getPasswordHash().click({force:true})
EntityPO.getEntityNextBtn().click()
EntityPO.getAttributeLbl().type("passwordHashLength100")
EntityPO.getAttributeType().select('Fax')
EntityPO.getAllignmentType().select("1")
EntityPO.getShowInHeaderRank().type("2")
EntityPO.getSaveNewBtn().click()
}


dragDropEntityFormDesigner(dragFieldName, dropColumn){

  cy.log('now running drap drop code ');
  EntityPO.getEntityFormDesingerFields().contains(dragFieldName).trigger('drag', { dataTransfer: new DataTransfer });
  EntityPO.getEntityFormDesingerFields().contains(dragFieldName).trigger('mousedown', { which: 1 });
  EntityPO.getEntityFormDesingerFields().contains(dragFieldName).trigger('dragstart', { dataTransfer: new DataTransfer });
  cy.get('#divGroup-335788 > .group-content >'+dropColumn ).trigger('drop')
  .trigger('mousemove').trigger('mouseup', { force: true }).trigger('dragend');
  EntityPO.getEntityFormDesigSaveBtn().click({force: true})
  EntityPO.getSaveConfirmationOkBtn().click()

}






}

export default EntityCls
