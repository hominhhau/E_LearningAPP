import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type UserReviewProps = {
    imageUser: any;
    nameUser: string;
    date: string;
    rating: number; // Added rating prop to accept dynamic rating value
    content: string;
};

const UserReview: React.FC<UserReviewProps> = ({
    imageUser,
    nameUser,
    date,
    rating,
    content,
}) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Ionicons
                    key={i}
                    name={i <= rating ? 'star' : 'star-outline'} // Full star if i <= rating, otherwise outline
                    size={20}
                    color="#FFD700"
                />
            );
        }
        return stars;
    };

    return (
        <View style={styles.container}>
            {/* User Image */}
            <Image source={imageUser} style={styles.imageUser} />

            {/* User Info */}
            <View style={styles.infoContainer}>
                <Text style={styles.nameUser}>{nameUser}</Text>
                <Text style={styles.date}>{date}</Text>

                {/* Dynamic Star Rating */}
                <View style={styles.rating}>{renderStars()}</View>

                <Text style={styles.content}>{content}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    imageUser: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
    },
    nameUser: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    date: {
        color: '#666',
    },
    rating: {
        flexDirection: 'row',
        marginTop: 5,
    },
    content: {
        marginTop: 5,
    },
});

export default UserReview;
