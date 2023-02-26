class SetupScreenPOs {

getSetupSearch () {

    return cy.get('#setupSearch')

}

getCustomLink (LinkText) {

    return cy.get('a').contains(LinkText)

}

getNewlyCreatedEntityLink () {

    return cy.get('a').contains()
}

getById(Id) {

    return cy.get(Id)
}

getAchor(){
    cy.get('a')
}




}

export default SetupScreenPOs;