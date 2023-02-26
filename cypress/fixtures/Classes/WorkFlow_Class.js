///<reference types="cypress" />
import URLs from '../URLs.json'
import 'cypress-iframe'
import '@4tw/cypress-drag-drop'
import WorkFlowPOs from '../PageObjects/WorkFlowPO'
const WorkFlowPO = new WorkFlowPOs()

class WorkFlow{

    Smoke_WorkFlow(){

    cy.log('Running the Workflow smoke test function')
    cy.preserveCookies();
    cy.oomiLoginIfNot();
    cy.fixture("URLs").then((visitURL) => {
        cy.visit(visitURL.WorkflowAdministrationURL)
    })
    WorkFlowPO.getWorkFlowPageTitle().should('eq', 'New Workflow' )
    cy.draganddrop('[alt="Start"]', 'svg')



    
   // lets drop two items on the svg for interaction
      cy.get('img[alt="Start"]').dragTo('svg');
         cy.get('img[alt="Modify Data"]').dragTo('svg');

// now lets move them apart a little 
const getRect = (selector,contains) => {

  return cy.get(selector).contains(contains).then( $elem => {
     return $elem[0].getBoundingClientRect();
  })

};

const modifyDataStepCoords = getRect('tspan','Modify Data'  );

console.log("Starting the coords" + modifyDataStepCoords.top)

cy.get('tspan').contains('Modify Data').then($el => {
  var coord = $el[0].getBoundingClientRect();
  console.log(coord)
  cy.log('Code into code');
  cy.get('tspan').contains('Modify Data')
 .trigger('mousedown', 'center', { which: 1})
 .trigger('mousemove', { which: 1, pageX: coord.x + 2, pageY: coord.y-165 })
 .trigger('mouseup');
});

cy.log('jqUERY uio sORTABLE ');
  cy.get('tspan').contains('Modify Data')
  .trigger('mouseover');
 cy.log('dots are  visible so now trying to click the center dot which will create a path html object ( the line)');
 cy.get('circle').eq(4)
 .trigger('mousedown', { which: 1 });
 cy.log('line is now visible and ready to be moved but we need to click somewhere else (anywhere on svg) to hide the dots so... ');
 cy.get('tspan').contains('Start').click();
 cy.log('dots are now hidden, line is ready so lets select the line and move it ');
   cy.log('now trying to seelct the arrow head');
   cy.get('path').eq(1)
   .trigger('mousedown', { which: 1, force: true });

 

    }//end of class

}
export default WorkFlow
