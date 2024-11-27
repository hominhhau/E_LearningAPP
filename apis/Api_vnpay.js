import { ApiManager } from "./ApiManager";

// register
export const Api_vnpay = {
    createPaymentUrl: async (amount, invoiceID) => {
        return ApiManager.post('/createPaymentUrl', { invoiceID, amount });
    },
    // get: async (url) => request('get', url),

    vnpayReturn: async () => {
        return ApiManager.get('/vnpay_return');
    },
}