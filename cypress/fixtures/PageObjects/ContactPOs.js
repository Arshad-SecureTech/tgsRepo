class ContactPOs{
getContactAddbtn(){
    return cy.get(':nth-child(3) > .btn > span')
}
getLastName(){
    return cy.get('#Attribute008')
}
getContactGeneralCollapse(){
    return cy.get('#CONTACT_GENERAL_collapse > .card-body')

}
getCommDetailsCollapse(){
    return cy.get('#CONTACT_COMMUNICATION_DETAILS_Accordian > .card > .card-header > .mb-0 > .btn > .ml-2')
}
getMailingAndBillingAddressCollapse(){
    return cy.get('#CONTACT_MAILING_AND_BILLING_ADDRESS_Accordian > .card > .card-header > .mb-0 > .btn > .ml-2')
}
getPriEmail(){
    return cy.get('#Attribute069')
}
getMailingAddressPostCode(){
    return cy.get('#Attribute042')
}
getSaveCloseBtn(){
return cy.get(':nth-child(2) > [onclick="needToConfirm=false;SaveAndClose();"]')
}
getViewContent(){
    return cy.get('#divFilterViewContent')
}

getLSide(){
    return cy.get('#CONTACT_GENERAL_collapse > .card-body > :nth-child(1) > :nth-child(2)')
}
getFirstName(){
    return cy.get('#Attribute006')
}
getNationality(){
    return cy.get('#Attribute022')
}
getDeleteBtn(){
    return cy.get('#jqTable_frozen > tbody > #31  > .td-action > [href="javascript:void(0);"] > .fi-rr-trash')
}
getFileUploadBtn(){
    return cy.get('[type="file"]')
}
getMainCRMMenuLink(){
    return cy.get(':nth-child(2) > .waves-effect')
}
getContactsLink(){
    return cy.get('.mm-show').contains('Contacts')
}
getDeleteActionBtn(){
    return  cy.get('.custom-btns > .fi-rr-trash')
}
getDeleteOkBtn(){
    return  cy.get('.ui-dialog-buttonset > .ui-button')
}






}
export default ContactPOs