import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import CoursePopular from "@/components/Screen/Main-Screens/Home/PopularCourses/Courses";
import { Api_Course } from "@/apis/Api_Course";
import { RootStackParamList } from "@/components/navigation/types";

type NavigationProp = StackNavigationProp<RootStackParamList, "LessonNoCart">;

type CourseType = {
  id: number;
  imageCourse: { uri: string } | number;
  titleCourse: string;
  authorCourse: string;
  priceCourse: string;
  titleStar: string;
  numberLesson: string;
  titleLesson: string;
};

const RecommendedForYouComponent: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [recommendedCourses, setRecommendedCourses] = useState<CourseType[]>(
    []
  );

  useEffect(() => {
    const fetchRecommendedCourses = async () => {
      try {
        const userId = "1732454183558"; // Replace with actual user ID
        const response = await Api_Course.getUnenrolledCourses({ userId });

        if (response?.success && response.unenrolledCourses) {
          const mappedCourses = response.unenrolledCourses.map(
            (course: any) => {
              return {
                id: course._id,
                imageCourse: course.image?.url
                  ? { uri: course.image.url }
                  : { uri: "https://picsum.photos/200/300" },
                titleCourse: course.name || "Unknown Course",
                authorCourse: course.teacherID || "Unknown Author",
                priceCourse: course.price ? `$${course.price}` : "Free",
                titleStar: course.rating ? course.rating.toString() : "4.5",
                numberLesson: course.lessons
                  ? course.lessons.length.toString()
                  : "0",
                titleLesson: "Lessons",
              };
            }
          );
          setRecommendedCourses(mappedCourses);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching recommended courses:", error);
      }
    };

    fetchRecommendedCourses();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Recommended for you</Text>
        <TouchableOpacity onPress={() => console.log("View more Pressed")}>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {recommendedCourses.map((course) => (
          <View key={course.id} style={styles.courseContainer}>
            <CoursePopular
              {...course}
              onPress={() =>
                navigation.navigate("LessonNoCart", {
                  id: course.id,
                  nameCourse: course.titleCourse,
                  nameTeacher: course.authorCourse,
                  price: parseFloat(course.priceCourse.replace("$", "")),
                })
              }
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 10,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  courseContainer: {
    marginRight: 15, // Space between courses
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

export default RecommendedForYouComponent;
