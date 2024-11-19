import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import các màn hình
import Home from "../Main-Screens/Home";
import MyCourse from "..//Main-Screens/MyCourse";
import Search from "..//Main-Screens/Search";

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => {
    return(
<Tab.Navigator
      initialRouteName="Home" // Màn hình khởi động mặc định
      screenOptions={{
        tabBarActiveTintColor: "#00BDD6", // Màu khi tab được chọn
        tabBarInactiveTintColor: "gray", // Màu khi tab không được chọn
        headerShown: false, // Ẩn header
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
};

export default MainTabs;

