import React from 'react';
import { View, Text, TouchableOpacity, 
    StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UserReview from '../EachTab/Review/UserReview';

const ReviewFinal: React.FC = () => {
    const dataReview = [
        {
            id: 1,
            imageUser: require('../../../../assets/images/ImageTeacher.png'),
            nameUser: "John Doe",
            date: "10/10/2021",
            rating: 5,
            content: "Great course! I learned a lot from this course."
        },
        {
            id: 2,
            imageUser: require('../../../../assets/images/ImageTeacher.png'),
            nameUser: "John Doe",
            date: "10/10/2021",
            rating: 4,
            content: "Great course! I learned a lot from this course."
        },
        {
            id: 3,
            imageUser: require('../../../../assets/images/ImageTeacher.png'),
            nameUser: "John Doe",
            date: "10/10/2021",
            rating: 5,
            content: "Great course! I learned a lot from this course."
        },
    ];
    return(
        <ScrollView>
            <View style={styles.container}>
                {dataReview.map((item, index) => (
                    <UserReview
                        key={item.id}
                        imageUser={item.imageUser}
                        nameUser={item.nameUser}
                        date={item.date}
                        rating={item.rating}
                        content={item.content}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    }
});

export default ReviewFinal;