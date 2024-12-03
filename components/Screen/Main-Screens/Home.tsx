import React, { useState, useCallback } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderComponent from "./Home/Header/HeaderComponent";
import HeaderAdvertisementComponent from "./Home/Advertisement/HeaderAdvertisementComponent";
import CategoryComponent from "./Home/Categories/CategoriesComponent";
import CoursePopularComponent from "./Home/PopularCourses/CoursePopularComponent";
import CourseThatInspiresComponent from "./Home/CourseThatInspires/CourseThatInspiresComponent";
import RecommendedForYouComponent from "./Home/RecommendedForYou/RecommendedForYouComponent";
import TopTeacherComponent from "./Home/TopTeacher/TopTeacherComponent";
//import GeneralTabBar from '../TabBar/GeneralTabBar';
import GeneralTabBar02 from "../TabBar/GeneralTabBar02";
import { useFocusEffect } from "@react-navigation/native";

const Home: React.FC = () => {
  const reloadPopularCourses = useCallback(() => {
    console.log("Reloading popular courses...");
    // Add your data fetching or refreshing logic here
  }, []);

  useFocusEffect(
    useCallback(() => {
      reloadPopularCourses();

      return () => {
        console.log("Screen is unfocused, cleanup if necessary...");
      };
    }, [reloadPopularCourses])
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent />
      <ScrollView>
        <View style={styles.adver}>
          <HeaderAdvertisementComponent />
        </View>
        <CategoryComponent />
        <CoursePopularComponent />
        <CourseThatInspiresComponent />
        <RecommendedForYouComponent />
        <TopTeacherComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  adver: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Home;
