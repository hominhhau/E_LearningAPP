import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderAdvertisement from './HeaderAdvertisement';

const HeaderAdvertisementComponent: React.FC = () => {
    return(
        <View style={styles.container}>
            <HeaderAdvertisement
                titleCourse="React Native"
                titleDiscount="50% OFF"
                imageCourse={require('../../../../../assets/images/ImageAdvertisement.png')}
                onButtonPress={() => console.log('Button pressed')}
            />
        </View>

    );
};


const styles = StyleSheet.create({
    container:{
        flex: 0
    }
});

export default HeaderAdvertisementComponent;