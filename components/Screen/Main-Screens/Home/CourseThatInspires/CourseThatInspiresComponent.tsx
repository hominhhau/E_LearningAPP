import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Courses from '@/components/Screen/LearningLessonNoCart/EachTab/Overview/SimilarCourse/Course'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import  {RootStackParamList} from '@/components/navigation/types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'LessonNoCart'>;

const CourseThatInspiresComponent: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();
    const coursesData = [
        {
            id: 1,
            imageCourse: require('../../../../../assets/images/ImageDigitalPortrait.png'),
            nameCourse: "Digital Portrait",
            nameTeacher: "Ramono Wultschner",
            price: 67,
            textIcon: "4.5",
            textIconLesson: "12 Lessons",
            onIconBookmarkPress: () => { console.log('Bookmark Pressed'); },
        },
        {
            id: 2,
            imageCourse: require('../../../../../assets/images/ImageDigitalPortrait.png'),
            nameCourse: "Graphic Design Basics",
            nameTeacher: "Alice Smith",
            price: 49,
            textIcon: "4.8",
            textIconLesson: "10 Lessons",
            onIconBookmarkPress: () => { console.log('Bookmark Pressed for Graphic Design'); },
        },
        {
            id: 3,
            imageCourse: require('../../../../../assets/images/ImageDigitalPortrait.png'),
            nameCourse: "Advanced Photoshop Techniques",
            nameTeacher: "John Doe",
            price: 89,
            textIcon: "4.7",
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
                    price={course.price.toString()}
                    textIcon={course.textIcon}
                    textIconLesson={course.textIconLesson}
                    onIconBookmarkPress={course.onIconBookmarkPress}
                    onPress={() => 
                        navigation.navigate('LessonNoCart', {
                            id: course.id,
                            nameCourse: course.nameCourse,
                            nameTeacher: course.nameTeacher,
                            price: course.price,
                        })
                      }

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