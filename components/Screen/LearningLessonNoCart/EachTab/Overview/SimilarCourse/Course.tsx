import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CourseProps = {
    imageCourse: any;
    nameCourse: string;
    nameTeacher: string;
    price: string;
    onIconStarPress: () => void;
    textIcon: string;
    onIconLesson: () => void;
    textIconLesson: string;
    onIconBookmarkPress: () => void;
};

const Course: React.FC<CourseProps> = ({ 
    imageCourse, 
    nameCourse, 
    nameTeacher, 
    price, 
    onIconStarPress, 
    textIcon, 
    onIconLesson, 
    textIconLesson, 
    onIconBookmarkPress 
}) => {
    return (
        <View style={styles.container}>
            <Image source={imageCourse} style={styles.image} />
            <Text style={styles.nameCourse}>{nameCourse}</Text>
            <Text style={styles.nameTeacher}>{nameTeacher}</Text>
            <Text style={styles.price}>{price}</Text>
            
            <View style={styles.ratingContainer}>
                <TouchableOpacity onPress={onIconStarPress}>
                    <Ionicons name="star" size={20} color="#FFD700" />
                </TouchableOpacity>
                <Text style={styles.ratingText}>{textIcon}</Text>
            </View>
            
            <View style={styles.lessonContainer}>
                <TouchableOpacity onPress={onIconLesson}>
                    <Ionicons name="book" size={20} color="#999" />
                </TouchableOpacity>
                <Text style={styles.lessonText}>{textIconLesson}</Text>
            </View>
            
            <TouchableOpacity onPress={onIconBookmarkPress} style={styles.bookmark}>
                <Ionicons name="bookmark-outline" size={24} color="#999" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    nameCourse: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    nameTeacher: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize: 16,
        color: '#57d3e3',
        fontWeight: 'bold',
        marginVertical: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 12,
        color: '#999',
    },
    lessonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    lessonText: {
        marginLeft: 5,
        fontSize: 12,
        color: '#999',
    },
    bookmark: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});
export default Course;
