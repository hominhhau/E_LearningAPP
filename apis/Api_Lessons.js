import { ApiManager } from "./ApiManager";

// register
export const Api_Lesson = {
    getLessonsByCourse: async (courseID) => {
        return ApiManager.post('/getLessonsByCourse', { courseID });
    },
}