class LoginPageObjects {

getUserNameField () {

    return  cy.get('#LoginEmail')

}

getPasswordField () {

    return cy.get('[name="LoginPassword"]')
}
getLoginBtn () {

    return cy.get('[type="Submit"]')
}


}
export default LoginPageObjects;
