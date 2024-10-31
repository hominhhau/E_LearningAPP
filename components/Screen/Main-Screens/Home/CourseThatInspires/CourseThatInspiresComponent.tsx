import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Courses from '@/components/Screen/LearningLessonNoCart/EachTab/Overview/SimilarCourse/Course'

const CourseThatInspiresComponent: React.FC = () => {
    const coursesData = [
        {
            id: 1,
            imageCourse: require('../../../../../assets/images/ImageDigitalPortrait.png'),
            nameCourse: "Digital Portrait",
            nameTeacher: "Ramono Wultschner",
            price: "$67",
            onIconStarPress: () => { console.log('Star Pressed'); },
            textIcon: "4.5",
            onIconLesson: () => { console.log('Lesson Icon Pressed'); },
            textIconLesson: "12 Lessons",
            onIconBookmarkPress: () => { console.log('Bookmark Pressed'); },
        },
        {
            id: 2,
            imageCourse: require('../../../../../assets/images/ImageDigitalPortrait.png'),
            nameCourse: "Graphic Design Basics",
            nameTeacher: "Alice Smith",
            price: "$49",
            onIconStarPress: () => { console.log('Star Pressed for Graphic Design'); },
            textIcon: "4.8",
            onIconLesson: () => { console.log('Lesson Icon Pressed for Graphic Design'); },
            textIconLesson: "10 Lessons",
            onIconBookmarkPress: () => { console.log('Bookmark Pressed for Graphic Design'); },
        },
        {
            id: 3,
            imageCourse: require('../../../../../assets/images/ImageDigitalPortrait.png'),
            nameCourse: "Advanced Photoshop Techniques",
            nameTeacher: "John Doe",
            price: "$89",
            onIconStarPress: () => { console.log('Star Pressed for Photoshop'); },
            textIcon: "4.7",
            onIconLesson: () => { console.log('Lesson Icon Pressed for Photoshop'); },
            textIconLesson: "8 Lessons",
            onIconBookmarkPress: () => { console.log('Bookmark Pressed for Photoshop'); },
        },
    ];
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Course that inspires</Text>
                <TouchableOpacity onPress={() => console.log('View more Pressed')}>
                    <Text style={styles.viewMore}>View more</Text>
                </TouchableOpacity>
            </View>
            {coursesData.map(course => (
                <Courses
                    key={course.id}
                    imageCourse={course.imageCourse}
                    nameCourse={course.nameCourse}
                    nameTeacher={course.nameTeacher}
                    price={course.price}
                    onIconStarPress={course.onIconStarPress}
                    textIcon={course.textIcon}
                    onIconLesson={course.onIconLesson}
                    textIconLesson={course.textIconLesson}
                    onIconBookmarkPress={course.onIconBookmarkPress}
                />
            ))}
           
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
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

export default CourseThatInspiresComponent;