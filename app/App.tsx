// // import { HelloWave } from '@/components/HelloWave';
// // import ParallaxScrollView from '@/components/ParallaxScrollView';
// // import { ThemedText } from '@/components/ThemedText';
// // import { ThemedView } from '@/components/ThemedView';
// //import NameInputComponent from '@/components/TextInput/TextInput';
// //import WelcomeScreen from '@/components/Screen/Auth-Screens/Wellcom/Wellcom';
// // import CreateNewPassword from '@/components/Screen/Auth-Screens/CreateNewPassword';
// // import ResetPassword from '@/components/Screen/Auth-Screens/ResetPassword';
// // import PasswordChanged from '@/components/Screen/Auth-Screens/PasswordChanged';
// // import ForgotPassword from '@/components/Screen/Auth-Screens/ForgotPassword';
// // import EnterCodeForgotPassword from '@/components/Screen/Auth-Screens/EnterCodeforForgotPassword';
// // import Login from '@/components/Screen/Auth-Screens/Login';
// // import GoogleLogoIcon from '@/assets/Icon/GoogleLogoIcon';
// // import Register from '@/components/Screen/Auth-Screens/Register';
// // import LessonCard from '../components/Screen/LearningLessonCart/LessonCart.tsx'
 import LessonNoCard from '../components/Screen/LearningLessonNoCart/LessonNoCart'
// // import CreateAccountScreen from '../components/Screen/Auth-Screens/Register.tsx'
// //08.10.2024
// // import TeacherProfile from '../components/Screen/LearningLessonNoCart/EachTab/Overview/Teacher/TeacherProfile.tsx'
// // import BenefitContainer from '../components/Screen/LearningLessonNoCart/EachTab/Overview/Benefit/BenefitContainer.tsx'
// // import CourseComponent from '../components/Screen/LearningLessonNoCart/EachTab/Overview/SimilarCourse/CourseComponent.tsx'
// // import OverviewFinal from '../components/Screen/LearningLessonNoCart/EachTab/OverviewFinal.tsx';
// //11.10.2024
// import CategoryComponent from '../components/Screen/Main-Screens/Home/Categories/CategoriesComponent.tsx'
// import CoursePopularComponent from '../components/Screen/Main-Screens/Home/PopularCourses/CoursePopularComponent.tsx'
// import TopTeacherComponent from '../components/Screen/Main-Screens/Home/TopTeacher/TopTeacherComponent.tsx';
// import HeaderAdvertisementComponent from '../components/Screen/Main-Screens/Home/Advertisement/HeaderAdvertisementComponent.tsx'
// import HeaderComponent from '../components/Screen/Main-Screens/Home/Header/HeaderComponent.tsx'
// import CourseThatInspiresComponent from '../components/Screen/Main-Screens/Home/CourseThatInspires/CourseThatInspiresComponent.tsx'
// import RecommendedForYouComponent from '../components/Screen/Main-Screens/Home/RecommendedForYou/RecommendedForYouComponent.tsx'
// //17.10.2024
// import TabBarMyCourse from '../components/Screen/TabBar/TabBarMyCourse.tsx'
// // import HeaderMyCourse from '../components/Screen/Main-Screens/MyCourse/Header/HeaderComponentMyCourse.tsx'
// // import HeaderAdvertisementCourse from '../components/Screen/Main-Screens/MyCourse/Advertisement/AdCourses.tsx'
// import MyCourse from '../components/Screen/Main-Screens/MyCourse.tsx'
// // import CoursesProcessComponent from '../components/Screen/Main-Screens/MyCourse/All/CourseProcessComponent.tsx'
// //18.10.2024
// // import FindComponent from '../components/Screen/Main-Screens/Search/FindComponent.tsx'
// // import HotTopicComponent from '../components/Screen/Main-Screens/Search/HotTopicComponent.tsx'
// //03.11.2024
// import CertificateForm from '../components/Screen/Certificate/CertificateForm.tsx'
//import User from '../components/Screen/Main-Screens/UserProfile/User.tsx'
//7.11.2024
import Cart from '../components/Screen/Cart/Cart'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '@/components/navigation/types';
import CourseThatInspiresComponent from '@/components/Screen/Main-Screens/Home/CourseThatInspires/CourseThatInspiresComponent';
import LessonNoCart from '@/components/Screen/LearningLessonNoCart/LessonNoCart';
import Home from '../components/Screen/Main-Screens/Home';
import TeacherProfile from '@/components/Screen/LearningLessonNoCart/EachTab/Overview/Teacher/TeacherProfile';
//const Stack = createStackNavigator();
const Stack = createStackNavigator<RootStackParamList>();

 export default function App() {
     return (

    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LessonNoCart" component={LessonNoCart} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>


    );
 };


