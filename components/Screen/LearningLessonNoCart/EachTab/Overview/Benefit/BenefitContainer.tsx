import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Benefit from '@/components/Screen/LearningLessonNoCart/EachTab/Overview/Benefit/Benefit';

const BenefitContainer: React.FC = () => {
    return(
        <View style={styles.container}>
            <Benefit
                icon= 'videocam-outline'
                title="14 hours on-demand video"
            />
            <Benefit
                icon= 'globe-outline'
                title="Native teacher"
            />
            <Benefit
                icon= 'document-text-outline'
                title="100% free document"
            />
             <Benefit
                icon= 'time-outline'
                title="Full lifetime access"
            />
            <Benefit
                icon= 'ribbon-outline'
                title="Certificate of complete"
            />
            <Benefit
                icon= 'checkmark-done-outline'
                title="24/7 support"
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container:{
        flex: 0,
        padding: 20,
    }
});

export default BenefitContainer;