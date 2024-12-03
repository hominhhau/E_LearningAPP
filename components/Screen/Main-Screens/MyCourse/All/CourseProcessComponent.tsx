import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import CoursesProcess from "./Course";
import { Api_Course } from "@/apis/Api_Course";
import { useSelector } from "react-redux";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { RootStackParamList } from "@/components/navigation/assets/types";

type CoursesProcessComponentProps = {
  activeTab: string;
};

const CoursesProcessComponent: React.FC<CoursesProcessComponentProps> = ({
  activeTab,
}) => {
  const [dataCourses, setDataCourses] = useState<any[]>([]);
  const user = useSelector((state: any) => state.user.user);
  const userId = user?.userID;
  const navigation = useNavigation<RootStackParamList>();

  const handleLoadData = useCallback(async () => {
    if (!userId) {
      console.log("No user ID found");
      return;
    }

    try {
      const response = await Api_Course.getCourseByUser(userId);
      setDataCourses(response.courses || []);
    } catch (error) {
      console.log("Error fetching courses:", error);
    }
  }, [userId]);

  useFocusEffect(
    useCallback(() => {
      handleLoadData();
    }, [handleLoadData])
  );

  const data = (dataCourses || []).map((courseData) => {
    const courseId = courseData.courseId;
    return {
      id: courseId?._id || "unknown",
      image: courseId?.image?.url || "https://picsum.photos/200/300",
      title: courseId?.name || "No Title",
      time: courseId?.duration || 0,
      processPercentage: courseData.progress || 0,
    };
  });

  const filteredCourses = data.filter((courseData) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "ON GOING" && courseData.processPercentage < 100)
      return true;
    if (activeTab === "COMPLETED" && courseData.processPercentage === 100)
      return true;
    return false;
  });

  const handleCoursePress = (courseTitle: String, courseID: String) => {
    navigation.navigate("LessonCart", { courseTitle, courseID });
  };

  return (
    <View style={styles.container}>
      {filteredCourses.map((course) => (
        <View key={course.id}>
          <CoursesProcess
            image={course.image}
            title={course.title}
            time={course.time}
            processPercentage={course.processPercentage}
            onPress={() => {
              handleCoursePress(course.title, course.id);
            }}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default CoursesProcessComponent;
