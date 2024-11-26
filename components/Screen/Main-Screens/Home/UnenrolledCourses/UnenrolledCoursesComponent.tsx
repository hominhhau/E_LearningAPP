import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Api_Course } from "@/apis/Api_Course";
import Course from "./Course"; // Assuming you have a Course component to display each course

type CourseType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  // Add other course properties as needed
};

const UnenrolledCoursesComponent: React.FC = () => {
  const [unenrolledCourses, setUnenrolledCourses] = useState<CourseType[]>([]);

  useEffect(() => {
    const fetchUnenrolledCourses = async () => {
      try {
        const userId = "your-user-id"; // Replace with actual user ID
        const response = await Api_Course.getUnenrolledCourses({ userId });
        console.log("Unenrolled Courses Response:", response);
        if (response && response.data && response.data.success) {
          setUnenrolledCourses(response.data.unenrolledCourses);
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching unenrolled courses:", error);
      }
    };

    fetchUnenrolledCourses();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unenrolled Courses</Text>
      {unenrolledCourses.map((course) => (
        <Course key={course._id} course={course} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
});

export default UnenrolledCoursesComponent; 