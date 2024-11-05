import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type CoursesProcessProps = {
    image: any; 
    title: string; 
    time: string; 
    processPercentage: number; 
    onPress?: () => void;
};

const CoursesProcess: React.FC<CoursesProcessProps> = ({ 
    image, 
    title, 
    time, 
    processPercentage,
    onPress
 }) => {
    return (
        <TouchableOpacity onPress={() => console.log("Course")}>
        <View style={styles.container}>
            <Image source={image} style={styles.image} />

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.time}>{time}</Text>
                <Text style={styles.progressText}>{processPercentage}% Complete</Text>

                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { width: `${processPercentage}%` }]} />
                </View>
            </View>
        </View>
        </TouchableOpacity> 
    );
};

// Phần định nghĩa style
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        // Hiệu ứng shadow
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4, 
        marginVertical: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    infoContainer: {
        marginLeft: 15,
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    time: {
        fontSize: 14,
        color: '#7f7f7f',
        marginVertical: 4,
    },
    progressText: {
        fontSize: 14,
        color: '#7f7f7f',
        marginBottom: 8,
    },
    progressBarContainer: {
        height: 4,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 2,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#00c3ff',
        borderRadius: 2,
    },
});

export default CoursesProcess;
