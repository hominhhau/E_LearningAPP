import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Courses from './Course';

const CourseComponent: React.FC = () => {
    return (
        <View style={styles.container}>
            <Courses 
                imageCourse={require('../../../../../../assets/images/ImageCourse.png')} 
                nameCourse="Product Design" 
                nameTeacher="Dennis Sweeney" 
                price="$100" 
                textIcon="4.5" 
                textIconLesson="20 Lessons" 
                onIconBookmarkPress={() => {console.log('Bookmark Pressed')}}
            />

            <Courses 
                imageCourse={require('../../../../../../assets/images/ImageCourse01.png')} 
                nameCourse="Palettes for Your App" 
                nameTeacher="Ramono Wultschner" 
                price="$59" 
                textIcon="4.5" 
                textIconLesson="20 Lessons" 
                onIconBookmarkPress={() => {console.log('Bookmark Pressed')}}
            />

            <Courses 
                imageCourse={require('../../../../../../assets/images/ImageCourse02.png')} 
                nameCourse="Mobile UI Design" 
                nameTeacher="Ramono Wultschner" 
                price="$32" 
                textIcon="4.5" 
                textIconLesson="20 Lessons" 
                onIconBookmarkPress={() => {console.log('Bookmark Pressed')}}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});

export default CourseComponent;