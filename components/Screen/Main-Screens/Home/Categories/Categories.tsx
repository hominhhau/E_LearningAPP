import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CategoryProps = {
    icon: string;  // Icon name from Ionicons
    title: string; // Category title
    backgroundColor: string; // Dynamic background color for the icon container
    onPress: () => void; // Function to handle category press
};

const Category: React.FC<CategoryProps> = ({ icon, title, backgroundColor, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {/* Icon with dynamic background */}
            <View style={[styles.iconContainer, { backgroundColor }]}>
                <Ionicons name={icon as any} size={24} color="white" />
            </View>
            
            {/* Category title */}
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3, // Slight shadow for the container
        marginBottom: 10,
        width: '100%',
    },
    iconContainer: {
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        color: '#666',
        marginLeft: 10,
    },
});

export default Category;
