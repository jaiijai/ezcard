Cypress.Commands.add('goToOrderPage', (ezOrderNumber) => {
    cy.visit(`/order/${ezOrderNumber}`);
});

Cypress.Commands.add('verifyOrderSummary', (orderInfo) => {
    if (!orderInfo?.ezOrderNumber) {
        throw new Error('ezOrderNumber is undefined');
    }

    cy.url().should('include', `/order/${orderInfo.ezOrderNumber}`);
    cy.contains('td', orderInfo.transactionId).parents('tr').within(() => {
        cy.contains(orderInfo.quantity).should('exist');
        cy.contains(orderInfo.unitPrice).should('exist');
        cy.contains(orderInfo.lineTotal).should('exist');
    });
});