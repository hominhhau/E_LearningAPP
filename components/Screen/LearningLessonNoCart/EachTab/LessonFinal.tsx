import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import LessonItem from "./Lesson/LessonItem";
import { Video } from 'expo-av';
import { WebView } from 'react-native-webview';
import YouTube from "react-native-youtube-iframe";

//https://drive.google.com/file/d/1Lxhe8akgIFf0KdPUHpH0VOba1Ccu5ieG/view?usp=drive_link
interface LessonFinalProps {
    onSelectVideo: (videoLink: string) => void;
}

    const LessonFinal: React.FC<LessonFinalProps> = ({ onSelectVideo }) => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null); // Thay đổi kiểu dữ liệu

  const dataLesson = [
    {
      id: 1,
      index: 1,
      title: "How to learn SQL for free | Roadmap to learning SQL",
      duration: "27:19 mins",
      isCompleted: false,
      videoLink: "https://drive.google.com/file/d/1Lxhe8akgIFf0KdPUHpH0VOba1Ccu5ieG/preview",
    },
    {
      id: 2,
      index: 2,
      title: "Learn What is Database _ Types of Database _ DBMS",
      duration: "12:10 mins",
      isCompleted: false,
      videoLink: "https://drive.google.com/file/d/1ubWgB0bVVncVVmV_0R9gJYCwNQnp7S4L/preview",
    },
    {
      id: 3,
      index: 3,
      title: "How to install PostgreSQL on Mac OS _ Install and Uninstall PostgreSQL Database",
      duration: "20:50 mins",
      isCompleted: false,
      videoLink: "https://drive.google.com/file/d/1LvBK1CUdZr5rTgNIvDZDO8e9eN6ewvsz/preview",
    },
    {
      id: 4,
      index: 4,
      title: "SQL Basics Tutorial for Beginners (Practice SQL Queries)",
      duration: "01:10:20 mins",
      isCompleted: false,
      videoLink: "https://drive.google.com/file/d/1G1uFqmuaqokYtNBc9e8aOHOLQWgC2zuT/preview",
    },
    {
      id: 5,
      index: 5,
      title: "SQL JOINS Tutorial for beginners  Practice SQL Queries using JOINS - Part 1",
      duration: "35:22 mins",
      isCompleted: false,
      videoLink: "https://drive.google.com/file/d/14e41WoR3COhNMQwEh6aGYv-eLXXhHwox/preview",
    },
    {
      id: 6,
      index: 6,
      title: "SQL JOINS Tutorial for beginners | Practice SQL Queries using JOINS - Part 2",
      duration: "29:57 mins",
      isCompleted: false,
      videoLink: "https://drive.google.com/file/d/1TRksXc2wsB0hpmNIkVvN3KM22giTrAb8/preview",
    },
    {
      id: 7,
      index: 7,
      title: "Subquery in SQL _ Correlated Subquery + Complete SQL Subqueries Tutorial",
      duration: "01:10:43 mins",
      isCompleted: false,
      videoLink: "https://drive.google.com/file/d/1SYbBtpQ88PUnhy5T1qequGaizhd31LGK/preview",
    },
    {
      id: 8,
      index: 8,
      title: "SQL WITH Clause | How to write SQL Queries using WITH Clause | SQL CTE (Common Table Expression)",
      duration: "24:47 mins",
      isCompleted: false,
      videoLink: "https://drive.google.com/file/d/1zQq4188wtbJ4HXE1IeUsZ--l0PgLEDni/preview",
    },
    {
      id: 9,
      index: 9,
      title: "SQL Window Function _ How to write SQL Query using RANK, DENSE RANK, LEAD_LAG _ SQL Queries Tutorial",
      duration: "24:54 mins",
      isCompleted: false,
      videoLink: "https://drive.google.com/file/d/13LGg7bnVDSskO3oH7oHCtdSw_VAzj7oB/preview",
    },
    {
      id: 10,
      index: 10,
      title: "SQL Window Function _ How to write SQL Query using Frame Clause, CUME_DIST _ SQL Queries Tutorial",
      duration: "54:30 mins",
      isCompleted: false,
      videoLink: "https://drive.google.com/file/d/1zQa67Aji9hMPiI7K5g6fCP7DowW2kgIU/preview",
    },

  ];
  const handleVideoSelect = (videoLink: string) => {
    setSelectedVideo(videoLink);
    onSelectVideo(videoLink);
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
            isLocked={true}
            onPress={() => handleVideoSelect(item.videoLink)}
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
    backgroundColor: '#f0f0f0',
    marginTop: 20,
  },
});

export default LessonFinal;
