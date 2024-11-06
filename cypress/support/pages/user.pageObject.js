import PageObject from '../PageObject';

class UserPageObject extends PageObject {

    get userName() {
        return cy.get('#sign-username', { timeout: 3000 });
    }

    get password() {
        return cy.get('#sign-password', { timeout: 5000 });
    }

    typeUsername(username) {
        this.userName.type(username);
    }

    typePass(password) {
        this.password.type(password);
    }

    typeLoginUsername(username) {
        cy.get('#loginusername', { timeout: 3000 }).type(username);
    }

    typeLoginPass(password) {
        cy.get('#loginpassword', { timeout: 6000 }).type(password);
    }

    loginUser() {
        cy.get('button[onclick="logIn()"]', { timeout: 8000 }).click();
    }

    assertUsernameLink(username) {
        cy.get('a#nameofuser').should('have.text', 'Welcome' + username);
    }

    signUpUser() {
        cy.get('button[onclick="register()"]', { timeout: 3000 }).click();
    }
}

export default UserPageObject;
