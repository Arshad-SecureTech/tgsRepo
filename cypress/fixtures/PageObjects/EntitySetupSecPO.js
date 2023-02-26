class EntitySetupSecPO{

    getSetupSearch () {

        return cy.get('#setupSearch')
    
    }

    getSearchResult () {

        return cy.get('#accordion')
    
    }
    getEntity () {

        return cy.get('#collapse_86549 > :nth-child(1)')
    
    }

    getEntityName() {

        return cy.get(':nth-child(2) > h5')
    
    }

    getCustomLink (LinkText) {

        return cy.get('a').contains(LinkText)
    
    }
    getEditBtn () {

        return cy.get(':nth-child(3) > .btn').contains('Edit')

    
    }

    getCancelBtn () {

        return cy.get('.btn-secondary').contains('Cancel')

    
    }

    getShowInQB(){

        return cy.get('.col-xl-6.pl-0 > :nth-child(4) > .form-check-input')
    }

    getEnitySaveBtn(){
        return cy.get('.btn-primary')

    }

   getShowProfileAction(){

    return cy.get('.col-xl-6.pl-0 > :nth-child(5) > .form-check-input')
   }

   getShownInRecBin(){
   return cy.get('.col-xl-6.pl-0 > :nth-child(6) > .form-check-input')

   }

   getQuickAdd(){

    return cy.get('.col-xl-6.pl-0 > :nth-child(7) > .form-check-input')
   }
   getEntityLbl(){

    return cy.get('.col-xl-6.pl-0 > :nth-child(1) > .form-control')
    
   }

getSaveLbl(){

    return cy.get(':nth-child(2) > h5')
}

getEntityDesc(){
    return cy.get(':nth-child(3) > :nth-child(1) > .form-control')
}
getSaveDesc(){
    return cy.get(':nth-child(2) > :nth-child(2) > .form-control')
}
getPluralLbl(){
    return cy.get(':nth-child(3) > :nth-child(2) > .form-control')
}
getSavePluralLbl(){
    return cy.get(':nth-child(2) > :nth-child(1) > .form-control')
}
getAllowActiCheckBox(){
    return cy.get('.col-xl-6.pl-0 > :nth-child(3) > .form-check-input')
}
getSaveAllowActiCheckBox(){
    return cy.get('.pl-0 > :nth-child(3) > .form-check-input')

}
getNotExposeInAPI(){
    return cy.get('.col-xl-6.pl-0 > :nth-child(8) > .form-check-input')
}
getSaveNotExposeAPI(){
    return cy.get('.pl-0 > :nth-child(8) > .form-check-input')
}
getTrackFieldHis(){
    return cy.get(':nth-child(3) > :nth-child(3) > .form-check-input')
    
}
getSaveTrackFieldHis(){
    return cy.get(':nth-child(2) > :nth-child(3) > .form-check-input')
}
getStartWithVowel(){
    return cy.get(':nth-child(3) > :nth-child(4) > .form-check-input')
    
}
getSaveStartWVowel(){
    return cy.get(':nth-child(3) > :nth-child(4) > .form-check-input')
  
}
getDeploymentStatus(){
    return cy.get(':nth-child(3) > :nth-child(5) > .form-check-input')
}
getSavedDeploymentStatus(){
    return cy.get(':nth-child(2) > :nth-child(5) > .form-check-input')
    
}
getReadOnly(){
    return cy.get(':nth-child(3) > :nth-child(6) > .form-check-input')
}
getSavedReadOnly(){
return cy.get(':nth-child(2) > :nth-child(6) > .form-check-input')
}
getQuickEdit(){
    return cy.get(':nth-child(3) > :nth-child(7) > .form-check-input')
}
getSaveQuickEdit(){
    return cy.get(':nth-child(2) > :nth-child(7) > .form-check-input')
}
getMobileAdd(){
    return cy.get(':nth-child(3) > :nth-child(8) > .form-check-input')
}
getSaveMobileAdd(){
    return cy.get(':nth-child(2) > :nth-child(8) > .form-check-input')
}
getShowCheckBox(){
    return cy.get('.col-xl-6.pl-0 > :nth-child(10) > .form-check-input')
}
getSaveShowCheckBox(){
    return cy.get('.pl-0 > :nth-child(10) > .form-check-input')
}
getShowOnMap(){
    return cy.get(':nth-child(11) > .form-check-input')
}
getSaveShowOnMap(){
    return cy.get(':nth-child(11) > .form-check-input')
}
getHasSyncWf(){
    return cy.get(':nth-child(3) > :nth-child(10) > .form-check-input')
}
getSaveHasSyncWf(){
    return cy.get(':nth-child(2) > :nth-child(10) > .form-check-input')
}

getSaveLbl(){
    return cy.get('.pl-0 > :nth-child(1) > .form-control')
}
getCreatedBy(){
    return cy.get(':nth-child(12) > .form-control')
}
getModifiedBy(){
    return cy.get(':nth-child(11) > .form-control')
}
getMainContent(){
    return cy.get('.main-content')
}
getEntitySection(){
    return cy.get('.col-xl-3')
}
getHideLinkBtn(){
    return cy.get('#collapse_78311 > :nth-child(7)')
}
getDeleteLinkBtn(){
    return cy.get('#collapse_78311 > :nth-child(6)')
}
getPopupCancel(){
    return cy.get('[aria-labelledby="ui-id-2"] > .ui-dialog-titlebar > .ui-button > .ui-button-icon')
}
getPopupOkBtn(){
    return cy.get('.ui-dialog-buttonset > .ui-button')
}

getLinkedWorkFlows(){
    return cy.get('#collapse_78311 > :nth-child(5)')
}
getLinkWorkFlowTitle(){
    return cy.get('#collapse_LinkedWorkflows > .card-body > .row > .mt-3 > h5')
}
getCustomEntityHeading(){
    return cy.get('#headingOne > .mb-0 > .btn')
}
getCustemEnityLbl(){
    return cy.get('#Label')
}
getCutomEntityPluralLbl(){
return cy.get('#PluralLabel')
}
getCustomEntityName(){
return cy.get('#EntityName')
}
getCustomEntityRecName(){
    return cy.get(':nth-child(2) > #StandardAttributeName')
}
getCustomEnitySaveBtn(){
    return cy.get(':nth-child(1) > .btn-primary')
}
getModuleLbl(){
    return cy.get('h3')
}
getCustomCancelBtn(){
    return cy.get('#attribute-save-form > :nth-child(1) > .btn-secondary')
}
getInfoSection(){
    return cy.get('#headingOne > .mb-0 > .btn')
}
getCustomEntityHeaderTwo(){
    return cy.get('#headingTwo > .mb-0 > .btn')
}
getOptionalFeatureSec(){
    return cy.get('#headingThree > .mb-0 > .btn')
}
getDevelopmentStatus(){
    return cy.get('#headingFour > .mb-0 > .btn')
}
getCustomEntityLbl(){
    return cy.get('#Label')
}

getCustomEntityDesc(){
    return cy.get('#Description')
}
getRecordName(){
    return cy.get(':nth-child(2) > #StandardAttributeName')
}
getDateType(){
    return cy.get('#DataTypeId')
}
getStartingNumber(){
    return cy.get(':nth-child(5) > #StandardAttributeName')
}
getAllowActivitiesChk(){
    return cy.get('#AllowActivities')
}
getCustomTrackHis(){
    return cy.get('#TrackFieldHistory')
}
getInDevelopmentRBtn(){
    return cy.get('#rdbCaseInsensitive')
}
getDeployedRBtn(){
    return cy.get('#rdbCaseInsensitive1')
}
getShowInMenu(){
    return cy.get('#ShowInMenu')
}
getMenuTree(){
    return cy.get('.jstree-ocl')
}
getMainContent(){
    return cy.get('.main-content')
}
getSideMenu(){
    return cy.get('#sidebar-menu')
}
getCoursesTree(){
    return cy.get('.jstree-icon')
}
getModuleSaveBtn(){
    return cy.get(':nth-child(6) > .btn')
}
getQBDropDown(){
    return cy.get(':nth-child(1) > .dropdown > .btn')
}
getLookFor(){
    return cy.get(':nth-child(1) > .dropdown > div.dropdown-menu > .bs-searchbox > .form-control')
}

getAttNewBtn(){
    return cy.get('#AddNewAttribute-link')
}

getCheckBox(){
    return cy.get('#rdb_Checkbox')
}

getEntityNextBtn(){
    return cy.get('.mt-2 > #linkNext1')
}
getAttributeLbl(){
    return cy.get('#txtAttributeLabel')
}
getDefaultValue(){
    return cy.get('#rdbChecked')
}
getClearValueRTF(){
return cy.get(':nth-child(14) > [value="C"]')
}
gerClearPD(){
    return cy.get(':nth-child(15) > [value="C"]')
}
getSaveNewBtn(){
    return cy.get(':nth-child(5) > #AttributeDetailSavenNew-link')
}
getCurrencyCheckBox(){
    return cy.get('#rdb_Currency')
}
getDoNotExposeInApi(){
    return cy.get('#DoNotExposeInApi')
}
getDefaultValue(){
    return cy.get('#Numeric_DefaultValue')
}
getAllignmentType(){
    return cy.get('#AlignmentTypeId')
}
getDeleteWRecordRTF(){
    return cy.get(':nth-child(14) > [value="D"]')
}
getDoNothingPD(){
    return cy.get(':nth-child(15) > [value="N"]')
}
getLength(){
    return cy.get('#Numeric_Length')
}
getDate(){
    return cy.get('#rdb_Date')
}
getDefaultDateTime(){
    return cy.get('#DateTime_DefaultValue')
}
getDoNothingPD1(){
    return cy.get(':nth-child(14) > [value="N"]')
}
getShowInHeaderRank(){
    return cy.get('#txtShowInHeaderRank')
}
getNumber(){
    return cy.get('#rdb_Number')
}
getNumericDefaultValue(){
    return cy.get('#Numeric_DefaultValue')
}
getPickList(){
    return cy.get('#rdb_Picklist')
}
getClearValueRTF(){
    return cy.get(':nth-child(16) > [value="C"]')
}
getText(){
    return cy.get('#rdb_Text')
}
getDeleteWRecordRTF(){
    return cy.get(':nth-child(15) > [value="D"]')
}
getTextArea(){
    return cy.get('#rdb_TextArea')
}
getTextAreaDValue(){
    return cy.get('#AlphaNumeric_DefaultValue')
}
getClearValuePD(){
    return cy.get(':nth-child(15) > [value="C"]')
}
getTextAreaLong(){
    return cy.get('.form-check').contains("Text Area (Long)")
}
getDeleteWRecordPDTA(){
    return cy.get(':nth-child(17) > [value="D"]')
}
getTextAreaRich(){
    return cy.get('.form-check').contains("Text Area (Rich)")
}
getDoNothingPDRT(){
    return cy.get(':nth-child(17) > [value="N"]')
}
getLookUpRelationship(){
    return cy.get('#rdb_LookupRelationship')
}
getTime(){
    return cy.get('#rdb_Time')
}
getIcon(){
    return cy.get('#rdb_Icon')
}
getRadioButton(){
    return cy.get('#rdb_RadioButton')
}
getDefaultRB(){
    return cy.get('#GroupDefinitions_None00__IsDefault')
}
getCaption(){
    return cy.get('#GroupDefinitions_None00__SystemName')
}
getFile(){
    return cy.get('#rdb_File')
}
getAttributeType(){
    return cy.get('#AttributeTypeId')
}
getPassword(){
    return cy.get('#rdb_Password')
}
getColorPicker(){
    return cy.get('#rdb_Colour')
}
getPasswordHash(){
    return cy.get('#rdb_PasswordHash')
}
getFormDesignerLinkBtn(){
    return cy.get('#collapse_78311 > :nth-child(3)')
}

getEntityFormDesingerFields(){
    return cy.get('.item> span')
}

getEntityFormDesigSaveBtn(){
    return cy.get('#toolbox-header-btns > :nth-child(1) > .btn')
}
getSaveConfirmationOkBtn(){
    return cy.get('.ui-dialog-buttonset > :nth-child(1)')
}
getSearch(){
    return cy.get('#setupSearch')
}
getSearchLbl(){
    return cy.get('#accordion')
}
getFormDesignerLink(){
    return cy.get('#up-li-87564')
}

getFormDesignerLink1(){
return cy.get(':nth-child(3) > #form-builder-86758')
    
}


}

export default EntitySetupSecPO