import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SettingProps = {
    icon: string;  
    title: string; 
    backgroundColor: string; 
    onPress: () => void; 
    iconNext?: boolean;
};

const SettingGeneral: React.FC<SettingProps> = ({ 
    icon, 
    title, 
    backgroundColor, 
    onPress,
    iconNext
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={[styles.iconContainer, { backgroundColor }]}>
                <Ionicons name={icon as any} size={24} color="black" />
            </View>
            <Text style={styles.title}>{title}</Text>
            {iconNext && (
                <View style={styles.iconNextContainer}>
                    <Ionicons name="chevron-forward-outline" size={20} color="#666" />
                </View>
            )}
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
        elevation: 3, 
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
    iconNextContainer: {
        marginLeft: 'auto', // Để di chuyển iconNext sang bên phải
    },
});

export default SettingGeneral;
