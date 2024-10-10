import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopNavigationBar from '@/components/navigation/TopNavigationBar';
//import TabBarNoCart from '../TabBar/TabBarNoCart';

const LessonNoCart: React.FC = () =>{
    return(
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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
            </View>

            <View style={styles.tabBarContainer}>
                
                
            </View>

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 20, // Tạo khoảng trống trên dưới khi cuộn
    },
    container:{
        flex: 1,
    },
    header:{
        
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

});

export default LessonNoCart;