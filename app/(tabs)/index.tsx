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
import Home from "@/components/Screen/Main-Screens/Home";
import MyCourse from "@/components/Screen/Main-Screens/MyCourse";
import Search from "@/components/Screen/Main-Screens/Search";
import { Ionicons } from "@expo/vector-icons";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const fontsLoaded = useLoadFonts(); // Hook to load fonts

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00bdd6" />; // Show loading while fonts are being loaded
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="CreateAccountScreen">
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
         {/* Màn hình TabNavigator */}
         <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Tab Navigator cho Home, MyCourse, Search
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
      </Tab.Navigator>
    );
  }
