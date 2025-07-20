export function getExpectedOrderFields(item) {
    return {
        transactionId: item.transactionId,
        ezOrderNumber: item.ezOrderNumber,
        quantity: item.products?.[0]?.quantity,
        unitPrice: item.products?.[0]?.unitPrice?.amount,
        lineTotal: item.products?.[0]?.totalPrice?.amount,
    };
}
