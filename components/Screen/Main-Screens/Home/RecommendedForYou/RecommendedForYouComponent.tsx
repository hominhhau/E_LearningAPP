import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CoursePopular from '@/components/Screen/Main-Screens/Home/PopularCourses/Courses';

const RecommendedForYouComponent: React.FC = () => {
    const dataCourse = [
        {
            id: 1,
            imageCourse: require('../../../../../assets/images/ImageWebsiteDesign.png'),
            titleCourse: "Website Design 01",
            authorCourse: "Ramono Wultschner",
            priceCourse: "$59",
            titleStar: "4.5",
            numberLesson: "18",
            titleLesson: "Lessons"
        },
        {
            id: 2,
            imageCourse: require('../../../../../assets/images/ImageWebsiteDesign.png'),
            titleCourse: "Website Design 02",
            authorCourse: "Ramono Wultschner",
            priceCourse: "$59",
            titleStar: "4.5",
            numberLesson: "18",
            titleLesson: "Lessons"
        },
        {
            id: 3,
            imageCourse: require('../../../../../assets/images/ImageWebsiteDesign.png'),
            titleCourse: "Website Design 03",
            authorCourse: "Ramono Wultschner",
            priceCourse: "$59",
            titleStar: "4.5",
            numberLesson: "18",
            titleLesson: "Lessons"
        },
        {
            id: 4,
            imageCourse: require('../../../../../assets/images/ImageWebsiteDesign.png'),
            titleCourse: "Website Design 04",
            authorCourse: "Ramono Wultschner",
            priceCourse: "$59",
            titleStar: "4.5",
            numberLesson: "18",
            titleLesson: "Lessons"
        },
    ]
    return(
        <View style={styles.container}>
             <View style={styles.textContainer}>
                <Text style={styles.title}>Recommended for you</Text>
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
    container:{
        flex: 0,
        padding: 10,
    },
    scrollContainer: {
        flexDirection: 'row',
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

export default RecommendedForYouComponent;