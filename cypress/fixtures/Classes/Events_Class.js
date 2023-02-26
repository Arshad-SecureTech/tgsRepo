///<reference types="cypress" />
import LoginUsers from '../LoginUsers.json'
import EventPOs from '../PageObjects/EventPOs'
const EventPO = new EventPOs()
var Ran= Math.random()*5000
var Ran1= Math.random()*5000

class Events{
  
    Regression_AddEvent(){
    cy.log('Running the add event smoke test function')
    cy.preserveCookies();
    cy.oomiLoginIfNot();
    cy.visit('/')
    /*
    cy.fixture("URLs").then((visitURL) => {
        cy.visit(visitURL.EventsURL)
    })
    EventPO.getMainLink().click()
    */
        EventPO.getMainMenu().click({force: true})
        cy.oomiSubMenu('Events')
        EventPO.getMenuMulti().click()
        cy.oomiSubMenu('Delegate Types') 
        cy.oomiSubMenu('Event Types')
        cy.oomiSubMenu('Event Rate Types')
        cy.oomiSubMenu('Event Status')
        cy.oomiSubMenu('Event Registration Status')
        cy.oomiSubMenu('Session Types')
        cy.oomiSubMenu('Special Requirements')
        cy.oomiSubMenu('Registration Methods')
        cy.oomiSubMenu('Event Registration Charges')
        EventPO.getShowMenu().click()
        cy.oomiButtonClick('Add')
        EventPO.getEventType().type('Seminar')
        EventPO.getEventTypeText().contains('Seminar').click()
        EventPO.getEventTypeText().should('have.length.gte', 0).then(($EventType)=>{
            if(!$EventType.length){
            
                cy.log('Event Type drop down is empty - Need to add Event type...')
                return
            }
            EventPO.getEventType().clear()
            cy.log('Typing the "Seminar" and selecting it... ')
            EventPO.getEventType().type('Seminar')
            cy.wrap($EventType).get('#ui-id-1> .ui-menu-item').contains('Seminar').click({force: true})
            })

        EventPO.getEventID().type(Ran)
        //EventPO.getEventName().type('Meeting')
        EventPO.getMaxSeats().clear()
        EventPO.getMaxSeats().type('36')
        EventPO.getEventName().type('Meeting')
        EventPO.getFormalTitle().clear()
        EventPO.getFormalTitle().type('Meeting')
        EventPO.getEventStatus().type('Cancelled')
        cy.get('#ui-id-2> .ui-menu-item').should('have.length.gte', 0).then(($EventStatus)=>{
        if(!$EventStatus.length){
        cy.log('Event Status drop down is empty - Need to add Event status')
        return
        }})
        EventPO.getEventStatus().clear()
        cy.log('Typing the "Cancelled" and selecting it... ')
        EventPO.getEventStatus().type('Cancelled')
        EventPO.getGeneral().click()
        EventPO.getDate().type('11/06/2022')
        EventPO.getStartDate().clear()
        EventPO.getStartDate().type('07/04/2023')
        EventPO.getGeneralCollapse().click({force: true})
        EventPO.getDate().clear()
        EventPO.getDate().type('08/07/2023')
        EventPO.getGeneralCollapse().click({force: true})
        EventPO.getStartDate().clear()
        EventPO.getStartDate().type('12:00')
        EventPO.getGeneralCollapse().click({force: true})
        EventPO.getEndDate().clear()
        EventPO.getEndDate().type('14:00')
        EventPO.getGeneralCollapse().click({force: true})
        EventPO.getRegion().type('England')
        cy.wait(3000)
        cy.get('#ui-id-3> .ui-menu-item').should('have.length.gte', 0).then(($Region)=>{
            if(!$Region.length){
            
                cy.log('Region drop down is empty - Need to add Region')
                return
            }
            EventPO.getRegion().clear()
            cy.log('Typing the "England" and selecting it... ')
            EventPO.getRegion().type('England')
            cy.wrap($Region).get('#ui-id-3> .ui-menu-item').contains('England - Northern Counties').click({force: true})
            
            })
            
            //Verify that user can add the minimum seats for the Event.(EVENT-CF-12)
            EventPO.getMiniumSeats().clear().type('10')
            //Verify that user can add the Maximum seats for the Event.(EVENT-CF-13)
            EventPO.getMaxSeats().clear()
            EventPO.getMaxSeats().type('220')
            //Verify that user can add the Cost Centre for the Event. (EVENT-CF-14)
            EventPO.getCostCentre().type('2016')
            //cy.get('#ui-id-4> .ui-menu-item').contains('2016WALESCOMPS').click()
            cy.wait(3000)
            
            EventPO.getCostCenterItem().should('have.length.gte', 0).then(($CostCenter)=>{
            if(!$CostCenter.length){
            
                cy.log('Cost Center drop down is empty - Need to add Cost Center')
                return
            }
            EventPO.getCostCentre().clear()
            cy.log('Typing the "2016" and selecting it... ')
            EventPO.getCostCentre().type('2016')
            cy.wrap($CostCenter).get('#ui-id-4> .ui-menu-item').contains('2016WALESCOMPS').click({force: true})
            
            })
            
            //Verify that user can add the Ledger Account for the Event. (EVENT-CF-15)
            EventPO.getLedgerAccount().type('100002')
            //cy.get('#ui-id-5').contains('100002 | Sales - Group Membership Main Fees').click()
            cy.wait(3000)
            
            EventPO.getLedgerAccountField().should('have.length.gte', 0).then(($LedgerAccount)=>{
            if(!$LedgerAccount.length){
            
                cy.log('Ledger Account drop down is empty - Need to add Ledger Account')
                return
            }
             EventPO.getLedgerAccount().clear()
            cy.log('Typing the "100002" and selecting it... ')
            EventPO.getLedgerAccount().type('100002')
            cy.wrap($LedgerAccount).get('#ui-id-5').contains('100002 | Sales - Group Membership Main Fees').click({force: true})
            
            })
            
            //Verify that user can apply VAT Rate for the New Event. (EVENT-CF-16)
            EventPO.getVatRate().type('Standard')
            cy.wait(3000)
            cy.get('#ui-id-6> .ui-menu-item').should('have.length.gte', 0).then(($VATRate)=>{
            if(!$VATRate.length){
            
                cy.log('VAT Rate drop down is empty - Need to add VAT Rate')
                return
            }
            EventPO.getVatRate().clear()
            cy.log('Typing the "Standard" and selecting it... ')
            EventPO.getVatRate().type('Standard')
            cy.wrap($VATRate).get('#ui-id-6> .ui-menu-item').contains('Standard').click({force: true})
            
            })
            
            //Verify that user can select Main Contact for the New Event. (EVENT-CF-17)
            EventPO.getMainContact().type('Cypress Test').click()
            EventPO.getMainContactField().contains('Cypress Test').click()
            
            //Verify user can add Venue for the New Event.(EVENT-CF-18)
            EventPO.getVenu().type('Bedford').click()
            EventPO.getVenuField().contains('Bedford').click()
            
            //Verify that user can add location for the New Event. (EVENT-CF-19)
            EventPO.getLocation().type('London')
            
            //Verify that user is able to set 'Cutt-off Date' in the format dd/mm/yy for the New Event.(EVENT-CF-20)
            EventPO.getCuttOffDate().clear()
            EventPO.getCuttOffDate().type('08/04/2022')
            EventPO.getGeneralCollapse().click()
            
            //Verify that user is able to add Notes for Web for the New Event.(EVENT-CF-21)
            EventPO.getNotesForWeb().type('Test Notes from Cypress')
            
            //Verify that user is able to add Ts & Cs for Web for the New Event.(EVENT-CF-22)
            EventPO.getTsCsForWeb().type('This is test Ts & Cs from Cypress')
            
            //Verify that user is able to add Remarks for the New Event.(EVENT-CF-23)
            EventPO.getRemarks().type('This is test Remarks from Cypress')
            
            //Verify that user can select any radio button for Waiting List By field for the New Event.(EVENT-CF-24)
            EventPO.getWaitingListRadionBtn().click()
            
            //Verify that user can add the Waiting Limit Percentage for the New Event.(EVENT-CF-25)
            EventPO.getWaitingListPer().type('33')
            
            //Verify that user can add the Waiting Limit  Number for the New Event.(EVENT-CF-26)
            EventPO.getWaitingListNumber().clear()
            EventPO.getWaitingListNumber().type('2')
            
            //Verify that user can add the Speaker/Tutor for the New Event.(EVENT-CF-27)
            EventPO.getSpeaker().type('Cypress')
            EventPO.getSpeakerField().contains('Cypress').click()
            
            //Verify that user can check the Dinner checkbox for the New Event.(EVENT-CF-28)
            EventPO.getDinnerCheckBox().click()
            
            //Verify that user can check the Cancellation with No Refund checkbox for the New Event.(EVENT-CF-29)
            EventPO.getNoRefundCheckBox().click()
            
            //Verify that Total Confirmed Booking for the New Event is read only field.(EVENT-CF-30)
            
            EventPO.getTotalConfirmedBookings().should('be.disabled')
            
            //Verify that Total Cancellations for the New Event is read only field.(EVENT-CF-31)
            EventPO.getTotalCancellations().should('be.disabled')
            
            //Verify that Seats Available for the New Event is read only field.(EVENT-CF-32)
            EventPO.getSeatsAvailable().should ('be.disabled')
            
            //Verify that Total Confirmed TBA for the New Event is read only field.(EVENT-CF-33)
            EventPO.getTotalConfirmedTba().should('be.disabled')
            
            //Verify that Total on Waiting List for the New Event is read only field.(EVENT-CF-34)
           EventPO.getTotalWaiting().should('be.disabled')
         
        //saving and verifying
        cy.oomiButtonClick('Save & Close')
        EventPO.getDivFilter().should('contain', 'Meeting')
    
}


    Regression_DeleteEvent(){
        EventPO.getDeleteIconBtn().first().click({force: true})
        EventPO.getDeleteConfirmation().click()
    }

}//end of class
export default Events
