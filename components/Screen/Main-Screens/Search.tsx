import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FindComponent from "./Search/FindComponent";
import Category from "./Home/Categories/Categories";
import CourseThatInspiresComponent from "./Search/CourseThatInspiresComponent";
import Course from "../LearningLessonNoCart/EachTab/Overview/SimilarCourse/Course";

const Search: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]); // State lưu kết quả tìm kiếm
  const handleSearchResults = (courses: any[]) => {
    setSearchResults(courses); // Cập nhật kết quả tìm kiếm
  };
  return (
    <View style={styles.container}>
      <FindComponent onSearchResults={handleSearchResults} />

      {/* <ScrollView style={styles.courseContainer}>
          <CourseThatInspiresComponent searchResults={searchResults}  />
      </ScrollView> */}
      {/* Hiển thị kết quả tìm kiếm */}
      <ScrollView style={styles.courseContainer}>
        {searchResults.length > 0 ? (
          <CourseThatInspiresComponent searchResults={searchResults} />
        ) : (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>
              No courses found. Try searching for something else!
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  categoriesContainer: {
    //marginTop: 10,
  },
  viewMore: {
    fontSize: 14,
    color: "#00BCD4",
  },
  courseContainer: {
    flex: 1,
  },
  noResultsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: "#B0B0B0",
  },
});

export default Search;
