import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CoursePopularProps = {
    imageCourse: any;
    titleCourse: string;
    authorCourse: string;
    priceCourse: string;
    titleStar: string;
    numberLesson: string;
    titleLesson: string;
    onPress?: () => void;
};

const CoursePopular: React.FC<CoursePopularProps> = ({
    imageCourse,
    titleCourse,
    authorCourse,
    priceCourse,
    titleStar,
    numberLesson,
    titleLesson,
    onPress,

}) => {
    
    const [isStarred, setIsStarred] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    
    const handleStarPress = () => {
        setIsStarred(!isStarred);
    };

   
    const handleBookmarkPress = () => {
        setIsBookmarked(!isBookmarked);
    };

    return (
        <TouchableOpacity onPress={() => console.log('course popular')}>
        <View style={styles.card}>
            
            <Image source={imageCourse} style={styles.image} />

            
            <View style={styles.infoContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{titleCourse}</Text>

                    
                    <TouchableOpacity onPress={handleBookmarkPress} style={styles.bookmark}>
                        <Ionicons
                            name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                            size={32}
                            color={isBookmarked ? '#00bdd6' : '#333'}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.author}>{authorCourse}</Text>
                <Text style={styles.price}>{priceCourse}</Text>

                
                <View style={styles.details}>
                    <TouchableOpacity onPress={handleStarPress} style={styles.rating}>
                        <Ionicons
                            name={isStarred ? 'star' : 'star-outline'}
                            size={16}
                            color={isStarred ? '#FFD700' : '#FFD700'} 
                        />
                        <Text style={styles.ratingText}>{titleStar}</Text>
                    </TouchableOpacity>
                    <Text style={styles.lessonText}>
                        {numberLesson} {titleLesson}
                    </Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.15,  
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,         
        width: 200,           
    },
    image: {
        width: '100%',
        height: 100,          
        borderRadius: 10,
    },
    infoContainer: {
        marginTop: 10,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,         
        fontWeight: 'bold',
        color: '#333',
        flexWrap: 'wrap',     
    },
    author: {
        fontSize: 12,
        color: '#777',
        marginVertical: 2,  
    },
    price: {
        fontSize: 14,
        color: '#00bdd6',
        marginVertical: 4,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 13,
        color: '#333',
        marginLeft: 5,
    },
    lessonText: {
        fontSize: 13,
        color: '#777',
        marginLeft: 10,
    },
    bookmark: {
        marginLeft: 10,
    },
});

export default CoursePopular;
