///<reference types="cypress" />
/// <reference types = "Cypress-iframe"/>
import URLs from '../URLs.json'
import ReportsPOs from '../PageObjects/ReportsPO';
const ReportPO = new ReportsPOs()
import 'cypress-iframe'

class Report{
  
    

    Smoke_Reports(){
        
        cy.preserveCookies();
        cy.oomiLoginIfNot();
        cy.fixture("URLs").then((visitURL) => {
            cy.visit(visitURL.ShowSingleReport)
        })
        //Expand Events 
        ReportPO.geTitle().should('eq', 'Reports' )
        ReportPO.getFrame().then(function($iFrame){

            //code that expands the toogle in repoorts module
            const iFrameContent = $iFrame.contents().find('body')
            cy.wrap(iFrameContent).find('#accordion> .card> .card-header> .btn').first().click()
            cy.wait(2000)
            
            });

        // Click on Event Booking Details

        ReportPO.getFrame().then(function($iFrame){
            const iFrameContent2 = $iFrame.contents().find('body')
           cy.wrap(iFrameContent2).find('#accordion> .card> .collapse').contains('Event Booking Details').click()
          cy.wait(3000)
          const iFrameContent3 = $iFrame.contents().find('body')
           cy.iframe().find('select[name="reportViewer$ctl04$ctl03$ddValue"]').select(1);  
         
               });

        // Click on Veiw Report button 

        ReportPO.getFrame().then(function($iFrame){
            const iFrameContent1 = $iFrame.contents().find('body')
            cy.wait(3000)
            cy.wrap(iFrameContent1).find('#panel> .row> .col-xl-9> .card> .card-body').contains('View Report').click()
            
        })

        // Expand toogle 
        ReportPO.getFrame().then(function($iFrame){
            //code that expands the toogle in repoorts module
            const iFrameContent3 = $iFrame.contents().find('body')
          cy.wait(2000)   
      
            });

    }
  


    }


export default Report
