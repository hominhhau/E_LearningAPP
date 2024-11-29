import React from "react";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "@/components/Screen/Auth-Screens/Welcome/Welcome";
import CreateNewPassword from "@/components/Screen/Auth-Screens/CreateNewPassword";
import ResetPassword from "@/components/Screen/Auth-Screens/ResetPassword";
import PasswordChanged from "@/components/Screen/Auth-Screens/PasswordChanged";
import ForgotPassword from "@/components/Screen/Auth-Screens/ForgotPassword";
import EnterCodeForgotPassword from "@/components/Screen/Auth-Screens/EnterCodeforForgotPassword";
import Login from "@/components/Screen/Auth-Screens/Login";
import CreateAccountScreen from "@/components/Screen/Auth-Screens/Register";
import { useLoadFonts } from "@/assets/fonts/fonts";
import { Ionicons } from "@expo/vector-icons";
//Main Screens
import Home from "@/components/Screen/Main-Screens/Home";
import MyCourse from "@/components/Screen/Main-Screens/MyCourse";
import Search from "@/components/Screen/Main-Screens/Search";
import User from "@/components/Screen/Main-Screens/UserProfile/User";
import store from "@/redux/store";
import { Provider } from "react-redux";

import CoursesProcessComponent from "@/components/Screen/Main-Screens/MyCourse/All/CourseProcessComponent";
import LessonCart from "@/components/Screen/LearningLessonCart/LessonCart";
import LessonNoCart from "@/components/Screen/LearningLessonNoCart/LessonNoCart";
//Setting
import Setting from "@/components/Screen/Setting-Screens/Setting";
import Language from "@/components/Screen/Setting-Screens/Language";
import Notification from "@/components/Screen/Setting-Screens/Notification";
import Security from "@/components/Screen/Setting-Screens/Security";
import Legal from "@/components/Screen/Setting-Screens/Legal";
import HelpAndSupport from "@/components/Screen/Setting-Screens/HelpAndSupport";
import PaymentWebView from "@/components/Screen/Cart/PaymentWebView";
import Cart from "@/components/Screen/Cart/Cart";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const fontsLoaded = useLoadFonts(); // Hook to load fonts

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00bdd6" />; // Show loading while fonts are being loaded
  }

  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateAccountScreen"
            component={CreateAccountScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateNewPassword"
            component={CreateNewPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PasswordChanged"
            component={PasswordChanged}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EnterCodeForgotPassword"
            component={EnterCodeForgotPassword}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="Home"
            component={MainTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CoursesProcessComponent"
            component={(props: any) => (
              <CoursesProcessComponent {...props} activeTab="ALL" />
            )}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LessonCart"
            component={LessonCart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LessonNoCart"
            component={(props: any) => <LessonNoCart {...props} />}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Setting"
            component={Setting}
            options={{ headerShown: false }} // Ẩn header mặc định
          />
          <Stack.Screen
            name="Language"
            component={Language}
            options={{ headerShown: false }} // Ẩn header mặc định
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{ headerShown: false }} // Ẩn header mặc định
          />
          <Stack.Screen
            name="Security"
            component={Security}
            options={{ headerShown: false }} // Ẩn header mặc định
          />
          <Stack.Screen
            name="Legal"
            component={Legal}
            options={{ headerShown: false }} // Ẩn header mặc định
          />
          <Stack.Screen
            name="HelpAndSupport"
            component={HelpAndSupport}
            options={{ headerShown: false }} // Ẩn header mặc định
          />
          <Stack.Screen
            name="PaymentWebView"
            component={PaymentWebView}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#00BDD6",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyCourse"
        component={MyCourse}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={User}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
