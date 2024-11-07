import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderAdvertisement from '../../../Main-Screens/Home/Advertisement/HeaderAdvertisement'

const HeaderAdvertisementCourse: React.FC = () => {
    return(
        <View style={styles.container}>
            <HeaderAdvertisement 
                titleCourse=""
                titleDiscount="Courses that boost your career!"
                imageCourse={require('../../../../../assets/images/ImageAdvertisement.png')}
                onButtonPress={() => {}}
            />
            
        </View>

    );
};


const styles = StyleSheet.create({
    container:{
        flex: 0,
        padding: 10
    }
});

export default HeaderAdvertisementCourse;