import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import UserPageObject from "../support/pages/user.pageObject";
const homePage = new HomeAndCataloguePageObject();
const userPage = new UserPageObject();

/// <reference types='cypress' />
describe('should be able to authorize', () => {
    let generatedUser;
    beforeEach(() => {
        homePage.visit();
        cy.task('generateUser').then((generateUser) => {
            generatedUser = new Object(generateUser);
        });
        homePage.clickSignUpLink();
    });

    it('should be able to sign up', () => {
       userPage.typeUsername(generatedUser.username);
       userPage.typePass(generatedUser.password);
       userPage.signUpUser();
       userPage.assertAllert('Sign up successful.');
    });

    it('should be able to login', () => {
        userPage.typeUsername(generatedUser.username);
        userPage.typePass(generatedUser.password);
        userPage.signUpUser();
        userPage.assertAllert('Sign up successful.');
        homePage.clickLoginLink();
        userPage.typeLoginUsername(generatedUser.username);
        userPage.typeLoginPass(generatedUser.password);
        userPage.loginUser();
        userPage.assertUsernameLink(generatedUser.username);
    });
});
