import { createOrder, pollOrderStatus } from '../support/functions/apiHelpers';

describe('EZCards Order Flow (create via API → view via UI)', () => {
    let orderInfo;

    before(() => {
        cy.loginToPortal();

        return createOrder().then((res) => {
            const transactionId = res.body.data.transactionId;
            return pollOrderStatus(transactionId).then((info) => {
                orderInfo = info;
            });
        });
    });

    it('should open UI order page and verify fields', () => {
    cy.then(() => {
        cy.goToOrderPage(orderInfo.ezOrderNumber);
        cy.verifyOrderSummary(orderInfo);
    });
});
});