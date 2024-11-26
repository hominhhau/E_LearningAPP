import { ApiManager } from "./ApiManager";

// register
export const Api_Category = {
    getAllCategories: async () => {
        return ApiManager.get('/getAllCategories');
    },
}

