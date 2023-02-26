class EntityAttributesPOs {

    getRadioBox(FieldType) {

        return cy.get('label').contains(FieldType)
    }

    getCustomLink (LinkText) {

        return cy.get('a').contains(LinkText)
    
    }

    getAttributeField() {

        return cy.get('#txtAttributeLabel')

    }

    getSaveButton () {

        return  cy.get('#AttributeDetailSave-link').first()
    }

    getDate(){
        return getbyId('#rdb_Date')
    }
    getNumber(){
        return getbyId('#rdb_Number')
    }
    getCurrency(){
        return cy.get('#rdb_Currency')
    }
    getDecimalPlaces(){
        return cy.get('#Numeric_DecimalPlaces')
    }
    getLength(){
        return cy.get('#Numeric_Length')
    }
    getDate(){
        return cy.get('#rdb_Date')
    }
    getDateAttributeName(){
        return cy.get('#txtAttributeName')
    }
    getPickList(){
        return cy.get('#rdb_Picklist')
    }
    getAttributeRelationShip(){
        return cy.get('#txtAttributeRelationship')
    }
    getTextArea(){
        return cy.get('#rdb_TextArea')
    }
    getTextAreaLong(){
        return cy.get('#rdb_TextArea(Long)')
    }
    getLookUpRelationship(){
        return cy.get('#rdb_LookupRelationship')
    }
    getTime(){
        return cy.get('#rdb_Time')
    }
    getRadioButton(){
        return cy.get('#rdb_RadioButton')
    }
    getCaption(){
        return cy.get('#GroupDefinitions_None00__SystemName')
    }
    get2ndCaption(){
        return cy.get('.optionInput')
    }
    getFile(){
        return cy.get('#rdb_File')
    }
    getPassword(){
        return cy.get('#rdb_Password')
    }
    getPasswordHash(){
        return cy.get('#rdb_PasswordHash')
    }
    getOKButton9(){
        return cy.get('.ui-dialog-buttonset > .ui-button')
    }





}
export default EntityAttributesPOs;