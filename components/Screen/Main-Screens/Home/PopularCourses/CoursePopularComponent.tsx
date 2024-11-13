import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import CoursePopular from './Courses';

const CoursePopularComponent: React.FC = () => {
    const dataCourse = [
        {
            id: 1,
            imageCourse: require('../../../../../assets/images/ImagePopularCourse.png'),
            titleCourse: "PHP one click ! 01",
            authorCourse: "Ramono Wultschner",
            priceCourse: "$59",
            titleStar: "4.5",
            numberLesson: "18",
            titleLesson: "Lessons"
        },
        {
            id: 2,
            imageCourse: require('../../../../../assets/images/ImagePopularCourse.png'),
            titleCourse: "PHP one click ! 02",
            authorCourse: "Ramono Wultschner",
            priceCourse: "$59",
            titleStar: "4.5",
            numberLesson: "18",
            titleLesson: "Lessons"
        },
        {
            id: 3,
            imageCourse: require('../../../../../assets/images/ImagePopularCourse.png'),
            titleCourse: "PHP one click ! 03",
            authorCourse: "Ramono Wultschner",
            priceCourse: "$59",
            titleStar: "4.5",
            numberLesson: "18",
            titleLesson: "Lessons"
        },
        {
            id: 4,
            imageCourse: require('../../../../../assets/images/ImagePopularCourse.png'),
            titleCourse: "PHP one click ! 04",
            authorCourse: "Ramono Wultschner",
            priceCourse: "$59",
            titleStar: "4.5",
            numberLesson: "18",
            titleLesson: "Lessons"
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Popular Course</Text>
                <TouchableOpacity onPress={() => console.log('View more Pressed')}>
                    <Text style={styles.viewMore}>View more</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
              {dataCourse.map((course) => (
                    <View key={course.id} style={styles.courseContainer}>
                        <CoursePopular
                            imageCourse={course.imageCourse}
                            titleCourse={course.titleCourse}
                            authorCourse={course.authorCourse}
                            priceCourse={course.priceCourse}
                            titleStar={course.titleStar}
                            numberLesson={course.numberLesson}
                            titleLesson={course.titleLesson}
                        />
                    </View>
                ))}

             
                
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        paddingVertical: 20,
    },
    scrollContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    courseContainer: {
        marginRight: 15,  // Space between courses
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    viewMore: {
        fontSize: 14,
        color: '#00BCD4',
    },
});

export default CoursePopularComponent;
