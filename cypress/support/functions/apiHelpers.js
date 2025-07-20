import { getExpectedOrderFields } from '../expected/expectedOrderFields';

export function createOrder() {
    return cy.request({
        method: 'POST',
        url: `${Cypress.env('API_BASE_URL')}/v2/orders/instant`,
        headers: {
            Authorization: `Bearer ${Cypress.env('ACCESS_TOKEN')}`,
            'x-api-key': Cypress.env('API_KEY')
        },
        body: {
            clientOrderNumber: 'Thiti',
            sku: '2SY-3D-6TU'
        }
    });
}

export function pollOrderStatus(transactionId, maxRetries = 10, delay = 5000) {
    let attempts = 0;

    function checkStatus() {
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('API_BASE_URL')}/v2/orders?transactionId=${transactionId}`,
            headers: {
                Authorization: `Bearer ${Cypress.env('ACCESS_TOKEN')}`,
                'x-api-key': Cypress.env('API_KEY')
            },
            failOnStatusCode: false
        }).then((res) => {
            const item = res.body.data?.items?.[0];

            console.log(`Polling attempt ${attempts + 1}, status: ${item?.status}`);

            if (item?.status === 'COMPLETED') {
                return getExpectedOrderFields(item);
            } else if (attempts < maxRetries) {
                attempts++;
                cy.wait(delay);
                return checkStatus();
            } else {
                throw new Error('Polling timed out or invalid response format');
            }
        });
    }

    return checkStatus();
}