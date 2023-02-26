///<reference types="cypress" />
import Events from '../../fixtures/Classes/Events_Class'
const EventObj = new Events()


describe ('Running the Regression Test....', function(){

    it('Event Regression Smoke Test', ()=>{
        EventObj.Regression_AddEvent()
        EventObj.Regression_DeleteEvent()
    })

    })//end of describe block
    it('Tests are Skipped - Regression', ()=>{
    

    })