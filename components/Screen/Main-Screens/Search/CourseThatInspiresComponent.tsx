import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Courses from "@/components/Screen/LearningLessonNoCart/EachTab/Overview/SimilarCourse/Course";
import { Api_Course } from "@/apis/Api_Course";
import { RootStackParamList } from "@/components/navigation/types";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

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

type CourseThatInspiresComponentProps = {
  searchResults: CourseType[];
};

const CourseThatInspiresComponent: React.FC<
  CourseThatInspiresComponentProps
> = ({ searchResults }) => {
  const navigation = useNavigation<NavigationProp>();
  const [coursesData, setCoursesData] = useState<CourseType[]>([]); //dữ liệu gốc từ API

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const userId = "1732454183558"; // Replace with actual user ID
        const response = await Api_Course.getUnenrolledCourses({ userId });

        if (response?.success && response.unenrolledCourses) {
          const mappedCourses = response.unenrolledCourses.map(
            (course: any) => ({
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
            })
          );
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

  const displayedCourses =
    searchResults.length > 0 ? searchResults : coursesData;

  if (!Array.isArray(displayedCourses) || displayedCourses.length === 0) {
    console.log("No courses available.", displayedCourses); // Kiểm tra dữ liệu
    return (
      <View style={styles.container}>
        <Text>No courses available.</Text>
      </View>
    );
  }

  // Kiểm tra nếu coursesData là một mảng và có dữ liệu trước khi render
  //  if (!Array.isArray(coursesData) || coursesData.length === 0) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Không có kết quả tìm kiếm.</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      {displayedCourses.map((course) => {
        console.log("Course Data: ", course); // Kiểm tra dữ liệu
        console.log("Course Name:", course.nameCourse); // Kiểm tra tên khóa học
        console.log("Course Teacher:", course.nameTeacher); // Kiểm tra tên giáo viên
        console.log("Course ID:", course.id); // Kiểm tra hình ảnh
        console.log("Price:", course.price.toString());
        return (
          <Courses
            key={course.id}
            imageCourse={course.imageCourse}
            nameCourse={course.nameCourse || "No Name"} // Kiểm tra xem tên khóa học có giá trị hay không
            nameTeacher={course.nameTeacher || "No Name"} // Kiểm tra tên giáo viên
            price={course.price.toString()}
            textIcon={course.textIcon}
            textIconLesson={course.textIconLesson}
            onIconBookmarkPress={() =>
              console.log(`Bookmark ${course.nameCourse}`)
            }
            onPress={() => {
              console.log("Navigating to LessonNoCart with:", {
                id: course.id,
                nameCourse: course.nameCourse,
                nameTeacher: course.nameTeacher,
                price: course.price,
              });
              navigation.navigate("LessonNoCart", {
                id: course.id,
                nameCourse: course.nameCourse,
                nameTeacher: course.nameTeacher,
                price: course.price,
              });
            }}
          />
        );
      })}
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
