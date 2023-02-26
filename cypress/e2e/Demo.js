///<reference types='cypress'/>
import validatorData from '../fixtures/DataFiles/JsonTestData.json';
const {expect} = require("chai").use(require('chai-json-schema'));

describe('Test Describe block', function() {


it('1st it block',()=>{
  cy.log("Start Time: "+new Date().toLocaleString());




})


it.only('Testing Json Schema',()=>{

  expect(validatorData.Apples).to.be.jsonSchema(validatorData.Schema);
  




})//end of it block




})// end of describe block

