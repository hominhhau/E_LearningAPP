import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import CoursesProcess from "./Course";
import { Api_Course } from "@/apis/Api_Course";
import { useSelector } from "react-redux";

type CoursesProcessComponentProps = {
  activeTab: string;
};

const CoursesProcessComponent: React.FC<CoursesProcessComponentProps> = ({
  activeTab,
}) => {
  const [dataCourses, setDataCourses] = useState<any[]>([]);
  const user = useSelector((state: any) => state.user.user);
  const userId = user?.userID;

  const handleLoadData = async () => {
    console.log("userId", userId);

    if (!userId) {
      console.log("No user ID found");
      return;
    }

    try {
      const response = await Api_Course.getCourseByUser(userId);
      console.log("response", response);
      setDataCourses(response.courses || []);
    } catch (error) {
      console.log("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    console.log("CoursesProcessComponent mounted");
    handleLoadData();
  }, [userId]);

  /**
   *        id: 5,
            image: require('../../../../../assets/images/ImageCourse01.png'),
            title: "React Native 05",
            time: "2 hrs 25 mins",
            processPercentage: 100
   */
  /**
   * response {"courses": [{"_id": "672f8644353bd074530d6fc3", "category": "672f8399353bd074530d6fbd", "courseID": "1", "createdAt": "2024-11-09T15:56:52.804Z", "description": "Mô tả khóa học 1", "discount": 10, "duration": 0, "image": [Object], "lessons": [Array], "name": "Khóa học 1", "numEnrollment": 0, "numRating": 0, "price": 100, "rating": 0, "status": "draft", "teacherID": "teacher-123", "updatedAt": "2024-11-09T15:56:52.804Z"}], "success": true}
   * chuyển đổi respons thành data cần dùng
   */
  //data [{"id": "672f8644353bd074530d6fc3", "image": "https://picsum.photos/200/300", "processPercentage": undefined, "time": 0, "title": "Khóa học 1"}]
  const data = (dataCourses || []).map((course) => ({
    id: course._id,
    image: course.image.url || "https://picsum.photos/200/300",
    title: course.name,
    time: course.duration,
    processPercentage: course.processPercentage || 0,
  }));
  console.log("data", data);
  const filteredCourses = data.filter((course) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "ON GOING" && course.processPercentage < 100) return true;
    if (activeTab === "COMPLETED" && course.processPercentage === 100)
      return true;
    return false;
  });

  return (
    <View style={styles.container}>
      {filteredCourses.map((course) => (
        <View key={course.id}>
          <CoursesProcess
            image={course.image}
            title={course.title}
            time={course.time}
            processPercentage={course.processPercentage}
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
