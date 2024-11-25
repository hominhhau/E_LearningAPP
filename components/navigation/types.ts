
// types.ts
export type RootStackParamList = {
    [x: string]: any;
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
    

