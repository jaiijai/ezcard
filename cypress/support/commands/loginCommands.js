import { loginPage } from '../../locators/loginLocators';

Cypress.Commands.add('loginToPortal', () => {
    cy.fixture('testData').then((data) => {
        cy.visit('/');
        cy.wait(5000);
        cy.typeText(loginPage.username, data.email);
        cy.typeText(loginPage.password, data.password);
        cy.clickButton(loginPage.loginButton);
        cy.wait(5000);
        cy.typeOtp(loginPage.otp, data.otp);
        cy.clickButton(loginPage.verifyButton);
        });
    });
