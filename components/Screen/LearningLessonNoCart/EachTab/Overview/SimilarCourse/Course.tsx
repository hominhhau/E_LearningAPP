import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CourseProps = {
    imageCourse: any;
    nameCourse: string;
    nameTeacher: string;
    price: string;
    textIcon: string; // For star rating and number of ratings
    textIconLesson: string; // For number of lessons
    onIconBookmarkPress: () => void;
    onPress?: () => void;
};

const Course: React.FC<CourseProps> = ({
    imageCourse,
    nameCourse,
    nameTeacher,
    price,
    textIcon,
    textIconLesson,
    onIconBookmarkPress,
    onPress
}) => {
    const [isStarred, setIsStarred] = useState(false); 
    const [isBookmarked, setIsBookmarked] = useState(false)

    // Handle bookmark press
    const handleBookmarkPress = () => {
        setIsBookmarked(!isBookmarked); 
        onIconBookmarkPress(); 
    };

    return (
        <TouchableOpacity onPress={onPress}>
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
                    <View style={styles.icon}>
                        <Ionicons
                            name={isStarred ? "star" : "star-outline"}
                            size={24}
                            color={isStarred ? "#FFD700" : "#FFFF33"}
                        />
                        <Text style={styles.iconText}>{textIcon}</Text>
                    </View>

                    {/* Lesson Count */}
                    <View  style={styles.icon}>
                        <Ionicons name="book-outline" size={24} color="#999" />
                        <Text style={styles.iconText}>{textIconLesson}</Text>
                    </View>
                </View>
            </View>

            {/* Bookmark Icon */}
            <TouchableOpacity onPress={handleBookmarkPress} style={styles.bookmark}>
                <Ionicons
                    name={isBookmarked ? "bookmark" : "bookmark-outline"}
                    size={32}
                    color={isBookmarked ? "#00bdd6" : "#666"}
                />
            </TouchableOpacity>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
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
    },
    nameTeacher: {
        fontSize: 14,
        color: '#666',
        marginVertical: 2,
    },
    price: {
        fontSize: 16,
        color: '#57d3e3',
        fontWeight: 'bold',
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
