
Cypress.Commands.add('clickButton', (locator, options = {}) => {
    cy.get(locator, { timeout: options.timeout || 10000 })
        .should('be.visible')
        .click({ force: options.force || false });
});

Cypress.Commands.add('typeText', (locator, text, options = {}) => {
    cy.get(locator, { timeout: options.timeout || 10000 })
        .should('be.visible')
        .clear()
        .type(text, options);
});

Cypress.Commands.add('typeOtp', (otpPrefix, otpValue) => {
    const otp = otpValue.toString();
    for (let i = 0; i < otp.length; i++) {
        cy.get(`${otpPrefix}${i + 1}`).should('exist').type(otp[i]);
    }
});
