import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Courses from "@/components/Screen/LearningLessonNoCart/EachTab/Overview/SimilarCourse/Course";
import { Api_Course } from "@/apis/Api_Course";
import { RootStackParamList } from "@/components/navigation/types";
import { useSelector } from "react-redux";

type NavigationProp = StackNavigationProp<RootStackParamList, "LessonNoCart">;

type CourseType = {
  id: number;
  imageCourse: { uri: string } | number;
  nameCourse: string;
  nameTeacher: string;
  price: number;
  textIcon: string;
  textIconLesson: string;
};

const HistoryByCourse: React.FC = () => {
  const user = useSelector((state: any) => state.user.user);
  const navigation = useNavigation<NavigationProp>();
  const [coursesData, setCoursesData] = useState<CourseType[]>([]);
  const userId = user?.userID;

  const fetchCourses = useCallback(async () => {
    try {
      const response = await Api_Course.getEnrolledCourses({ userId });

      if (response?.success && response.enrolledCourses) {
        const mappedCourses = response.enrolledCourses.map((course: any) => ({
          id: course.courseId,
          imageCourse: { uri: "https://picsum.photos/200/300" },
          nameCourse: course.name || "Unknown Course",
          nameTeacher: "Unknown Teacher",
          price: 200,
          textIcon: "4.5",
          textIconLesson: " Lessons",
        }));
        setCoursesData(mappedCourses);
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  }, [userId]);

  useFocusEffect(
    useCallback(() => {
      fetchCourses();
    }, [fetchCourses])
  );

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>History Buy Course</Text>
      </View>

      {coursesData.map((course) => (
        <Courses
          key={course.id}
          imageCourse={course.imageCourse}
          nameCourse={course.nameCourse}
          nameTeacher={course.nameTeacher}
          price={course.price.toString()}
          textIcon={course.textIcon}
          textIconLesson={course.textIconLesson}
          onIconBookmarkPress={() =>
            console.log(`Bookmark ${course.nameCourse}`)
          }
          onPress={() =>
            navigation.navigate("LessonCart", { courseID: course.id })
          }
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default HistoryByCourse;
