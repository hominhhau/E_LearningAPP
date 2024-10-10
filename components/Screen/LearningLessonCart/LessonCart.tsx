import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopNavigationBar from '@/components/navigation/TopNavigationBar';
//import TabBarCard from '../TabBar/TabBarCart'
const LessonCart: React.FC = () =>{
    return(

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
                <Text>VIDEO</Text>
            </View>

            <View style={styles.courseInfoContainer}>
                <Text>Thông tin khóa học</Text>
            </View>

            <View style={styles.tabBarContainer}>
                
            </View>r

            <View style={styles.listCourseContainer}>
                <Text>Đây là danh sách khóa học </Text>
            </View>
            </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        // backgroundColor: '#00bdd6',
    },
    thumbnailContainer:{
        backgroundColor: 'pink',
        height: 250,
    },
    courseInfoContainer:{
        padding: 10,
        
    },
    tabBarContainer:{
        padding: 10,
        
    },
    listCourseContainer:{

    }
});

export default LessonCart;