import React, { useState, useMemo } from "react";
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
import { WebView } from "react-native-webview";
import TopNavigationBar from "@/components/navigation/TopNavigationBar";
import TabBarCard from "../TabBar/TabBarCart";
import LessonFinalCart from "./EachTab/LessonFinalCart";
import ProjectFinalCart from "./EachTab/ProjectFinalCart";
import QAFinalCart from "./EachTab/Q&AFinalCart";
import { useRoute } from '@react-navigation/native';

const LessonCart: React.FC = () => {
  const route = useRoute();
  const [activeTab, setActiveTab] = useState("LESSON");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null); // Thay đổi kiểu dữ liệu

  const { courseTitle } = route.params as { courseTitle: string };
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
            key={selectedVideo}
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
        <Text>{courseTitle}</Text>
      </View>

      <View style={styles.tabBarContainer}>
        <TabBarCard activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: 80 }]}
      >
        {activeTab === "LESSON" && (
          <View>
            <LessonFinalCart onSelectVideo={handleVideoSelect} />
          </View>
        )}

        {activeTab === "PROJECTS" && (
          <View>
            <ProjectFinalCart />
          </View>
        )}

        {activeTab === "QA" && (
          <View>
            <QAFinalCart />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    // backgroundColor: '#00bdd6',
  },
  thumbnailContainer: {
    //backgroundColor: "pink",
    height: 250,
  },
  courseInfoContainer: {
    padding: 10,
  },
  tabBarContainer: {
    padding: 10,
  },
  content: {},
});

export default LessonCart;