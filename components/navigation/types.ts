
// types.ts
export type RootStackParamList = {
    LessonNoCart: {
        id: number;
        nameCourse: string;
        nameTeacher: string;
        price: number;
    }
    Cart: {
        cartItem: {
            id: number;
            title: string;
            price: number;
            imageUrl: string;
        }
    }
    CourseThatInspiresComponent: undefined;
    Home: undefined;
    TeacherProfile: undefined;
    HeaderComponent: undefined;
};