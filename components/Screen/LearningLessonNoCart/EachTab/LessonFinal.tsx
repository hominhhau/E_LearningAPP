import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import LessonItem from "./Lesson/LessonItem";
import { Video } from 'expo-av';
import { WebView } from 'react-native-webview';
import YouTube from "react-native-youtube-iframe";


interface LessonFinalProps {
    onSelectVideo: (videoLink: string) => void;
}

    const LessonFinal: React.FC<LessonFinalProps> = ({ onSelectVideo }) => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null); // Thay đổi kiểu dữ liệu

  const dataLesson = [
    {
      id: 1,
      index: 1,
      title: "Bai hoc 1",
      duration: "01:23 mins",
      isCompleted: true,
      videoLink: "cq5TGA6sBQQ",
    },
    {
      id: 2,
      index: 2,
      title: "Bai hoc 2",
      duration: "02:30 mins",
      isCompleted: false,
      videoLink: "JvrHjk-CJw4",
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
            onPress={() => handleVideoSelect(item.videoLink)}
        />
    ))}
    {selectedVideo && (
        <View style={styles.videoContainer}>
            <YouTube
                videoId={selectedVideo}
                height={200}
                play={true}
                onError={(e) => console.log(e)}
            />
        </View>
    )}
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
