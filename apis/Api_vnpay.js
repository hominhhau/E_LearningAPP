import { ApiManager } from "./ApiManager";

// register
export const Api_vnpay = {
    createPaymentUrl: async (amount, bankCode, language) => {
        return ApiManager.post('/createPaymentUrl', { amount });
    },
    // get: async (url) => request('get', url),

    vnpayReturn: async () => {
        return ApiManager.get('/vnpay_return');
    },
}