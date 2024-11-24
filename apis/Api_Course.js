import { ApiManager } from "./ApiManager";

// register
export const Api_Course = {
    getCourseByUser: async (userId) => {
        console.log('Api_Course.getCourseByUser', userId);
        return ApiManager.post('/getCourseByUser', { userId });
    },
    // getLessonsByCourse
    getLessonsByCourse: async (courseID) => {
        console.log('Api_Course.getLessonsByCourse', courseID);
        return ApiManager.get(`/${courseID}`);
    },
};