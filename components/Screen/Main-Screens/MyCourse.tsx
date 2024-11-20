import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import HeaderMyCourse from "./MyCourse/Header/HeaderComponentMyCourse";
import HeaderAdvertisementCourse from "./MyCourse/Advertisement/AdCourses";
import TabBarMyCourse from "../TabBar/TabBarMyCourse";
//import GeneralTabBar from "../TabBar/GeneralTabBar";
import GeneralTabBar02 from "../TabBar/GeneralTabBar02";
import CoursesProcessComponent from "./MyCourse/All/CourseProcessComponent";

const MyCourse: React.FC = () => {
  // Quản lý trạng thái tab hiện tại
  const [activeTab, setActiveTab] = useState("ALL");


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderMyCourse />
                <HeaderAdvertisementCourse />
                <TabBarMyCourse activeTab={activeTab} setActiveTab={setActiveTab} />
            </View>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: 80 }]}
      >
        {/** 
        {activeTab === "ALL" && (
          <View style={styles.all}>
            <CoursesProcessComponent />
          </View>
        )}
        */}
        <View style={styles.all}>
          <Text>{activeTab === "ON GOING" ? "" : activeTab === "COMPLETED" ? "" : ""}</Text>
          <CoursesProcessComponent activeTab={activeTab} />
        </View>



        
      </ScrollView>
      
      

      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      adContainer: {
        marginTop: 10,
        zIndex: 0, 
      },
      scrollContent: {
        paddingBottom: 70, 
      },

      headerContainer: {
        zIndex: 1,
      },
      content:{

        
      }, 
      all:{
        
      }
});

export default MyCourse;
