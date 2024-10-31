import React from 'react';
import { View, Text, TouchableOpacity, 
    StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TeacherProfile from './Overview/Teacher/TeacherProfile';
import BenefitContainer from './Overview/Benefit/BenefitContainer';
import CourseComponent from './Overview/SimilarCourse/CourseComponent';

const OverviewFinal: React.FC = () => {
    return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
       <View style={styles.container}>
        <View style={styles.teacher}>
        <TeacherProfile />
        </View>
        <View style={styles.benefit}>
        <BenefitContainer />
        </View>
        <View style={styles.course}>
            <Text style={styles.textCourse}>Similar Course</Text>
            <CourseComponent />
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
        flexDirection: 'column',
        padding: 10,
    },
    teacher:{
        flex: 0, //chinh ben teacherprofile flex: 0
        //marginBottom: 20,
        //backgroundColor: 'pink',
    },
    benefit:{
        flex: 0, // BenefitContainer will take up the remaining space
        //backgroundColor: 'lightblue',
    },
    course:{

    },
    textCourse:{
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default OverviewFinal;
