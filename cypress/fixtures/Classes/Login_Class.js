///<reference types="cypress" />
import LoginUsers from '../LoginUsers.json'

class Ommi_CRM_Login{
  

    oomiLogin(){
        cy.session('user', () => {

        cy.visit('/')
        cy.fixture("LoginUsers").then((user) => {
        cy.get("#LoginEmail").type(user.LoginEmail1);
        cy.get('.input-group > .form-control').type(user.LoginPassword1); 
        cy.oomiButtonClick('Log In')
        })//end of fixture     
    })
    }
    
    oomiLoginWithoutSession(){
        cy.visit('/')
        cy.fixture("LoginUsers").then((user) => {
        cy.get("#LoginEmail").type(user.LoginEmail4);
        cy.get('.input-group > .form-control').type(user.LoginPassword4); 
        cy.oomiButtonClick('Log In')
        })//end of fixture     

    }

    oomiAPILogin(){
        cy.session('user', () => {
        cy.visit('/')

        cy.fixture("LoginUsers").then((user) => {

        const url = "https://ui.oomi.co.uk/"
         cy.request({
            method: 'POST',
            url: url,
            form: true, 
            body: {
              FingerPrint: '3134993500',
              LoginEmail: user.LoginEmail1,
              LoginPassword: user.LoginPassword1

            },
          })//end of API request

        })//end of fixture

    })//end of session
    }//end of function



    oomiAPILoginWithoutSession(){
        
        cy.visit('/')
        cy.fixture("LoginUsers").then((user) => {
        const url = "https://ui.oomi.co.uk/"
         cy.request({
            method: 'POST',
            url: url,
            form: true, 
            body: {
              FingerPrint: '3134993500',
              LoginEmail: user.LoginEmail1,
              LoginPassword: user.LoginPassword1

            },
          })//end of API request
        })//end of fixture
    }//end of function






}
export default Ommi_CRM_Login
