
import { ApiManager } from "./ApiManager";

export const Api_Invoice = {

    //Create invoice
    createInvoice: async (data) => {
        return ApiManager.post('/createInvoice', data);
    },
    //Get  invoices BY USER
    getInvoicesByUser: async (userId) => {
        return ApiManager.post('/getInvoicesByUser', { userId });
    },

};