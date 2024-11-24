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
            component={(props: any) => <CoursesProcessComponent {...props} activeTab="ALL" />}
            options={{ headerShown: false }}
          />
            <Stack.Screen
                name="LessonCart"
                component={LessonCart}
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
        name="HomeTab"
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

