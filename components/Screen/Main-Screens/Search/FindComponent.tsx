import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Api_Search } from "../../../../apis/Api_Search"


interface FindComponentProps {
  onCoursesFound: (found: boolean) => void; // Callback nhận trạng thái tìm thấy khóa học
}

const FindComponent: React.FC<FindComponentProps> = ({ onCoursesFound }) => {
  const [keyword, setKeyword] = useState(''); // State lưu giá trị tìm kiếm
  const [loading, setLoading] = useState(false); // State kiểm tra trạng thái loading

   // Hàm xử lý tìm kiếm
   const handleSearch = async () => {
    if (keyword.trim() === '') {
      Alert.alert('Error', 'Please enter a search term');
      return;
    }

    setLoading(true);

    try {
      const courses = await Api_Search.searchCourses(keyword); // Gọi API tìm khóa học
      console.log("abcabc" ,courses)
      console.log('Is Array:', Array.isArray(courses)); // Kiểm tra nếu là mảng
      console.log('Courses Length:', courses.length); // Kiểm tra độ dài mảng
      
      if (Array.isArray(courses) && courses.length > 0) {
        console.log('Found courses:', courses); // Xử lý kết quả tìm kiếm
      } else {
        Alert.alert('No Results', 'No courses found for your search');
      }
    } catch (error) {
      console.error('Error searching courses:', error);
      Alert.alert('Error', 'There was an issue searching for courses');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#F7F7F7',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
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
    color: '#000',
  },
  filterButton: {
    backgroundColor: '#00C2D8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  filterContent: {
    flexDirection: 'row',
    alignItems: 'center', // Ensures icon and text are centered vertically
  },
  filterText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 5, // Adds some space between the icon and text
  },
});

export default FindComponent;
