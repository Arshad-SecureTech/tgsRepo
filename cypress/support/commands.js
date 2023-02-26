
import Ommi_CRM_Login from "../fixtures/Classes/Login_Class"
import 'cypress-file-upload';
import addContactsRecords from '../fixtures/Classes/Contact_Class'
import Report from "../fixtures/Classes/Reports_Class";
import EntitySetupSecPO from "../fixtures/PageObjects/EntitySetupSecPO";
const EntityPO = new EntitySetupSecPO()

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@4tw/cypress-drag-drop'

Cypress.Commands.add('GenerateNumber', () => { 

    var datenow = new Date()
    var hrs = datenow.getHours().toString()
    var mins = datenow.getMinutes().toString()
    var sec = datenow.getSeconds().toString()
    var time = hrs + mins + sec

    return cy.wrap(time)


})
//For Cypress drag and drop custom command

Cypress.Commands.add('dragAndDropByIndex', (subject, target, dragIndex, dropIndex) => {
    cy.get(subject).should('be.visible', { timeout: 20000 })
    Cypress.log({
        name: 'DRAGNDROPByIndex',
        message: `Dragging element ${subject} to ${target}`,
        consoleProps: () => {
            return {
                subject: subject,
                target: target
            };
        }
    });
    const BUTTON_INDEX = 0;
    const SLOPPY_CLICK_THRESHOLD = 10;
    cy.get(target)
        .eq(dropIndex)
        .then($target => {
            let coordsDrop = $target[0].getBoundingClientRect();
            cy.get(subject)
                .eq(dragIndex)
                .then(subject => {
                    const coordsDrag = subject[0].getBoundingClientRect();
                    cy.wrap(subject)
                        .trigger('mousedown', {
                            button: BUTTON_INDEX,
                            clientX: coordsDrag.x,
                            clientY: coordsDrag.y,
                            force: true
                        })
                        .trigger('mousemove', {
                            button: BUTTON_INDEX,
                            clientX: coordsDrag.x + SLOPPY_CLICK_THRESHOLD,
                            clientY: 200,
                            force: true
                        }).wait(1000);
                    cy.get('body')
                        .trigger('mousemove', {
                            button: BUTTON_INDEX,
                            clientX: coordsDrop.x,
                            clientY: 200,
                            force: true
                        })
                        .trigger('mouseup');
                });
        });
});
Cypress.Commands.add('draganddrop', (dragSelector, dropSelector) => {
    cy.get(dragSelector).should('exist')
        .get(dropSelector).should('exist');

    const draggable = Cypress.$(dragSelector)[0]; // Pick up this
    const droppable = Cypress.$(dropSelector)[0]; // Drop over this

    const coords = droppable.getBoundingClientRect()
    draggable.dispatchEvent(new MouseEvent('mousedown'));
    draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: 0, clientY: 30 }));
    draggable.dispatchEvent(new MouseEvent('mousemove', {
        clientX: coords.left + 10,
        clientY: coords.top + 10  // A few extra pixels to get the ordering right
    }));
    draggable.dispatchEvent(new MouseEvent('mouseup'));
    cy.log('command finished')
    return cy.get(dropSelector);
})

Cypress.Commands.add('oomiLoginIfNot', ()=>{
    cy.getCookies().should('have.length.gte', 0).then(($oomiCooki)=>{
        if(!$oomiCooki.length){
            cy.log('No cookies are saved...')
            cy.log('oomiLogin function is called...')
            var loginObj= new Ommi_CRM_Login
            loginObj.oomiLogin()
            return

        }
        cy.log('Applicaton is already logged in...')
        //cy.clearCookies()
        
        })
    })


Cypress.Commands.add('oomiLoginWithoutSession', ()=>{
    var loginObj = new Ommi_CRM_Login
    loginObj.oomiLoginWithoutSession()



})







Cypress.Commands.add('preserveCookies', ()=>{
    cy.log('preserving the cookies for oomi crm....')
    Cypress.Cookies.preserveOnce('SrmWebjamCookie', 'remember_token')
    Cypress.Cookies.preserveOnce('ASP.NET_SessionId', 'remember_token')
    Cypress.Cookies.preserveOnce('AWSALB', 'remember_token')
    Cypress.Cookies.preserveOnce('AWSALBCORS', 'remember_token')
 })



Cypress.Commands.add('runSmokeTest',()=>{
    cy.log('Smoke test is running...')
    // Add contacts
    const contactObj = new addContactsRecords() //https://portal.azure.com/?quickstart=True#home
    contactObj.addContacts({failOnStatusCode: false})
    //Reports smoke test
    const ReportsObj = new Report()
    ReportsObj.S_Reports({failOnStatusCode: false})
})

Cypress.Commands.add('oomiButtonClick',(Caption)=>{
    return cy.get('.btn').should('be.visible').contains(Caption).click({force: true})
})
Cypress.Commands.add('oomiFileUpload', (FileName)=>{
    return cy.get('[type="file"]').attachFile(FileName)
})
/*
Cypress.Commands.add('oomiTextField', (Text)=>{
    return cy.get('input[type="text"]').type(Text)
})
Cypress.Commands.add('oomiTextFieldClear', ()=>{
    return cy.get('input[type="text"]').clear()
})
Cypress.Commands.add('oomiCheckBoxClick', (ID)=>{
    return cy.get(ID).click({force:true})
})
*/

Cypress.Commands.add('oomiSubMenu', (SubMenuName)=>{
    return cy.get('#side-menu').contains(SubMenuName)
})

Cypress.Commands.add('dragDropEntityFormDesigner', (dragFieldName, dropColumn)=>{

    cy.log('now running drap drop code ');
    EntityPO.getEntityFormDesingerFields().contains(dragFieldName).trigger('drag', { dataTransfer: new DataTransfer });
    EntityPO.getEntityFormDesingerFields().contains(dragFieldName).trigger('mousedown', { which: 1 });
    EntityPO.getEntityFormDesingerFields().contains(dragFieldName).trigger('dragstart', { dataTransfer: new DataTransfer });
    cy.get('.group-content >'+dropColumn ).first().trigger('drop')
    .trigger('mousemove').trigger('mouseup', { force: true }).trigger('dragend');
    //EntityPO.getEntityFormDesigSaveBtn().click({force: true})
    //EntityPO.getSaveConfirmationOkBtn().click()
  
  })
  
  Cypress.Commands.add('oomiDateTime', () => {
    var datenow = new Date();
    var hrs = datenow.getHours().toString();
    var mins = datenow.getMinutes().toString();
    var sec = datenow.getSeconds().toString();
    var day = datenow.getDay().toString();
    var year = datenow.getFullYear().toString();
    var month = (datenow.getMonth() + 1).toString()
    var time = year+ month+day+hrs+ mins + sec
    return cy.wrap(time)
})


Cypress.Commands.add('oomiEntity', (EntityName, LinkText)=>{
    cy.get('a[aria-expanded="true"]').contains(EntityName).parent().find('li').within(() => {
        cy.get('a').contains(LinkText).click()
     })
})

