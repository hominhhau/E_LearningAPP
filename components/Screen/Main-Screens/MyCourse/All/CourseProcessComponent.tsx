import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CoursesProcess from './Course';

type CoursesProcessComponentProps = {
    activeTab: string;
};

const CoursesProcessComponent: React.FC<CoursesProcessComponentProps> = ({ activeTab }) => {
    const dataCourses = [
        {
            id: 1,
            image: require('../../../../../assets/images/ImageCourse01.png'),
            title: "React Native 01",
            time: "2 hrs 25 mins",
            processPercentage: 30,
        },
        {
            id: 2,
            image: require('../../../../../assets/images/ImageCourse01.png'),
            title: "React Native 02",
            time: "2 hrs 25 mins",
            processPercentage: 70,
        },
        {
            id: 3,
            image: require('../../../../../assets/images/ImageCourse01.png'),
            title: "React Native 03",
            time: "2 hrs 25 mins",
            processPercentage: 100,
        },
        {
            id: 4,
            image: require('../../../../../assets/images/ImageCourse01.png'),
            title: "React Native 04",
            time: "2 hrs 25 mins",
            processPercentage: 20,
        },
        {
            id: 5,
            image: require('../../../../../assets/images/ImageCourse01.png'),
            title: "React Native 05",
            time: "2 hrs 25 mins",
            processPercentage: 100,
        },
    ];

    const filteredCourses = dataCourses.filter((course) => {
        if(activeTab === "ALL") return true;
        if(activeTab === "ON GOING" && course.processPercentage < 100) return true;
        if(activeTab === "COMPLETED" && course.processPercentage === 100) return true;
        return
    });

    return(
        <View style={styles.container}>
        {filteredCourses.map((course) => (
            <View key={course.id}>
                <CoursesProcess
                    image={course.image}
                    title={course.title}
                    time={course.time}
                    processPercentage={course.processPercentage}
                />
            </View>
        ))}
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    }
});

export default CoursesProcessComponent;