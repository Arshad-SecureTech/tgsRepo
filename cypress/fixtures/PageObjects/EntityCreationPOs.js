class EntityCreationPOs {
  
        
    getLabelField () {

        return cy.get('input[id="Label"]')
    }
    getRecordName() {
        return cy.get(':nth-child(2) > #StandardAttributeName')
    }
    getStartingNumberField() {
        return cy.get(':nth-child(5) > #StandardAttributeName')
    }
    getAllowActivitiesCB() {

        return cy.get('#AllowActivities')
    }
    getTrackingFieldHistoryCB() {

        return cy.get('#TrackFieldHistory')
    }

    getDeployedRB() {

        return cy.get('#rdbCaseInsensitive1')
    }

    getSaveButton() {

        return cy.get('button').contains('Save')
    }

    getShowInMenuCB() {

        return cy.get('#ShowInMenu')
    }

    getCRMNode() {

        return cy.get('#64004_anchor')
        
    }

    getTreeHome() {

        return cy.get('#0_anchor')
    }
   
    getFinalSaveBtn () {

        //return cy.get('input').contains('Save')
        return cy.get('.btn').eq(0).contains('Save')
    }

    getDeleteEntity(){
        return cy.get('#collapse_87556').contains('Delete')
    }
    getEntityDeleteConfirmBtn(){
        return cy.get('.ui-dialog-buttonset > :nth-child(1)')
    }

    getNewBtn(){
        return cy.get('#AddNewAttribute-link')
    }
    getAnchor(){
        return cy.get('.jstree-ocl')
    }
    getEntityAttribute(attribute){
        return cy.get(attribute)
    }

    getTextField1(){
        return cy.get('#rdb_Text')
    
    }
    
    getEntityAttributeNumber(){
        return cy.get('#rdb_Number')
    }
    getCheckBox1(){
        return cy.get('#rdb_Checkbox')
    }
    getCurrency1(){
    return cy.get('#rdb_Currency')
    }



    getAttributesLink(){

    }   
    getEntityInformation(){
        return cy.get('#collapse_88397 > :nth-child(1)')
    }
    getShowInQBCheckBox(){
        return cy.get('.col-xl-6.pl-0 > :nth-child(4) > .form-check-input')
    }
    getShowInMenu(){
        return cy.get('#ShowInMenu')
    }
    getAnchor1(){
        return cy.get('#accordion')
    }
    getCRM(){
        return cy.get('.jstree-children> #64004 > .jstree-icon')
    }
    getHi(){
        return cy.get('#136523_anchor')
    }
    getFocusHI(){
        return cy.get('#64004_anchor')
    }
    getTextField(){
        return cy.get('#Attribute002')
    }
    getNumber(){
        return cy.get('#Attribute003')
    }
    getCheckBox(){
        return cy.get('#cb-Attribute004')
    }
    getCRMLink(){
        return cy.get(':nth-child(2) > .waves-effect')
    }
    getHIProjectLink(){
        return cy.get('.mm-show > :nth-child(3) > [href="javascript:void(0);"][aria-expanded="false"]')
    }
    getEntityCheckBox(){
        return cy.get('#rdb_Checkbox')
    }
    getCurrency(){
        return cy.get('#Attribute005')
    }
    getDate(){
        return cy.get('#Attribute006')
    }
    getPickList(){
        return cy.get('#Attribute007')
    }
    getTextArea(){
        return cy.get('#Attribute009')
    }
    getLookUpRelationship(){
        return cy.get('#Attribute011')
    }
    getTime(){
        return cy.get('#Attribute012')
    }
    getPassword(){
        return cy.get('#Attribute015')
    }

    getPasswordHash(){
        return cy.get('#Attribute016')
    }

    getCRMMenuLink(){
        return cy.get(':nth-child(2) > .waves-effect')
    }
    getHIMenuLink(){
        return cy.get('.mm-show > :nth-child(3) > [href="javascript:void(0);"][aria-expanded="false"]')
    }
    getEntity(){
        return cy.get('.mm-collapse')
    }
    getTextAreaLong(){
        return cy.get(':nth-child(10) > :nth-child(1) > .form-check > .form-check-label')
    }
    getTextAreaRich(){
        return cy.get(':nth-child(11) > :nth-child(1) > .form-check > .form-check-label')
    }
    getStatus(status){
        return cy.get(status)
    }
   getTextAreaLong1(){
    return cy.get('#Attribute014')
   }
   getTextAreaRich1(){
    return cy.get('#Attribute021')
   }
   getGenderLookup(){
    return cy.get('#Attribute018')
   }
   getRichTextPopUpBtn(){
    return cy.get('[style="margin-top:10px;"] > .btn-primary')
   }
   getRichTextSaveBtn(){
    return cy.get('[style="margin-top:10px;"] > .btn-secondary')
   }
   getRichTextArea(){
    return cy.get('#popup_Attribute021_ifr')
   }




}//end of class

export default EntityCreationPOs;