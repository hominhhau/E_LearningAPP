import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TopNavigationBar from "@/components/navigation/TopNavigationBar";
import TabBarNoCart from "../TabBar/TabBarNoCart";
import LessonFinal from "./EachTab/LessonFinal";
import OverviewFinal from "./EachTab/OverviewFinal";
import { Video } from "expo-av";
import YouTube from "react-native-youtube-iframe";
import { WebView } from "react-native-webview";
import AddToCart from "@/components/Button/AddToCart";

const LessonNoCart: React.FC = () => {
  const [activeTab, setActiveTab] = useState("LESSON");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null); // Thay đổi kiểu dữ liệu
  //const videoRef = useRef<Video>(null);

  const handleVideoSelect = (videoLink: string) => {
    setSelectedVideo(videoLink);
  };

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TopNavigationBar
            onBackPress={() => {}}
            onBookmarkPress={() => {}}
            onMorePress={() => {}}
            titleHeader="UX Foundation"
          />
        </View>

        <View style={styles.thumbnailContainer}>
          {selectedVideo && (
            <WebView
              source={{ uri: selectedVideo }}
              style={{ height: 200 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              startInLoadingState={true}
              allowsFullscreenVideo={true}
            />
          )}
        </View>

        <View style={styles.courseInfoContainer}>
          <Text>Course Info</Text>
        </View>

        <View style={styles.tabBarContainer}>
          <TabBarNoCart activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
        <ScrollView
          contentContainerStyle={[styles.content, { paddingBottom: 80 }]}
        >
          {activeTab === "OVERVIEW" && (
            <OverviewFinal />
            
          )}
          {activeTab === "LESSON" && (
            <View style={styles.lesson}>
              <LessonFinal onSelectVideo={handleVideoSelect} />
            </View>
          )}
        </ScrollView>
      </View>
    
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20, // Tạo khoảng trống trên dưới khi cuộn
  },
  container: {
    flex: 1,
  },
  header: {},
  thumbnailContainer: {
    //backgroundColor: 'pink',
    height: 250,
  },
  courseInfoContainer: {
    padding: 10,
  },
  tabBarContainer: {
    padding: 10,
  },
  content: {},
  lesson: {},
});

export default LessonNoCart;
