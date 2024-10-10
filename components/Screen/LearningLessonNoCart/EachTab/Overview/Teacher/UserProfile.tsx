import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

type UserProfileProps = {
    imageTeacher: any;
    nameTeacher: string;
    role: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ imageTeacher, nameTeacher, role }) => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageTeacher} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{nameTeacher}</Text>
                <Text style={styles.role}>{role}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    infoContainer: {
        marginLeft: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    role: {
        fontSize: 14,
        color: '#7f7f7f',
    },
});

export default UserProfile;