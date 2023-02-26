class CommonFunctions {

getbyId(Id) {

return cy.get(Id)

}
getByAttribute (Element, Attribute, Value) {

    return cy.get ("'"+ Element + "[" + Attribute + "=" + Value +"]'")
    
}

}

export default CommonFunctions;