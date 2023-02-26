class QueryBuilderPO{

    getQBSearch () {

        return cy.get('#setupSearch')
    
    }

getLookForButton(){
    return cy.get('button[data-id="drpPrimaryEntity"]')
}
getLookForSearchBox(){
    return cy.get(':nth-child(1) > .dropdown > div.dropdown-menu > .bs-searchbox')
    
}

QBTickRowCheckbox(rowIndex) {

cy.get('div >.criteriaRow').eq(rowIndex-1).find('[type="checkbox"]').check();

}

QBTickRowCheckboxBasedOnIndex(rowIndex) {

    cy.get('div >.criteriaRow').eq(rowIndex).find('[type="checkbox"]').check();
    
    }
    


getLookForResultsDropDown(name){
  //  return  cy.get('#bs-select-1-48')
 return cy.get('li.active').contains(name)
}

getDropDownItems(){
     return  cy.get('#bs-select-1-48')
   // cy.get('span').contains(name)
  }

getDropDown2(){
    return cy.get('.dropdown-item')

}
getDropDown(){
    return cy.get('.dropdown-item')
}

//Re-usable function in a loop
getFirstDropDown(name){
    return  cy.get('[id^=drpAttribute_]').contains(name);
}
ClickSecondDropDown(){
    return  cy.get('[id^=drpOperator_]').last().click()
}
//If value type is txt  then call this function     

TypeInValueField(txtvalue) {

    cy.get('[id^=txtValue_]').last().click().type(txtvalue)
}



click_QB_AddDropDown(){
    return cy.get('.col-xl-12 > .dropdown > .btn').click()
   
}
getAddBtn(){
    return cy.get('.col-xl-12 > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner')
}

getAddDropDownSearchArea(){
    return cy.get('.col-xl-12 > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control')
}

getOperatorTArea(){
    return cy.get('#txtValue_86671_2323640')
}

getOperatorTArea2(){
    return cy.get('#txtValue_86671_2323641')
}
getRunQueryBtn(){
    return cy.get(':nth-child(2) > .btn-sm.btn-primary')
    
}

getRunQueryButton(){
    
    return cy.get('.btn').contains('Run Query')

}
getOptionsDropDown(){
    return cy.get(':nth-child(4) > .btn-group > .btn')
}
getOptionSave(){
    return cy.get('[onclick="openSaveQueryWindow()"]')
}
getOptionSaveAs(){
    return cy.get('[onclick="openSaveAsQueryWindow();"]')
}

getSaveQueryName(){
    return cy.get('#txtName')
}
getSaveChangesBtn(){
    return cy.get('.modal.show > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
}
getOkSaveBtn(){
    return cy.get('[aria-labelledby="ui-id-4"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(1)')
}
getOkBtn(){
    return cy.get('.ui-dialog-buttonset > .ui-button')
}
getSaveAlertMsg(){
    return cy.get('#alertdlg')
}
getOkBtn(){
    return cy.get('.ui-dialog-buttonset > .ui-button')
}
getSaveQuery(){
    return cy.get(':nth-child(1) > :nth-child(2) > .dropdown > .btn')
}
getSaveQueryTxt(){
    return cy.get(':nth-child(2) > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control')
}
getDeleteQueryBtn(){
    return cy.get('.btn.mr-2')
}
getDeleteYesBtn(){
    //return cy.get('[aria-labelledby="ui-id-4"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(1)')
    return cy.get('[aria-labelledby="ui-id-6"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(1)')
   //return  cy.get('.ui-dialog-buttonset > :nth-child(1)')
  
   
}
getDeleteYesMsg(){
    return cy.get('[aria-labelledby="ui-id-7"] > #alertdlg')
    //return cy.get('[aria-labelledby="ui-id-5"] > #alertdlg')
    
}
getDeleteOKBtn(){
    return cy.get('[aria-labelledby="ui-id-7"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button')
   // return cy.get('[aria-labelledby="ui-id-5"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button')
    //return cy.get('[aria-labelledby="ui-id-5"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button')
    
}
getSaveAsTxtName(){
    return cy.get('#saveAsQueryContent > .form-group > #txtName')
}
getSaveAsBtn(){
    return cy.get('.modal.show > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
   
}
getSaveQueryDropDown(){
    return cy.get(':nth-child(1) > :nth-child(2) > .dropdown > .btn')
}

getFavouriteRadioBtn(){
    return cy.get(':nth-child(4) > .round > label')
}
getPrivateQuery(){
    return cy.get(':nth-child(5) > .round > label')
}

//why using hard coded values?
getUserProfile(){
    return cy.get('[title="Demo1_EYA - demo1@oomi.co.uk"]')
}

getLogOff(){
    return cy.get('[href="/Account/LogOff"]')
}
getGroupBtn(){
    return cy.get(':nth-child(5) > .btn-group > .btn')
}
getGroupBtn2(){

return cy.get('button').contains('Group')

}
getGroupBtn1(){
    return cy.get('.btn-group > .btn')
}

getGroupAndLink(){
    return cy.get('.dropdown-item').contains('Group And')
}
getGroupOrLink(){
    return cy.get('.dropdown-item').contains('Group Or')
}
getGroupAndOrLink(){
    return cy.get('.dropdown-item')
}
getGroupQueriesLink(){
    return cy.get('.dropdown-item').contains('Group Queries')
}
getCheckBox1(){
    return cy.get(':nth-child(1) > .col-xl-11 > :nth-child(1) > .form-check-input')
}

getCheckBox2(){
    return cy.get(':nth-child(2) > .col-xl-11 > :nth-child(1) > .form-check-input')
}

getRunQueryBtn(){
    return cy.get(':nth-child(2) > .btn-sm.btn-primary')
}
getTableContent(){
    return cy.get('#dvQueryDataHolder > :nth-child(13)')
}

getAlertYesBtn(){
    return cy.get('.ui-dialog-buttonset > :nth-child(1)')
}

getAlertYesButton(){
   // return cy.get('[aria-labelledby="ui-id-4"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(1)')
    return cy.get('[aria-labelledby="ui-id-8"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button')
}
getAlertYesButton1(){
    return cy.get('[aria-labelledby="ui-id-5"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(1)')
}
getGroupQueriesList(){
    return cy.get('#drpQueries')
}

getAddQueryBtn(){
    return cy.get('[style="float: left; margin-left: 13px;margin-top:30px;"] > .btn')
}
getGroupSaveBtn(){
    return cy.get('[style="padding-left: 3px;"] > .btn-primary')
}
getDefineOutput(){
    return cy.get(':nth-child(6) > .btn')
}

getAgeAttribute(){
    return cy.get(':nth-child(4) > .normal')
}

getFirstNameAttribute(){
    return cy.get(':nth-child(17) > .normal')
}

getFirstNameSequence(){
    return cy.get('#32323640')
}
getSaveBtn(){
    return cy.get('td > .btn-primary').contains('Save')
}

getTemplateTextNameField(){
    return cy.get('#txtName')
}
getRemarksField(){
    return cy.get('#txtRemarks')
}

getTemplateSaveBtn(){
    return cy.get('.btn').contains('Save')
}
getRandomCheckBox(){
    return cy.get('#chkRandom')
}
getRandomTxtField(){
    return cy.get('#txtRandom')
}

getRunQueryPopupYesBtn(){
    return cy.get('.ui-dialog-buttonset > :nth-child(1)')
}

getRunQueryOKBtn(){
    return cy.get('[aria-labelledby="ui-id-12"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > :nth-child(1)')
}

getCloseQuery(){
    return cy.get('.fi-rr-cross-small')
}
getResultLbl(){
    return cy.get('[style="background-color:#fff;border-top:1px solid #E2E2E2;"] > :nth-child(1) > .ml-2')
}
getTableBotton(){
    return cy.get('.btn')
}
getQueryBuilderDataHolder(){
    return cy.get('#tbodyData ')
}
getMainContent(){
    return cy.get('.main-content')
}
getOperator(){
    return cy.get('#drpOperator_86671_2323640')
}

getOkGroupBtn(){
    return cy.get('[aria-labelledby="ui-id-11"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button')
}
getTextArea1(){
    return cy.get('#txtValue_88387_2375740')
}
getTextArea2(){
    return cy.get('#txtValue_88387_2375741')
}
get1stItemCheck(){
    return cy.get(':nth-child(1) > .col-xl-11 > :nth-child(1) > .form-check-input')
}
get2ndItemCheck(){
    return cy.get(':nth-child(2) > .col-xl-11 > :nth-child(1) > .form-check-input')
}

getOperand2(){
    return cy.get('#drpOperator_88387_2375741')
}
getPopupText(){
    return cy.get('[aria-labelledby="ui-id-4"] > #alertdlg')
}
getNoDataOkBtn(){
    return cy.get('[aria-labelledby="ui-id-4"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button')
}
getOperand22(){
    return cy.get('#drpOperator_88387_2375840')
}
getTexArea22(){
    return cy.get('.date-attribute')
}
getOperand11(){
    return cy.get('#drpOperator_88387_2375740')
}
getOperand23(){
    return cy.get('.criteria-operator > #drpOperator_88387_2375838')
}
getOperand12(){
    return cy.get('#drpOperator_88387_2375741')
    
}
getTextArea13(){
    //return cy.get('#txtValue_88387_2375741')
    return cy.get(".gridInput> .form-control")
    
}
getTextArea23(){
    return cy.get("input[type='text']")
}

getOperand24(){
    return cy.get('#drpOperator_88387_2375812')
}

getSearchText(){
    return cy.get('#ui-id-3')
}

getOperand8(){
    return cy.get('[id^=drpOperator_')

}
getThirdColumnAsText(){
   //return cy.get('[id^=txtValue_]')
   //return cy.get('div.row.pt-1.pb-1.criteriaRow')
   return cy.get('.dvDataField >.criteriaRow > .criteria-group >.criteria-input')
}
getDropOperator(){
    return cy.get('[id^=drpOperator_')
}
getLookUp(){
    return cy.get('.ui-menu-item> .ui-menu-item-wrapper')
}
get2ndOperand(){
    return cy.get('.form-group> .form-control')
}
getGridRows(){
    return cy.get('#tbodyData').find('tr')
}
getAlertText(){
    return cy.get('#alertdlg')
}
getOKBtn1(){
    cy.wait(2000)
    return cy.get('[aria-labelledby="ui-id-4"] > #alertdlg')
}
getTextAreaAge(){
    return cy.get('#txtValue_88387_2375741')
}
get1stOperandAge(){
    return cy.get('#drpOperator_88387_2375741')
}
getOperand50(){
    return cy.get('#drpOperator_88466_2377700')
}
getOperand51(){
    return cy.get('#drpOperator_88466_2377697')
}
getDropOperator(){
    return cy.get('[id^=drpOperator_]')
}
getTextValue(){
    return cy.get('[id^=txtValue_]')
    
}
getTextArea50(){
    return cy.get('#txtValue_88466_2377697')
}
getAlertmsg1(){
    return cy.get('[aria-labelledby="ui-id-4"] > #alertdlg')
}
getAlertOKBtn(){
    return cy.get('[aria-labelledby="ui-id-4"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .ui-button')
}
getOpeator52(){
    return cy.get('#drpOperator_88466_2377696')
}
getTextArea52(){
    return cy.get('#drpOperator_88466_2377699')
}
getTextArea53(){
    return cy.get('#txtValue_88466_2377699')
}
getOpeator54(){
    return cy.get('#drpOperator_88466_2377706')
}
getOperatorFormControl(){
    return  cy.get('.form-group> .form-control')
}
getInputFormControl(){
    return cy.get('[id^=txtValue_]')
}
getOperatorDropDownQB(){

    return cy.get('[id^=drpOperator_]')
    
}

GetThirdColumnsAsRadioDropDownQB(){

    return cy.get('[id^=drpRadioButton_]')
    
}
get1stTextFieldDate(){
    return cy.get('.date-attribute')
}

get2ndOperand7(){
    return cy.get('[id^=drpOperator_]')

    
}
get2ndTextField7(){
    return cy.get('.gridInput>.form-control')
}

getTextMessage(){

    return cy.get('[aria-labelledby="ui-id-4"] > #alertdlg')
    
}








}

export default QueryBuilderPO