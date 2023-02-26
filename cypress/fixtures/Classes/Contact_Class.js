
///<reference types='cypress'/>
import URLs from '../URLs.json'
import ContactPOs from '../PageObjects/ContactPOs'
const Contacts = require('../DataFiles/ContactsData.json')

const ContactPO = new ContactPOs()
    
class addContactsRecords{


    Smoke_addContacts(){
        
        cy.oomiLoginWithoutSession()
        ContactPO.getMainCRMMenuLink().click()
        ContactPO.getContactsLink().click()
        cy.log("There are" +Contacts.length+ "Records in JSON file")

        Contacts.forEach(Contact=>{
            cy.oomiButtonClick('Add')
            const Ran2 = Math.random()*5000
            ContactPO.getLastName().clear({force: true})
            ContactPO.getLastName().type(Contact.LastName,{force: true})
            ContactPO.getFirstName().type(Contact.FirstName,{force: true})
            ContactPO.getContactGeneralCollapse().click()
            ContactPO.getLastName().click()
            ContactPO.getLSide().click()
            ContactPO.getCommDetailsCollapse().click({force: true})
            ContactPO.getPriEmail().clear({force: true})
            ContactPO.getPriEmail().type(Ran2+'@test.com')
            ContactPO.getMailingAndBillingAddressCollapse().click({force: true})
            ContactPO.getMailingAddressPostCode().type('12345')
            //upload file
            //cy.oomiFileUpload('SampleTest.xlsx')
            cy.oomiButtonClick('Save & Close')
        
        })
    }
   
    Smoke_DeleteContacts(ContactInfo){
        cy.oomiLoginWithoutSession()
        ContactPO.getMainCRMMenuLink().click()
        ContactPO.getContactsLink().click()


           let ContactNo=ContactInfo.ContactNo
            cy.log("Number saved in Json for deletion is:" +ContactNo)

            //const ContactNo= prompt("Enter Number of Contact(s) You Want to Delete? ", 3);
            for (let i=1; i < ContactNo; i++){
                cy.wait(5000)
                ContactPO.getDeleteActionBtn().first().click( {force: true})
                cy.wait(5000)
               ContactPO.getDeleteOkBtn().click()

            }

            cy.log("outof from for loop...")

        
        ContactPO.getDeleteActionBtn().first().click( {force: true})
        cy.wait(5000)
       ContactPO.getDeleteOkBtn().click()


    }//end of function


}//end of class

    export default addContactsRecords