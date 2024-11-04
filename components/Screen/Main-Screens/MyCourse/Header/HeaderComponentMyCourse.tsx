import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const HeaderMyCourse: React.FC = () => {
    return(
        <View style={styles.container}>
            <View style={styles.title}>
            <Text style={styles.textTitle}>My Courses</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 0,
    },
    title:{
        //backgroundColor: 'pink',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textTitle:{
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default HeaderMyCourse;