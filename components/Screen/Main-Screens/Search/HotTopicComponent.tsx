import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import HotTopic from './HotTopic';

const HotTopicComponent: React.FC = () => {
    return(
        <View style={styles.container}>
            <HotTopic text="React Native" />
            <HotTopic text="Java" />
            <HotTopic text="SQL" />
            <HotTopic text="JavaScript" />
            <HotTopic text="Photoshop" />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
    }
});

export default HotTopicComponent;