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
import ChatBubble from "@/components/Screen/ChatBotScreen/ChatBubble";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const LessonCart: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [activeTab, setActiveTab] = useState("LESSON");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null); // Thay đổi kiểu dữ liệu

  const { courseTitle } = route.params as {
    courseTitle: string;
    courseID: string;
  };
  const handleVideoSelect = (videoLink: string) => {
    setSelectedVideo(videoLink);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TopNavigationBar
          onBackPress={() => {
            navigation.goBack();
          }}
          onBookmarkPress={() => {}}
          onMorePress={() => {}}
          titleHeader="UX Foundation"
        />
      </View>

      <View style={styles.thumbnailContainer}>
        {/* {selectedVideo && (
          <WebView
            key={selectedVideo}
            source={{ uri: selectedVideo }}
            style={{ height: 200 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            allowsFullscreenVideo={true}
          />
        )} */}
        {!selectedVideo ? ( // Hiển thị ảnh nếu chưa chọn video
    <Image
      source={{ uri: "https://picsum.photos/seed/picsum/200/300" }} // Thay bằng link ảnh mặc định
      style={{ width: "100%", height: 250 }}
      resizeMode="cover"
    />
  ) : (
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
        <Text style={styles.titleCourse}>{courseTitle}</Text>
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
      <ChatBubble />
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
  titleCourse: {
    fontSize: 20,
    fontWeight: "bold",

  },
});

export default LessonCart;
