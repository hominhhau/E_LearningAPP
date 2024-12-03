import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Api_Search } from "../../../../apis/Api_Search";

const FindComponent: React.FC<{
  onSearchResults: (courses: any[]) => void;
}> = ({ onSearchResults }) => {
  const [keyword, setKeyword] = useState(""); // State lưu giá trị tìm kiếm
  const [loading, setLoading] = useState(false); // State kiểm tra trạng thái loading

  // Hàm xử lý tìm kiếm
  const handleSearch = async () => {
    if (keyword.trim() === "") {
      Alert.alert("Error", "Please enter a search term");
      return;
    }

    setLoading(true);

    try {
      const response = await Api_Search.searchCourses(keyword); // Gọi API tìm khóa học

      console.log("Search Response:", response);

      if (response && Array.isArray(response)) {
        const courses = response.map((course: any) => ({
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

        console.log("Mapped Courses:", courses);

        if (courses.length > 0) {
          onSearchResults(courses); // Gửi kết quả tìm kiếm ra ngoài
        } else {
          Alert.alert("No Results", "No courses found for your search");
        }
      } else {
        Alert.alert("No Results", "No courses found for your search");
      }
    } catch (error) {
      console.error("Error searching courses:", error);
      Alert.alert("Error", "There was an issue searching for courses");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Ionicons
          name="search"
          size={20}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search course"
          placeholderTextColor="#B0B0B0"
          value={keyword}
          onChangeText={setKeyword}
        />
      </View>

      <TouchableOpacity
        style={styles.filterButton}
        onPress={handleSearch}
        disabled={loading}
      >
        <View style={styles.filterContent}>
          {loading ? (
            <Text style={styles.filterText}>Searching...</Text> // Hiển thị khi đang tìm kiếm
          ) : (
            <>
              <Ionicons name="filter-outline" size={20} color="#fff" />
              <Text style={styles.filterText}>Search</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#F7F7F7",
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  filterButton: {
    backgroundColor: "#00C2D8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  filterContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 5,
  },
});

export default FindComponent;
