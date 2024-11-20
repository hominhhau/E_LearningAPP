import { ApiManager } from "./ApiManager";

export const API_Chatgpt = {
    // getChatgpt
    getChatgpt: async (message) => {
        return ApiManager.post('/chatgpt', { message });
    },
}