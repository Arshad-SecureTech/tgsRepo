class EventPOs{
    getMainLink(){
        return cy.get(':nth-child(3) > .btn > span')
    }
    getMainMenu(){
        return cy.get(':nth-child(5) > .waves-effect')
    }
    getMenuMulti(){
        return cy.get('.mm-show > :nth-child(5) > .multi-menu')
    }
    getShowMenu(){
        return cy.get('.mm-show > :nth-child(3) > a')
    }
    getEventType(){
        return cy.get('#Attribute031')
    }
    getEventTypeText(){
        return cy.get('#ui-id-1> .ui-menu-item')
    }
    getEventID(){
        return cy.get('#Attribute001')
    }
    getEventName(){
        return  cy.get('#Attribute002')
    }
    getMaxSeats(){
        return cy.get('#Attribute010')
    }
    getFormalTitle(){
        return cy.get('#Attribute003')
    }
    getEventStatus(){
        return cy.get('#Attribute033')
    }
    getGeneral(){
        return cy.get('#EVENT_GENERAL_Accordian > .card > .card-header > .mb-0')
    }
    getDate(){
        return cy.get('#Attribute006')
    }
    getGeneralCollapse(){
        return cy.get('#EVENT_GENERAL_collapse > .card-body > :nth-child(1) > :nth-child(2)')
    }
    getStartDate(){
        return cy.get('#Attribute005')
    }
    getStartDate(){
        return cy.get('#Attribute008')
    }
    getEndDate(){
        return cy.get('#Attribute009')
    }
    getRegion(){
        return cy.get('#Attribute070')
    }
    getMiniumSeats(){
        return cy.get('#Attribute011')
    }
    getCostCentre(){
        return cy.get('#Attribute059')
    }

    getCostCenterItem(){
        return cy.get('#ui-id-4> .ui-menu-item')
    }
    getLedgerAccount(){
        return cy.get('#Attribute041')
    }
    getLedgerAccountField(){
        return cy.get('#ui-id-5')
    }
    getVatRate(){
        return cy.get('#Attribute039')
    }
    getMainContact(){
        return cy.get('#Attribute037')
    }
    getMainContactField(){
        return cy.get('#ui-id-7')
    }
    getVenu(){
        return cy.get('#Attribute035')
    }
    getVenuField(){
        return cy.get('#ui-id-8>')
    }
    getLocation(){
        return cy.get('#Attribute020')
    }
    getCuttOffDate(){
        return cy.get('#Attribute050')
    }
    getGeneralCollapse(){
        return cy.get('#EVENT_GENERAL_collapse > .card-body > :nth-child(1) > :nth-child(1)')
    }
    getNotesForWeb(){
        return cy.get('#Attribute065')
    }
    getTsCsForWeb(){
        return cy.get('#Attribute066')
    }
    getRemarks(){
        return cy.get('#Attribute028')
    }
    getWaitingListRadionBtn(){
        return cy.get('[value="Session"]')
    }
    getWaitingListPer(){
        return cy.get('#Attribute017')
    }
    getWaitingListNumber(){
        return cy.get('#Attribute018')
    }
    getSpeaker(){
        return cy.get('#Attribute043')
    }
    getSpeakerField(){
        return cy.get('#ui-id-9> .ui-menu-item ')
    }
    getDinnerCheckBox(){
        return cy.get('#cb-Attribute045')
    }
    getNoRefundCheckBox(){
        return cy.get('#cb-Attribute019')
    }
    getTotalConfirmedBookings(){
        return cy.get('#Attribute012')
    }
    getTotalCancellations(){
        return cy.get('#Attribute013')
    }
    getSeatsAvailable(){
        return cy.get('#Attribute015')
    }
    getTotalConfirmedTba(){
        return cy.get('#Attribute023')
    }
    getTotalWaiting(){
        return  cy.get('#Attribute016')
    }
    getDivFilter(){
        return cy.get('#divFilterViewContent')
    }
    getDeleteIconBtn(){
        cy.wait(3000)
        //return cy.get(".td-action> [title='Delete'")
        return cy.get('.td-action > :nth-child(3) > .custom-btns > .fi-rr-trash')
    }
    getDeleteConfirmation(){
        return cy.get('.ui-dialog-buttonset > .ui-button')
    }



} // end of class
export default EventPOs