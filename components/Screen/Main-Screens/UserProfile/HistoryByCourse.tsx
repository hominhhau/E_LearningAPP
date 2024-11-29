import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Courses from "@/components/Screen/LearningLessonNoCart/EachTab/Overview/SimilarCourse/Course";
import { Api_Course } from "@/apis/Api_Course";
import { RootStackParamList } from "@/components/navigation/types";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
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

interface CourseThatInspiresComponentProps {
  courses: CourseType[]; // Nhận danh sách khóa học từ props
}

const HistoryByCourse: React.FC = () => {
  const user = useSelector((state: any) => state.user.user);
  const navigation = useNavigation<NavigationProp>();
  const [coursesData, setCoursesData] = useState<CourseType[]>([]);
  const userId = user?.userID;
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await Api_Course.getEnrolledCourses({ userId });

        if (response?.success && response.enrolledCourses) {
          const mappedCourses = response.enrolledCourses.map((course: any) => ({
            id: course.courseId,
            imageCourse: { uri: "https://picsum.photos/200/300" },
            nameCourse: course.name || "Unknown Course",
            nameTeacher: "Unknown Teacher",
            price: 0,
            textIcon: course.progress ? course.progress.toString() : "0",
            textIconLesson: "0 Lessons",
          }));
          setCoursesData(mappedCourses);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>History Buy Course</Text>
        <TouchableOpacity onPress={() => console.log("View more Pressed")}>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
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
          onPress={
            () =>
              //  navigation.navigate("LessonCart", { courseTitle, courseID });
              navigation.navigate("LessonCart", { courseID: course.id })

            // navigation.navigate("LessonNoCart", {
            //   id: course.id,
            //   nameCourse: course.nameCourse,
            //   nameTeacher: course.nameTeacher,
            //   price: course.price,
            // })
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

export default HistoryByCourse;
