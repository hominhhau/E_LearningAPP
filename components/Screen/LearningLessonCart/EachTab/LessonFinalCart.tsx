import React, { useState, useMemo, useEffect } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import LessonItem from "./Lesson/LessonItem";
import { Video } from "expo-av";
import { WebView } from "react-native-webview";
import YouTube from "react-native-youtube-iframe";
import { Api_Lesson } from "@/apis/Api_Lessons";
import { Api_User } from "@/apis/Api_User";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
//https://drive.google.com/file/d/1Lxhe8akgIFf0KdPUHpH0VOba1Ccu5ieG/view?usp=drive_link
interface LessonFinalProps {
  onSelectVideo: (videoLink: string) => void;
}

const LessonFinalCart: React.FC<LessonFinalProps> = ({ onSelectVideo }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [dataLesson, setDataLesson] = useState<any[]>([]); // Lưu trữ danh sách bài học
  const navigation = useNavigation();
  const route = useRoute();

  // Lấy `user` từ Redux store
  const user = useSelector((state: any) => state.user.user);
  const userId = user?.userID; // Truy cập userID từ user (nếu tồn tại)

  const { courseTitle, courseID } = route.params as {
    courseTitle: string;
    courseID: string;
  };

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await Api_Lesson.getLessonsByCourse(courseID);

        // Map dữ liệu từ response thành dataLesson
        const lessons = response.map((item: any, index: number) => ({
          id: item._id,
          index: index + 1, // Đánh số thứ tự bắt đầu từ 1
          title: item.name || "No title", // Lấy tên bài học
          duration: `${Math.floor(item.video.duration / 60)}:${
            item.video.duration % 60
          } mins`,
          // Chuyển đổi thời gian thành định dạng "phút:giây"
          isCompleted: item.watchRequired || false, // Đánh dấu bài học hoàn thành nếu có
          videoLink: item.video.url, // Link video
        }));
        console;

        setDataLesson(lessons);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons();
  }, [courseID]);

  console.log("dfsefsdfds", dataLesson);

  const handleCompleteLesson = async (lessonId: string) => {
    if (!userId) {
      console.error("User ID không tồn tại!");
      return;
    }
    try {
      // Gọi API để cập nhật trạng thái bài học hoàn thành
      const response = await Api_User.updateLessonCompletion(
        userId,
        courseID,
        lessonId,
        true // Đánh dấu bài học đã hoàn thành
      );

      // Cập nhật trạng thái `isCompleted` của bài học trong `dataLesson`
      const updatedLessons = dataLesson.map((lesson) =>
        lesson.id === lessonId
          ? { ...lesson, isCompleted: true } // Cập nhật thành `true`
          : lesson
      );

      setDataLesson(updatedLessons); // Cập nhật danh sách bài học
    } catch (error) {
      console.error("Error updating lesson completion:", error);
    }
  };

  const handleVideoSelect = (videoLink: string, lessonId: string) => {
    setSelectedVideo(videoLink);
    onSelectVideo(videoLink);
    handleCompleteLesson(lessonId);
  };

  return (
    <View style={styles.container}>
      {dataLesson.map((item) => (
        <LessonItem
          key={item.id}
          index={item.index}
          title={item.title}
          duration={item.duration}
          isCompleted={item.isCompleted}
          //isPurchased={userHasPurchasedCourse}
          onPress={() => handleVideoSelect(item.videoLink, item.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    marginTop: 20,
  },
});

export default LessonFinalCart;
