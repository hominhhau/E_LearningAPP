<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> Develop
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CourseProps = {
    imageCourse: any;
    nameCourse: string;
    nameTeacher: string;
    price: string;
    onIconStarPress: () => void;
<<<<<<< HEAD
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
=======
    textIcon: string; // For star rating and number of ratings
    onIconLesson: () => void;
    textIconLesson: string; // For number of lessons
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
    onIconBookmarkPress,
}) => {
    const [isStarred, setIsStarred] = useState(false); // State for star
    const [isBookmarked, setIsBookmarked] = useState(false); // State for bookmark

    // Handle star press
    const handleStarPress = () => {
        setIsStarred(!isStarred); // Toggle star state
        onIconStarPress(); // Keep the existing press event
    };

    // Handle bookmark press
    const handleBookmarkPress = () => {
        setIsBookmarked(!isBookmarked); // Toggle bookmark state
        onIconBookmarkPress(); // Keep the existing press event
    };

    return (
        <View style={styles.container}>
            {/* Course Image */}
            <Image source={imageCourse} style={styles.image} />

            {/* Course Info */}
            <View style={styles.infoContainer}>
                <Text style={styles.nameCourse}>{nameCourse}</Text>
                <Text style={styles.nameTeacher}>{nameTeacher}</Text>
                <Text style={styles.price}>{price}</Text>

                {/* Rating and Lesson Icons */}
                <View style={styles.iconsContainer}>
                    {/* Star Rating */}
                    <TouchableOpacity onPress={handleStarPress} style={styles.icon}>
                        <Ionicons
                            name={isStarred ? "star" : "star-outline"}
                            size={24}
                            color={isStarred ? "#FFD700" : "#FFFF33"}
                        />
                        <Text style={styles.iconText}>{textIcon}</Text>
                    </TouchableOpacity>

                    {/* Lesson Count */}
                    <TouchableOpacity onPress={onIconLesson} style={styles.icon}>
                        <Ionicons name="book-outline" size={24} color="#999" />
                        <Text style={styles.iconText}>{textIconLesson}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Bookmark Icon */}
            <TouchableOpacity onPress={handleBookmarkPress} style={styles.bookmark}>
                <Ionicons
                    name={isBookmarked ? "bookmark" : "bookmark-outline"}
                    size={32}
                    color={isBookmarked ? "#00bdd6" : "#666"}
                />
>>>>>>> Develop
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
<<<<<<< HEAD
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
=======
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        position: 'relative',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    nameCourse: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        flexWrap: 'wrap',//Xuong dong khi dai
        maxWidth: 200,   
>>>>>>> Develop
    },
    nameTeacher: {
        fontSize: 14,
        color: '#666',
<<<<<<< HEAD
=======
        marginVertical: 2,
>>>>>>> Develop
    },
    price: {
        fontSize: 16,
        color: '#57d3e3',
        fontWeight: 'bold',
<<<<<<< HEAD
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
=======
        marginVertical: 2,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    iconText: {
>>>>>>> Develop
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
<<<<<<< HEAD
=======

>>>>>>> Develop
export default Course;
