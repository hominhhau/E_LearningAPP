import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TeacherCard from "./Teacher";

const TopTeacherComponent: React.FC = () => {
  const teachersData = [
    {
      id: 1,
      imageTeacher: require("../../../../../assets/images/ImageTopTeacher01.png"),
      nameTeacher: "John Doe",
      educationTeacher: "University of California, Los Angeles",
      rating: 4.5,
      onIconStarPress: () => console.log("Star pressed for John Doe"),
    },
    {
      id: 2,
      imageTeacher: require("../../../../../assets/images/ImageTopTeacher01.png"),
      nameTeacher: "Jane Smith",
      educationTeacher: "Stanford University",
      rating: 4.8,
      onIconStarPress: () => console.log("Star pressed for Jane Smith"),
    },
    {
      id: 3,
      imageTeacher: require("../../../../../assets/images/ImageTopTeacher01.png"),
      nameTeacher: "Michael Brown",
      educationTeacher: "Harvard University",
      rating: 4.9,
      onIconStarPress: () => console.log("Star pressed for Michael Brown"),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Top Teacher</Text>
        {/* <TouchableOpacity onPress={() => console.log('View more Pressed')}>
                    <Text style={styles.viewMore}>View more</Text>
                </TouchableOpacity> */}
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {teachersData.map((teacher) => (
          <View key={teacher.id} style={styles.teacherContainer}>
            <TeacherCard
              imageTeacher={teacher.imageTeacher}
              nameTeacher={teacher.nameTeacher}
              educationTeacher={teacher.educationTeacher}
              rating={teacher.rating}
              onIconStarPress={teacher.onIconStarPress}
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
    // flexDirection: 'row',
    padding: 16,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  teacherContainer: {
    marginRight: 15,
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

export default TopTeacherComponent;
