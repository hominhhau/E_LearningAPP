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

const Search: React.FC = () => {
  const [coursesFound, setCoursesFound] = useState(false); // State để kiểm tra có tìm thấy khóa học hay không
  // Hàm callback để cập nhật khi tìm thấy khóa học
  const handleCoursesFound = (found: boolean) => {
    setCoursesFound(found); // Cập nhật trạng thái coursesFound
  };
  return (
    <View style={styles.container}>
      <FindComponent onCoursesFound={handleCoursesFound} />

      <ScrollView style={styles.courseContainer}>
        
        {/* <View>
          <CourseThatInspiresComponent />
        </View> */}
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
});

export default Search;
