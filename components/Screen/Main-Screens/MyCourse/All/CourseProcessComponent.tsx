import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CoursesProcess from './Course';
const CoursesProcessComponent: React.FC = () => {
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
            processPercentage: 0,
        },
        {
            id: 4,
            image: require('../../../../../assets/images/ImageCourse01.png'),
            title: "React Native 04",
            time: "2 hrs 25 mins",
            processPercentage: 50,
        },
    ];

    return(
        <View style={styles.container}>
            {dataCourses.map((course) => (
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