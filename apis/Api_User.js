import { ApiManager } from "./ApiManager";

export const Api_User = {
    updateLessonCompletion: async (userId, courseId, lessonId, isCompleted) => {
        try {
            const response = await ApiManager.post('/updateLessonCompletion', {
                userId,
                courseId,
                lessonId,
                isCompleted
            });
            console.log('Lesson completion updated:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error updating lesson completion:', error);
            throw error;
        }
    },
    enrollCourse: async (userId, courseId) => {
        try {
            const response = await ApiManager.post('/enrollCourse', { userId, courseId });
            console.log('Enrolled in course:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error enrolling in course:', error);
            throw error;
        }
    }

};