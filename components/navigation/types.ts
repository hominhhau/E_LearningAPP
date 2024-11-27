// types.ts
export type RootStackParamList = {
    Home: undefined;
    [x: string]: any;
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
    PaymentWebView: { paymentUrl: string; userID: string; courseID: string };
    CourseThatInspiresComponent: undefined;
    TeacherProfile: undefined;
    HeaderComponent: undefined;
    Setting: undefined;
    Notification: undefined;
    SettingGeneralComponent01: undefined;
    Language: undefined;
    Legal: undefined;
    HelpAndSupport: undefined;
    Security: undefined;
    SettingGeneralComponent02: undefined;
    User: undefined;
};
    

