// types.ts
export type RootStackParamList = {
    Home: undefined;
    LessonNoCart: {
        id: number;
        nameCourse: string;
        nameTeacher: string;
        price: number;
    };
    Cart: {
        cartItem: {
            id: number;
            title: string;
            price: number;
            imageUrl: string;
        };
    };
    PaymentWebView: { paymentUrl: string };
    CourseThatInspiresComponent: undefined;
    TeacherProfile: undefined;
    HeaderComponent: undefined;
};