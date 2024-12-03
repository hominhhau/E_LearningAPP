import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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

const CourseThatInspiresComponent: React.FC = () => {
  const user = useSelector((state: any) => state.user.user);
  const navigation = useNavigation<NavigationProp>();
  const [coursesData, setCoursesData] = useState<CourseType[]>([]);
  const userId = user?.userID;

  const fetchCourses = useCallback(async () => {
    try {
      const response = await Api_Course.getUnenrolledCourses({ userId });

      if (response?.success && response.unenrolledCourses) {
        const mappedCourses = response.unenrolledCourses.map((course: any) => ({
          id: course._id,
          imageCourse: course.image?.url
            ? { uri: course.image.url }
            : { uri: "https://picsum.photos/200/300" },
          nameCourse: course.name || "Unknown Course",
          nameTeacher: course.teacherID || "Unknown Teacher",
          price: course.price || 0,
          textIcon: course.rating ? course.rating.toString() : "4.5",
          textIconLesson: course.lessons
            ? `${course.lessons.length} Lessons`
            : "0 Lessons",
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
        <Text style={styles.title}>Course that inspires</Text>
        {/* <TouchableOpacity onPress={() => console.log("View more Pressed")}>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity> */}
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
            navigation.navigate("LessonNoCart", {
              id: course.id,
              nameCourse: course.nameCourse,
              nameTeacher: course.nameTeacher,
              price: course.price,
            })
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
  viewMore: {
    fontSize: 14,
    color: "#00BCD4",
  },
});

export default CourseThatInspiresComponent;
