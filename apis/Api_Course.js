import { ApiManager } from "./ApiManager";

// register
export const Api_Course = {
    getCourseByUser: async (userID) => {
        return ApiManager.get(`/getCourseByUser/${userID}`);
    }
};