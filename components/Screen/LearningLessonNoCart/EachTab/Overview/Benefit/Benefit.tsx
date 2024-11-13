import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type BenefitProps = {
    icon: any;
    title: string;
};

const Benefit: React.FC<BenefitProps> = ({ icon, title }) => {
    return(
        <View style={styles.container}>
            <Ionicons name={icon} size={30} color="#00bdd6" />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    title: {
        fontSize: 16,
        marginLeft: 10,
    },
});

export default Benefit;