
// types.ts
export type RootStackParamList = {
    LessonNoCart: {
        nameCourse: string;
        nameTeacher: string;
        imageCourse: string;
        price: number;
    }
    Cart: { courseData: { nameCourse: string; imageCourse: string; price: number; } };
    CourseThatInspiresComponent: undefined;
    Home: undefined;
    TeacherProfile: undefined;
};