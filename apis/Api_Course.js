import { ApiManager } from "./ApiManager";

// register
export const Api_Course = {


    createCourse: async (data) => {
        return ApiManager.post('/createCourse', data);

    },
    getAllCourses: async () => {
        return ApiManager.get('/getAllCourses');
    },
    updateCourse: async (id, data) => {
        return ApiManager.put(`/updateCourse/${id}`, data);
    },
    deleteCourse: async (id) => {
        return ApiManager.delete(`/deleteCourse/${id}`);
    },
    // getCourseByUser: async (data) => {
    //     return ApiManager.post('/getCourseByUser', data);
    // },
    getUnenrolledCourses: async (data) => {
        return ApiManager.post('/unenrolled-courses', data);
    },
    searchCourse: async (data) => {
        return ApiManager.post('/searchCourse', data);
    },
    getCourseByCategory: async (data) => {
        return ApiManager.post('/getCourseByCategory', data);
    },
    getCourseByUser: async (userId) => {
        console.log('Api_Course.getCourseByUser', userId);
        return ApiManager.post('/getCourseByUser', { userId });
    },
    // getLessonsByCourse
    getLessonsByCourse: async (courseID) => {
        console.log('Api_Course.getLessonsByCourse', courseID);
        return ApiManager.post('/getLessonsByCourse', { courseID });
    },


}


